"use client";

import { motion } from "framer-motion";
import { Smartphone, BarChart3, Bell, Users, GitBranch, Globe } from "lucide-react";

const features = [
  { icon: Smartphone, n:"01", title: "App instalable (PWA)", body: "Los equipos instalan la app sin pasar por App Store ni Play Store. Funciona en cualquier celular con Android o iPhone." },
  { icon: BarChart3, n:"02", title: "Panel del organizador", body: "Cargás resultados, ves estadísticas y gestionás el torneo desde un panel simple y rápido, desde tu celular." },
  { icon: Bell, n:"03", title: "Notificaciones push", body: "Resultados en vivo, novedades y próximos partidos llegan directo al celular de los jugadores sin abrir la app." },
  { icon: Users, n:"04", title: "Multi-zona y multi-equipo", body: "Manejá múltiples zonas y grupos dentro de un mismo torneo sin perder el hilo de ningún partido." },
  { icon: GitBranch, n:"05", title: "Fases y playoffs", body: "Grupos, fase eliminatoria, repechaje. La plataforma se adapta al formato de torneo que vos diseñes." },
  { icon: Globe, n:"06", title: "Dominio propio", body: "torneo.tudominio.com.ar o el nombre de tu liga. Para que los equipos te encuentren fácil siempre." },
];

export function DeportesFeatures() {
  return (
    <section id="features" className="px-5 md:px-[56px] py-20 md:py-[120px] bg-bone border-b-[1.5px] border-ink">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-[40px] mb-12 md:mb-[80px]">
        <div>
          <div className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase mb-3 md:mb-[14px] text-mute">
            03 — sección
          </div>
          <h2 className="m-0 font-display font-semibold text-[54px] md:text-[100px] leading-[0.9] tracking-[-0.045em] text-ink">
            Incluye<span className="font-serif italic text-acc font-normal">.</span>
          </h2>
        </div>
        <p className="max-w-[380px] m-0 font-display text-[16px] md:text-[18px] leading-[1.45] text-mute">
          Todo lo que tu liga necesita para funcionar desde el día uno.
        </p>
      </div>

      <div className="border-t-[1.5px] border-ink grid grid-cols-1 lg:grid-cols-2">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className={`py-8 md:py-[36px] ${i % 2 !== 0 ? "lg:border-l border-ink/20 lg:pl-[40px]" : ""} ${i > 0 ? "border-t border-ink/20" : ""} ${i === 1 ? "lg:border-t-0" : ""}`}
          >
            <div className="flex items-baseline gap-4 mb-3">
              <span className="font-mono text-[11px] tracking-[0.15em] text-acc">{f.n}</span>
              <h3 className="m-0 font-display font-medium text-[22px] md:text-[28px] tracking-tight text-ink">{f.title}</h3>
            </div>
            <p className="m-0 font-display text-[14px] md:text-[15px] leading-[1.55] text-ink ml-[36px] md:ml-[44px]">
              {f.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
