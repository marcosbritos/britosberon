import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { DeportesHero } from "@/components/landings/DeportesHero";
import { DeportesFor } from "@/components/landings/DeportesFor";
import { DeportesProducts } from "@/components/landings/DeportesProducts";
import { DeportesFeatures } from "@/components/landings/DeportesFeatures";
import { LandingCTA } from "@/components/landings/LandingCTA";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "B&B Deportes | Reservas de canchas y gestión de torneos",
  description:
    "Plataforma todo-en-uno para predios, canchas, clubes y ligas amateur. Reservas online, torneos completos, cobros con Mercado Pago y app para jugadores. Argentina.",
  openGraph: {
    title: "B&B Deportes | Predio o liga deportiva profesional",
    description:
      "Reservas + torneos + cobros + app para jugadores. Plataforma para predios deportivos en Argentina.",
  },
};

export default function DeportesPage() {
  return (
    <main className="bg-ink-900 min-h-screen">
      <Header
        context="Deportes"
        accentColor="#c9ff3f"
        whatsappMessage={WHATSAPP_MESSAGES.deportes}
      />
      <DeportesHero />
      <DeportesFor />
      <DeportesProducts />
      <DeportesFeatures />
      <LandingCTA
        title="¿Listo para profesionalizar tu predio o liga?"
        subtitle="Te mostramos la plataforma en vivo en una demo de 20 minutos."
        whatsappMessage={WHATSAPP_MESSAGES.deportes}
        accentColor="lime"
      />
      <Footer />
      <FloatingWhatsApp message={WHATSAPP_MESSAGES.deportes} />
    </main>
  );
}
