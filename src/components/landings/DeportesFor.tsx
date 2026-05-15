"use client";

import { motion } from "framer-motion";

const tags = ["Fútbol 5","Fútbol 7","Fútbol 11","Ligas amateur","Torneos de barrio","Torneos empresariales","Copas intercolegiales","Campeonatos zonales"];

export function DeportesFor() {
  return (
    <section className="px-5 md:px-[56px] py-7 border-b border-ink/10 bg-bone">
      <div className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase mb-3">
        Diseñado para:
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
