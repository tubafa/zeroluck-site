"use client";

import { motion } from "framer-motion";

const rows = [
  {
    agency: "Продаёт услуги: трафик, SMM, креатив",
    zluck: "Строит систему: воронка, команда, процессы, аналитика",
  },
  {
    agency: "Агентство уходит — всё разваливается",
    zluck: "Мы уходим — система продолжает работать",
  },
  {
    agency: "Отчёт в конце месяца",
    zluck: "Еженедельные отчёты + доступ к дашбордам 24/7",
  },
  {
    agency: "Новый подрядчик каждые 3-6 месяцев",
    zluck: "Одна команда на весь цикл",
  },
  {
    agency: "Отвечает за клики и охваты",
    zluck: "Отвечает за лиды, продажи и выручку",
  },
];

export default function AgencyComparison() {
  return (
    <section className="py-20 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold uppercase text-white text-center mb-16 heading-glow flex items-center justify-center gap-3"
        >
          Почему мы — не агентство
          <span className="blink-cursor text-accent">▌</span>
        </motion.h2>

        {/* Column headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center md:text-left"
          >
            <span className="font-console font-bold text-lg md:text-xl uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
              Обычное агентство
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center md:text-left"
          >
            <span
              className="font-console font-bold text-lg md:text-xl uppercase"
              style={{
                color: "#001FFF",
                textShadow: "0 0 8px rgba(0,31,255,0.3)",
              }}
            >
              ZeroLuck
            </span>
          </motion.div>
        </div>

        {/* Comparison rows */}
        <div className="space-y-4">
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            >
              {/* Agency side */}
              <div className="p-4 md:p-5 border border-white/8 bg-white/[0.02]" style={{ opacity: 0.7 }}>
                <span className="block md:hidden font-console text-[11px] uppercase tracking-widest mb-2" style={{ color: "rgba(255,102,102,0.8)" }}>
                  Обычное агентство
                </span>
                <p className="text-text-secondary text-base md:text-lg leading-relaxed flex items-baseline gap-3">
                  <span className="shrink-0 font-bold text-lg" style={{ color: "#FF6666" }}>
                    ✕
                  </span>
                  {row.agency}
                </p>
              </div>

              {/* ZeroLuck side */}
              <div
                className="p-4 md:p-5 border-l-[3px] border-accent bg-accent/[0.04]"
                style={{
                  boxShadow: "inset 4px 0 12px rgba(0,31,255,0.1)",
                }}
              >
                <span className="block md:hidden font-console text-[11px] uppercase tracking-widest mb-2" style={{ color: "rgba(0,31,255,0.7)" }}>
                  ZeroLuck
                </span>
                <p
                  className="text-base md:text-lg leading-relaxed flex items-baseline gap-3"
                  style={{
                    color: "#FFFFFF",
                    textShadow: "0 0 8px rgba(0,31,255,0.3)",
                  }}
                >
                  <span className="shrink-0 font-bold text-lg" style={{ color: "#00FF88" }}>
                    ✓
                  </span>
                  {row.zluck}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center font-bold text-white"
          style={{ fontSize: "24px", marginTop: "48px", marginBottom: "40px" }}
        >
          Мы не конкурируем с агентствами. Мы заменяем их.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <motion.a
            href="#cta"
            className="inline-block bg-accent text-white font-console font-bold uppercase px-8 py-4 glow-blue cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Обсудить на бесплатном разборе
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
