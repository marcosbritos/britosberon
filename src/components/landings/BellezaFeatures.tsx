"use client";

import { motion } from "framer-motion";
import { Globe, Calendar, MessageCircle, MapPin, CreditCard, Star } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Web con tu portfolio",
    description: "Galería de tus trabajos, servicios y precios. Diseño que muestra lo que sabés hacer.",
  },
  {
    icon: Calendar,
    title: "Turnos online 24/7",
    description: "Tus clientas reservan solas, eligen servicio y horario sin llamarte.",
  },
  {
    icon: MessageCircle,
    title: "Recordatorios automáticos",
    description: "WhatsApp automático un día antes. Menos ausentes, más ingresos.",
  },
  {
    icon: MapPin,
    title: "Google Maps optimizado",
    description: "Aparecé cuando te buscan en tu zona. Configuramos todo desde el día 1.",
  },
  {
    icon: CreditCard,
    title: "Cobros y señas online",
    description: "Mercado Pago integrado. Cobrá la seña al momento de reservar.",
  },
  {
    icon: Star,
    title: "Reseñas automáticas",
    description: "Pedimos reseña por WhatsApp post-servicio. Tu reputación crece sola.",
  },
];

export function BellezaFeatures() {
  return (
    <section id="features" className="bg-cream-50 py-16 sm:py-20">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="font-serif italic text-[13px] text-sage-500 tracking-[0.08em] mb-3">
            — Lo que incluimos —
          </div>
          <h2 className="font-serif text-[28px] sm:text-[36px] font-normal text-sage-900 tracking-tight">
            Tu negocio. Profesional. Online.
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
              className="bg-white border border-sage-900/[0.08] p-5 rounded-2xl hover:border-sage-500/30 hover:shadow-lg hover:shadow-sage-500/5 transition-all"
            >
              <div className="w-10 h-10 bg-sage-500/12 rounded-xl flex items-center justify-center mb-4">
                <f.icon size={18} className="text-sage-500" />
              </div>
              <h3 className="text-[15px] font-semibold text-sage-900 mb-1.5">
                {f.title}
              </h3>
              <p className="text-[13px] text-sage-900/65 leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
