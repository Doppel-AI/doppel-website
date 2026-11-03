/**
 * The bar at the top. On the home page its links move within the page; on the others they lead
 * back to it. Plain links (not next/link): each page loads whole, as the static site did, so its
 * scripts start fresh.
 */
export default function SiteHeader({ home = false }: { home?: boolean }) {
  const to = (hash: string) => (home ? hash : `/${hash}`);
  return (
    <header className="nav">
      <a className="nav-mark" href={home ? "#top" : "/"} aria-label={home ? "Doppel, back to the top" : "Doppel, home"}>
        <svg viewBox="0 0 690 236" aria-hidden="true">
          <use href="#logo" />
        </svg>
      </a>
      <nav aria-label="Sections">
        <ul className="nav-links">
          <li>
            <a className="link" href={to("#how")}>
              How it works
            </a>
          </li>
          <li>
            <a className="link" href={to("#swaps")}>
              What it swaps
            </a>
          </li>
          <li>
            <a className="link" href={to("#fits")}>
              Where it fits
            </a>
          </li>
          <li>
            <a className="link" href={to("#faq")}>
              Questions
            </a>
          </li>
        </ul>
      </nav>
      <a className="button button-small" href={to("#pilot")}>
        Request a pilot
      </a>
    </header>
  );
}
