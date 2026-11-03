import type { Metadata } from "next";
import "../styles/legal.css";
import LegalEffects from "@/components/LegalEffects";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Sprite from "@/components/Sprite";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "/privacy",
  "Privacy policy, Doppel",
  "Doppel runs inside your company's network, so the data it protects never reaches us. What that means for your data, and the little we do hold.",
);

export default function Privacy() {
  return (
    <>
      <Sprite />
      <SiteHeader />
      <main>
        <div className="legal-top" id="top">
          <h1 className="display">Privacy policy</h1>
          <p className="legal-lede">
            Doppel runs inside your company’s network, so the data it protects never reaches us. Here is what that
            means, and the little we do hold.
          </p>
          <dl className="legal-meta">
            <div>
              <dt>Last updated</dt>
              <dd>3 November 2026</dd>
            </div>
            <div>
              <dt>Covers</dt>
              <dd>This website, the Doppel software and our support</dd>
            </div>
            <div>
              <dt>Also read</dt>
              <dd>
                <a className="link link-quiet" href="/terms">
                  Terms and conditions
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <section className="short" aria-labelledby="short-h">
          <svg className="short-wave" viewBox="0 0 1600 160" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 112 C260 4 520 4 800 84 S1360 172 1600 52 L1600 161 L0 161 Z" />
          </svg>
          <div className="short-field">
            <div className="short-panel">
              <h2 id="short-h" className="head-s">
                The short version
              </h2>
              <div className="short-cols">
                <div>
                  <p className="short-label">Stays in your network</p>
                  <ul className="short-list">
                    <li>Your code, your prompts and Claude’s answers</li>
                    <li>The real names, secrets and customer records Doppel swaps</li>
                    <li>The vault that pairs each double with its real value, sealed with your company’s key</li>
                    <li>Request records, the audit trail and your console settings</li>
                    <li>Your developers’ sign-ins</li>
                  </ul>
                </div>
                <div>
                  <p className="short-label">Reaches us</p>
                  <ul className="short-list">
                    <li>What you write to us: pilot requests and support questions</li>
                    <li>Your licence: the company, a contact, the developers it covers and its dates</li>
                    <li>Diagnostics, only when you send them, written to hold no names or values</li>
                    <li>Our image registry’s record of each download</li>
                  </ul>
                </div>
              </div>
              <p className="short-note">
                <b>This website sets no cookies, runs no analytics and loads nothing from other sites.</b>
                {" We don’t sell personal data, use it for advertising or train AI models on it."}
              </p>
            </div>
          </div>
        </section>
        <div className="legal-body">
          <details className="toc" open>
            <summary>On this page</summary>
            <nav aria-label="On this page">
              <ol>
                <li>
                  <a href="#who">Who we are</a>
                </li>
                <li>
                  <a href="#roles">Two roles</a>
                </li>
                <li>
                  <a href="#software">What the software does with data</a>
                </li>
                <li>
                  <a href="#collect">What we collect, and why</a>
                </li>
                <li>
                  <a href="#share">Who we share it with</a>
                </li>
                <li>
                  <a href="#transfers">Transfers between countries</a>
                </li>
                <li>
                  <a href="#protect">How we protect it</a>
                </li>
                <li>
                  <a href="#rights">Your rights</a>
                </li>
                <li>
                  <a href="#children">Children</a>
                </li>
                <li>
                  <a href="#changes">Changes to this policy</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ol>
            </nav>
          </details>
          <article className="legal-text">
            <section id="who" aria-labelledby="who-h">
              <h2 id="who-h">Who we are</h2>
              <p>
                {
                  "Doppel is made by the Doppel team in Delhi, India (“Doppel”, “we”, “us”). Doppel isn’t a registered company yet; until it is, “Doppel” means the people who build and run it. Doppel is the privacy layer for Claude Code: software that companies run on their own servers so that Claude works on doubles of their sensitive data instead of the real thing."
                }
              </p>
              <p>
                {"For anything on this page, write to "}
                <a className="link" href="mailto:doppelhq@gmail.com">
                  doppelhq@gmail.com
                </a>
                {"."}
              </p>
            </section>
            <section id="roles" aria-labelledby="roles-h">
              <h2 id="roles-h">Two roles</h2>
              <p>We come across personal data in two very different ways, and different rules apply to each.</p>
              <ul>
                <li>
                  <strong>Our own business.</strong>
                  {
                    " When you visit this website, ask for a pilot, buy a licence or ask us for help, we decide what we collect and why. We are the controller of that data, and sections 4 to 11 apply to it."
                  }
                </li>
                <li>
                  <strong>The Doppel software.</strong>
                  {
                    " Your company installs Doppel on servers it runs, or a developer runs it on a laptop. Your company decides what Doppel processes and keeps all of it; we can’t see it. Your company is the controller of that data, and we are neither its controller nor its processor. Section 3 explains what the software does."
                  }
                </li>
              </ul>
              <p>
                The one exception is support. If your company sends us diagnostics or lets us look at its system to fix
                a problem, we act on its instructions, as its processor, and use what we see only for that problem.
              </p>
            </section>
            <section id="software" aria-labelledby="software-h">
              <h2 id="software-h">What the software does with data</h2>
              <p>
                Doppel sits between Claude Code and the AI model. Before a request leaves your network it swaps the real
                names, secrets and customer records it knows for doubles, stand-ins with the same shape. The model works
                on the doubles, and Doppel turns them back into the real values on your machine. All of this runs on
                systems your company controls.
              </p>
              <h3>What it stores, and where</h3>
              <ul>
                <li>
                  A vault that pairs each double with its real value, sealed with a master key only your company holds.
                </li>
                <li>
                  A record of each request as the model received it, with doubles in place of real values. These are
                  kept for 7 days unless your company sets another period.
                </li>
                <li>
                  An audit trail of sign-ins, refusals, approvals and changes, which your company can verify has not
                  been altered.
                </li>
                <li>The names, rules and settings your company’s admins add.</li>
              </ul>
              <p>All of it lives in your company’s own database.</p>
              <h3>Where requests go</h3>
              <p>
                To the model provider your company chose, under its own account and agreement: Anthropic, Amazon Bedrock
                or Google Cloud Vertex AI. That provider’s terms and privacy policy cover what it does with the requests
                it receives.
              </p>
              <h3>What it connects to</h3>
              <p>
                Your company’s identity provider, for sign-in. If your admins set them up, sources of names such as
                Okta, Microsoft Entra ID or HubSpot, using your company’s own credentials. Metrics, traces and alerts go
                only to monitoring your company runs.
              </p>
              <h3>What it sends us</h3>
              <p>
                Nothing. The software has no telemetry and no usage reporting. It checks its licence on your company’s
                server, offline. Developers’ machines get updates from your company’s own Doppel server, not from us.
              </p>
              <h3>If your employer runs Doppel</h3>
              <p>
                Your company’s Doppel admins can see who you signed in as, your Claude Code sessions, the requests sent
                through Doppel (with doubles in place of real values), what Doppel refused and why, and what you asked
                of them, such as a break-glass request and its reason. In the Doppel console, they see a real value only
                through a reveal that is recorded in the audit trail. Ask your company’s privacy team how long it keeps
                this and who can see it. We have no access to it.
              </p>
            </section>
            <section id="collect" aria-labelledby="collect-h">
              <h2 id="collect-h">What we collect, and why</h2>
              <p>
                This is everything we hold about people as a business. The legal basis applies where data protection
                law, such as the GDPR, asks for one.
              </p>
              <div className="table-wrap">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th scope="col">What</th>
                      <th scope="col">Why</th>
                      <th scope="col">Legal basis</th>
                      <th scope="col">How long</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Pilot and sales conversations</strong>: your name, work email, company, role and what
                        you write
                      </td>
                      <td data-label="Why">To answer you and run your pilot</td>
                      <td data-label="Legal basis">
                        Steps you ask for before a contract; our legitimate interest in answering business enquiries
                      </td>
                      <td data-label="How long">24 months after our last contact, unless you become a customer</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Customers and licences</strong>: the company name, the contacts you give us, the
                        developers covered, licence dates, orders and invoices
                      </td>
                      <td data-label="Why">To issue, renew and bill for your licence</td>
                      <td data-label="Legal basis">
                        The contract with your company; tax and accounting law for invoices
                      </td>
                      <td data-label="How long">
                        While the contract runs, then as long as tax law requires for invoices
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Support</strong>
                        {": your messages and the files you send, such as the output of "}
                        <code>install.sh --check</code>
                        {", server logs and "}
                        <code>/doppel report</code>
                        {" files"}
                      </td>
                      <td data-label="Why">To find and fix the problem</td>
                      <td data-label="Legal basis">
                        The contract with your company; our legitimate interest in supporting the software
                      </td>
                      <td data-label="How long">12 months after the problem is closed</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Downloads from our image registry</strong>: the registry account, IP address, time and
                        image
                      </td>
                      <td data-label="Why">To deliver the software, and to spot an account being misused</td>
                      <td data-label="Legal basis">The contract; our legitimate interest in security</td>
                      <td data-label="How long">90 days</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Visits to this website</strong>: our host’s logs of the IP address, time, page and
                        browser
                      </td>
                      <td data-label="Why">To keep the site running and secure</td>
                      <td data-label="Legal basis">Our legitimate interest in running the site</td>
                      <td data-label="How long">30 days</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Security reports</strong>
                        {": what you send to "}
                        <a className="link" href="mailto:doppelhq@gmail.com">
                          doppelhq@gmail.com
                        </a>
                      </td>
                      <td data-label="Why">To investigate and fix the issue, and to credit you if you want</td>
                      <td data-label="Legal basis">Our legitimate interest in keeping Doppel secure</td>
                      <td data-label="How long">24 months after the issue is fixed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Doppel’s logs and diagnostics files are written to name events and counts, never real values. They can
                still contain host names, user names and version numbers, so we treat them as personal data.
              </p>
              <p>
                This website sets no cookies, has no analytics or advertising tags, and serves its fonts, pictures and
                code from its own address. The pilot form on the home page sends the work email you enter to our inbox,
                through Resend, which delivers this website’s email, so that we can reply about a pilot; we use it for
                nothing else.
              </p>
              <p>
                We don’t sell personal data, use it for advertising, or train AI models on it, and we don’t make
                decisions about you by automated means alone.
              </p>
            </section>
            <section id="share" aria-labelledby="share-h">
              <h2 id="share-h">Who we share it with</h2>
              <p>Only with companies that help us run Doppel, under contracts that limit them to our instructions:</p>
              <ul>
                <li>Vercel, which serves this website and keeps its logs</li>
                <li>Google (Gmail), for our email and documents</li>
                <li>Resend, which delivers the pilot form’s requests to our inbox</li>
                <li>GitHub (its container registry), which hosts the server images you download</li>
              </ul>
              <p>
                We also share it with professional advisers who owe us confidentiality, such as lawyers, accountants and
                auditors; with authorities when the law requires it; and with a company that buys our business, which
                would have to keep the promises on this page.
              </p>
            </section>
            <section id="transfers" aria-labelledby="transfers-h">
              <h2 id="transfers-h">Transfers between countries</h2>
              <p>
                {
                  "Some of the companies in section 5 may process data in other countries. When data leaves the European Economic Area or the United Kingdom, we rely on an adequacy decision or on the European Commission’s standard contractual clauses, with the UK’s addendum. Ask us for a copy at "
                }
                <a className="link" href="mailto:doppelhq@gmail.com">
                  doppelhq@gmail.com
                </a>
                .
              </p>
            </section>
            <section id="protect" aria-labelledby="protect-h">
              <h2 id="protect-h">How we protect it</h2>
              <p>
                Only the people who need it can see it. The accounts that hold it need multi-factor sign-in, and it is
                encrypted in transit. If a breach puts your personal data at risk, we tell you, and the regulator, as
                the law requires.
              </p>
            </section>
            <section id="rights" aria-labelledby="rights-h">
              <h2 id="rights-h">Your rights</h2>
              <p>
                {
                  "Depending on where you live, you can ask us to show you the personal data we hold about you and give you a copy, to correct it, to delete it, to limit or object to how we use it, and to send it to another service. Write to "
                }
                <a className="link" href="mailto:doppelhq@gmail.com">
                  doppelhq@gmail.com
                </a>
                . We answer within a month, and we may first need to check who you are.
              </p>
              <p>
                If you’re unhappy with our answer, you can complain to your data protection authority, such as the
                Information Commissioner’s Office in the UK or the authority of your country in the EU.
              </p>
              <p>
                For data inside your company’s Doppel (section 3), ask your company, which controls it. We’ll help it
                answer you if it asks us.
              </p>
              <p>
                If you live in California: we don’t sell or share personal information, in the sense the California
                Consumer Privacy Act gives those words.
              </p>
            </section>
            <section id="children" aria-labelledby="children-h">
              <h2 id="children-h">Children</h2>
              <p>Doppel is for businesses. We don’t knowingly collect personal data about anyone under 16.</p>
            </section>
            <section id="changes" aria-labelledby="changes-h">
              <h2 id="changes-h">Changes to this policy</h2>
              <p>
                When what we do changes, we change this page and the date at the top. If a change matters, we tell
                customers by email before it applies.
              </p>
            </section>
            <section id="contact" aria-labelledby="contact-h">
              <h2 id="contact-h">Contact</h2>
              <p>
                {"Write to "}
                <a className="link" href="mailto:doppelhq@gmail.com">
                  doppelhq@gmail.com
                </a>
                .
              </p>
            </section>
          </article>
        </div>
        <section className="legal-ask" aria-label="Questions">
          <p>
            {"Questions about your data? Write to "}
            <a href="mailto:doppelhq@gmail.com">doppelhq@gmail.com</a>.
          </p>
        </section>
      </main>
      <SiteFooter />
      <LegalEffects />
    </>
  );
}
