"use client";

import { motion } from "framer-motion";

const tags = [
  "Fútbol 5 / 7 / 11",
  "Padel",
  "Tenis",
  "Hockey",
  "Básquet",
  "Vóley",
  "Rugby amateur",
  "Clubes deportivos",
  "Profesores particulares",
];

export function DeportesFor() {
  return (
    <section className="bg-white/[0.02] border-y border-white/[0.04] py-7">
      <div className="container-page">
        <div className="text-[10px] tracking-[0.2em] text-white/40 uppercase mb-3">
          Para todo tipo de deporte:
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
              className="bg-white/[0.04] text-white/80 text-[12.5px] px-3 py-1.5 rounded-full border border-white/[0.08]"
            >
              {tag}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
