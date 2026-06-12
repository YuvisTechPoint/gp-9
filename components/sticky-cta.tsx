"use client";

import Link from "next/link";
import { NavArrowIcon } from "@/components/ui/nav-arrow-icon";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 z-40 hidden -translate-x-1/2 transition-all duration-500 md:block",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <Link
        href="#dealers"
        className="group cursor-target flex items-center gap-2.5 rounded-full border border-foreground/10 bg-background/90 px-6 py-3 text-sm font-medium text-foreground shadow-lg backdrop-blur-md transition-all hover:bg-foreground hover:text-background"
        data-cursor-target
      >
        <span>Where to Buy GP-9</span>
        <NavArrowIcon size="sm" />
      </Link>
    </div>
  );
}
