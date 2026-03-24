"use client";

import { useEffect, useRef } from "react";

const MAX_DOTS = 5;
const DOT_SIZE = 4;
const FADE_MS = 200;

export default function CursorTrail() {
  const dotsRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    if (prefersReduced || !isDesktop) return;

    const container = containerRef.current;
    if (!container) return;

    // Create dot elements
    const dots: HTMLDivElement[] = [];
    for (let i = 0; i < MAX_DOTS; i++) {
      const dot = document.createElement("div");
      dot.className = "cursor-trail-dot";
      dot.style.opacity = "0";
      container.appendChild(dot);
      dots.push(dot);
    }
    dotsRef.current = dots;

    let idx = 0;
    let lastX = 0;
    let lastY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      // Only spawn a dot if cursor moved enough (8px+)
      if (dx * dx + dy * dy < 64) return;
      lastX = e.clientX;
      lastY = e.clientY;

      const dot = dots[idx % MAX_DOTS];
      dot.style.left = `${e.clientX - DOT_SIZE / 2}px`;
      dot.style.top = `${e.clientY - DOT_SIZE / 2}px`;
      dot.style.opacity = "0.4";

      // Fade out
      const currentDot = dot;
      rafId = requestAnimationFrame(() => {
        setTimeout(() => {
          currentDot.style.opacity = "0";
        }, FADE_MS);
      });

      idx++;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      dots.forEach((d) => d.remove());
    };
  }, []);

  return <div ref={containerRef} className="pointer-events-none fixed inset-0 z-50" />;
}
