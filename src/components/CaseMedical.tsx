"use client";

import { motion } from "framer-motion";

const metrics = [
  "CRM с нуля за 2 недели",
  "Команда собрана и обучена",
  "Воронки по каждому направлению",
];

export default function CaseMedical() {
  return (
    <section className="py-20 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Green badge + sublabel */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1.5 text-xs md:text-sm font-console font-bold uppercase tracking-[0.15em] border"
            style={{
              color: "#00FF88",
              borderColor: "#00FF88",
              background: "rgba(0,255,136,0.08)",
              boxShadow: "0 0 12px rgba(0,255,136,0.2)",
            }}
          >
            Клиент ZeroLuck
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-text-secondary text-xs md:text-sm font-console uppercase tracking-[0.15em]"
          >
            Медицина • Ташкент
          </motion.span>
        </div>

        {/* Main card — double border green/blue, extra padding */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
          style={{
            padding: "clamp(24px, 4vw, 64px) clamp(24px, 4vw, 48px)",
            border: "2px solid rgba(0,255,136,0.3)",
            boxShadow:
              "0 0 30px rgba(0,255,136,0.1), 0 0 60px rgba(0,31,255,0.08), inset 0 0 40px rgba(0,255,136,0.03)",
            outline: "1px solid rgba(0,31,255,0.2)",
            outlineOffset: "4px",
            background:
              "linear-gradient(135deg, rgba(0,255,136,0.04) 0%, rgba(0,0,0,0.8) 50%, rgba(0,31,255,0.04) 100%)",
          }}
        >
          {/* Corner brackets */}
          <div
            className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2"
            style={{ borderColor: "#00FF88" }}
          />
          <div
            className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2"
            style={{ borderColor: "#00FF88" }}
          />
          <div
            className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2"
            style={{ borderColor: "#00FF88" }}
          />
          <div
            className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2"
            style={{ borderColor: "#00FF88" }}
          />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
            {/* Left: problem / solution / result */}
            <div className="flex-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <p
                  className="font-console font-bold uppercase mb-2 tracking-wider"
                  style={{ fontSize: "18px", color: "#00FF88" }}
                >
                  Проблема
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#FFFFFF" }}>
                  Новый медицинский центр премиум-класса. Стационар пустой. Нет
                  системы привлечения пациентов, нет CRM, команда не обучена
                  работе с лидами.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <p
                  className="font-console font-bold uppercase mb-2 tracking-wider"
                  style={{ fontSize: "18px", color: "#00FF88" }}
                >
                  Что сделали
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#FFFFFF" }}>
                  Собрали команду специалистов с нуля. Внедрили и настроили
                  CRM-систему. Обучили персонал работе с воронкой: от первого
                  звонка до повторного визита. Простроили маркетинговые воронки
                  по каждому направлению клиники.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <p
                  className="font-console font-bold uppercase mb-2 tracking-wider"
                  style={{ fontSize: "18px", color: "#00FF88" }}
                >
                  Результат
                </p>
                <div className="flex flex-wrap gap-3 mt-3">
                  {metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center font-console border bg-white/[0.02]"
                      style={{
                        fontSize: "13px",
                        padding: "8px 16px",
                        borderColor: "rgba(0,255,136,0.2)",
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
              className="shrink-0 w-full lg:w-auto text-left lg:text-right"
            >
              <span
                className="block font-console font-bold leading-none"
                style={{
                  fontSize: "clamp(48px, 10vw, 64px)",
                  color: "#00FF88",
                  textShadow:
                    "0 0 20px rgba(0,255,136,0.6), 0 0 40px rgba(0,255,136,0.3)",
                }}
              >
                90%
              </span>
              <span className="block text-text-secondary text-sm md:text-base mt-2 font-console">
                заполнение стационара на 3-й месяц
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
