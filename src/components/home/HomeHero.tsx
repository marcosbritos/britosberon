"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Check, Clock, Headset } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(99,102,241,0.18),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.06),transparent_40%)]" />
      </div>

      <div className="relative container-page py-14 sm:py-20 lg:py-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-accent-500/10 border border-accent-500/30 px-3.5 py-1.5 rounded-full mb-7"
        >
          <span className="w-1.5 h-1.5 bg-gold rounded-full" />
          <span className="text-[12px] text-accent-400 tracking-wide">
            Estudio digital · Buenos Aires
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] font-bold text-white tracking-tight mb-6 max-w-3xl text-balance"
        >
          Si tu negocio{" "}
          <span className="font-serif italic font-medium text-gold">
            todavía no está
          </span>
          <br />
          en internet,
          <br />
          <span className="bg-gradient-to-r from-accent-500 to-accent-purple bg-clip-text text-transparent">
            lo ponemos online.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-[16px] sm:text-[18px] leading-relaxed text-white/60 max-w-xl mb-10"
        >
          Webs, sistemas de reservas, automatización y ecommerce. Suscripción
          mensual accesible para comercios y emprendedores en Argentina.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap gap-3 items-center mb-12 sm:mb-14"
        >
          <a
            href={whatsappLink(WHATSAPP_MESSAGES.generic)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp text-white px-6 py-3.5 rounded-lg text-[14px] font-medium inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={18} fill="currentColor" />
            Hablemos por WhatsApp
          </a>
          <a
            href="#caminos"
            className="border border-white/15 text-white px-5 py-3.5 rounded-lg text-[14px] font-medium inline-flex items-center gap-2 hover:bg-white/5 transition-colors"
          >
            Ver servicios <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-7 border-t border-white/[0.06] max-w-2xl"
        >
          <div className="flex gap-3 items-center">
            <div className="w-9 h-9 bg-accent-500/15 rounded-lg flex items-center justify-center shrink-0">
              <Check size={16} className="text-accent-400" />
            </div>
            <div>
              <div className="text-[13px] text-white font-medium">
                Sin inversión grande
              </div>
              <div className="text-[11px] text-white/45">
                Mensualidad accesible
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-9 h-9 bg-accent-500/15 rounded-lg flex items-center justify-center shrink-0">
              <Clock size={16} className="text-accent-400" />
            </div>
            <div>
              <div className="text-[13px] text-white font-medium">
                Listo en 7-14 días
              </div>
              <div className="text-[11px] text-white/45">
                Online y funcionando
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-9 h-9 bg-accent-500/15 rounded-lg flex items-center justify-center shrink-0">
              <Headset size={16} className="text-accent-400" />
            </div>
            <div>
              <div className="text-[13px] text-white font-medium">
                Soporte real
              </div>
              <div className="text-[11px] text-white/45">
                Te atendemos nosotros
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
