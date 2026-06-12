"use client";

import { ProductSpinner } from "@/components/gp9/product-spinner";
import { PianoViewer } from "@/components/gp9/piano-viewer-canvas";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border bg-background">
      <SectionHeading
        label="Experience"
        title="Explore every dimension."
        subtitle="Drag the 360° spinner to orbit the GP-9, then step into the interactive 3D explorer — click the lid, keys, and speakers."
        className="py-20 md:py-28 lg:pb-12"
      />

      <div className="grid grid-cols-1 gap-8 px-6 pb-24 md:grid-cols-2 md:px-12 lg:gap-12 lg:px-20">
        <ScrollReveal variant="left">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
              360° Product Spinner
            </p>
            <ProductSpinner />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Eight angles from Roland&apos;s official GP-9 gallery — drag horizontally to inspect
              the cabinet, lid positions, and speaker array.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="right" delay={120}>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Interactive 3D Piano
            </p>
            <PianoViewer />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
