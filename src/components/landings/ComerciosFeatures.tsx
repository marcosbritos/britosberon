"use client";

import { motion } from "framer-motion";
import { Globe, Calendar, MapPin, MessageCircle, Star, CreditCard } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Web profesional",
    description: "Diseño a medida, mobile-first, hosting y dominio incluido.",
  },
  {
    icon: Calendar,
    title: "Turnos online 24/7",
    description: "Tus clientes reservan solos, sin que tengas que llamarte.",
  },
  {
    icon: MapPin,
    title: "Google Maps y SEO",
    description: "Aparecé cuando te buscan en tu zona, configurado desde el día 1.",
  },
  {
    icon: MessageCircle,
    title: "Bot de WhatsApp",
    description: "Atención automática, confirmación y recordatorios de citas.",
  },
  {
    icon: Star,
    title: "Reseñas automáticas",
    description: "Pedido automático de reseñas post-servicio a tus clientes.",
  },
  {
    icon: CreditCard,
    title: "Cobros online",
    description: "Mercado Pago integrado opcional para señas y pagos anticipados.",
  },
];

export function ComerciosFeatures() {
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
          <div className="text-[11px] tracking-[0.2em] text-gold uppercase mb-3">
            Lo que incluimos
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-bone tracking-tight max-w-xl mx-auto text-balance">
            Todo lo que necesita tu comercio en internet
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
              className="bg-white/[0.03] border border-white/[0.08] p-5 rounded-2xl hover:border-gold/30 transition-colors"
            >
              <div className="w-9 h-9 bg-gold/15 rounded-lg flex items-center justify-center mb-3">
                <f.icon size={18} className="text-gold" />
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
