import type { Metadata } from "next";
import { HomeNav } from "@/components/home/HomeComponents";
import { HomeFooter } from "@/components/home/HomeComponents";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { DeportesHero } from "@/components/landings/DeportesHero";
import { DeportesFor } from "@/components/landings/DeportesFor";
import { DeportesProducts } from "@/components/landings/DeportesProducts";
import { DeportesFeatures } from "@/components/landings/DeportesFeatures";
import { LandingCTA } from "@/components/landings/LandingCTA";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "B&B Deportes | Gestión de Torneos Amateur de Fútbol",
  description:
    "Plataforma todo-en-uno para ligas y organizadores de torneos amateur. Fixture automático, tablas, goleadores, cobros y app para jugadores. Argentina.",
  openGraph: {
    title: "B&B Deportes | Tu torneo amateur, profesional",
    description:
      "Gestión de torneos + cobros + app para jugadores. Plataforma para ligas amateur en Argentina.",
  },
};

export default function DeportesPage() {
  return (
    <main className="bg-bone min-h-screen">
      <HomeNav />
      <DeportesHero />
      <DeportesFor />
      <DeportesProducts />
      <DeportesFeatures />
      <LandingCTA
        title="¿Listo para profesionalizar tu torneo?"
        subtitle="Te mostramos la plataforma en vivo en una demo de 20 minutos."
        whatsappMessage={WHATSAPP_MESSAGES.deportes}
      />
      <HomeFooter />
      <FloatingWhatsApp message={WHATSAPP_MESSAGES.deportes} />
    </main>
  );
}
