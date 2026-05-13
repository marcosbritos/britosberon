"use client";

import { motion } from "framer-motion";
import { Scissors, Sparkles, Hand, Flower2, Wand2 } from "lucide-react";

const tags = [
  { icon: Scissors, label: "Peluquerías" },
  { icon: Sparkles, label: "Salones de belleza" },
  { icon: Hand, label: "Manicura y pedicura" },
  { icon: Flower2, label: "Spa y estética" },
  { icon: Wand2, label: "Cosmetología" },
  { icon: Scissors, label: "Barberías" },
  { icon: Sparkles, label: "Depilación" },
];

export function BellezaFor() {
  return (
    <section className="bg-cream-100 py-10 border-y border-sage-900/[0.06]">
      <div className="container-page text-center">
        <div className="font-serif italic text-[13px] text-sage-500 tracking-[0.08em] mb-5">
          — Para todos los rubros —
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.05 } },
          }}
          className="flex flex-wrap gap-2 justify-center"
        >
          {tags.map((tag) => (
            <motion.div
              key={tag.label}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              className="bg-sage-500/[0.08] text-sage-900 text-[12.5px] px-3.5 py-1.5 rounded-full border border-sage-500/20 inline-flex items-center gap-1.5"
            >
              <tag.icon size={13} className="text-sage-500" />
              {tag.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
