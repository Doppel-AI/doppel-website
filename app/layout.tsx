import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { preload } from "react-dom";
import "./styles/site.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://doppelai.co"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/assets/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/assets/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#d92b21",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // The two faces every page sets its first screen in (site.css loads them from /fonts).
  preload("/fonts/instrument-serif-latin-400-normal.woff2", {
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  });
  preload("/fonts/hanken-grotesk-latin-wght-normal.woff2", {
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  });
  return (
    // The home page adds the "js" class before it paints (app/page.tsx): not a mismatch to report.
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
