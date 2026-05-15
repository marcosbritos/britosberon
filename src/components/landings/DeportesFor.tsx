"use client";

import { motion } from "framer-motion";

const tags = [
  "Fútbol 5",
  "Fútbol 7",
  "Fútbol 11",
  "Ligas amateur",
  "Torneos de barrio",
  "Torneos empresariales",
  "Copas intercolegiales",
  "Campeonatos zonales",
];

export function DeportesFor() {
  return (
    <section className="bg-bone/[0.03] border-y border-bone/[0.06] py-7">
      <div className="container-page">
        <div className="text-[10px] tracking-[0.2em] text-bone/40 uppercase mb-3">
          Diseñado para:
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.04 } },
          }}
          className="flex flex-wrap gap-2"
        >
          {tags.map((tag) => (
            <motion.div
              key={tag}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              className="bg-lime/[0.06] text-bone/80 text-[12.5px] px-3 py-1.5 rounded-full border border-lime/[0.15]"
            >
              {tag}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
