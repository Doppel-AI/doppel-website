const COPYRIGHT = "© 2026 Doppel. The privacy layer for AI coding agents.";

/** The close: the name at full width, the links, the contact. On the home page its links move within the page. */
export default function SiteFooter({ home = false }: { home?: boolean }) {
  const to = (hash: string) => (home ? hash : `/${hash}`);
  return (
    <footer className="foot">
      <svg className="foot-logo" viewBox="0 0 690 236" role="img" aria-label="Doppel">
        <use href="#logo" />
      </svg>
      <div className="foot-grid">
        <nav className="foot-cols" aria-label="Footer">
          <div>
            <p className="foot-h">Product</p>
            <ul>
              <li>
                <a className="link" href={to("#how")}>
                  How it works
                </a>
              </li>
              <li>
                <a className="link" href={to("#mirror")}>
                  The mirror
                </a>
              </li>
              <li>
                <a className="link" href={to("#speed")}>
                  Speed
                </a>
              </li>
              <li>
                <a className="link" href={to("#exact")}>
                  Exact rules
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="foot-h">For security</p>
            <ul>
              <li>
                <a className="link" href={to("#swaps")}>
                  What it swaps
                </a>
              </li>
              <li>
                <a className="link" href={to("#fits")}>
                  Audit trail
                </a>
              </li>
              <li>
                <a className="link" href={to("#faq")}>
                  Questions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="foot-h">For developers</p>
            <ul>
              <li>
                <a className="link" href={to("#fits")}>
                  Claude Code setups
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="foot-h">Legal</p>
            <ul>
              <li>
                <a className="link" href="/privacy">
                  Privacy policy
                </a>
              </li>
              <li>
                <a className="link" href="/terms">
                  Terms and conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="foot-h">Contact</p>
            <ul>
              <li>
                <a className="link" href="mailto:doppelhq@gmail.com">
                  doppelhq@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="foot-last">
        <p>{home ? `${COPYRIGHT} The console pictures show sample data.` : COPYRIGHT}</p>
        <a className="button button-small button-light" href="#top">
          Back to the top
        </a>
      </div>
    </footer>
  );
}
