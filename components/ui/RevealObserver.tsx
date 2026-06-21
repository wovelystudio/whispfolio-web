"use client";
import { useEffect } from "react";

/**
 * Global scroll reveal observer.
 * Any element with className="reveal" will fade+slide up when it enters the viewport.
 */
export default function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -48px 0px" }
    );

    // Observe all existing .reveal elements
    const observe = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        if (!el.classList.contains("visible")) {
          observer.observe(el);
        }
      });
    };

    observe();

    // Also observe elements added dynamically (e.g. React re-renders)
    const mutation = new MutationObserver(observe);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);

  return null;
}
