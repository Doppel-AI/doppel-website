"use client";

// The home page's behaviour, run once the page is on screen: the live swap, the round-trip slider,
// the mirror switch, one question open at a time, the pilot form, the console clip and the
// entrances. Everything works without it too: the first example shows, every stage of the round
// trip is listed, every section is visible, and the pilot form opens the visitor's email app.
// The page around it is rendered on the server and never re-rendered, so these work on its
// elements directly, as the static site's script did.

import { useEffect } from "react";
import { SAMPLES, isSampleName, valueCount } from "@/lib/samples";

type Listen = (
  target: EventTarget,
  type: string,
  handler: (e: Event) => void,
  options?: AddEventListenerOptions,
) => void;

export default function HomeEffects() {
  useEffect(() => {
    const undo: Array<() => void> = [];
    const listen: Listen = (target, type, handler, options) => {
      target.addEventListener(type, handler, options);
      undo.push(() => target.removeEventListener(type, handler, options));
    };
    liveSwap(listen);
    roundTrip(listen);
    mirrorSwitch(listen);
    oneQuestionAtATime(listen);
    pilotForm(listen);
    consoleClip(listen);
    undo.push(entrances(listen));
    return () => undo.forEach((u) => u());
  }, []);
  return null;
}

// ---------------------------------------------------------------- the live swap
function liveSwap(listen: Listen) {
  const root = document.getElementById("swap");
  const stage = root?.closest<HTMLElement>(".stage");
  const hero = root?.closest<HTMLElement>(".hero");
  const panel = root?.querySelector<HTMLElement>('[role="tabpanel"]');
  const count = root?.querySelector<HTMLElement>("[data-count]");
  if (!root || !stage || !hero || !panel || !count) return;
  const tabs = [...root.querySelectorAll<HTMLElement>('[role="tab"]')];
  const samples = [...root.querySelectorAll<HTMLElement>(".swap-sample")];
  const ends = [...root.querySelectorAll<HTMLElement>(".swap-foot > span")];

  const show = (name: string | undefined, focus: boolean, animate: boolean) => {
    if (!isSampleName(name)) return;
    for (const t of tabs) {
      const on = t.dataset.sample === name;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      if (on) {
        panel.setAttribute("aria-labelledby", t.id);
        if (focus) t.focus();
      }
    }
    for (const el of samples) {
      const on = el.dataset.sample === name;
      el.classList.toggle("is-on", on);
      if (on && animate) {
        el.classList.remove("is-changing");
        void el.offsetWidth;
        el.classList.add("is-changing");
      }
    }
    count.textContent = String(valueCount(SAMPLES[name]));
  };

  // Where the stage sits beside the words, keep the panel's last line on the first screen: raise the
  // panel by whatever would fall below it, never above the top of the stage. Layout positions only,
  // so the opening animation's scale doesn't count.
  const fit = () => {
    root.style.removeProperty("top");
    if (getComputedStyle(stage).position !== "absolute") return;
    const lineBottom = Math.max(...ends.map((e) => e.offsetTop + e.offsetHeight));
    const bottom = hero.offsetTop + stage.offsetTop + root.offsetTop + lineBottom;
    const over = bottom - (window.innerHeight - 20);
    if (over > 0) root.style.top = `${Math.max(12, root.offsetTop - over)}px`;
  };

  listen(root, "click", (e) => {
    const t = (e.target as Element).closest<HTMLElement>('[role="tab"]');
    if (t) show(t.dataset.sample, false, true);
  });
  listen(root, "keydown", (e) => {
    const i = tabs.indexOf(document.activeElement as HTMLElement);
    if (i < 0) return;
    const moves: Record<string, number> = {
      ArrowRight: i + 1,
      ArrowDown: i + 1,
      ArrowLeft: i - 1,
      ArrowUp: i - 1,
      Home: 0,
      End: tabs.length - 1,
    };
    const next = moves[(e as KeyboardEvent).key];
    if (next === undefined) return;
    e.preventDefault();
    show(tabs[(next + tabs.length) % tabs.length].dataset.sample, true, true);
  });

  show("ticket", false, false);
  fit();
  let queued = false;
  listen(window, "resize", () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      fit();
    });
  });
  document.fonts?.ready.then(fit);
}

// ---------------------------------------------------------------- the round trip
// The section holds still (sticky) while the page scrolls through it: each quarter of that scroll
// moves the marker to the next stage, and within a stage the terminal and the words drift at
// different speeds. The slider and the stage names scroll the page to their stage, so the scroll
// and the marker always agree.
function roundTrip(listen: Listen) {
  const section = document.getElementById("how");
  const scroller = section?.querySelector<HTMLElement>(".how-scroll");
  const pin = section?.querySelector<HTMLElement>(".how-pin");
  const range = section?.querySelector<HTMLInputElement>('input[type="range"]');
  if (!section || !scroller || !pin || !range) return;
  const names = [...section.querySelectorAll<HTMLElement>(".how-names li")];
  const groups = [".how-clauses li", ".how-detail li", ".term-state"].map((sel) => [
    ...section.querySelectorAll<HTMLElement>(sel),
  ]);
  const words = ["You ask", "Doppel swaps", "Claude works", "Real values return"];
  const STAGES = words.length;
  const still = matchMedia("(prefers-reduced-motion: reduce)");
  let current = -1;

  const show = (n: number) => {
    if (n === current) return;
    current = n;
    range.value = String(n);
    range.setAttribute("aria-valuetext", words[n]);
    section.style.setProperty("--p", String(n / (STAGES - 1)));
    for (const list of groups) list.forEach((el) => el.classList.toggle("is-on", Number(el.dataset.stage) === n));
    names.forEach((li, i) => li.classList.toggle("is-on", i === n));
  };

  // How far the page has scrolled through the held section, from 0 to 1.
  const progress = () => {
    const r = scroller.getBoundingClientRect();
    const run = r.height - pin.offsetHeight;
    return run > 0 ? Math.min(1, Math.max(0, -r.top / run)) : 0;
  };

  const update = () => {
    const p = progress();
    const n = Math.min(STAGES - 1, Math.floor(p * STAGES));
    show(n);
    section.style.setProperty("--lp", still.matches ? "0.5" : (p * STAGES - n).toFixed(3));
  };

  // Scroll to the middle of stage n's quarter of the run.
  const goTo = (n: number, smooth: boolean) => {
    const r = scroller.getBoundingClientRect();
    const run = r.height - pin.offsetHeight;
    const top = window.scrollY + r.top + run * ((n + 0.5) / STAGES);
    window.scrollTo({ top: Math.round(top), behavior: smooth && !still.matches ? "smooth" : "auto" });
  };

  let queued = false;
  const onScroll = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      update();
    });
  };
  listen(window, "scroll", onScroll, { passive: true });
  listen(window, "resize", onScroll);

  // Dragging or the arrow keys: the stage shows at once and the page follows without a glide.
  listen(range, "input", () => {
    const n = Number(range.value);
    show(n);
    goTo(n, false);
  });
  listen(section, "click", (e) => {
    const b = (e.target as Element).closest<HTMLElement>("[data-go]");
    if (!b) return;
    const n = Number(b.dataset.go);
    show(n);
    goTo(n, true);
  });
  update();
}

// ---------------------------------------------------------------- the mirror switch
function mirrorSwitch(listen: Listen) {
  const section = document.getElementById("mirror");
  const sw = section?.querySelector<HTMLElement>('[role="switch"]');
  if (!section || !sw) return;
  listen(sw, "click", () => {
    const on = sw.getAttribute("aria-checked") !== "true";
    sw.setAttribute("aria-checked", String(on));
    section.classList.toggle("is-on", on);
  });
}

// ---------------------------------------------------------------- one question open at a time
// (browsers without <details name> close the others here)
function oneQuestionAtATime(listen: Listen) {
  const all = [...document.querySelectorAll<HTMLDetailsElement>('.faq details[name="faq"]')];
  if (!all.length || "name" in HTMLDetailsElement.prototype) return;
  for (const d of all) {
    listen(d, "toggle", () => {
      if (d.open) for (const o of all) if (o !== d) o.open = false;
    });
  }
}

// ---------------------------------------------------------------- request a pilot
// The request goes to the form's data-endpoint (app/api/pilot), which emails Doppel's inbox, and
// the form turns into a thank-you. Without an endpoint, or if sending fails, the visitor gets the
// address to write to; without script, the form's mailto: action opens their email app.
function pilotForm(listen: Listen) {
  const form = document.querySelector<HTMLFormElement>(".pilot-form");
  const email = form?.querySelector<HTMLInputElement>("#pilot-email");
  const error = form?.querySelector<HTMLElement>(".pilot-error");
  const note = form?.querySelector<HTMLElement>(".pilot-note");
  const done = document.querySelector<HTMLElement>(".pilot-done");
  if (!form || !email || !error || !note || !done) return;
  const trap = form.querySelector<HTMLInputElement>(".pilot-trap input");
  const to = (form.getAttribute("action") ?? "").replace(/^mailto:/, "");
  const invalid = error.textContent ?? "";
  const noteText = note.textContent ?? "";
  let sending = false;

  const fail = (...parts: Array<string | Node>) => {
    error.replaceChildren(...parts);
    error.hidden = false;
  };
  const thank = (value: string) => {
    const where = done.querySelector(".pilot-done-email");
    if (where) where.textContent = value;
    form.hidden = true;
    done.hidden = false;
    done.querySelector<HTMLElement>("[tabindex]")?.focus();
  };
  const openEmailApp = (value: string) => {
    const subject = "Doppel pilot";
    const body = [
      "Hello,",
      "",
      "We would like to run a Doppel pilot.",
      "",
      `Work email: ${value}`,
      "Team size:",
      "How we use Claude Code today:",
      "",
    ].join("\n");
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  listen(form, "submit", async (e) => {
    e.preventDefault();
    if (sending) return;
    const value = email.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      fail(invalid);
      email.focus();
      return;
    }
    error.hidden = true;
    const endpoint = form.dataset.endpoint;
    if (!endpoint) return openEmailApp(value);
    sending = true;
    form.setAttribute("aria-busy", "true");
    note.textContent = "Sending your request…";
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // The hidden field only a bot fills in goes too: the server decides, and its log says so.
        body: JSON.stringify({ email: value, page: location.href.split("#")[0], pilot_trap: trap?.value ?? "" }),
      });
      const out: { ok?: boolean; error?: string } = await res.json().catch(() => ({}));
      if (!res.ok || !out.ok) throw new Error(out.error ?? `HTTP ${res.status}`);
      thank(value);
    } catch {
      const link = document.createElement("a");
      link.className = "link";
      link.href = `mailto:${to}`;
      link.textContent = to;
      fail("We couldn’t send your request. Write to us at ", link, " instead.");
    } finally {
      sending = false;
      form.removeAttribute("aria-busy");
      note.textContent = noteText;
    }
  });
  listen(email, "input", () => {
    error.hidden = true;
  });
}

// ---------------------------------------------------------------- the console clip: pausable, and still for reduced motion
function consoleClip(listen: Listen) {
  const video = document.querySelector<HTMLVideoElement>(".fits-pic video");
  const toggle = document.querySelector<HTMLElement>(".clip-toggle");
  if (!video || !toggle) return;
  const set = (playing: boolean) => {
    toggle.textContent = playing ? "Pause the clip" : "Play the clip";
    toggle.setAttribute("aria-pressed", String(!playing));
  };
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    video.removeAttribute("autoplay");
    video.pause();
    set(false);
  }
  listen(toggle, "click", () => {
    if (video.paused) {
      video.play().catch(() => {});
      set(true);
    } else {
      video.pause();
      set(false);
    }
  });
}

// ---------------------------------------------------------------- entrances, once, never hiding content
function entrances(listen: Listen): () => void {
  const targets = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
  if (!targets.length) return () => {};
  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-in"));
    return () => {};
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
  );
  targets.forEach((el) => io.observe(el));
  // Safety net: whatever is on screen a moment after load is shown, observer or not.
  let timer = 0;
  const showOnScreen = () => {
    timer = window.setTimeout(() => {
      targets.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < innerHeight && r.bottom > 0) el.classList.add("is-in");
      });
    }, 2200);
  };
  if (document.readyState === "complete") showOnScreen();
  else listen(window, "load", showOnScreen);
  return () => {
    io.disconnect();
    clearTimeout(timer);
  };
}
