"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={cn("max-w-3xl", alignClass, className)}>
      {eyebrow && (
        <ScrollReveal delay={0}>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            {eyebrow}
          </p>
        </ScrollReveal>
      )}
      <ScrollReveal delay={100}>
        <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          {title}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={200}>
          <p
            className={cn(
              "mt-6 max-w-md text-sm leading-relaxed text-muted-foreground",
              align === "center" && "mx-auto"
            )}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
