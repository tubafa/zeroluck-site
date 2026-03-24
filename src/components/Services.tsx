"use client";

import { motion } from "framer-motion";

const freeBullets = [
  "Разберём текущую ситуацию в маркетинге и продажах",
  "Покажем конкретные точки потерь",
  "Дадим 2–3 рекомендации, которые можно внедрить сразу",
  "Без обязательств и без продажи",
];

const strategyBullets = [
  "Глубокий аудит маркетинга и продаж",
  "Анализ воронки и каналов",
  "Roadmap на 90 дней",
  "Рекомендации по команде и бюджету",
];

const fullBullets = [
  "Маркетинговая стратегия",
  "Сборка отдела маркетинга",
  "Настройка отдела продаж",
  "Найм специалистов",
  "Аналитика и отчётность",
  "Ежедневное управление",
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Card 1 — Бесплатный разбор */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ y: -4, transition: { duration: 0.25 } }}
          className="relative p-10 md:p-14 rounded-sm"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,31,255,0.05) 0%, transparent 100%)",
          }}
        >
          {/* Top row: Title + Price */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="font-console text-2xl md:text-3xl font-bold uppercase text-white heading-glow flex items-center gap-3">
              <span className="inline-block w-[6px] h-[6px] rounded-full bg-accent status-dot shrink-0" />
              Бесплатный разбор — 15 минут
            </h3>
            <span
              className="font-console font-bold uppercase shrink-0"
              style={{
                fontSize: "18px",
                color: "#00FF88",
                lineHeight: 1.4,
              }}
            >
              БЕСПЛАТНО
            </span>
          </div>

          <p className="text-text-secondary text-lg mb-6">
            Узнайте, где ваш бизнес теряет деньги — за 15 минут, бесплатно
          </p>
          <ul className="space-y-3 mb-8">
            {freeBullets.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-3 text-text-secondary"
              >
                <span className="text-accent mt-1 shrink-0 text-sm opacity-60">///</span>
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
          <motion.a
            href="#cta"
            className="inline-block bg-accent text-white font-console font-bold uppercase px-8 py-4 nav-cta-pulse"
            style={{
              boxShadow: "0 0 20px rgba(0,31,255,0.5), 0 0 40px rgba(0,31,255,0.2)",
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,31,255,0.7), 0 0 60px rgba(0,31,255,0.3)" }}
            whileTap={{ scale: 0.97 }}
          >
            Записаться на бесплатный разбор
          </motion.a>
        </motion.div>

        {/* Card 2 — Стратегическая сессия $500 */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          whileHover={{ y: -4, transition: { duration: 0.25 } }}
          className="relative p-8 md:p-10 service-card-stripe"
          style={{
            borderLeft: "3px solid #001FFF",
            background: "rgba(0,0,0,0.5)",
          }}
        >
          {/* Top row: Title + Price */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="font-console text-2xl md:text-3xl font-bold uppercase text-white heading-glow">
                Стратегическая сессия
              </h3>
              <span className="inline-block font-console text-[11px] font-bold uppercase tracking-wider text-accent/80 border border-accent/30 px-2 py-0.5 mt-2">
                90 мин
              </span>
            </div>
            <span
              className="service-card-price font-console font-bold text-white shrink-0"
              style={{
                fontSize: "36px",
                lineHeight: 1,
                textShadow:
                  "0 0 20px rgba(0,31,255,0.6), 0 0 40px rgba(0,31,255,0.3)",
              }}
            >
              $500
            </span>
          </div>

          <p className="text-text-secondary text-lg mb-6 mt-4">
            90 минут глубокой работы. На выходе — документ-roadmap: что делать, в
            каком порядке, какие ресурсы нужны.
          </p>
          <ul className="space-y-2">
            {strategyBullets.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="flex items-start gap-3 text-text-secondary"
              >
                <span className="text-accent mt-1 shrink-0 text-sm opacity-60">///</span>
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
          <motion.a
            href="#cta"
            className="inline-block bg-accent text-white font-console font-bold uppercase px-8 py-4 mt-8 glow-blue cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Заказать сессию
          </motion.a>
        </motion.div>

        {/* Card 3 — Полное ведение (Premium) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          whileHover={{
            boxShadow:
              "0 0 30px rgba(0,31,255,0.4), 0 0 60px rgba(0,31,255,0.2), 0 0 100px rgba(0,31,255,0.1)",
            transition: { duration: 0.3 },
          }}
          className="relative p-10 md:p-14 service-card-premium"
          style={{
            transform: "scale(1.02)",
            border: "2px solid rgba(0,31,255,0.7)",
            boxShadow:
              "0 0 20px rgba(0,31,255,0.25), 0 0 50px rgba(0,31,255,0.1), inset 0 0 30px rgba(0,31,255,0.03)",
          }}
        >
          {/* РЕКОМЕНДУЕМ badge */}
          <span className="absolute -top-3 left-6 bg-accent text-white font-console text-xs font-bold uppercase px-4 py-1 tracking-wider">
            РЕКОМЕНДУЕМ
          </span>

          {/* Top row: Title + Price */}
          <div className="flex items-start justify-between gap-4 mb-3 mt-2">
            <h3 className="font-console text-2xl md:text-3xl font-bold uppercase text-white heading-glow">
              Полное ведение
            </h3>
            <span className="shrink-0 text-right">
              <span
                className="font-console font-bold text-white"
                style={{
                  fontSize: "36px",
                  lineHeight: 1,
                  textShadow:
                    "0 0 20px rgba(0,31,255,0.5), 0 0 40px rgba(0,31,255,0.2)",
                }}
              >
                от $3,000
              </span>
              <span className="font-console text-text-secondary text-base ml-1">/мес</span>
            </span>
          </div>

          <p className="text-text-secondary text-lg mb-6">
            Берём маркетинг и продажи на себя. Стратегия, команда, каналы,
            отчётность. Еженедельные отчёты, полная прозрачность.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {fullBullets.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="flex items-start gap-3 text-text-secondary"
              >
                <span className="text-accent mt-1 shrink-0 text-sm opacity-60">///</span>
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
          <motion.a
            href="#cta"
            className="inline-block bg-accent text-white font-console font-bold uppercase px-8 py-4 glow-blue cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Начать полное ведение
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-text-secondary text-sm mt-8"
        >
          Начнём с 15-минутной диагностики. Дальше — решаете вы.
        </motion.p>
      </div>
    </section>
  );
}
