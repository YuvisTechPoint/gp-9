"use client";

import { AnimatedCounter } from "@/components/ui/animated-counter";
import { LazyVideo } from "@/components/ui/lazy-video";
import { Marquee } from "@/components/ui/marquee";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GP9_VIDEOS, ROLAND_GP9 } from "@/lib/gp9-assets";

const specs = [
  { label: "Keys", value: 88, suffix: "" },
  { label: "Speakers", value: 8, suffix: "" },
  { label: "Tones", value: 324, suffix: "" },
  { label: "Weight", value: 169, suffix: " kg" },
];

const marqueeItems = [
  "Piano Reality Sound",
  "Hybrid Grand Keyboard",
  "Piano Reality Projection",
  "Roland Piano App",
  "Concert Hall Presence",
];

export function EditorialSection() {
  return (
    <section className="bg-background">
      <Marquee items={marqueeItems} />

      <div className="grid grid-cols-2 border-t border-border md:grid-cols-4">
        {specs.map((spec, index) => (
          <ScrollReveal
            key={spec.label}
            delay={index * 100}
            variant="up"
            className="border-b border-r border-border p-8 text-center last:border-r-0 md:border-b-0"
          >
            <p className="mb-2 text-xs uppercase tracking-[0.35em] text-muted-foreground">{spec.label}</p>
            <p className="font-display text-4xl font-medium text-foreground">
              <AnimatedCounter value={spec.value} suffix={spec.suffix} />
            </p>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal variant="scale">
        <div className="relative aspect-[16/9] w-full overflow-hidden grain-overlay md:aspect-[21/9]">
          <LazyVideo
            src={GP9_VIDEOS.openLid}
            poster={`${ROLAND_GP9}/gp-9_hero.jpg`}
            ariaLabel="GP-9 grand piano lid opening"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">In motion</p>
            <p className="mt-2 font-display text-2xl font-medium text-white md:text-3xl">
              The lid rises. The room listens.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
