"use client";

import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingWhatsAppProps {
  message?: string;
}

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
          aria-label="Hablemos por WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-5 right-5 z-50 w-14 h-14 md:w-[60px] md:h-[60px] bg-acc rounded-full flex items-center justify-center shadow-[0_6px_20px_rgba(31,163,181,0.35)] hover:shadow-[0_8px_28px_rgba(31,163,181,0.5)] hover:bg-acc2 transition-colors"
        >
          {/* Ícono oficial WhatsApp - SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-7 h-7 md:w-8 md:h-8 fill-bone"
            aria-hidden="true"
          >
            <path d="M16.003 0C7.166 0 .008 7.158.005 15.995a15.96 15.96 0 002.137 7.996L0 32l8.222-2.158a15.99 15.99 0 007.781 1.98c8.836 0 15.995-7.158 15.998-15.995A15.952 15.952 0 0027.319 4.69 15.954 15.954 0 0016.003 0zm0 29.282h-.003a13.27 13.27 0 01-6.764-1.853l-.485-.288-5.044 1.323 1.347-4.917-.316-.504a13.255 13.255 0 01-2.034-7.048c.002-7.337 5.973-13.307 13.301-13.307 3.553 0 6.892 1.385 9.402 3.9a13.215 13.215 0 013.893 9.41c-.004 7.34-5.973 13.306-13.297 13.306zm7.293-9.962c-.4-.2-2.365-1.168-2.732-1.301-.366-.134-.633-.2-.9.2-.267.4-1.034 1.3-1.267 1.567-.234.267-.467.3-.867.1-2.366-1.183-3.918-2.112-5.475-4.78-.413-.71.413-.66 1.183-2.197.13-.267.066-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.323-.78-.654-.673-.9-.687-.234-.013-.5-.013-.767-.013-.267 0-.7.1-1.067.5-.367.4-1.4 1.367-1.4 3.333 0 1.967 1.434 3.867 1.633 4.133.2.267 2.821 4.307 6.834 6.04.954.412 1.7.658 2.28.843.957.304 1.83.261 2.518.158.768-.115 2.365-.967 2.7-1.9.333-.933.333-1.733.233-1.9-.1-.166-.367-.266-.766-.466z" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
