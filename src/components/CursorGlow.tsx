"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setIsMobile(!mq.matches);
    if (!mq.matches) return;

    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-40 will-change-transform"
      style={{
        width: 500,
        height: 500,
        background: "radial-gradient(circle, rgba(0, 31, 255, 0.20) 0%, rgba(0, 31, 255, 0.08) 35%, transparent 65%)",
        borderRadius: "50%",
      }}
    />
  );
}
