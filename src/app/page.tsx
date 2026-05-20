import { 
  HomeMarquee, 
  HomeNav, 
  HomeHero, 
  HomeProcess, 
  HomeSoluciones,
  HomeManifesto, 
  HomeIncluye, 
  HomeQuienes,
  HomeCTA, 
  HomeFooter 
} from "@/components/home/HomeComponents";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function HomePage() {
  return (
    <main className="relative w-full bg-bone text-ink overflow-hidden bb">
      <HomeMarquee />
      <HomeNav />
      <HomeHero />
      <HomeProcess />
      <HomeSoluciones />
      <HomeManifesto />
      <HomeIncluye />
      <HomeQuienes />
      <HomeCTA />
      <HomeFooter />
      <FloatingWhatsApp message={WHATSAPP_MESSAGES.generic} />
    </main>
  );
}
