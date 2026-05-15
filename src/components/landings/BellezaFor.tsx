"use client";

import { motion } from "framer-motion";

const tags = ["Peluquerías","Salones de belleza","Manicura y pedicura","Spa y estética","Cosmetología","Barberías","Depilación","Pestañas y cejas"];

export function BellezaFor() {
  return (
    <section className="px-5 md:px-[56px] py-7 border-b border-ink/10 bg-bone">
      <div className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase mb-3">
        Para todos los rubros:
      </div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
        className="flex flex-wrap gap-2"
      >
        {tags.map((tag) => (
          <motion.div
            key={tag}
            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
            className="font-mono text-[11px] tracking-[0.12em] uppercase px-3 py-1.5 border border-ink/20 text-ink/70"
          >
            {tag}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
