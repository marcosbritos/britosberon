import type { Metadata } from "next";
import { HomeNav } from "@/components/home/HomeComponents";
import { HomeFooter } from "@/components/home/HomeComponents";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { LandingMarquee } from "@/components/landings/LandingMarquee";
import { ComerciosHero } from "@/components/landings/ComerciosHero";
import { ComerciosFeatures } from "@/components/landings/ComerciosFeatures";
import { ComerciosFor } from "@/components/landings/ComerciosFor";
import { LandingCTA } from "@/components/landings/LandingCTA";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "B&B Comercio | Web a medida, Tienda online y Turnos para tu negocio",
  description:
    "Web boutique a medida, tienda online completa, sistema de turnos online, presencia en Google Maps y bot de WhatsApp. Misma operativa que las grandes plataformas, con el diseño de tu marca. Suscripción mensual accesible para comercios y profesionales en Argentina.",
  openGraph: {
    title: "B&B Comercio | Tu marca, tu negocio online",
    description:
      "Tienda online + turnos + WhatsApp + Google Maps con diseño boutique a medida. No otra plantilla.",
  },
};

const comerciosMarqueeItems = [
  "B&B COMERCIO",
  "WEB A MEDIDA · TIENDA ONLINE · TURNOS",
  "DISEÑO BOUTIQUE QUE RESPETA TU MARCA",
  "MISMA OPERATIVA QUE LAS GRANDES PLATAFORMAS",
  "BOT DE WHATSAPP · GOOGLE MAPS · SEO",
  "SUSCRIPCIÓN MENSUAL · SIN INVERSIÓN GRANDE",
];

export default function ComerciosPage() {
  return (
    <main className="bg-bone min-h-screen">
      <LandingMarquee items={comerciosMarqueeItems} />
      <HomeNav />
      <ComerciosHero />
      <ComerciosFor />
      <ComerciosFeatures />
      <LandingCTA
        title="¿Listo para tener tu marca online?"
        subtitle="Charlemos 30 minutos sin compromiso. Te mostramos cómo se ve tu negocio con un diseño hecho a medida."
        whatsappMessage={WHATSAPP_MESSAGES.comercios}
        accentColor="gold"
      />
      <HomeFooter />
      <FloatingWhatsApp message={WHATSAPP_MESSAGES.comercios} />
    </main>
  );
}
