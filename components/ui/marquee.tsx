"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  speed?: "slow" | "normal";
  className?: string;
}

export function Marquee({ items, speed = "normal", className }: MarqueeProps) {
  const track = [...items, ...items];

  return (
    <div
      className={cn("overflow-hidden border-y border-border bg-background py-4", className)}
      aria-hidden
    >
      <div
        className={cn(
          "marquee-track flex w-max gap-10 whitespace-nowrap px-6",
          speed === "slow" && "marquee-track-slow"
        )}
      >
        {track.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
