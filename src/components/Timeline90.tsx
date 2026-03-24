"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    period: "Неделя 1-2",
    text: "Аудит каналов, доступы, первый отчёт о точках потерь",
  },
  {
    period: "Месяц 1",
    text: "Воронка собрана, аналитика настроена, первые гипотезы в работе",
  },
  {
    period: "Месяц 2",
    text: "Каналы запущены, лиды пошли, отдел продаж подключён к системе",
  },
  {
    period: "Месяц 3",
    text: "Система работает автономно. Еженедельные отчёты. Рост метрик.",
  },
];

export default function Timeline90() {
  return (
    <section className="py-20 md:py-28 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold uppercase text-white text-center mb-16 heading-glow flex items-center justify-center gap-3"
        >
          Что вы получите за первые 90 дней
          <span className="blink-cursor text-accent">▌</span>
        </motion.h2>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block relative mb-16">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-[18px] left-0 right-0 h-[2px] origin-left"
            style={{
              background: "linear-gradient(90deg, rgba(0,31,255,0.2), rgba(0,31,255,0.8), rgba(0,31,255,0.2))",
              boxShadow: "0 0 10px rgba(0,31,255,0.3)",
            }}
          />

          <div className="grid grid-cols-4 gap-6 relative">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + i * 0.15 }}
                className="relative pt-12"
              >
                {/* Blue dot */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[14px] h-[14px] rounded-full z-10"
                  style={{
                    background: "#001FFF",
                    boxShadow: "0 0 12px rgba(0,31,255,0.8), 0 0 24px rgba(0,31,255,0.4), 0 0 40px rgba(0,31,255,0.2)",
                  }}
                />
                {/* Pulse ring */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[14px] h-[14px] rounded-full z-[9]"
                  style={{
                    border: "1px solid rgba(0,31,255,0.5)",
                    animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
                    animationDelay: `${i * 0.3}s`,
                  }}
                />

                <h3
                  className="font-console font-bold uppercase text-white mb-3 text-center"
                  style={{
                    fontSize: "20px",
                    textShadow: "0 0 10px rgba(0,31,255,0.4)",
                  }}
                >
                  {m.period}
                </h3>
                <p
                  className="text-text-secondary text-center"
                  style={{ fontSize: "16px", lineHeight: "1.7" }}
                >
                  {m.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative mb-14 pl-8">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-0 bottom-0 left-[6px] w-[2px] origin-top"
            style={{
              background: "linear-gradient(180deg, rgba(0,31,255,0.2), rgba(0,31,255,0.8), rgba(0,31,255,0.2))",
              boxShadow: "0 0 10px rgba(0,31,255,0.3)",
            }}
          />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                className="relative"
              >
                {/* Blue dot */}
                <div
                  className="absolute -left-8 top-1 w-[14px] h-[14px] rounded-full"
                  style={{
                    background: "#001FFF",
                    boxShadow: "0 0 12px rgba(0,31,255,0.8), 0 0 24px rgba(0,31,255,0.4)",
                  }}
                />
                <h3
                  className="font-console font-bold uppercase text-white mb-2"
                  style={{
                    fontSize: "18px",
                    textShadow: "0 0 10px rgba(0,31,255,0.4)",
                  }}
                >
                  {m.period}
                </h3>
                <p
                  className="text-text-secondary"
                  style={{ fontSize: "15px", lineHeight: "1.7" }}
                >
                  {m.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-text-secondary text-lg mb-8">
            И всё это — начинается с 15-минутного разбора.
          </p>
          <motion.a
            href="#cta"
            className="inline-block bg-accent text-white font-console font-bold uppercase px-8 py-4"
            style={{
              boxShadow: "0 0 20px rgba(0,31,255,0.5), 0 0 40px rgba(0,31,255,0.2)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0,31,255,0.7), 0 0 60px rgba(0,31,255,0.3)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Записаться на разбор
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
