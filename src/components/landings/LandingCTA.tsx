"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

interface LandingCTAProps {
  title: string;
  subtitle: string;
  whatsappMessage: string;
  accentColor?: "gold" | "lime" | "sage" | "violet";
}

const colorMap = {
  gold: {
    bg: "from-gold/10 to-gold/5",
    border: "border-gold/20",
    button: "bg-whatsapp",
  },
  lime: {
    bg: "from-lime/10 to-accent-500/5",
    border: "border-lime/20",
    button: "bg-whatsapp",
  },
  sage: {
    bg: "from-sage-500/15 to-sage-500/5",
    border: "border-sage-500/30",
    button: "bg-whatsapp",
  },
  violet: {
    bg: "from-accent-500/10 to-accent-purple/10",
    border: "border-accent-500/20",
    button: "bg-whatsapp",
  },
};

export function LandingCTA({
  title,
  subtitle,
  whatsappMessage,
  accentColor = "violet",
}: LandingCTAProps) {
  const colors = colorMap[accentColor];

  return (
    <section className="bg-ink py-16 sm:py-20">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-3xl p-8 sm:p-12 text-center`}
        >
          <h2 className="text-[26px] sm:text-[34px] font-bold text-bone tracking-tight mb-3 max-w-xl mx-auto text-balance">
            {title}
          </h2>
          <p className="text-[15px] text-bone/65 max-w-md mx-auto mb-7">
            {subtitle}
          </p>
          <a
            href={whatsappLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${colors.button} text-bone px-7 py-3.5 rounded-lg text-[14px] font-medium inline-flex items-center gap-2 hover:opacity-90 transition-opacity`}
          >
            <MessageCircle size={18} fill="currentColor" />
            Hablemos por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
