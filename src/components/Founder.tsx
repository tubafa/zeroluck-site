"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const stats = [
  { value: 10, suffix: "+", label: "лет опыта" },
  { value: 30, suffix: "+", label: "стран" },
  { value: 4, prefix: "$", suffix: "M", label: "макс. бюджет/мес" },
];

const companies = [
  { name: "Binance", logo: "/binance-logo.svg" },
  { name: "Parimatch", logo: "/parimatch.com.svg" },
  { name: "FonBet", logo: "/fonbet.png" },
  { name: "EMCD", logo: "/emcd-logo.png" },
  { name: "McCann Group", logo: "/mccann.png" },
  { name: "Push30", logo: "/push30 logo white.svg" },
];

function CountUp({ value, prefix = "", suffix = "", inView }: { value: number; prefix?: string; suffix?: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setCount(value);
      return;
    }
    const duration = 2000;
    let startTime: number | null = null;
    let rafId: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [inView, value]);

  return <>{prefix}{count}{suffix}</>;
}

export default function Founder() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Duplicate logos for seamless marquee
  const marqueeLogos = [...companies, ...companies];

  return (
    <section id="founder" className="py-20 md:py-24 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold uppercase text-white text-center mb-16 heading-glow"
      >
        Кто строит систему
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-2 border-accent glow-blue founder-avatar">
          <Image
            src="/IMG_7937 (1).JPG"
            alt="Боходир Тураев"
            width={200}
            height={200}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="font-console text-2xl font-bold text-white mt-6"
        >
          Боходир Тураев
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="text-text-secondary max-w-2xl text-center mt-4 text-base md:text-lg leading-relaxed"
        >
          10 лет строил маркетинг в компаниях, которые вы знаете. Управлял
          бюджетами до $4M в месяц. Запускал кампании в 30+ странах. Нанимал
          команды с нуля, выводил продукты на новые рынки, отвечал за выручку.
          Теперь я делаю то же самое — но для вашего бизнеса.
        </motion.p>
      </motion.div>

      <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        className="flex justify-center gap-12 md:gap-20 mt-14 mb-20"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.15 }}
            className="text-center"
          >
            <span className="text-4xl md:text-5xl font-bold text-accent font-console text-glow">
              <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} inView={statsInView} />
            </span>
            <p className="text-text-secondary text-sm md:text-base mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Logos — marquee on mobile, grid on desktop */}
      {isMobile ? (
        <div className="relative overflow-hidden max-w-5xl mx-auto">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-3 w-max animate-logo-marquee"
          >
            {marqueeLogos.map((company, i) => (
              <div
                key={i}
                className="shrink-0 w-[120px] h-[60px] flex items-center justify-center rounded-lg border border-[rgba(0,31,255,0.15)] bg-white/[0.02]"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={80}
                  height={40}
                  className="max-h-[40px] w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  style={{
                    filter: "grayscale(100%) drop-shadow(0 0 8px rgba(0,31,255,0.6)) drop-shadow(0 0 20px rgba(0,31,255,0.3))",
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      ) : (
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {companies.map((company, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className="flex items-center justify-center"
            >
              <div className="w-[120px] h-[60px] flex items-center justify-center rounded-lg border border-[rgba(0,31,255,0.15)] bg-white/[0.02] group cursor-default transition-all duration-300 hover:border-[rgba(0,31,255,0.4)] hover:bg-accent/[0.06]">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={80}
                  height={40}
                  className="max-h-[40px] w-auto object-contain transition-all duration-300 grayscale group-hover:grayscale-0"
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(0,31,255,0.6)) drop-shadow(0 0 20px rgba(0,31,255,0.3))",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-white/50 mt-10 italic"
        style={{ fontSize: "14px" }}
      >
        Опыт работы в штате компаний на позициях CMO и Head of Marketing
      </motion.p>
    </section>
  );
}
