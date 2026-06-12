import { Header } from "@/components/header";
import { MobileFixedFooter } from "@/components/mobile-fixed-footer";
import { StickyCta } from "@/components/sticky-cta";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { SpeakersSection } from "@/components/sections/speakers-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { CollectionSection } from "@/components/sections/collection-section";
import { EditorialSection } from "@/components/sections/editorial-section";
import { LineupSection } from "@/components/sections/lineup-section";
import { SpecsSection } from "@/components/sections/specs-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FooterSection } from "@/components/sections/footer-section";
import { Marquee } from "@/components/ui/marquee";

const heroMarquee = [
  "Roland GP-9",
  "Digital Grand Piano",
  "Piano Reality Sound",
  "Modern Elegance",
  "Concert Hall at Home",
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Roland GP-9 Digital Grand Piano",
  brand: { "@type": "Brand", name: "Roland" },
  description:
    "A premium digital grand piano with Piano Reality Modeling, hybrid keyboard, and Piano Reality Projection sound system.",
  image: "https://static.roland.com/products/gp-9/images/gp-9_hero.jpg",
  category: "Digital Piano",
};

export default function Home() {
  return (
    <main className="relative min-h-screen w-full max-w-full overflow-x-clip bg-background pb-[calc(5.5rem+env(safe-area-inset-bottom))] lg:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Header />
      <StickyCta />
      <HeroSection />
      <Marquee items={heroMarquee} speed="slow" />
      <PhilosophySection />
      <FeaturedProductsSection />
      <TechnologySection />
      <SpeakersSection />
      <GallerySection />
      <CollectionSection />
      <EditorialSection />
      <LineupSection />
      <SpecsSection />
      <TestimonialsSection />
      <CtaSection />
      <FooterSection />
      <MobileFixedFooter />
    </main>
  );
}
