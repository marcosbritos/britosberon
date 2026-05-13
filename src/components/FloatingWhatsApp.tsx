"use client";

import { whatsappLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface FloatingWhatsAppProps {
  message?: string;
}

export function FloatingWhatsApp({ message }: FloatingWhatsAppProps) {
  return (
    <motion.a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-lg shadow-whatsapp/40 hover:shadow-xl hover:shadow-whatsapp/50 transition-shadow"
    >
      <MessageCircle size={26} className="text-white" strokeWidth={2} fill="currentColor" />
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-20" />
    </motion.a>
  );
}
