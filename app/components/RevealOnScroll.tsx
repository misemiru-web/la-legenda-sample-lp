"use client";

import { useEffect } from "react";

const revealSelector = "[data-reveal]";

export function RevealOnScroll() {
  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-revealed"));
      return;
    }

    root.classList.add("reveal-ready");

    const revealEntries: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    };

    const observer = new IntersectionObserver(
      revealEntries,
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    // ページ末尾は下端の余白を縮めず、実際の表示領域で判定する。
    const viewportObserver = new IntersectionObserver(revealEntries, { threshold: 0.12 });

    elements.forEach((element) => {
      const targetObserver = element.hasAttribute("data-reveal-viewport") ? viewportObserver : observer;
      targetObserver.observe(element);
    });

    return () => {
      observer.disconnect();
      viewportObserver.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
