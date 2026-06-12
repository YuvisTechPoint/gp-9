import { Header } from "@/components/header";
import { StickyCta } from "@/components/sticky-cta";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { SpeakersSection } from "@/components/sections/speakers-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { CollectionSection } from "@/components/sections/collection-section";
import { EditorialSection } from "@/components/sections/editorial-section";
import { LineupSection } from "@/components/sections/lineup-section";
import { Gp9mSection } from "@/components/sections/gp9m-section";
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
    <main className="min-h-screen bg-background">
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
      <ExperienceSection />
      <GallerySection />
      <CollectionSection />
      <EditorialSection />
      <LineupSection />
      <Gp9mSection />
      <SpecsSection />
      <TestimonialsSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
