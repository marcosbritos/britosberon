import { 
  HomeMarquee, 
  HomeNav, 
  HomeHero, 
  HomeIndex, 
  HomeProcess, 
  HomeManifesto, 
  HomeIncluye, 
  HomeFaq, 
  HomeCTA, 
  HomeFooter 
} from "@/components/home/HomeComponents";

export default function HomePage() {
  return (
    <main className="relative w-full bg-bone text-ink overflow-hidden bb">
      <HomeMarquee />
      <HomeNav />
      <HomeHero />
      <HomeIndex />
      <HomeProcess />
      <HomeManifesto />
      <HomeIncluye />
      <HomeFaq />
      <HomeCTA />
      <HomeFooter />
    </main>
  );
}
