import type { Metadata } from "next";
import "../styles/legal.css";
import LegalEffects from "@/components/LegalEffects";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Sprite from "@/components/Sprite";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "/terms",
  "Terms and conditions, Doppel",
  "The terms for Doppel's beta: the software you run on your own systems, this website and our support.",
);

export default function Terms() {
  return (
    <>
      <Sprite />
      <SiteHeader />
      <main>
        <div className="legal-top" id="top">
          <h1 className="display">Terms and conditions</h1>
          <p className="legal-lede">
            The terms for Doppel’s beta: the software you run on your own systems, this website and our support.
          </p>
          <dl className="legal-meta">
            <div>
              <dt>Last updated</dt>
              <dd>3 November 2026</dd>
            </div>
            <div>
              <dt>Applies to</dt>
              <dd>Doppel 1.0 beta and later versions</dd>
            </div>
            <div>
              <dt>Also read</dt>
              <dd>
                <a className="link link-quiet" href="/privacy">
                  Privacy policy
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <section className="short" aria-labelledby="short-h">
          <svg className="short-wave" viewBox="0 0 1600 160" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 52 C240 172 800 172 1000 84 S1340 4 1600 112 L1600 161 L0 161 Z" />
          </svg>
          <div className="short-field">
            <div className="short-panel">
              <h2 id="short-h" className="head-s">
                The short version
              </h2>
              <div className="short-cols">
                <div>
                  <p className="short-label">What we ask of you</p>
                  <ul className="short-list">
                    <li>Run Doppel on your own systems and keep them secure</li>
                    <li>Tell it about your data: your names, rules and packs</li>
                    <li>Back up your master key and database, because we can’t recover them</li>
                    <li>Use it within your own organisation; don’t resell it, share it or take it apart</li>
                    <li>Keep your own agreement with Anthropic or your cloud provider</li>
                  </ul>
                </div>
                <div>
                  <p className="short-label">What we promise</p>
                  <ul className="short-list">
                    <li>Never to receive your code or the data Doppel protects</li>
                    <li>To sign every release, so you can check that it came from us</li>
                    <li>To fix security issues before anything else</li>
                    <li>To answer support during the beta on working days</li>
                    <li>To tell you before these terms change</li>
                  </ul>
                </div>
              </div>
              <p className="short-note">
                <b>Doppel lowers the chance that sensitive data reaches an AI model, but no tool catches everything.</b>
                {" Keep your other controls in place, and treat the beta as a beta."}
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
                  <a href="#terms">These terms</a>
                </li>
                <li>
                  <a href="#words">Words we use</a>
                </li>
                <li>
                  <a href="#licence">Your licence</a>
                </li>
                <li>
                  <a href="#beta">The beta</a>
                </li>
                <li>
                  <a href="#limits">What Doppel can’t promise</a>
                </li>
                <li>
                  <a href="#yours">Your responsibilities</a>
                </li>
                <li>
                  <a href="#others">Other companies’ services</a>
                </li>
                <li>
                  <a href="#data">Your data</a>
                </li>
                <li>
                  <a href="#fees">Fees</a>
                </li>
                <li>
                  <a href="#support">Updates and support</a>
                </li>
                <li>
                  <a href="#security">Security issues</a>
                </li>
                <li>
                  <a href="#confidential">Confidentiality</a>
                </li>
                <li>
                  <a href="#feedback">Feedback</a>
                </li>
                <li>
                  <a href="#warranties">Warranties</a>
                </li>
                <li>
                  <a href="#liability">Liability</a>
                </li>
                <li>
                  <a href="#ending">Ending these terms</a>
                </li>
                <li>
                  <a href="#website">This website</a>
                </li>
                <li>
                  <a href="#export">Export and sanctions</a>
                </li>
                <li>
                  <a href="#changes">Changes to these terms</a>
                </li>
                <li>
                  <a href="#law">Law and disputes</a>
                </li>
                <li>
                  <a href="#general">Everything else</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ol>
            </nav>
          </details>
          <article className="legal-text">
            <section id="terms" aria-labelledby="terms-h">
              <h2 id="terms-h">These terms</h2>
              <p>
                {
                  "The Doppel team in Delhi, India (“Doppel”, “we”, “us”) offers the Doppel software, this website and support on these terms. Doppel isn’t a registered company yet; until it is, “Doppel” means the people who build and run it. “You” means the company or organisation that downloads, installs or uses Doppel. The person who accepts these terms confirms they may do so on its behalf."
                }
              </p>
              <p>
                By downloading, installing or using Doppel, you accept these terms. If you have signed an agreement with
                us, such as an order form or a master agreement, it applies where it differs from these terms, and these
                terms fill any gaps in it.
              </p>
            </section>
            <section id="words" aria-labelledby="words-h">
              <h2 id="words-h">Words we use</h2>
              <ul>
                <li>
                  <strong>The software</strong>
                  {": the Doppel server and detector images, the "}
                  <code>doppel</code>
                  {
                    " program with its agent and command line, the Claude Code plugin, the console, the deploy kit and Helm chart, their updates and their documentation."
                  }
                </li>
                <li>
                  <strong>Licence file</strong>: the signed file we send you, which names your organisation, the number
                  of developers it covers and its dates.
                </li>
                <li>
                  <strong>Users</strong>: your employees and contractors who use the software for you.
                </li>
                <li>
                  <strong>Your data</strong>: everything the software processes on your systems, and anything you send
                  us for support.
                </li>
                <li>
                  <strong>Beta</strong>
                  {": a version we call a beta, a release candidate or a pre-release, such as "}
                  <code>1.0.0-beta.1</code>.
                </li>
              </ul>
            </section>
            <section id="licence" aria-labelledby="licence-h">
              <h2 id="licence-h">Your licence</h2>
              <p>
                While these terms apply, we give you a non-exclusive, non-transferable right to install and use the
                software for your organisation’s own work. The licence covers the number of developers and the period in
                your licence file. Without a licence file, you may use the software to evaluate it for up to 60 days.
              </p>
              <p>
                A developer counts if they used Doppel in the last 30 days. If more developers use it than your licence
                covers, tell us and we’ll agree a larger licence. The software keeps working in the meantime.
              </p>
              <p>You may not:</p>
              <ul>
                <li>copy the software, except to install, back up and run it as these terms allow;</li>
                <li>sell, rent, lend or share it, or run it as a service for anyone outside your organisation;</li>
                <li>
                  reverse engineer, decompile or disassemble it, except where the law allows it despite this term;
                </li>
                <li>change or work around its licence check or its release signatures;</li>
                <li>remove our notices from it; or</li>
                <li>use it to build a competing product.</li>
              </ul>
              <p>
                {
                  "The open-source components inside the software, including the detector’s two models (published under the Apache License 2.0), come under their own licences. Each release lists them in "
                }
                <code>THIRD_PARTY_NOTICES.md</code>, and nothing in these terms limits your rights under those licences.
                We and our licensors keep every right in the software that these terms don’t give you.
              </p>
            </section>
            <section id="beta" aria-labelledby="beta-h">
              <h2 id="beta-h">The beta</h2>
              <p>
                Doppel 1.0 is a beta. Its features may change or be removed, and it may contain errors, including errors
                that let a value through or refuse work that should have been allowed. Try it with a small group first,
                keep your other controls in place, and tell us what you find.
              </p>
              <p>We may end the beta, or ask you to move to a later version, with 30 days’ notice.</p>
            </section>
            <section id="limits" aria-labelledby="limits-h">
              <h2 id="limits-h">What Doppel can’t promise</h2>
              <p>
                Doppel replaces the values it recognises with doubles before a request leaves your network, and checks
                each request again before it goes. It recognises what is in your dictionary and your rules, the
                identifiers in the compliance packs you turn on, and what its detector finds. When it can’t check a
                request, it refuses it instead of sending it.
              </p>
              <p>
                It can’t promise to recognise every sensitive value, or that work Claude does on doubles will match work
                on real values in every case. Some features let real values through on purpose, when your admins choose:
                break-glass approvals, destinations you approve, and an egress check set to warn instead of refuse.
              </p>
              <p>
                Doppel helps you meet duties under laws and standards such as the GDPR, HIPAA and PCI DSS. Using it
                doesn’t make you compliant with them; that stays your responsibility.
              </p>
            </section>
            <section id="yours" aria-labelledby="yours-h">
              <h2 id="yours-h">Your responsibilities</h2>
              <ul>
                <li>
                  Run the software on systems you control, keep them updated and secure, and keep your keys and
                  credentials safe.
                </li>
                <li>
                  Set Doppel up for your data: your domains, the names and identifiers that matter to you, the packs
                  that apply, and your protected folders.
                </li>
                <li>
                  Back up your master key and your database. The master key seals every real value Doppel stores. We
                  never have a copy, and without it those values can’t be restored.
                </li>
                <li>
                  Have a lawful basis for the personal data in your work, including what Doppel records about your
                  users, and tell your users how Doppel works.
                </li>
                <li>
                  Keep your own agreement with your model provider (Anthropic, Amazon Web Services or Google Cloud) and
                  follow its usage policies.
                </li>
                <li>Make sure your users follow these terms.</li>
              </ul>
            </section>
            <section id="others" aria-labelledby="others-h">
              <h2 id="others-h">Other companies’ services</h2>
              <p>
                Doppel works with services we don’t control: Anthropic’s Claude and Claude Code, Amazon Bedrock, Google
                Cloud Vertex AI, your identity provider and the sources of names you connect. Your agreements with those
                companies govern their services, and we aren’t responsible for them.
              </p>
              <p>
                Doppel isn’t made, endorsed or supported by Anthropic. Claude and Claude Code are trademarks of
                Anthropic, PBC; other names belong to their owners.
              </p>
            </section>
            <section id="data" aria-labelledby="data-h">
              <h2 id="data-h">Your data</h2>
              <p>
                {
                  "Your data is yours. The software processes it on your systems and doesn’t send it to us. If you send us diagnostics or give us access to fix a problem, we use them only to help you, keep them confidential, and delete them as our "
                }
                <a className="link" href="/privacy">
                  privacy policy
                </a>
                {" says. That policy also explains what personal data we hold about you and why."}
              </p>
            </section>
            <section id="fees" aria-labelledby="fees-h">
              <h2 id="fees-h">Fees</h2>
              <p>
                The beta and pilots are free unless we agree otherwise in writing. A paid licence costs what your order
                says, per developer per year, invoiced in advance. Prices don’t include taxes. Fees aren’t refundable
                unless these terms or the law say otherwise.
              </p>
            </section>
            <section id="support" aria-labelledby="support-h">
              <h2 id="support-h">Updates and support</h2>
              <p>
                {"We deliver each version as server images, a deploy kit and the "}
                <code>doppel</code>
                {" program, all signed with our release key. A developer’s machine installs a new "}
                <code>doppel</code>
                {" program only if its signature checks out."}
              </p>
              <p>
                {"During the beta we answer support requests sent to "}
                <a className="link" href="mailto:doppelhq@gmail.com">
                  doppelhq@gmail.com
                </a>
                {
                  " on working days, as soon as we reasonably can. Response times are guaranteed only if your agreement sets them. We publish fixes for the latest beta, so upgrade to receive them."
                }
              </p>
            </section>
            <section id="security" aria-labelledby="security-h">
              <h2 id="security-h">Security issues</h2>
              <p>
                {"If you find a security issue in Doppel, write to "}
                <a className="link" href="mailto:doppelhq@gmail.com">
                  doppelhq@gmail.com
                </a>
                , and give us reasonable time to fix it before you publish it. Test only systems you own or may test. We
                fix security issues before other work and tell the customers they affect.
              </p>
            </section>
            <section id="confidential" aria-labelledby="confidential-h">
              <h2 id="confidential-h">Confidentiality</h2>
              <p>
                Each of us keeps the other’s confidential information secret and uses it only for these terms. Ours
                includes the software, unreleased features and our documentation; yours includes your data and what we
                learn about your systems. This doesn’t cover information that is public, that the other already had, or
                that the law requires to be disclosed. It lasts five years after these terms end, and for as long as the
                information stays secret for your data and our source code.
              </p>
            </section>
            <section id="feedback" aria-labelledby="feedback-h">
              <h2 id="feedback-h">Feedback</h2>
              <p>If you send us ideas or suggestions, we may use them without any obligation to you.</p>
            </section>
            <section id="warranties" aria-labelledby="warranties-h">
              <h2 id="warranties-h">Warranties</h2>
              <p>
                We provide the software, and the beta in particular, “as is”. As far as the law allows, we disclaim
                every warranty, express or implied, including merchantability, fitness for a particular purpose and
                non-infringement. We don’t promise that the software will run without interruption or errors, or that it
                will catch every sensitive value. Where the law doesn’t allow these exclusions, they apply as far as it
                does.
              </p>
            </section>
            <section id="liability" aria-labelledby="liability-h">
              <h2 id="liability-h">Liability</h2>
              <p>
                Neither of us is liable to the other for indirect or consequential loss, or for lost profits, revenue,
                data or goodwill.
              </p>
              <p>
                {
                  "Each party’s total liability under these terms is limited to the fees you paid us in the 12 months before the claim, or "
                }
                US$100
                {" if you paid nothing."}
              </p>
              <p>
                These limits don’t apply to fraud, to death or personal injury caused by negligence, to a breach of the
                restrictions in section 3, or to anything else the law doesn’t allow to be limited.
              </p>
            </section>
            <section id="ending" aria-labelledby="ending-h">
              <h2 id="ending-h">Ending these terms</h2>
              <p>
                You can stop using Doppel at any time. Either of us can end these terms with 30 days’ written notice, or
                at once if the other seriously breaches them and doesn’t put it right within 30 days of being told. A
                paid licence runs to the end of its term unless it is ended for a breach.
              </p>
              <p>
                {"When these terms end, stop using the software and delete it. Your data stays on your systems, and "}
                <code>doppel setup --undo</code>
                {
                  " takes Doppel out of each developer’s Claude Code. Sections 8, 12, 14, 15, 20 and 21 continue to apply after the end."
                }
              </p>
            </section>
            <section id="website" aria-labelledby="website-h">
              <h2 id="website-h">This website</h2>
              <p>
                This website describes Doppel. The console pictures on it show sample data. We try to keep it accurate,
                but it isn’t a promise about any version. Links to other sites are there for convenience; we don’t
                control those sites.
              </p>
            </section>
            <section id="export" aria-labelledby="export-h">
              <h2 id="export-h">Export and sanctions</h2>
              <p>
                Use the software in line with the export control and sanctions laws that apply to you, and don’t make it
                available to anyone those laws prohibit.
              </p>
            </section>
            <section id="changes" aria-labelledby="changes-h">
              <h2 id="changes-h">Changes to these terms</h2>
              <p>
                We may change these terms. We’ll post the new version here with a new date, and email customers at least
                30 days before a change that matters takes effect. For a paid licence, changes apply from your next
                renewal unless you agree to them sooner.
              </p>
            </section>
            <section id="law" aria-labelledby="law-h">
              <h2 id="law-h">Law and disputes</h2>
              <p>
                {"These terms are governed by the laws of "}
                India
                {". The courts of "}
                New Delhi
                {
                  " have exclusive jurisdiction, except that either of us may ask any court with jurisdiction for urgent relief."
                }
              </p>
            </section>
            <section id="general" aria-labelledby="general-h">
              <h2 id="general-h">Everything else</h2>
              <p>
                These terms, with any order or agreement we have signed, are the whole agreement between us about
                Doppel. If a part of them can’t be enforced, the rest still applies. Not enforcing a term now doesn’t
                mean giving it up.
              </p>
              <p>
                {
                  "You can’t transfer these terms without our consent, except to a company that takes over your business; we may transfer them to a company that takes over ours. Notices to us go to "
                }
                <a className="link" href="mailto:doppelhq@gmail.com">
                  doppelhq@gmail.com
                </a>
                ; notices to you go to the contact in your order or licence.
              </p>
            </section>
            <section id="contact" aria-labelledby="contact-h">
              <h2 id="contact-h">Contact</h2>
              <p>
                {"The Doppel team, Delhi, India. Email "}
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
            {"Questions about these terms? Write to "}
            <a href="mailto:doppelhq@gmail.com">doppelhq@gmail.com</a>.
          </p>
        </section>
      </main>
      <SiteFooter />
      <LegalEffects />
    </>
  );
}
