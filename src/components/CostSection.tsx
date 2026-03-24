"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function CountUp({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setValue(Math.round(current));
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}{value.toLocaleString("ru-RU")}{suffix}
    </span>
  );
}

const stats = [
  {
    targetNum: 40,
    display: <><CountUp target={30} />-<CountUp target={40} suffix="%" /></>,
    label: "рекламного бюджета уходит в нецелевой трафик",
  },
  {
    targetNum: 24000,
    display: <><CountUp target={24000} prefix="$" /></>,
    label: "в год теряет средний бизнес при бюджете $5K/мес",
  },
  {
    targetNum: 12,
    display: <><CountUp target={6} />-<CountUp target={12} suffix=" мес" /></>,
    label: "упущенного роста пока вы ищете подрядчика",
  },
];

export default function CostSection() {
  return (
    <section
      className="relative py-20 md:py-28 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, rgba(255,50,50,0.06) 0%, rgba(255,50,50,0.02) 50%, transparent 100%)",
      }}
    >
      {/* Subtle red scanline overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(255,50,50,0.015) 3px, rgba(255,50,50,0.015) 4px)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold uppercase text-white text-center mb-16 heading-glow"
        >
          Сколько это стоит вам.{" "}
          <span className="block sm:inline">Прямо сейчас.</span>
          <span className="blink-cursor text-accent ml-2">▌</span>
        </motion.h2>

        {/* Three big numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 mb-14">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
              className="text-center"
            >
              <div
                className="font-console font-bold text-white mb-4"
                style={{
                  fontSize: "clamp(36px, 5vw, 48px)",
                  lineHeight: 1.1,
                  textShadow: "0 0 20px rgba(255,50,50,0.5), 0 0 40px rgba(255,50,50,0.2), 0 0 60px rgba(255,50,50,0.1)",
                }}
              >
                {stat.display}
              </div>
              <p
                className="text-text-secondary max-w-[280px] mx-auto"
                style={{ fontSize: "16px", lineHeight: "1.6" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Warning paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-text-secondary leading-relaxed" style={{ fontSize: "18px", lineHeight: "1.8" }}>
            Это не абстрактные цифры. Это деньги, которые вы уже потеряли в этом месяце.
            Каждый день без системы — это клиенты, которые ушли к конкурентам с настроенной воронкой.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
