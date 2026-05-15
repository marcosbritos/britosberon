"use client";

import { motion } from "framer-motion";
import { Calendar, Trophy, Check } from "lucide-react";

export function DeportesProducts() {
  return (
    <section className="bg-ink py-16 sm:py-20">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="text-[11px] tracking-[0.2em] text-lime uppercase mb-3">
            2 productos en uno
          </div>
          <h2 className="text-[26px] sm:text-[34px] font-bold text-bone tracking-tight max-w-md mx-auto text-balance">
            Reservas + Torneos.
            <br />
            Trabajan juntos.
          </h2>
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
              <Calendar size={20} className="text-lime" />
              <h3 className="text-[16px] font-semibold text-bone">
                Sistema de Reservas
              </h3>
            </div>
            <p className="text-[13px] text-bone/60 leading-relaxed mb-4">
              Tus clientes ven horarios disponibles, reservan y pagan online. Vos ves todo desde el panel.
            </p>
            <ul className="space-y-2">
              {[
                "Calendario en tiempo real",
                "Pagos con Mercado Pago",
                "Recordatorios automáticos por WhatsApp",
                "Bloqueo de horarios para mantenimiento",
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
            className="bg-accent-purple/[0.05] border border-accent-purple/20 p-6 rounded-2xl"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <Trophy size={20} className="text-accent-purpleLight" />
              <h3 className="text-[16px] font-semibold text-bone">
                Gestión de Torneos
              </h3>
            </div>
            <p className="text-[13px] text-bone/60 leading-relaxed mb-4">
              Fixture, tabla en vivo, goleadores y fair play. App instalable para los equipos.
            </p>
            <ul className="space-y-2">
              {[
                "Tabla de posiciones actualizada en vivo",
                "Estadísticas por jugador",
                "App móvil para los equipos (PWA)",
                "Multi-zona, fase de grupos y playoffs",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[12px] text-bone/80">
                  <Check size={14} className="text-accent-purpleLight shrink-0" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
