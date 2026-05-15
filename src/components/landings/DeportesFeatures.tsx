"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  BarChart3,
  Bell,
  Users,
  Camera,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "App instalable (PWA)",
    description:
      "Tus jugadores instalan la app sin pasar por App Store ni Play Store.",
  },
  {
    icon: BarChart3,
    title: "Panel de control",
    description:
      "Métricas de ocupación, ingresos por cancha, partidos jugados y más.",
  },
  {
    icon: Bell,
    title: "Notificaciones push",
    description:
      "Resultados en vivo, recordatorios y novedades llegan al celular.",
  },
  {
    icon: Users,
    title: "Multi-usuario",
    description:
      "Múltiples administradores con permisos diferenciados (dueño, veedor, equipo).",
  },
  {
    icon: Camera,
    title: "Branding personalizado",
    description:
      "Logo, colores y nombre de tu predio o liga. Parece hecho exclusivo para vos.",
  },
  {
    icon: Globe,
    title: "Dominio propio",
    description:
      "torneo.tudominio.com.ar o lo que vos quieras. Para potenciar tu marca.",
  },
];

export function DeportesFeatures() {
  return (
    <section id="features" className="bg-ink py-16 sm:py-20">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="text-[11px] tracking-[0.2em] text-lime uppercase mb-3">
            Más características
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-bone tracking-tight">
            Pensado para crecer con vos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="bg-white/[0.03] border border-white/[0.08] p-5 rounded-2xl hover:border-lime/30 transition-colors"
            >
              <div className="w-9 h-9 bg-lime/15 rounded-lg flex items-center justify-center mb-3">
                <f.icon size={18} className="text-lime" />
              </div>
              <h3 className="text-[15px] font-semibold text-bone mb-1.5">
                {f.title}
              </h3>
              <p className="text-[13px] text-bone/60 leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
