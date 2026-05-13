"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Store } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function ComerciosHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(251,191,36,0.10),transparent_60%)]" />
      </div>

      <div className="relative container-page py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-3 py-1.5 rounded-full mb-6"
        >
          <Store size={13} className="text-gold" />
          <span className="text-[11px] text-gold-light tracking-wide">
            Para comercios y profesionales
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.05] font-bold text-white tracking-tight mb-5 max-w-3xl text-balance"
        >
          Tu comercio merece{" "}
          <span className="font-serif italic font-medium text-gold">más</span>{" "}
          que un WhatsApp Business.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-[16px] leading-relaxed text-white/60 max-w-xl mb-8"
        >
          Web profesional, sistema de turnos online, presencia en Google Maps y atención automatizada. Todo en una suscripción mensual, sin inversión grande.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap gap-3 items-center"
        >
          <a
            href={whatsappLink(WHATSAPP_MESSAGES.comercios)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp text-white px-6 py-3.5 rounded-lg text-[14px] font-medium inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={18} fill="currentColor" />
            Pedir presupuesto
          </a>
          <a
            href="#features"
            className="border border-white/15 text-white px-5 py-3.5 rounded-lg text-[14px] font-medium inline-flex items-center gap-2 hover:bg-white/5 transition-colors"
          >
            Ver qué incluye <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
