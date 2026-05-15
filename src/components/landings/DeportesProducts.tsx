"use client";

import { motion } from "framer-motion";
import { Database, Trophy, Check, ShieldCheck } from "lucide-react";

export function DeportesProducts() {
  return (
    <section className="bg-ink py-16 sm:py-20">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="text-[11px] tracking-[0.2em] text-lime uppercase mb-3">
            Cómo funciona
          </div>
          <h2 className="text-[26px] sm:text-[36px] font-bold text-bone tracking-tight max-w-xl mx-auto text-balance">
            Tu torneo, organizado desde la raíz.
          </h2>
          <p className="text-[15px] text-bone/55 max-w-lg mx-auto mt-4 leading-relaxed">
            La diferencia no es sólo la app. Es que cargamos toda la estructura del torneo en nuestra base de datos antes de que empiece el primer partido.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-lime/[0.05] border border-lime/20 p-6 rounded-2xl"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <Database size={20} className="text-lime" />
              <h3 className="text-[16px] font-semibold text-bone">
                Base de datos completa
              </h3>
            </div>
            <p className="text-[13px] text-bone/60 leading-relaxed mb-4">
              Antes del torneo, nosotros cargamos cada equipo y cada jugador. Sin formularios, sin errores, sin demoras. Los datos son verídicos desde el primer saque.
            </p>
            <ul className="space-y-2">
              {[
                "Equipos y planteles cargados por nosotros",
                "Sin data entry manual para los jugadores",
                "Perfiles por jugador con historial",
                "Datos disponibles al instante en la app",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[12px] text-bone/80">
                  <Check size={14} className="text-lime shrink-0" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-bone/[0.03] border border-bone/[0.08] p-6 rounded-2xl"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <Trophy size={20} className="text-lime" />
              <h3 className="text-[16px] font-semibold text-bone">
                Gestión completa del torneo
              </h3>
            </div>
            <p className="text-[13px] text-bone/60 leading-relaxed mb-4">
              Fixture automático, tabla de posiciones en vivo, estadísticas por jugador y fair play. Los equipos siguen todo desde su celular.
            </p>
            <ul className="space-y-2">
              {[
                "Fixture con actualización automática",
                "Tabla de posiciones en tiempo real",
                "Goleadores y tarjetas por jugador",
                "App instalable para equipos (PWA)",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[12px] text-bone/80">
                  <Check size={14} className="text-lime shrink-0" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="md:col-span-2 bg-gradient-to-r from-lime/[0.06] to-transparent border border-lime/15 p-6 rounded-2xl flex flex-col sm:flex-row gap-4 items-start"
          >
            <div className="w-10 h-10 bg-lime/15 rounded-xl flex items-center justify-center shrink-0">
              <ShieldCheck size={20} className="text-lime" />
            </div>
            <div>
              <h3 className="text-[15px] font-semibold text-bone mb-1.5">
                ¿Por qué importa la base de datos?
              </h3>
              <p className="text-[13px] text-bone/60 leading-relaxed">
                En los torneos amateur, la información suele perderse en grupos de WhatsApp y planillas de papel. Con nuestra plataforma, cada gol, tarjeta y resultado queda registrado con nombre y apellido real del jugador. Eso le da al torneo una seriedad y una transparencia que los participantes reconocen y valoran — y que convierte a tu liga en la que todos quieren jugar.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
