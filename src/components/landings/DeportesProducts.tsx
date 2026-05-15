"use client";

import { Database, Trophy, ShieldCheck, Check } from "lucide-react";
import { motion } from "framer-motion";

export function DeportesProducts() {
  return (
    <section className="px-5 md:px-[56px] py-12 md:py-24 bg-bone2 border-b-[1.5px] border-ink">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-[40px] mb-8 md:mb-12">
        <div>
          <div className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase mb-3 md:mb-[14px] text-mute">
            02 — sección
          </div>
          <h2 className="m-0 font-display font-semibold text-[54px] md:text-[100px] leading-[0.9] tracking-[-0.045em] text-ink">
            Cómo <br/> funciona <span className="font-serif italic text-acc font-normal">.</span>
          </h2>
        </div>
        <p className="max-w-[380px] m-0 font-display text-[16px] md:text-[18px] leading-[1.45] text-mute">
          La diferencia no es la app. Es que cargamos toda la estructura del torneo antes del primer partido.
        </p>
      </div>

      <div className="border-t-[1.5px] border-ink">
        {[
          {
            icon: Database,
            n: "01",
            title: "Base de datos completa",
            body: "Antes del torneo, nosotros cargamos cada equipo y cada jugador. Sin formularios, sin errores, sin demoras. Los datos son verídicos desde el primer saque.",
            items: ["Equipos y planteles cargados por nosotros", "Sin data entry manual para los jugadores", "Perfiles por jugador con historial completo", "Datos disponibles al instante en la app"],
          },
          {
            icon: Trophy,
            n: "02",
            title: "Gestión del torneo",
            body: "Fixture automático, tabla de posiciones en vivo, estadísticas individuales y fair play. Los equipos siguen todo desde su celular.",
            items: ["Fixture generado automáticamente", "Tabla de posiciones en tiempo real", "Goleadores y tarjetas por jugador", "App instalable para los equipos (PWA)"],
          },
          {
            icon: ShieldCheck,
            n: "03",
            title: "¿Por qué importa la base de datos?",
            body: "En los torneos amateur, la información se pierde en grupos de WhatsApp y planillas de papel. Con nuestra plataforma, cada gol, tarjeta y resultado queda registrado con nombre real del jugador. Eso le da al torneo una transparencia que los participantes valoran — y que convierte tu liga en la que todos quieren jugar.",
            items: ["Registros permanentes por jugador", "Historial de torneos pasados", "Estadísticas exportables", "Transparencia total para los equipos"],
          },
        ].map((item, i) => (
          <motion.div
            key={item.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr] gap-6 lg:gap-[40px] py-10 md:py-[48px] border-b border-ink/20"
          >
            <div className="font-mono text-[11px] md:text-[13px] tracking-[0.15em] text-acc">{item.n}</div>
            <div>
              <h3 className="m-0 font-display font-semibold text-[32px] md:text-[48px] leading-[0.95] tracking-tight mb-4 text-ink">
                {item.title}
              </h3>
              <p className="m-0 font-display text-[15px] md:text-[17px] leading-[1.45] text-ink">
                {item.body}
              </p>
            </div>
            <ul className="list-none p-0 m-0 flex flex-col gap-3 self-start lg:pt-2">
              {item.items.map((feat) => (
                <li key={feat} className="flex items-start gap-3 font-display text-[14px] leading-[1.45] text-ink">
                  <span className="inline-flex w-5 h-5 border border-ink items-center justify-center text-acc font-serif italic text-[14px] leading-none -translate-y-0.5 shrink-0 mt-0.5">✓</span>
                  {feat}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
