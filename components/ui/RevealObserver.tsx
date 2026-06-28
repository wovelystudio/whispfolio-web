"use client";
import { useEffect } from "react";

/**
 * Global scroll reveal observer.
 * Watches for .reveal, .reveal-left, .reveal-right, .reveal-scale
 * and adds .visible when they enter the viewport.
 */
export default function RevealObserver() {
  useEffect(() => {
    const SELECTORS = ".reveal, .reveal-left, .reveal-right, .reveal-scale";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
    );

    const observe = () => {
      document.querySelectorAll(SELECTORS).forEach((el) => {
        if (!el.classList.contains("visible")) {
          observer.observe(el);
        }
      });
    };

    observe();

    // Also pick up dynamically added elements (React route changes, etc.)
    const mutation = new MutationObserver(observe);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);

  return null;
}
