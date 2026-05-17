"use client";

import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingWhatsAppProps {
  message?: string;
}

/**
 * Opción B: burbuja ink (paleta editorial) con ícono oficial de WhatsApp en verde adentro.
 * Mantiene el reconocimiento universal del verde WA sin romper la composición de la marca.
 * Indicador animado "online" en la esquina superior derecha.
 */
export function FloatingWhatsApp({ message }: FloatingWhatsAppProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.8;
      setVisible(window.scrollY > threshold);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-5 right-5 z-50 w-[58px] h-[58px] rounded-full bg-ink text-[#25D366] flex items-center justify-center shadow-[0_14px_32px_rgba(10,31,42,0.32)] hover:bg-black transition-colors"
        >
          {/* WhatsApp glyph */}
          <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26" aria-hidden="true">
            <path d="M20.5 3.5A11 11 0 0 0 3.7 18.2L2 22l3.9-1.7a11 11 0 0 0 14.6-16.8zM12 20.3a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-2.3 1 1-2.2-.2-.3a8.3 8.3 0 1 1 6 2.9zm4.7-6.1c-.3-.2-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5 0-.2 0-.4-.1-.5l-.7-1.8c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 5 4.3.7.3 1.2.4 1.6.5.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.7.2-1.2.1-1.3-.1-.2-.3-.3-.6-.4z" />
          </svg>
          {/* Indicador "online" verde con anillo ink, esquina sup-der */}
          <span
            aria-hidden="true"
            className="absolute top-[6px] right-[8px] w-[10px] h-[10px] rounded-full bg-[#25D366] ring-2 ring-ink"
          />
          {/* Halo animado verde, sutil */}
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-[#25D366] opacity-[0.14] animate-ping"
          />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
