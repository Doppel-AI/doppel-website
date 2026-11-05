import type { Metadata } from "next";
import HomeEffects from "@/components/HomeEffects";
import SwapSamples from "@/components/SwapSamples";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Sprite from "@/components/Sprite";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "/",
  "Doppel, the privacy layer for Claude Code",
  "Doppel gives Claude Code a double for every name, secret and customer record, and puts the real ones back on your machine.",
);

export default function Home() {
  return (
    <>
      {/* Marks the page as scripted before it paints, so the entrances start hidden (site.css). */}
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      <Sprite />
      <SiteHeader home />
      <main>
        {/* Hero: the headline on paper; the live swap on a stage cut by the ≈ wave. */}
        <section className="hero" id="top" aria-labelledby="hero-h">
          <div className="hero-copy">
            <h1 id="hero-h" className="display lines">
              <span className="line">
                <span data-line="" style={{ "--i": "0" } as React.CSSProperties}>
                  Fake data for Claude.
                </span>
              </span>
              <span className="line">
                <span data-line="" style={{ "--i": "1" } as React.CSSProperties}>
                  Real data for you.
                </span>
              </span>
            </h1>
            <p className="hero-sub" data-rise="" style={{ "--i": "3" } as React.CSSProperties}>
              Doppel gives Claude Code a double for every name, secret and customer record, and puts the real ones back
              on your machine.
            </p>
            <p className="hero-actions" data-rise="" style={{ "--i": "4" } as React.CSSProperties}>
              <a className="button" href="#pilot">
                Request a pilot
              </a>
              <a className="link link-quiet" href="#how">
                See how it works
              </a>
            </p>
          </div>
          <div className="stage shutter">
            <svg className="stage-cap" viewBox="0 0 1000 2000" preserveAspectRatio="xMinYMin slice" aria-hidden="true">
              <path d="M0 230 C288 -26 512 -26 800 230 S1312 486 1600 230 L1600 2000 L0 2000 Z" />
            </svg>
            <div className="swap" id="swap">
              <div className="swap-head">
                <p className="swap-tool">
                  <span className="swap-dot" aria-hidden="true"></span>
                  {"Claude Code read "}
                  <b>notes.md</b>
                </p>
                <div className="swap-tabs" role="tablist" aria-label="What Claude Code read">
                  <button
                    type="button"
                    role="tab"
                    id="tab-ticket"
                    aria-selected="true"
                    aria-controls="swap-panel"
                    data-sample="ticket"
                  >
                    Support ticket
                  </button>{" "}
                  <button
                    type="button"
                    role="tab"
                    id="tab-config"
                    aria-selected="false"
                    aria-controls="swap-panel"
                    data-sample="config"
                    tabIndex={-1}
                  >
                    Config file
                  </button>{" "}
                  <button
                    type="button"
                    role="tab"
                    id="tab-row"
                    aria-selected="false"
                    aria-controls="swap-panel"
                    data-sample="row"
                    tabIndex={-1}
                  >
                    Customer row
                  </button>{" "}
                  <button
                    type="button"
                    role="tab"
                    id="tab-plan"
                    aria-selected="false"
                    aria-controls="swap-panel"
                    data-sample="plan"
                    tabIndex={-1}
                  >
                    Launch plan
                  </button>
                </div>
              </div>
              <div className="swap-panel" id="swap-panel" role="tabpanel" aria-labelledby="tab-ticket">
                <div className="swap-samples">
                  <SwapSamples />
                </div>
              </div>
              <div className="swap-foot">
                <span className="statusline">
                  <span className="statusline-ok">
                    {"Doppel "}
                    <svg className="tick" viewBox="0 0 12 10" aria-hidden="true">
                      <path d="M1.2 5.4 4.4 8.4 10.8 1.6" />
                    </svg>
                    <span className="sr-only">is on:</span>
                  </span>{" "}
                  <span data-count="">7</span>
                  {" protected"}
                </span>{" "}
                <span className="swap-note">notes.md is written back exactly as you typed it</span>
              </div>
            </div>
          </div>
        </section>
        {/* How it works: one round trip. The section holds still while the page scrolls through it, and each quarter of that scroll moves the marker to the next stage; the slider and the stage names work too. */}
        <section className="how" id="how" aria-labelledby="how-h">
          <h2 className="sr-only" id="how-h">
            How it works
          </h2>
          <div className="how-scroll">
            <div className="how-pin">
              <div className="how-fields">
                <div className="how-say">
                  <ol className="how-clauses" aria-live="polite">
                    <li className="is-on" data-stage="0">
                      <p className="how-clause">First, you ask as usual.</p>
                    </li>
                    <li data-stage="1">
                      <p className="how-clause">Then the doubles go out.</p>
                    </li>
                    <li data-stage="2">
                      <p className="how-clause">Claude works on the doubles.</p>
                    </li>
                    <li data-stage="3">
                      <p className="how-clause">Last, the real comes home.</p>
                    </li>
                  </ol>
                  <ol className="how-detail">
                    <li className="is-on" data-stage="0">
                      <p>
                        You type and work as before. Claude Code reads files, runs commands and calls tools; Doppel sits
                        between it and the model.
                      </p>
                    </li>
                    <li data-stage="1">
                      <p>
                        Before a request leaves your network, Doppel swaps every value it knows for its double, then
                        checks the request again. If anything real survived, the request is refused, not sent.
                      </p>
                    </li>
                    <li data-stage="2">
                      <p>
                        The model reasons, writes and calls tools with the doubles. They have the right shape, so the
                        work comes out the same.
                      </p>
                    </li>
                    <li data-stage="3">
                      <p>
                        On your machine the doubles turn back into real values: in the files Claude writes, the commands
                        it runs and the answer on your screen.
                      </p>
                    </li>
                  </ol>
                </div>
                <div className="how-show">
                  <div className="term">
                    <div className="term-state is-on" data-stage="0">
                      <p className="term-prompt">
                        <samp>
                          <span aria-hidden="true">&gt;</span>
                          {" Fix the invoice sync for Acme Corp. Details in notes.md."}
                        </samp>
                      </p>
                      <p className="term-call">
                        <samp>
                          <span className="term-bullet" aria-hidden="true">
                            ●
                          </span>
                          {" Read(notes.md)"}
                        </samp>
                      </p>
                      <div className="term-out">
                        <p>
                          <samp>From: Priya Sharma &lt;priya.sharma@acme.com&gt;</samp>
                        </p>
                        <p>
                          <samp>Acme Corp’s invoice sync fails for customer ACME-204311 since Tuesday.</samp>
                        </p>
                        <p>
                          <samp>Call me on +1 415 555 0134 or ping @priya, login psharma.</samp>
                        </p>
                      </div>
                    </div>
                    <div className="term-state" data-stage="1">
                      <p className="term-meta">POST /v1/messages to the model, as sent</p>
                      <div className="term-out term-out-wide">
                        <p>
                          <samp>
                            {"“Fix the invoice sync for "}
                            <mark className="chip chip-double">Driftmark Corp</mark>. Details in notes.md.”
                          </samp>
                        </p>
                        <p>
                          <samp>
                            {"From: "}
                            <mark className="chip chip-double">Jaya Ilic</mark>
                            {" <"}
                            <mark className="chip chip-double">jaya.ilic@driftmark.example</mark>&gt;
                          </samp>
                        </p>
                        <p>
                          <samp>
                            <mark className="chip chip-double">Driftmark Corp</mark>
                            {"’s invoice sync fails for customer "}
                            <mark className="chip chip-double">ACME-572309</mark>
                            {" since Tuesday."}
                          </samp>
                        </p>
                        <p>
                          <samp>
                            {"Call me on "}
                            <mark className="chip chip-double">+1 415 421 9945</mark>
                            {" or ping "}
                            <mark className="chip chip-double">@jaya</mark>
                            {", login "}
                            <mark className="chip chip-double">jilic</mark>.
                          </samp>
                        </p>
                      </div>
                      <p className="term-check">Checked again before sending: nothing real left</p>
                    </div>
                    <div className="term-state" data-stage="2">
                      <p className="term-meta">The model’s answer, as it arrives</p>
                      <p className="term-call">
                        <samp>
                          <span className="term-bullet" aria-hidden="true">
                            ●
                          </span>
                          {
                            " The sync stopped for Driftmark Corp’s customer ACME-572309 after Tuesday’s schema change. I’ll fix the mapping and send Jaya Ilic a note."
                          }
                        </samp>
                      </p>
                      <p className="term-call">
                        <samp>
                          <span className="term-bullet" aria-hidden="true">
                            ●
                          </span>
                          {' Bash(npm test -- --grep "ACME-572309")'}
                        </samp>
                      </p>
                      <p className="term-call">
                        <samp>
                          <span className="term-bullet" aria-hidden="true">
                            ●
                          </span>
                          {" Write(notes.md)"}
                        </samp>
                      </p>
                    </div>
                    <div className="term-state" data-stage="3">
                      <p className="term-meta">On your machine</p>
                      <p className="term-call">
                        <samp>
                          <span className="term-bullet" aria-hidden="true">
                            ●
                          </span>
                          {
                            " The sync stopped for Acme Corp’s customer ACME-204311 after Tuesday’s schema change. I’ll fix the mapping and send Priya Sharma a note."
                          }
                        </samp>
                      </p>
                      <p className="term-call">
                        <samp>
                          <span className="term-bullet" aria-hidden="true">
                            ●
                          </span>
                          {' Bash(npm test -- --grep "ACME-204311")'}
                        </samp>
                      </p>
                      <div className="term-out">
                        <p>
                          <samp>12 passing</samp>
                        </p>
                      </div>
                      <p className="term-status">
                        <samp>
                          <span className="statusline-ok">
                            {"Doppel "}
                            <svg className="tick" viewBox="0 0 12 10" aria-hidden="true">
                              <path d="M1.2 5.4 4.4 8.4 10.8 1.6" />
                            </svg>
                            <span className="sr-only">is on:</span>
                          </span>
                          {" 7 protected"}
                        </samp>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="how-track">
                <div className="how-rail">
                  <div className="how-bar" aria-hidden="true"></div>
                  <div className="how-knob" aria-hidden="true"></div>
                  <label className="sr-only" htmlFor="how-range">
                    Stage of the round trip
                  </label>{" "}
                  <input
                    id="how-range"
                    type="range"
                    min="0"
                    max="3"
                    step="1"
                    defaultValue="0"
                    aria-valuetext="You ask"
                  />
                </div>
                <ol className="how-names">
                  <li className="is-on">
                    <button type="button" data-go="0">
                      You ask
                    </button>
                  </li>
                  <li>
                    <button type="button" data-go="1">
                      Doppel swaps
                    </button>
                  </li>
                  <li>
                    <button type="button" data-go="2">
                      Claude works
                    </button>
                  </li>
                  <li>
                    <button type="button" data-go="3">
                      Real values return
                    </button>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/* The mirror: one control, at poster size. */}
        <section className="mirror" id="mirror" aria-labelledby="mirror-h">
          <div className="mirror-copy">
            <h2 id="mirror-h" className="head" data-reveal="">
              <span data-when="off">What Claude saw</span>
              <span data-when="on">What you wrote</span>
            </h2>
            <p data-reveal="" style={{ "--d": "1" } as React.CSSProperties}>
              /doppel mirror shows a session as the model received it, turn by turn, with each swap and the rule that
              made it. Showing the real values asks the vault again and goes into the audit log.
            </p>
            <p className="mirror-line" data-reveal="" style={{ "--d": "2" } as React.CSSProperties}>
              <span data-when="off">
                <mark className="chip chip-on-red">Driftmark Corp</mark>
                {"’s sync fails for "}
                <mark className="chip chip-on-red">ACME-572309</mark>
              </span>
              <span data-when="on">
                <mark className="chip chip-real">Acme Corp</mark>
                {"’s sync fails for "}
                <mark className="chip chip-real">ACME-204311</mark>
              </span>
            </p>
          </div>
          <div className="mirror-switch">
            <button
              type="button"
              className="poster-switch"
              role="switch"
              aria-checked="false"
              aria-describedby="mirror-h"
            >
              {" "}
              <span className="poster-track" aria-hidden="true">
                <span className="poster-knob"></span>
              </span>{" "}
              <span className="poster-label">Show real values</span>{" "}
            </button>
          </div>
        </section>
        {/* Speed: three measured figures on stepped tiles. */}
        <section className="speed" id="speed" aria-labelledby="speed-h">
          <div className="speed-grid">
            <div className="tile tile-a" data-reveal="">
              <p className="figure">13.7&nbsp;ms</p>
              <p className="cap">added per request at the median, over an hour of steady load</p>
            </div>
            <h2 id="speed-h" className="speed-h head-s" data-reveal="" style={{ "--d": "1" } as React.CSSProperties}>
              Fast enough to forget
            </h2>
            <div className="tile tile-b" data-reveal="" style={{ "--d": "2" } as React.CSSProperties}>
              <p className="figure">36.6&nbsp;ms</p>
              <p className="cap">at the 99th percentile, the same hour</p>
            </div>
            <div className="tile tile-c" data-reveal="" style={{ "--d": "3" } as React.CSSProperties}>
              <p className="figure">&lt;1&nbsp;ms</p>
              <p className="cap">to check that nothing real is left, at the median</p>
            </div>
          </div>
          <p className="speed-note">
            Measured in Doppel’s own soak test: one server, an hour of conversations at a steady rate. The model’s own
            time is measured in seconds.
          </p>
        </section>
        {/* Exact: close-ups of the product on a board. */}
        <section className="board" id="exact" aria-labelledby="exact-h">
          <div className="board-grid">
            <div className="bt bt-head" data-reveal="">
              <h2 id="exact-h" className="head">
                Exact, every time
              </h2>
              <p>Every rule gives the same result for the same input, and fixed tests prove it.</p>
            </div>
            <div className="bt bt-cache" data-reveal="" style={{ "--d": "1" } as React.CSSProperties}>
              <div className="zoom" aria-hidden="true">
                <span className="zoom-fig">18k</span>
                <span className="zoom-unit">cached</span>
              </div>
              <div className="bt-cap">
                <h3>The prompt cache stays warm</h3>
                <p>A value gets the same double every time, so earlier turns are byte-identical.</p>
              </div>
            </div>
            <div className="bt bt-person" data-reveal="">
              <ul className="zoom zoom-person" aria-hidden="true">
                <li>
                  <span className="chip chip-double">Jaya Ilic</span>
                </li>
                <li>
                  <span className="chip chip-double">jaya.ilic@driftmark.example</span>
                </li>
                <li>
                  <span className="chip chip-double">@jaya</span>
                </li>
                <li>
                  <span className="chip chip-double">jilic</span>
                </li>
                <li>
                  <span className="chip chip-double">+1 415 421 9945</span>
                </li>
              </ul>
              <div className="bt-cap">
                <h3>One fake person, all the way</h3>
                <p>Name, email, login, handle and phone all belong to the same double.</p>
              </div>
            </div>
            <div className="bt bt-format" data-reveal="" style={{ "--d": "1" } as React.CSSProperties}>
              <div className="zoom zoom-card" aria-hidden="true">
                <span>4834 9667</span>
                <span>0504 5942</span>
                <span className="zoom-ok">Luhn check passes</span>
              </div>
              <div className="bt-cap">
                <h3>Formats that still work</h3>
                <p>Cards and IBANs keep valid check digits; your IDs keep their shape.</p>
              </div>
            </div>
            <div className="bt bt-protect" data-reveal="" style={{ "--d": "2" } as React.CSSProperties}>
              <div className="zoom zoom-path" aria-hidden="true">
                <span>docs/</span>
                <span>strategy/</span>
              </div>
              <div className="bt-cap">
                <h3>Protected folders</h3>
                <p>Never read into Claude’s context. Pasted passages are recognised by fingerprint.</p>
              </div>
            </div>
            <div className="bt bt-closed" data-reveal="">
              <div className="zoom zoom-word" aria-hidden="true">
                <span>Refused</span>
              </div>
              <div className="bt-cap">
                <h3>Fails closed</h3>
                <p>What Doppel can’t check is never sent.</p>
              </div>
            </div>
            <div className="bt bt-glass" data-reveal="" style={{ "--d": "1" } as React.CSSProperties}>
              <div className="zoom zoom-timer" aria-hidden="true">
                <span>26:58</span>
                <span className="zoom-unit">left</span>
              </div>
              <div className="bt-cap">
                <h3>Break-glass</h3>
                <p>A real value for one session, approved by an admin, in the audit log.</p>
              </div>
            </div>
            <div className="bt bt-net" data-reveal="" style={{ "--d": "2" } as React.CSSProperties}>
              <div className="zoom zoom-cmd" aria-hidden="true">
                <span className="cmd">
                  <b>npm test</b> <span className="chip chip-real">Acme Corp</span>
                </span>{" "}
                <span className="cmd">
                  <b>curl</b> <span className="chip chip-double">Driftmark Corp</span>
                </span>
              </div>
              <div className="bt-cap">
                <h3>Real values stay local</h3>
                <p>Tests and builds get the real values; curl, git push and ssh get doubles.</p>
              </div>
            </div>
          </div>
        </section>
        {/* The band between the two halves: the mark at full scale. */}
        <section className="band" aria-labelledby="band-h">
          <svg className="band-mark" viewBox="0 0 124 100" aria-hidden="true">
            <use href="#approx" />
          </svg>
          <h2 id="band-h" className="band-h display" data-reveal="">
            Use AI on real work.
            <br />
            Keep real data home.
          </h2>
        </section>
        {/* What it swaps: a specimen sheet, with the console where the security team sees it. */}
        <section className="swaps" id="swaps" aria-labelledby="swaps-h">
          <ul className="swaps-grid">
            <li className="cell cell-head" data-reveal="">
              <h2 id="swaps-h" className="head">
                What it swaps
              </h2>
              <p>Doppel’s own doubles from the examples above. The pictures are its console, with sample data.</p>
            </li>
            <li className="cell pair-red" data-reveal="" style={{ "--d": "1" } as React.CSSProperties}>
              <span className="word" lang="en">
                Jaya
              </span>
              <span className="cell-cap">Names: Priya Sharma becomes Jaya Ilic</span>
            </li>
            <li className="cell cell-photo" data-reveal="" style={{ "--d": "2" } as React.CSSProperties}>
              <img
                src="/assets/console/audit.webp"
                width="1800"
                height="1160"
                alt="Doppel’s console, Audit: every decision recorded with counts, kinds and fingerprints, never real values."
                loading="lazy"
                decoding="async"
              />
              <span className="cell-cap">Every decision, chained and signed</span>
            </li>
            <li className="cell pair-night" data-reveal="" style={{ "--d": "3" } as React.CSSProperties}>
              <span className="word">@jaya</span>
              <span className="cell-cap">Handles and logins: @priya, psharma</span>
            </li>
            <li className="cell pair-stone" data-reveal="">
              <span className="word">4834</span>
              <span className="cell-cap">Card numbers, still Luhn-valid</span>
            </li>
            <li className="cell pair-pink" data-reveal="" style={{ "--d": "1" } as React.CSSProperties}>
              <span className="word">DE03</span>
              <span className="cell-cap">IBANs, with valid check digits</span>
            </li>
            <li className="cell cell-photo" data-reveal="" style={{ "--d": "2" } as React.CSSProperties}>
              <img
                src="/assets/console/insights.webp"
                width="1800"
                height="1160"
                alt="Doppel’s console, Exposure insights: sensitive values swapped per day, secrets found, by project."
                loading="lazy"
                decoding="async"
              />
              <span className="cell-cap">Where sensitive data turns up</span>
            </li>
            <li className="cell pair-red" data-reveal="" style={{ "--d": "3" } as React.CSSProperties}>
              <span className="word word-long">Ashcombe</span>
              <span className="cell-cap">Code names: Project Falcon</span>
            </li>
            <li className="cell pair-night" data-reveal="">
              <span className="word word-long">572309</span>
              <span className="cell-cap">Your own IDs: ACME-204311, same shape</span>
            </li>
            <li className="cell pair-stone" data-reveal="" style={{ "--d": "1" } as React.CSSProperties}>
              <span className="word word-long">.225</span>
              <span className="cell-cap">IP addresses: 10.0.4.17, neighbours kept</span>
            </li>
            <li className="cell cell-photo" data-reveal="" style={{ "--d": "2" } as React.CSSProperties}>
              <img
                src="/assets/console/probe.webp"
                width="1800"
                height="1160"
                alt="Doppel’s console, Probe: 98.7% of 1,690 synthetic values caught, coverage by form."
                loading="lazy"
                decoding="async"
              />
              <span className="cell-cap">A nightly red team, with its score</span>
            </li>
            <li className="cell pair-pink" data-reveal="" style={{ "--d": "3" } as React.CSSProperties}>
              <svg className="cell-mark" viewBox="0 0 124 100" aria-hidden="true">
                <use href="#approx" />
              </svg>
              <span className="cell-cap">Same shape, another identity</span>
            </li>
          </ul>
        </section>
        {/* Where it fits: a narrow list, with the audit trail beside it. */}
        <section className="fits" id="fits" aria-labelledby="fits-h">
          <div className="fits-list">
            <h2 id="fits-h" className="head-s" data-reveal="">
              Where it fits
            </h2>
            <div className="group" data-reveal="">
              <p className="group-name">Claude Code</p>
              <ul>
                <li>
                  <span className="row-name">The terminal</span>
                  <span className="row-val">status line</span>
                </li>
                <li>
                  <span className="row-name">VS Code and JetBrains</span>
                  <span className="row-val">the same plugin</span>
                </li>
                <li>
                  <span className="row-name">claude -p and the Agent SDK</span>
                  <span className="row-val">headless</span>
                </li>
                <li>
                  <span className="row-name">GitHub Actions and GitLab CI</span>
                  <span className="row-val">the job’s own identity</span>
                </li>
              </ul>
            </div>
            <div className="group" data-reveal="">
              <p className="group-name">Models</p>
              <ul>
                <li>
                  <span className="row-name">Anthropic API</span>
                  <span className="row-val">through the gateway</span>
                </li>
                <li>
                  <span className="row-name">Claude on Amazon Bedrock</span>
                  <span className="row-val">restricted repositories</span>
                </li>
                <li>
                  <span className="row-name">Claude on Google Cloud Vertex AI</span>
                  <span className="row-val">restricted repositories</span>
                </li>
                <li>
                  <span className="row-name">Claude Enterprise, direct</span>
                  <span className="row-val">plugin only</span>
                </li>
              </ul>
            </div>
            <div className="group" data-reveal="">
              <p className="group-name">Your servers</p>
              <ul>
                <li>
                  <span className="row-name">Docker Compose</span>
                  <span className="row-val">guided install</span>
                </li>
                <li>
                  <span className="row-name">Kubernetes</span>
                  <span className="row-val">Helm chart</span>
                </li>
                <li>
                  <span className="row-name">PostgreSQL and Valkey</span>
                  <span className="row-val">several replicas</span>
                </li>
              </ul>
            </div>
            <div className="group" data-reveal="">
              <p className="group-name">Sign-in and keys</p>
              <ul>
                <li>
                  <span className="row-name">Okta, Microsoft Entra ID, Google</span>
                  <span className="row-val">single sign-on</span>
                </li>
                <li>
                  <span className="row-name">Any OpenID Connect provider</span>
                  <span className="row-val">single sign-on</span>
                </li>
                <li>
                  <span className="row-name">AWS KMS, OpenBao Transit</span>
                  <span className="row-val">master key</span>
                </li>
                <li>
                  <span className="row-name">Any KMS with a command line</span>
                  <span className="row-val">master key</span>
                </li>
              </ul>
            </div>
            <div className="group" data-reveal="">
              <p className="group-name">Rollout</p>
              <ul>
                <li>
                  <span className="row-name">One line on each machine</span>
                  <span className="row-val">signature checked</span>
                </li>
                <li>
                  <span className="row-name">Homebrew, winget, apt, rpm</span>
                  <span className="row-val">packages</span>
                </li>
                <li>
                  <span className="row-name">Jamf, Intune, Kandji</span>
                  <span className="row-val">profiles</span>
                </li>
                <li>
                  <span className="row-name">Updates</span>
                  <span className="row-val">by themselves, signed</span>
                </li>
              </ul>
            </div>
          </div>
          <figure className="fits-pic" data-reveal="" style={{ "--d": "1" } as React.CSSProperties}>
            <video
              src="/assets/console/requests-live.mp4"
              poster="/assets/console/requests-live-poster.webp"
              width="1056"
              height="780"
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
              aria-label="Doppel’s console, Requests, with sample data: new model requests arrive at the top of the list with the values swapped and the time Doppel added."
            ></video>
            <figcaption>
              {
                "Requests, live: every model request with what was swapped, what came back and the time Doppel added. Sample data. "
              }
              <button type="button" className="clip-toggle link" aria-pressed="false">
                Pause the clip
              </button>
            </figcaption>
          </figure>
        </section>
        {/* Why the name: the doppelgänger, seen through the mark. */}
        <section className="name" id="name" aria-labelledby="name-h">
          <div className="name-panel">
            <h2 id="name-h" className="head" data-reveal="">
              A double walks
              <br />
              in your place
            </h2>
            <figure className="name-pic" data-reveal="" style={{ "--d": "1" } as React.CSSProperties}>
              <div className="name-frame">
                <img
                  src="/assets/how-they-met-themselves.webp"
                  width="1000"
                  height="1296"
                  alt="Pen and ink drawing: in a dark wood, a couple in medieval dress meets their own doubles; the woman faints."
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </figure>
            <div className="name-text">
              <div data-reveal="" style={{ "--d": "1" } as React.CSSProperties}>
                <h3>Why the name</h3>
                <p>
                  A doppelgänger is a person’s double. Doppel gives every name, secret and record a double of its own:
                  the same shape, another identity, and the same double every time it appears.
                </p>
              </div>
              <div data-reveal="" style={{ "--d": "2" } as React.CSSProperties}>
                <h3>Why you can trust it</h3>
                <p>
                  Every rule is exact, fixed tests prove it, and a nightly probe measures what gets through. What Doppel
                  can’t check, it doesn’t send.
                </p>
              </div>
              <p data-reveal="" style={{ "--d": "3" } as React.CSSProperties}>
                <a className="button" href="#pilot">
                  Request a pilot
                </a>
              </p>
              <p className="name-credit" data-reveal="" style={{ "--d": "4" } as React.CSSProperties}>
                {"The drawing: Dante Gabriel Rossetti, "}
                <cite>How They Met Themselves</cite>
                {", 1851–60, seen through Doppel’s mark. Public domain, via "}
                <a
                  className="link"
                  href="https://commons.wikimedia.org/wiki/File:Dante_Gabriel_Rossetti_-_How_They_Met_Themselves_(1851-60).jpg"
                >
                  Wikimedia Commons
                </a>
                .
              </p>
            </div>
          </div>
        </section>
        {/* Questions: filled tiles, one open at a time. */}
        <section className="faq" id="faq" aria-labelledby="faq-h">
          <h2 id="faq-h" className="faq-h head" data-reveal="">
            Fair questions
          </h2>
          <div className="faq-list">
            <details name="faq" data-reveal="" open>
              <summary>Does Claude ever see the real values?</summary>
              <div className="answer">
                <p>
                  Not the ones Doppel knows. It swaps names from your lists and name sources, values your rules and its
                  built-in patterns find (keys, tokens, cards, IBANs, hosts in your domains) and, with its detector,
                  names nobody listed. Then it checks the request again: if a known value survived, the request is
                  refused instead of sent.
                </p>
              </div>
            </details>
            <details name="faq" data-reveal="">
              <summary>Will Claude still do good work on doubles?</summary>
              <div className="answer">
                <p>
                  {
                    "Doubles keep their shape: one fake person for a name, email, login and phone; cards and IBANs with valid check digits; your IDs in their own format. "
                  }
                  <code>doppel-bench quality</code>
                  {" runs coding tasks with and without Doppel, so you can measure the difference on your own work."}
                </p>
              </div>
            </details>
            <details name="faq" data-reveal="">
              <summary>How much slower is Claude Code with it?</summary>
              <div className="answer">
                <p>
                  In Doppel’s hour-long soak test it added 13.7&nbsp;ms per request at the median and 36.6&nbsp;ms at
                  the 99th percentile. A model’s answer takes seconds.
                </p>
              </div>
            </details>
            <details name="faq" data-reveal="">
              <summary>Does it break the prompt cache?</summary>
              <div className="answer">
                <p>
                  No. A value gets the same double every time, so the earlier turns of a conversation reach the model
                  byte for byte as before. Rotating Doppel’s master key doesn’t change a single double.
                </p>
              </div>
            </details>
            <details name="faq" data-reveal="">
              <summary>What does Doppel keep, and where?</summary>
              <div className="answer">
                <p>
                  Everything runs in your network. Real values are sealed (AES-256-GCM-SIV) under a master key your KMS
                  unwraps. Request records keep the doubles; the real values show only on an audited reveal, and secrets
                  never.
                </p>
              </div>
            </details>
            <details name="faq" data-reveal="">
              <summary>What happens when Doppel is down?</summary>
              <div className="answer">
                <p>
                  It fails closed: requests are refused rather than sent unprotected, and the status line turns red.
                  With more than one server, each developer’s agent moves to a backup by itself, and a short outage at
                  your identity provider signs nobody out.
                </p>
              </div>
            </details>
            <details name="faq" data-reveal="">
              <summary>Which Claude Code setups does it cover?</summary>
              <div className="answer">
                <p>
                  The terminal, the VS Code and JetBrains extensions, headless runs (<code>claude -p</code>
                  {
                    " and the Agent SDK), and CI jobs in GitHub Actions and GitLab, which sign in with the job’s own identity: no stored secret."
                  }
                </p>
              </div>
            </details>
            <details name="faq" data-reveal="">
              <summary>Can a developer get a real value through?</summary>
              <div className="answer">
                <p>
                  Yes, with break-glass. They ask from Claude Code with a reason; an admin approves it for that one
                  session and a set time; it ends by itself, and every step is in the audit log.
                </p>
              </div>
            </details>
            <details name="faq" data-reveal="">
              <summary>How do we start?</summary>
              <div className="answer">
                <p>
                  With a pilot: one Doppel server in your network (Docker Compose with a guided installer, or the Helm
                  chart), then one line on each developer’s machine.
                </p>
              </div>
            </details>
          </div>
        </section>
        {/* Request a pilot: a sentence with a blank. */}
        <section className="pilot" id="pilot" aria-labelledby="pilot-h">
          <h2 id="pilot-h" className="sr-only">
            Request a pilot
          </h2>
          {/* data-endpoint: the pilot form's web app (doppel-landing-backend/pilot-form.gs). Empty, or without script, the mailto: action opens the visitor's email app instead. */}
          <form
            className="pilot-form"
            action="mailto:doppelhq@gmail.com"
            method="get"
            data-endpoint="/api/pilot"
            noValidate
          >
            <p className="pilot-sentence display" data-reveal="">
              {"Send from "}
              <label className="sr-only" htmlFor="pilot-email">
                Your work email
              </label>
              <input
                id="pilot-email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@work.com"
                required
              />
              {" to "}
              <button type="submit" className="pilot-go">
                request a pilot
              </button>
            </p>
            <p className="pilot-trap" aria-hidden="true">
              <label>
                {"Leave this empty "}
                <input name="pilot_trap" type="text" tabIndex={-1} autoComplete="off" />
              </label>
            </p>
            <p className="pilot-note" data-reveal="" style={{ "--d": "1" } as React.CSSProperties} aria-live="polite">
              We use this address only to reply about your pilot.
            </p>
            <p className="pilot-error" role="alert" hidden>
              Enter your work email first, like you@company.com.
            </p>
          </form>
          <div className="pilot-done" hidden>
            <p className="pilot-sentence display" tabIndex={-1}>
              Thanks, we’ve got your request.
            </p>
            <p className="pilot-note">
              {"Our team will reach out to you at "}
              <b className="pilot-done-email"></b>
              {" shortly to discuss your requirements."}
            </p>
          </div>
        </section>
      </main>
      <SiteFooter home />
      <HomeEffects />
    </>
  );
}
