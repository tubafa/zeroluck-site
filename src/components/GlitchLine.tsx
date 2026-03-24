"use client";

import { useEffect, useRef, useState } from "react";

export default function GlitchLine() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative w-full h-[1px] overflow-hidden">
      <div
        className={`absolute inset-0 bg-accent ${animate ? "glitch-line-animate" : "opacity-0"}`}
        style={{ height: "1px" }}
      />
    </div>
  );
}
