"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Server,
  Search,
  RefreshCw,
  Shield,
  MessageSquare,
} from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Diseño a medida",
    description:
      "Cada proyecto se diseña específicamente para tu marca, no usamos plantillas genéricas.",
  },
  {
    icon: Server,
    title: "Hosting y dominio",
    description:
      "Todo incluido en la mensualidad. No pagás servidores aparte ni te preocupás por configurar nada.",
  },
  {
    icon: Search,
    title: "SEO configurado",
    description:
      "Tu negocio aparece en Google desde el día 1. Optimización técnica y Google Business Profile.",
  },
  {
    icon: RefreshCw,
    title: "Actualizaciones mensuales",
    description:
      "Cambios de textos, fotos, precios y servicios incluidos. Sin costo extra, sin esperas largas.",
  },
  {
    icon: Shield,
    title: "Backup y seguridad",
    description:
      "Copias periódicas de tu contenido. Tu sitio protegido contra ataques y caídas.",
  },
  {
    icon: MessageSquare,
    title: "Soporte por WhatsApp",
    description:
      "Respondemos en menos de 24 horas. Te atendemos nosotros directamente, no un call center.",
  },
];

export function HomeIncluded() {
  return (
    <section className="bg-ink-900 py-16 sm:py-20">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-accent-500/10 border border-accent-500/20 px-3 py-1 rounded-full mb-4">
            <span className="text-[11px] tracking-[0.2em] text-accent-400 uppercase">
              Qué incluye
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-white tracking-tight max-w-2xl mx-auto text-balance">
            Todo lo que necesitás para que<br />tu negocio funcione online
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="bg-white/[0.03] border border-white/[0.08] p-5 rounded-2xl hover:bg-white/[0.05] transition-colors"
            >
              <div className="w-10 h-10 bg-accent-500/15 rounded-xl flex items-center justify-center mb-4">
                <f.icon size={18} className="text-accent-400" />
              </div>
              <h3 className="text-[15px] font-semibold text-white mb-2">
                {f.title}
              </h3>
              <p className="text-[13px] text-white/60 leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
