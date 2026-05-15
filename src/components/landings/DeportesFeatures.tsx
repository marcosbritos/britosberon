"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  BarChart3,
  Bell,
  Users,
  GitBranch,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "App instalable (PWA)",
    description:
      "Los equipos instalan la app sin pasar por App Store ni Play Store. Funciona en cualquier celular.",
  },
  {
    icon: BarChart3,
    title: "Panel del organizador",
    description:
      "Cargás resultados, ves estadísticas y gestionás el torneo desde un panel simple y rápido.",
  },
  {
    icon: Bell,
    title: "Notificaciones push",
    description:
      "Resultados en vivo, novedades y próximos partidos llegan directo al celular de los jugadores.",
  },
  {
    icon: Users,
    title: "Multi-zona y multi-equipo",
    description:
      "Manejá múltiples zonas, grupos y fases dentro de un mismo torneo sin perder el hilo.",
  },
  {
    icon: GitBranch,
    title: "Fases y playoffs",
    description:
      "Grupos, fase eliminatoria, repechaje. La plataforma se adapta al formato que vos diseñes.",
  },
  {
    icon: Globe,
    title: "Dominio propio",
    description:
      "torneo.tudominio.com.ar o el nombre de tu liga. Para que los equipos te encuentren fácil.",
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
            Todo lo que tu liga necesita
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
              className="bg-bone/[0.03] border border-bone/[0.07] p-5 rounded-2xl hover:border-lime/30 transition-colors"
            >
              <div className="w-9 h-9 bg-lime/15 rounded-lg flex items-center justify-center mb-3">
                <f.icon size={18} className="text-lime" />
              </div>
              <h3 className="text-[15px] font-semibold text-bone mb-1.5">
                {f.title}
              </h3>
              <p className="text-[13px] text-bone/55 leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
