import type { Metadata } from "next";

const PREVIEW_ALT =
  "Fake data for Claude. Real data for you. Priya Sharma at Acme Corp on your machine; Jaya Ilic at Driftmark Corp is what Claude receives.";

/** A page's title, description, canonical address and link preview (the root layout sets the site's address). */
export function pageMetadata(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Doppel",
      url: path,
      title,
      description,
      images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: PREVIEW_ALT }],
    },
    twitter: { card: "summary_large_image" },
  };
}
