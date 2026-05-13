"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Store, Trophy, Sparkles, ShoppingCart, ArrowRight } from "lucide-react";

const paths = [
  {
    href: "/comercios",
    icon: Store,
    title: "B&B Comercio",
    description:
      "Web profesional, sistema de turnos online y bot de WhatsApp. Para comercios, profesionales y servicios.",
    iconBg: "bg-gold/15",
    iconColor: "text-gold",
    border: "border-gold/20",
    bg: "bg-gold/[0.04]",
    arrowColor: "text-gold",
  },
  {
    href: "/deportes",
    icon: Trophy,
    title: "B&B Deportes",
    description:
      "Reservas de canchas, torneos completos y app para jugadores. Para predios, ligas y clubes.",
    iconBg: "bg-lime/15",
    iconColor: "text-lime",
    border: "border-lime/20",
    bg: "bg-lime/[0.04]",
    arrowColor: "text-lime",
  },
  {
    href: "/belleza",
    icon: Sparkles,
    title: "B&B Belleza",
    description:
      "Portfolio digital, turnos 24/7 y recordatorios. Para peluquerías, salones, spa, manicura y barberías.",
    iconBg: "bg-sage-500/20",
    iconColor: "text-sage-400",
    border: "border-sage-500/30",
    bg: "bg-sage-500/[0.05]",
    arrowColor: "text-sage-400",
  },
];

export function HomePaths() {
  return (
    <section id="caminos" className="bg-ink-900 py-16 sm:py-20">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="inline-block bg-accent-500/10 border border-accent-500/20 px-3 py-1 rounded-full mb-4">
            <span className="text-[11px] tracking-[0.2em] text-accent-400 uppercase">
              Nuestros caminos
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-white tracking-tight max-w-md mx-auto text-balance">
            ¿Qué necesitás resolver?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {paths.map((p, i) => (
            <motion.div
              key={p.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                href={p.href}
                className={`block ${p.bg} border ${p.border} p-6 rounded-2xl hover:scale-[1.02] hover:brightness-110 transition-all duration-300 group`}
              >
                <div
                  className={`w-10 h-10 ${p.iconBg} rounded-xl flex items-center justify-center mb-4`}
                >
                  <p.icon size={20} className={p.iconColor} />
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-[18px] font-semibold text-white">
                    {p.title}
                  </h3>
                </div>
                <p className="text-[14px] text-white/60 leading-relaxed mb-4">
                  {p.description}
                </p>
                <div
                  className={`text-[13px] ${p.arrowColor} inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all`}
                >
                  Ver producto <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Card extra - proyectos a medida */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="md:col-span-3 bg-white/[0.02] border border-white/[0.08] p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:bg-white/[0.03] transition-colors"
          >
            <div className="w-10 h-10 bg-white/[0.06] rounded-xl flex items-center justify-center shrink-0">
              <ShoppingCart size={20} className="text-white/70" />
            </div>
            <div className="flex-1">
              <h3 className="text-[17px] font-semibold text-white mb-1">
                Tienda online o proyecto a medida
              </h3>
              <p className="text-[13px] text-white/60 leading-relaxed">
                Ecommerce con Mercado Pago, apps móviles, automatizaciones con IA. Lo pensamos juntos según lo que tu negocio necesita.
              </p>
            </div>
            <div className="text-[13px] text-white/80 inline-flex items-center gap-1.5 shrink-0">
              Contanos tu idea <ArrowRight size={14} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
