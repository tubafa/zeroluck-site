"use client";

import { motion } from "framer-motion";

const teamMembers = [
  { name: "Боходир Тураев", role: "Основатель / Стратег", description: "Стратегия, архитектура системы, управление ростом", color: "#001FFF" },
  { name: "Руководитель отдела продаж", role: "", description: "Построение воронки, скрипты, найм и обучение менеджеров", color: "#00FF88" },
  { name: "Креативный директор", role: "", description: "Визуальная коммуникация, контент-стратегия, брендинг", color: "#FF3366" },
  { name: "Руководитель медиабаинга", role: "", description: "Платный трафик, оптимизация каналов, аналитика кампаний", color: "#FFAA00" },
  { name: "Менеджер проектов", role: "", description: "Координация команды, дедлайны, отчётность", color: "#00CCFF" },
  { name: "Рекрутер", role: "", description: "Поиск и найм специалистов в команду клиента", color: "#AA66FF" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold uppercase text-center mb-8 heading-glow">
          Не агентство. Система.
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-text-secondary text-lg max-w-3xl mx-auto text-center mb-16"
        >
          ZeroLuck — это не агентство, которое продаёт услуги. Это команда,
          которая строит маркетинговые и коммерческие системы внутри вашего
          бизнеса. Мы не подрядчик. Мы — ваш отдел маркетинга и продаж на
          аутсорсе, с полной ответственностью за результат.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="border-glow p-6 corner-brackets transition-shadow duration-300"
            style={{
              borderTop: `3px solid ${member.color}`,
            }}
            whileHover={{
              boxShadow: `0 0 15px ${member.color}4D`,
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <p className="font-console font-bold text-white flex items-baseline gap-2">
              <span
                className="inline-block w-[6px] h-[6px] rounded-full shrink-0 relative top-[-2px]"
                style={{ backgroundColor: member.color }}
              />
              {member.name}
            </p>
            {member.role && (
              <p className="text-sm font-console mt-1" style={{ color: member.color }}>{member.role}</p>
            )}
            <p className="text-sm text-text-secondary mt-2">{member.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
