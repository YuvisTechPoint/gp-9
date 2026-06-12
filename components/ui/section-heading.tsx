"use client";

import { SectionHeader } from "@/components/section-header";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <SectionHeader
      eyebrow={label}
      title={title}
      subtitle={subtitle}
      className={cn("px-6 md:px-12 lg:px-20", className)}
      align={align}
    />
  );
}
