"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { NavArrowIcon } from "@/components/ui/nav-arrow-icon";

export function CtaSection() {
  return (
    <section id="dealers" className="w-full scroll-mt-24 border-t border-border bg-foreground text-background">
      <div className="px-4 py-16 sm:px-6 md:px-10 md:py-24 lg:px-16">
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
                className="group inline-flex cursor-target items-center gap-2.5 rounded-full bg-background px-8 py-3.5 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
                data-cursor-target
              >
                <span>Find a dealer</span>
                <NavArrowIcon size="sm" />
              </Link>
              <Link
                href="https://www.roland.com/global/products/gp-9/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex cursor-target items-center gap-2.5 rounded-full border border-background/30 px-8 py-3.5 text-sm font-medium text-background transition-colors hover:bg-background/10"
                data-cursor-target
              >
                <span>Official product page</span>
                <NavArrowIcon
                  size="sm"
                  className="border-background/30 bg-background/10 text-background group-hover:bg-background group-hover:text-foreground"
                />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
