"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LazyVideo } from "@/components/ui/lazy-video";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { GP9_VIDEOS, ROLAND_GP9, ROLAND_LINEUP } from "@/lib/gp9-assets";
import Image from "next/image";

export function Gp9mSection() {
  return (
    <section id="gp9m" className="relative overflow-hidden bg-foreground text-background">
      <SectionHeading
        label="GP-9M"
        title="Moving keys. Living performance."
        subtitle="The GP-9M extends the GP-9 with self-playing keys for home gatherings, restaurants, hotels, and venues — watch the keys come alive."
        className="py-20 md:py-28 [&_h2]:text-background [&_p]:text-background/60"
      />

      <div className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal variant="scale">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <LazyVideo
                src={GP9_VIDEOS.movingKeys}
                poster={`${ROLAND_GP9}/gp-9_more_info_7.jpg`}
                ariaLabel="GP-9M moving keys demonstration"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/50">GP Series</p>
                <p className="mt-2 font-display text-xl font-medium text-white md:text-2xl">
                  Keys that play themselves.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={100}>
            <div className="space-y-6">
              <div className="relative aspect-[21/9] overflow-hidden rounded-xl border border-background/10">
                <Image
                  src={`${ROLAND_LINEUP}/gp_series_gp-9m_lineup.jpg`}
                  alt="Roland GP-9M digital grand piano"
                  fill
                  className="object-cover"
                />
              </div>

              <ul className="space-y-3 text-sm leading-relaxed text-background/75">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-background/50" />
                  Moving key function for entertaining at home and commercial venues
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-background/50" />
                  Extensive onboard song library and USB MIDI playback
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-background/50" />
                  Professional audio outputs and microphone input for live use
                </li>
              </ul>

              <Link
                href="https://www.roland.com/global/products/gp-9m/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex cursor-target items-center gap-2 rounded-full border border-background/30 px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-background hover:text-foreground"
                data-cursor-target
              >
                Explore GP-9M
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
