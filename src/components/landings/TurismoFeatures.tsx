"use client";

import { motion } from "framer-motion";
import { Camera, CalendarCheck, MapPin, MessageCircle, Star, Languages } from "lucide-react";

const features = [
  { icon: Camera, n: "01", title: "Web con galería profesional", body: "Tus fotos en grande, mostrando lo mejor del lugar. El viajero compra con los ojos antes de elegir." },
  { icon: CalendarCheck, n: "02", title: "Reservas online con seña", body: "El viajero reserva 24/7 y deja seña vía Mercado Pago. Menos cancelaciones, más caja anticipada." },
  { icon: MapPin, n: "03", title: "Google Maps reclamado", body: "Te aparecemos en Google y Maps. Donde te buscan los turistas antes de elegir dónde dormir." },
  { icon: MessageCircle, n: "04", title: "Bot de WhatsApp", body: "Respuesta automática a consultas de disponibilidad, precios y servicios. No perdés clientes por no contestar." },
  { icon: Star, n: "05", title: "Reseñas automáticas", body: "Pedido automático post-estadía. Cada huésped feliz suma a tu reputación en Google y Maps." },
  { icon: Languages, n: "06", title: "Multi-idioma básico", body: "Versión en inglés para turistas extranjeros. El Bolsón, Bariloche, Mendoza no son solo argentinos." },
];

export function TurismoFeatures() {
  return (
    <section id="features" className="px-5 md:px-[56px] py-20 md:py-[120px] bg-bone border-b-[1.5px] border-ink">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-[40px] mb-12 md:mb-[80px]">
        <div>
          <div className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase mb-3 md:mb-[14px] text-mute">
            02 — sección
          </div>
          <h2 className="m-0 font-display font-semibold text-[54px] md:text-[100px] leading-[0.9] tracking-[-0.045em]">
            Incluye<span className="font-serif italic text-acc font-normal">.</span>
          </h2>
        </div>
        <p className="max-w-[380px] m-0 font-display text-[16px] md:text-[18px] leading-[1.45] text-mute">
          Lo que entra en la suscripción mensual. Sin asteriscos chiquitos.
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
              <h3 className="m-0 font-display font-medium text-[22px] md:text-[28px] tracking-tight">{f.title}</h3>
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
