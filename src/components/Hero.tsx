"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useQuiz } from "./QuizProvider";

const WORDS = ["маркетинг", "отдел продаж", "система"];

function useWordSwap() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState(WORDS[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDeleting(true);
      setStarted(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!started) return;
    const word = WORDS[wordIndex];

    if (!isDeleting && displayed.length < word.length) {
      const timer = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 50);
      return () => clearTimeout(timer);
    }
    if (!isDeleting && displayed.length === word.length) {
      const timer = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timer);
    }
    if (isDeleting && displayed.length > 0) {
      const timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      return () => clearTimeout(timer);
    }
    if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }
  }, [displayed, isDeleting, wordIndex, started]);

  return displayed;
}

const SUBTITLE_TEXT =
  "Для тех, у кого есть продукт и клиенты — но маркетинг работает на ручном управлении, а продажи зависят от одного-двух человек. ZeroLuck собирает из этого систему, которая растёт без вашего ежедневного контроля.";

export default function Hero() {
  const word = useWordSwap();
  const { openQuiz } = useQuiz();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid">
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none" />

      {/* Floating particles */}
      {[
        { x: "10%", y: "20%", delay: "0s", dur: "8s", size: 4 },
        { x: "80%", y: "30%", delay: "1s", dur: "10s", size: 3 },
        { x: "25%", y: "70%", delay: "2s", dur: "9s", size: 5 },
        { x: "65%", y: "15%", delay: "3s", dur: "11s", size: 3 },
        { x: "90%", y: "60%", delay: "0.5s", dur: "7s", size: 4 },
        { x: "45%", y: "80%", delay: "4s", dur: "12s", size: 3 },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none z-[3]"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            background: "#001FFF",
            opacity: 0.25,
            animation: `float-particle ${p.dur} ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}

      <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center relative z-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.8 }}
          className="font-console uppercase text-center mb-6"
          style={{
            fontSize: "14px",
            letterSpacing: "3px",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          Строим маркетинговые системы для бизнеса
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 2 }}
        >
          <h1 className="font-console text-3xl md:text-4xl lg:text-[3.5rem] font-bold uppercase text-white leading-tight heading-glow">
            Через 90 дней ваш{" "}
            <span className="text-accent inline-block" style={{ minWidth: "12ch" }}>
              {word}<span className="animate-pulse">_</span>
            </span>{" "}
            начнёт приносить деньги.{" "}
            <span className="text-accent glitch-text inline-block">Без вашего участия.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 2.3 }}
          className="text-text-secondary max-w-3xl mt-8 hero-subtitle"
        >
          {SUBTITLE_TEXT}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 2.8 }}
          className="flex flex-col items-center"
        >
          <motion.button
            onClick={openQuiz}
            className="inline-block bg-accent text-white font-console font-bold uppercase px-8 py-4 mt-10 glow-blue cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Записаться на бесплатный разбор
          </motion.button>
          <p className="text-text-secondary mt-4 hero-micro">
            15 минут. Без обязательств. Без продажи.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
