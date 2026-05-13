import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ComerciosHero } from "@/components/landings/ComerciosHero";
import { ComerciosFeatures } from "@/components/landings/ComerciosFeatures";
import { ComerciosFor } from "@/components/landings/ComerciosFor";
import { LandingCTA } from "@/components/landings/LandingCTA";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "B&B Comercio | Web + Turnos + WhatsApp para tu negocio",
  description:
    "Web profesional, sistema de turnos online, presencia en Google Maps y bot de WhatsApp. Todo en una suscripción mensual accesible. Para peluquerías, profesionales, talleres y comercios en Argentina.",
  openGraph: {
    title: "B&B Comercio | Tu negocio profesional en internet",
    description:
      "Web + turnos online + Google + WhatsApp para comercios y profesionales en Argentina.",
  },
};

export default function ComerciosPage() {
  return (
    <main className="bg-ink-900 min-h-screen">
      <Header
        context="Comercio"
        accentColor="#fbbf24"
        whatsappMessage={WHATSAPP_MESSAGES.comercios}
      />
      <ComerciosHero />
      <ComerciosFor />
      <ComerciosFeatures />
      <LandingCTA
        title="¿Listo para llevar tu comercio al siguiente nivel?"
        subtitle="Charlemos 30 minutos sin compromiso. Te mostramos casos similares al tuyo."
        whatsappMessage={WHATSAPP_MESSAGES.comercios}
        accentColor="gold"
      />
      <Footer />
      <FloatingWhatsApp message={WHATSAPP_MESSAGES.comercios} />
    </main>
  );
}
