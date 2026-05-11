import { HeroSection } from '@/components/hero-section';
import { BeansCatalog } from '@/components/beans-catalog';
import { RoasterySection } from '@/components/roastery-section';
import { BrewGuide } from '@/components/brew-guide';
import { AboutSection } from '@/components/about-section';
import { CTASection } from '@/components/cta-section';

export default function Home() {
  return (
    <main className="bg-background">
      <HeroSection />
      <BeansCatalog />
      <RoasterySection />
      <BrewGuide />
      <AboutSection />
      <CTASection />
    </main>
  );
}
