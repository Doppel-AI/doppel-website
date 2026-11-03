// The pilot form on the home page posts {"email", "page", "company_site"} here; this emails
// Doppel's inbox through Resend, with Reply-To set to the visitor, and answers {"ok": true}.
// Settings (see .env.example): RESEND_API_KEY, PILOT_TO, PILOT_FROM.

import { Resend } from "resend";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** One email per address this often (a second click, a refresh), per server instance. */
const REPEAT_MS = 10 * 60 * 1000;
/** At most this many emails an hour per server instance, so a flood can't use up the Resend plan. */
const PER_HOUR = 30;

const lastSent = new Map<string, number>();
let hour = { start: 0, sent: 0 };

const reply = (body: { ok: boolean; error?: string }, status = 200) => Response.json(body, { status });

export async function POST(request: Request) {
  let data: unknown;
  try {
    data = await request.json();
  } catch {
    return reply({ ok: false, error: "bad request" }, 400);
  }
  if (typeof data !== "object" || data === null) return reply({ ok: false, error: "bad request" }, 400);
  const { email: rawEmail, page: rawPage, company_site: trap } = data as Record<string, unknown>;

  // The hidden field only a bot fills in: answer as if sent, send nothing.
  if (trap) return reply({ ok: true });

  const email = String(rawEmail ?? "").trim();
  if (email.length > 254 || !EMAIL.test(email)) return reply({ ok: false, error: "email" }, 400);

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("pilot form: RESEND_API_KEY isn't set, so the request wasn't sent");
    return reply({ ok: false, error: "not configured" }, 503);
  }

  const now = Date.now();
  const address = email.toLowerCase();
  if (now - (lastSent.get(address) ?? 0) < REPEAT_MS) return reply({ ok: true });
  if (now - hour.start > 60 * 60 * 1000) hour = { start: now, sent: 0 };
  if (hour.sent >= PER_HOUR) return reply({ ok: false, error: "busy" }, 429);

  const page = String(rawPage ?? "").slice(0, 200);
  const { error } = await new Resend(key).emails.send({
    from: process.env.PILOT_FROM || "Doppel website <onboarding@resend.dev>",
    to: process.env.PILOT_TO || "doppelhq@gmail.com",
    replyTo: email,
    subject: `Doppel pilot request: ${email}`,
    text: [
      "A pilot request came in from the website.",
      "",
      `Work email: ${email}`,
      `Page: ${page}`,
      `Time: ${new Date(now).toUTCString()}`,
      "",
      "Reply to this email to write to them.",
    ].join("\n"),
  });
  if (error) {
    console.error("pilot form: Resend didn't send the email:", error.message);
    return reply({ ok: false, error: "send" }, 502);
  }

  hour.sent += 1;
  lastSent.set(address, now);
  if (lastSent.size > 1000) for (const [a, t] of lastSent) if (now - t >= REPEAT_MS) lastSent.delete(a);
  return reply({ ok: true });
}
