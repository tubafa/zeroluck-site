"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="py-20 md:py-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold uppercase mb-8 heading-glow">
          15 минут. Бесплатно. Покажем, где теряете.
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-text-secondary text-lg max-w-2xl mx-auto mb-12"
        >
          Без обязательств. Разберём вашу ситуацию, покажем конкретные дыры и
          что делать первым.
        </motion.p>

        <motion.a
          href="#"
          className="inline-block bg-accent text-white font-console font-bold uppercase px-8 py-4 glow-blue cta-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Записаться на бесплатный разбор
        </motion.a>
      </motion.div>
    </section>
  );
}
