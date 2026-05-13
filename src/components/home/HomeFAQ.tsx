"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

const faqs = [
  {
    q: "¿Cuánto cuesta una página web con ustedes?",
    a: "Trabajamos con suscripción mensual, no con pago único grande. Cada proyecto se cotiza según lo que necesites: cantidad de páginas, funcionalidades, integraciones. Escribinos por WhatsApp y te pasamos una cotización clara en menos de 24 horas.",
  },
  {
    q: "¿Puedo cancelar la suscripción cuando quiera?",
    a: "Cada producto tiene un período mínimo de permanencia (3, 6 o 12 meses según el tipo). Cumplido ese plazo, podés cancelar avisando con 30 días de anticipación. Sin sorpresas ni penalizaciones extra.",
  },
  {
    q: "¿En cuánto tiempo está mi sitio listo?",
    a: "Entre 7 y 14 días corridos desde la firma del acuerdo y la entrega de los materiales (textos, fotos, accesos). Depende de la complejidad y tu disponibilidad para revisar.",
  },
  {
    q: "¿El dominio queda a mi nombre?",
    a: "Sí. Tu dominio .com.ar o .com queda registrado a tu nombre/CUIT. Si en algún momento decidís irte, te lo llevás. Lo que queda con nosotros es el sistema y el código.",
  },
  {
    q: "¿Qué pasa si necesito cambios después?",
    a: "Los cambios normales (textos, fotos, precios, horarios) están incluidos en la mensualidad. Si querés agregar funcionalidades nuevas (sistema de turnos, ecommerce, integraciones), lo cotizamos por separado.",
  },
  {
    q: "¿Trabajan en todo el país o solo Buenos Aires?",
    a: "Trabajamos en todo el país de forma remota. Tenemos clientes en Buenos Aires, GBA y otras provincias. La presencialidad la usamos para algunos casos específicos en GBA.",
  },
  {
    q: "¿Cómo aparezco en Google con mi nueva web?",
    a: "Configuramos el SEO técnico desde el día 1. También te ayudamos a crear tu Google Business Profile para aparecer en Google Maps. Generalmente, en 2 a 8 semanas empezás a aparecer en búsquedas relevantes de tu zona.",
  },
];

export function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-ink-900 py-16 sm:py-20">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-block bg-accent-500/10 border border-accent-500/20 px-3 py-1 rounded-full mb-4">
            <span className="text-[11px] tracking-[0.2em] text-accent-400 uppercase">
              Preguntas frecuentes
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[34px] font-bold text-white tracking-tight mb-3">
            ¿Tenés dudas?
          </h2>
          <p className="text-[15px] text-white/60 max-w-md mx-auto">
            Las preguntas que nos hacen siempre, respondidas sin vueltas.
          </p>
        </motion.div>

        <div className="space-y-2.5">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className={`${
                  isOpen
                    ? "bg-accent-500/[0.06] border-accent-500/20"
                    : "bg-white/[0.03] border-white/[0.08]"
                } border rounded-xl overflow-hidden transition-colors`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-5 sm:px-6 py-5 flex items-start justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-semibold text-white">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <Minus size={18} className="text-accent-400 shrink-0 mt-0.5" />
                  ) : (
                    <Plus size={18} className="text-white/60 shrink-0 mt-0.5" />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5">
                        <p className="text-[13.5px] text-white/70 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 bg-gradient-to-r from-accent-500/10 to-accent-purple/10 border border-accent-500/20 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div>
            <div className="text-[15px] font-semibold text-white mb-1">
              ¿Tenés otra pregunta?
            </div>
            <div className="text-[13px] text-white/60">
              Escribinos por WhatsApp, respondemos en menos de 24 horas.
            </div>
          </div>
          <a
            href={whatsappLink(WHATSAPP_MESSAGES.generic)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp text-white px-5 py-2.5 rounded-lg text-[13px] font-medium inline-flex items-center gap-2 hover:opacity-90 transition-opacity shrink-0"
          >
            <MessageCircle size={16} fill="currentColor" />
            Escribinos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
