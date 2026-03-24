"use client";

import { motion } from "framer-motion";

const reports = [
  {
    title: "Еженедельный отчёт",
    description:
      "Каждую пятницу — отчёт: что сделано, какие результаты, что планируем. Не PDF на 40 страниц, а конкретные цифры на одном экране.",
    icon: "📊",
  },
  {
    title: "Дашборд 24/7",
    description:
      "Доступ к live-дашборду с ключевыми метриками: лиды, конверсии, расходы, ROI. В любое время, с любого устройства.",
    icon: "📈",
  },
  {
    title: "Стратегическая сессия 2 раза в месяц",
    description:
      "Созвон на 30-60 минут: разбор результатов, корректировка стратегии, ответы на вопросы. Не формальность — реальная работа.",
    icon: "🎯",
  },
];

export default function Reporting() {
  return (
    <section className="py-20 md:py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold uppercase text-center mb-4 heading-glow">
          Как мы отчитываемся
        </h2>
        <p className="text-text-secondary text-lg text-center mb-16 max-w-2xl mx-auto">
          Полная прозрачность. Никаких сюрпризов.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reports.map((report, index) => (
          <motion.div
            key={index}
            className="relative border border-white/10 bg-black/40 p-8 corner-brackets"
            style={{ borderTop: "3px solid #001FFF" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.12 }}
            viewport={{ once: true }}
            whileHover={{
              boxShadow: "0 0 20px rgba(0,31,255,0.2), 0 0 40px rgba(0,31,255,0.1)",
            }}
          >
            <p className="font-console text-accent text-sm tracking-widest mb-3 opacity-60">
              {"///"}
            </p>
            <h3 className="font-console font-bold text-white text-lg md:text-xl mb-4">
              {report.title}
            </h3>
            <p className="text-text-secondary text-[15px] md:text-base leading-relaxed">
              {report.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="text-center text-white font-console text-lg mt-14 max-w-3xl mx-auto"
      >
        Вы всегда знаете, куда уходит каждый доллар и что он принёс.
      </motion.p>
    </section>
  );
}
