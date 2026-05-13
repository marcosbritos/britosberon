"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface HeaderProps {
  context?: string;
  accentColor?: string;
  whatsappMessage?: string;
  variant?: "dark" | "light";
}

export function Header({
  context,
  accentColor,
  whatsappMessage = WHATSAPP_MESSAGES.generic,
  variant = "dark",
}: HeaderProps) {
  const isDark = variant === "dark";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative z-30 flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 ${
        isDark
          ? "border-b border-white/[0.06]"
          : "border-b border-black/[0.06]"
      }`}
    >
      <Logo
        context={context}
        variant={isDark ? "light" : "dark"}
        accentColor={accentColor}
      />

      <nav className="hidden md:flex items-center gap-7">
        <Link
          href="/comercios"
          className={`text-[13px] ${
            isDark ? "text-white/70 hover:text-white" : "text-ink-900/70 hover:text-ink-900"
          } transition-colors`}
        >
          Comercios
        </Link>
        <Link
          href="/deportes"
          className={`text-[13px] ${
            isDark ? "text-white/70 hover:text-white" : "text-ink-900/70 hover:text-ink-900"
          } transition-colors`}
        >
          Deportes
        </Link>
        <Link
          href="/belleza"
          className={`text-[13px] ${
            isDark ? "text-white/70 hover:text-white" : "text-ink-900/70 hover:text-ink-900"
          } transition-colors`}
        >
          Belleza
        </Link>
      </nav>

      <a
        href={whatsappLink(whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-whatsapp text-white px-3 sm:px-4 py-2 rounded-md text-[12px] sm:text-[13px] font-medium inline-flex items-center gap-1.5 hover:opacity-90 transition-opacity"
      >
        <MessageCircle size={14} fill="currentColor" />
        <span className="hidden sm:inline">Hablemos</span>
      </a>
    </motion.header>
  );
}
