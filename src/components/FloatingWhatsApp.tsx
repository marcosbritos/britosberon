"use client";

import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingWhatsAppProps {
  message?: string;
}

export function FloatingWhatsApp({ message }: FloatingWhatsAppProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparece cuando el usuario hace scroll de más de 80% del viewport
      // (después de que el hero deja de verse)
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
          className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-lg shadow-whatsapp/40 hover:shadow-xl hover:shadow-whatsapp/50 transition-shadow"
        >
          <MessageCircle size={26} className="text-white" strokeWidth={2} fill="currentColor" />
          <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-20" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
