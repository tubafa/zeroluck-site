"use client";

import { motion } from "framer-motion";

const metrics = [
  "Выручка +30%",
  "Команда 30+ с нуля",
  "4 новых рынка",
  "Бренд-амбассадор: органика +15%",
];

export default function CaseBetting() {
  return (
    <section className="py-20 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-block text-accent text-xs md:text-sm font-console font-bold uppercase tracking-[0.2em] mb-8"
        >
          Betting • 4 новых рынка
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative border-l-[3px] border-accent"
          style={{
            padding: "clamp(24px, 4vw, 48px)",
            background:
              "linear-gradient(135deg, rgba(0,31,255,0.06) 0%, rgba(0,0,0,0.8) 100%)",
            boxShadow:
              "0 0 40px rgba(0,31,255,0.08), inset 0 0 40px rgba(0,31,255,0.03)",
          }}
        >
          {/* Corner brackets */}
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent/30" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent/30" />

          {/* Text left, number right */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
            {/* Left: problem / solution / result */}
            <div className="flex-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <p className="text-accent font-console font-bold uppercase mb-2 tracking-wider" style={{ fontSize: "18px" }}>
                  Проблема
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#FFFFFF" }}>
                  Маркетинг дорогой и не масштабируется. Команды нет. Нужен выход
                  на 4 новых рынка.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <p className="text-accent font-console font-bold uppercase mb-2 tracking-wider" style={{ fontSize: "18px" }}>
                  Что сделали
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#FFFFFF" }}>
                  Собрали команду 30+ человек: CRM, Affiliate, Media Buying,
                  Creative. Запустили продукты в 4 регионах с полной
                  локализацией. Внедрили ROI-аналитику.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <p className="text-accent font-console font-bold uppercase mb-2 tracking-wider" style={{ fontSize: "18px" }}>
                  Результат
                </p>
                <div className="flex flex-wrap gap-3 mt-3">
                  {metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center font-console border bg-accent/5"
                      style={{
                        fontSize: "13px",
                        padding: "8px 16px",
                        borderColor: "rgba(0,31,255,0.3)",
                        color: "#FFFFFF",
                      }}
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: big result number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="shrink-0 text-left lg:text-right"
            >
              <span
                className="block font-console font-bold text-accent leading-none"
                style={{
                  fontSize: "64px",
                  textShadow:
                    "0 0 20px rgba(0,31,255,0.6), 0 0 40px rgba(0,31,255,0.3)",
                }}
              >
                −40%
              </span>
              <span className="block text-text-secondary text-sm md:text-base mt-2 font-console">
                снижение расходов на маркетинг
              </span>
            </motion.div>
          </div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-text-secondary/60 text-xs md:text-sm italic mt-8 pt-6 border-t border-white/5"
          >
            Результат на позиции Head of Marketing and BD
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
