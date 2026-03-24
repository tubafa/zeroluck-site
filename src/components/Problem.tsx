"use client";

import { motion } from "framer-motion";

const painPoints = [
  "Тратите на рекламу, но не знаете, какой канал приносит деньги.",
  "Маркетолог есть, а системы нет. Каждый месяц — новая идея, новый подрядчик.",
  "Заявки приходят, но до оплаты не доходят. Воронка дырявая.",
  "Вы строили бизнес не для того, чтобы каждый день разруливать маркетинг.",
];

const hoverClass = [
  "problem-card-red",
  "problem-card-orange",
  "problem-card-purple",
  "problem-card-blue",
];

export default function Problem() {
  return (
    <section id="problem" className="py-20 md:py-24 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold uppercase text-white text-center mb-16 heading-glow flex items-center justify-center gap-3"
      >
        Знакомо?
        <span className="blink-cursor text-accent">▌</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {painPoints.map((text, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: i * 0.15,
            }}
            className={`problem-card ${hoverClass[i]} p-8 min-h-[200px] flex items-center corner-brackets`}
          >
            <p className="font-console text-white text-base md:text-lg leading-relaxed">
              <span className="text-accent mr-2 opacity-50 text-sm">&gt;</span>
              {text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
