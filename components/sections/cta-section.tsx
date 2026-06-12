"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function CtaSection() {
  return (
    <section id="dealers" className="border-t border-border bg-foreground text-background">
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <ScrollReveal variant="blur">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-background/50">Where to buy</p>
            <h2 className="mt-6 font-display text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              Experience GP-9 in person.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-background/70 md:text-base">
              Find an authorized Roland dealer near you to play the GP-9, compare finishes,
              and hear Piano Reality Projection in your own space.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://www.roland.com/global/dealers/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target rounded-full bg-background px-8 py-3.5 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
                data-cursor-target
              >
                Find a dealer
              </Link>
              <Link
                href="https://www.roland.com/global/products/gp-9/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target rounded-full border border-background/30 px-8 py-3.5 text-sm font-medium text-background transition-colors hover:bg-background/10"
                data-cursor-target
              >
                Official product page
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
