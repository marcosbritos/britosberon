import type { Metadata } from "next";
import { HomeNav } from "@/components/home/HomeComponents";
import { HomeFooter } from "@/components/home/HomeComponents";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
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

export default function BellezaPage() {
  return (
    <main className="bg-bone min-h-screen">
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
