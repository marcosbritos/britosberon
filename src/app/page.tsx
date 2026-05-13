import { HomeHero } from "@/components/home/HomeHero";
import { HomePaths } from "@/components/home/HomePaths";
import { HomeProcess } from "@/components/home/HomeProcess";
import { HomeIncluded } from "@/components/home/HomeIncluded";
import { HomeAbout } from "@/components/home/HomeAbout";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function HomePage() {
  return (
    <main className="bg-ink-900 min-h-screen">
      <Header whatsappMessage={WHATSAPP_MESSAGES.generic} />
      <HomeHero />
      <HomePaths />
      <HomeProcess />
      <HomeIncluded />
      <HomeAbout />
      <HomeFAQ />
      <Footer />
      <FloatingWhatsApp message={WHATSAPP_MESSAGES.generic} />
    </main>
  );
}
