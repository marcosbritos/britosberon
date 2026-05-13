"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function BellezaCTA() {
  return (
    <section className="bg-cream-50 py-16 sm:py-20">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-sage-500/25 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(122,139,106,0.08),transparent_60%)]" />
          </div>
          <div className="relative">
            <div className="font-serif italic text-[13px] text-sage-500 tracking-[0.08em] mb-4">
              — Para quien se anima a destacar —
            </div>
            <h2 className="font-serif text-[26px] sm:text-[32px] font-normal text-sage-900 leading-tight mb-7 max-w-xl mx-auto text-balance">
              &ldquo;Hoy las clientas te eligen primero en Google, y después en la silla.&rdquo;
            </h2>
            <a
              href={whatsappLink(WHATSAPP_MESSAGES.belleza)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sage-900 text-cream-100 px-7 py-3.5 rounded-full text-[14px] font-medium inline-flex items-center gap-2 hover:bg-sage-900/90 transition-colors"
            >
              <MessageCircle size={18} fill="currentColor" />
              Empezar mi presencia digital
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
