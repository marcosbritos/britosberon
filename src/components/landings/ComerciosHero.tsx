"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Store, Globe, Calendar, Bot } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function ComerciosHero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(251,191,36,0.08),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(251,191,36,0.04),transparent_70%)]" />
      </div>

      <div className="relative container-page py-16 sm:py-24 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-3 py-1.5 rounded-full mb-6"
        >
          <Store size={13} className="text-gold" />
          <span className="text-[11px] text-gold tracking-[0.12em] uppercase font-medium">
            Para comercios y profesionales
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-[36px] sm:text-[52px] lg:text-[64px] leading-[1.0] font-bold text-bone tracking-tight mb-6 max-w-3xl text-balance"
        >
          Tu comercio merece más{" "}
          <span className="font-serif italic font-normal text-gold">
            que un WhatsApp Business.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-[16px] sm:text-[17px] leading-relaxed text-bone/60 max-w-xl mb-10"
        >
          Web profesional, sistema de turnos online, presencia en Google Maps y atención automatizada.
          Todo en una suscripción mensual, sin inversión grande.
        </motion.p>

        {/* Value props */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl mb-10"
        >
          {[
            { icon: Globe, label: "Web profesional", desc: "Diseño premium que transmite confianza y convierte visitas en clientes" },
            { icon: Calendar, label: "Turnos online 24/7", desc: "Tus clientes reservan solos. Vos no levantás el teléfono" },
            { icon: Bot, label: "Atención automática", desc: "Respuestas por WhatsApp y recordatorios sin intervención tuya" },
          ].map((item, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-4 text-left">
              <div className="w-8 h-8 bg-gold/15 rounded-lg flex items-center justify-center mb-3">
                <item.icon size={16} className="text-gold" />
              </div>
              <div className="text-[13px] font-semibold text-bone mb-1">{item.label}</div>
              <div className="text-[12px] text-bone/50 leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="flex flex-wrap gap-3 items-center justify-center"
        >
          <a
            href={whatsappLink(WHATSAPP_MESSAGES.comercios)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp text-bone px-7 py-3.5 rounded-full text-[14px] font-medium inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={18} fill="currentColor" />
            Pedir presupuesto
          </a>
          <a
            href="#features"
            className="border border-bone/20 text-bone/80 px-6 py-3.5 rounded-full text-[14px] font-medium inline-flex items-center gap-2 hover:bg-bone/5 transition-colors"
          >
            Ver qué incluye <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
