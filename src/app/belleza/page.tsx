import type { Metadata } from "next";
import { HomeNav } from "@/components/home/HomeComponents";
import { HomeFooter } from "@/components/home/HomeComponents";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { LandingMarquee } from "@/components/landings/LandingMarquee";
import { BellezaHero } from "@/components/landings/BellezaHero";
import { BellezaFor } from "@/components/landings/BellezaFor";
import { BellezaFeatures } from "@/components/landings/BellezaFeatures";
import { BellezaProcess } from "@/components/landings/BellezaProcess";
import { LandingCTA } from "@/components/landings/LandingCTA";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "B&B Belleza | Web + Turnos para tu salón, peluquería o spa",
  description:
    "Plataforma digital para peluquerías, salones de belleza, spa, manicura, barberías y estética. Web con portfolio, turnos online 24/7, recordatorios y presencia en Google Maps.",
  openGraph: {
    title: "B&B Belleza | Tu negocio de belleza profesional online",
    description:
      "Web, turnos online, recordatorios y Google. Para peluquerías, salones, spa y barberías.",
  },
};

const bellezaMarqueeItems = [
  "B&B BELLEZA",
  "TUS CLIENTAS RESERVAN ONLINE 24/7",
  "PELUQUERÍAS · SALONES · SPA · MANICURA · BARBERÍAS",
  "WEB CON PORTFOLIO · GOOGLE MAPS · RECORDATORIOS",
  "MENOS AUSENTES · MÁS INGRESOS · MEJOR REPUTACIÓN",
  "DISEÑO BOUTIQUE QUE REFLEJA TU TALENTO",
];

export default function BellezaPage() {
  return (
    <main className="bg-bone min-h-screen">
      <LandingMarquee items={bellezaMarqueeItems} />
      <HomeNav />
      <BellezaHero />
      <BellezaFor />
      <BellezaFeatures />
      <BellezaProcess />
      <LandingCTA
        title="¿Listo para transformar tu salón?"
        subtitle="Web propia + turnos online + Google Maps. Profesionalizá tu talento hoy."
        whatsappMessage={WHATSAPP_MESSAGES.belleza}
        accentColor="teal"
      />
      <HomeFooter />
      <FloatingWhatsApp message={WHATSAPP_MESSAGES.belleza} />
    </main>
  );
}
