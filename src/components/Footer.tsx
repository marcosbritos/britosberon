"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { MessageCircle, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050d1a] text-white">
      <div className="container-page py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Marca + Social */}
          <div className="md:col-span-5">
            <Logo />
            <p className="text-[13px] text-white/60 leading-relaxed mt-4 mb-5 max-w-sm">
              Soluciones digitales para negocios chicos en Argentina. Suscripción mensual accesible, acompañamiento real.
            </p>
            <div className="flex gap-2">
              <a
                href={whatsappLink(WHATSAPP_MESSAGES.generic)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 bg-whatsapp/15 border border-whatsapp/30 rounded-lg flex items-center justify-center hover:bg-whatsapp/25 transition-colors"
              >
                <MessageCircle size={16} className="text-whatsapp" fill="currentColor" />
              </a>
              <a
                href="https://instagram.com/britosberon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-white/[0.05] border border-white/[0.08] rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Instagram size={16} className="text-white/60" />
              </a>
              <a
                href="mailto:hola@britosberon.com.ar"
                aria-label="Email"
                className="w-9 h-9 bg-white/[0.05] border border-white/[0.08] rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Mail size={16} className="text-white/60" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div className="md:col-span-3">
            <div className="text-[11px] tracking-[0.15em] text-white/50 uppercase mb-4">
              Servicios
            </div>
            <ul className="space-y-2.5">
              <li className="text-[13px] text-white/80">Desarrollo web</li>
              <li className="text-[13px] text-white/80">Tienda online</li>
              <li className="text-[13px] text-white/80">Sistema de reservas</li>
              <li className="text-[13px] text-white/80">Automatización</li>
              <li className="text-[13px] text-white/80">Apps móviles</li>
            </ul>
          </div>

          {/* Productos */}
          <div className="md:col-span-2">
            <div className="text-[11px] tracking-[0.15em] text-white/50 uppercase mb-4">
              Productos
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link href="/comercios" className="text-[13px] text-white/80 hover:text-white transition-colors">
                  B&B Comercio
                </Link>
              </li>
              <li>
                <Link href="/deportes" className="text-[13px] text-white/80 hover:text-white transition-colors">
                  B&B Deportes
                </Link>
              </li>
              <li>
                <Link href="/belleza" className="text-[13px] text-white/80 hover:text-white transition-colors">
                  B&B Belleza
                </Link>
              </li>
              <li className="text-[13px] text-white/40">
                B&B Profesional <span className="text-[10px]">próximamente</span>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="md:col-span-2">
            <div className="text-[11px] tracking-[0.15em] text-white/50 uppercase mb-4">
              Empresa
            </div>
            <ul className="space-y-2.5">
              <li className="text-[13px] text-white/80">Nosotros</li>
              <li className="text-[13px] text-white/80">Cómo trabajamos</li>
              <li className="text-[13px] text-white/80">Contacto</li>
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-accent-500/10 to-accent-purple/10 border border-accent-500/20 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-10">
          <div>
            <div className="text-[18px] sm:text-[20px] font-bold text-white tracking-tight mb-1">
              ¿Listo para que tu negocio despegue?
            </div>
            <div className="text-[13px] text-white/70">
              Charlemos 30 minutos, sin compromiso. Te decimos si podemos ayudarte.
            </div>
          </div>
          <a
            href={whatsappLink(WHATSAPP_MESSAGES.generic)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp text-white px-6 py-3 rounded-lg text-[14px] font-medium inline-flex items-center gap-2 shrink-0 hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={18} fill="currentColor" />
            Hablemos por WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[12px] text-white/40">
            © {new Date().getFullYear()} Britos Berón · Buenos Aires, Argentina
          </div>
          <div className="flex gap-5 text-[12px] text-white/40">
            <span>Términos y condiciones</span>
            <span>Política de privacidad</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
