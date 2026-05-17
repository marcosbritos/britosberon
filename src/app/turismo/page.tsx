import type { Metadata } from "next";
import { HomeNav, HomeFooter } from "@/components/home/HomeComponents";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { LandingMarquee } from "@/components/landings/LandingMarquee";
import { TurismoHero } from "@/components/landings/TurismoHero";
import { TurismoFor } from "@/components/landings/TurismoFor";
import { TurismoFeatures } from "@/components/landings/TurismoFeatures";
import { LandingCTA } from "@/components/landings/LandingCTA";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "B&B Turismo | Webs y reservas online para alojamientos en Argentina",
  description:
    "Estudio digital especializado en presencia online para campings, cabañas, hosterías, posadas y refugios. Web con galería, reservas con seña vía Mercado Pago, Google Maps optimizado y reseñas automáticas. Patagonia y todo el país.",
  keywords: [
    "web para camping",
    "sistema de reservas alojamiento",
    "web hostería",
    "web posada rural",
    "marketing turístico Argentina",
    "Google Maps camping",
    "reservas online cabañas",
    "web glamping",
    "presencia digital alojamiento",
    "web refugio montaña",
  ],
  openGraph: {
    title: "B&B Turismo | Que el viajero te encuentre primero",
    description:
      "Web, reservas online, Google Maps y reseñas automáticas para campings, hosterías, cabañas y posadas.",
  },
};

const turismoMarqueeItems = [
  "B&B TURISMO",
  "QUE EL VIAJERO TE ENCUENTRE PRIMERO",
  "CAMPINGS · HOSTERÍAS · CABAÑAS · POSADAS · REFUGIOS",
  "WEB CON GALERÍA · RESERVAS CON SEÑA · GOOGLE MAPS",
  "RESEÑAS AUTOMÁTICAS · MULTI-IDIOMA",
  "PATAGONIA · ARGENTINA · TODO EL PAÍS",
];

export default function TurismoPage() {
  return (
    <main className="bg-bone min-h-screen">
      <LandingMarquee items={turismoMarqueeItems} />
      <HomeNav />
      <TurismoHero />
      <TurismoFor />
      <TurismoFeatures />
      <LandingCTA
        title="¿Tu alojamiento está en internet?"
        subtitle="Si las reseñas son buenas pero las reservas no llegan, el problema es que nadie te encuentra. Charlemos."
        whatsappMessage={WHATSAPP_MESSAGES.turismo}
        accentColor="teal"
      />
      <HomeFooter />
      <FloatingWhatsApp message={WHATSAPP_MESSAGES.turismo} />
    </main>
  );
}
