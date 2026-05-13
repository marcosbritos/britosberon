import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BellezaHero } from "@/components/landings/BellezaHero";
import { BellezaFor } from "@/components/landings/BellezaFor";
import { BellezaFeatures } from "@/components/landings/BellezaFeatures";
import { BellezaProcess } from "@/components/landings/BellezaProcess";
import { BellezaCTA } from "@/components/landings/BellezaCTA";
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
    <main className="bg-sage-900 min-h-screen">
      <Header
        context="Belleza"
        accentColor="#7a8b6a"
        whatsappMessage={WHATSAPP_MESSAGES.belleza}
        variant="dark"
      />
      <BellezaHero />
      <BellezaFor />
      <BellezaFeatures />
      <BellezaProcess />
      <BellezaCTA />
      <Footer />
      <FloatingWhatsApp message={WHATSAPP_MESSAGES.belleza} />
    </main>
  );
}
