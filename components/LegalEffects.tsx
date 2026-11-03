"use client";

// Privacy policy and terms: the list of sections marks the one being read, and folds away on
// smaller screens until it is opened. Without script the list stays open and every link works.

import { useEffect } from "react";

export default function LegalEffects() {
  useEffect(() => {
    const toc = document.querySelector<HTMLDetailsElement>(".toc");
    if (!toc) return;
    if (window.matchMedia("(max-width: 1100px)").matches) toc.open = false;

    const links = [...toc.querySelectorAll<HTMLAnchorElement>("a[href^='#']")];
    const sections = links
      .map((a) => document.getElementById(a.hash.slice(1)))
      .filter((s): s is HTMLElement => s !== null);
    if (!("IntersectionObserver" in window) || sections.length === 0) return;

    const mark = (id: string) => links.forEach((a) => a.setAttribute("aria-current", String(a.hash === `#${id}`)));
    const seen = new Map<string, boolean>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => seen.set(e.target.id, e.isIntersecting));
        // the first section whose top part is on screen
        const current = sections.find((s) => seen.get(s.id));
        if (current) mark(current.id);
      },
      { rootMargin: "-10% 0px -55% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);
  return null;
}
