"use client";

import Lenis from "lenis";
import { useEffect } from "react";

let lenisInstance = null;

export function stopScroll() {
  lenisInstance?.stop();
}

export function startScroll() {
  lenisInstance?.start();
}

// Smooth scroll global — semua animasi scroll-driven jadi terasa mengalir.
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      autoRaf: true,
    });
    lenisInstance = lenis;

    // Anchor `#...` di-scroll mulus, bukan lompat.
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a || !lenis) return;
      const hash = a.getAttribute("href");
      if (!hash || hash.length <= 1) return;
      const el = document.querySelector(hash);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el, { offset: -48, duration: 1.3 });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return null;
}