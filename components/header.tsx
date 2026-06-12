"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Models" },
  { href: "#technology", label: "Technology" },
  { href: "#gallery", label: "Gallery" },
  { href: "#series", label: "Series" },
  { href: "#specs", label: "Specs" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const linkClass = (scrolled: boolean) =>
    cn(
      "nav-link-underline whitespace-nowrap text-xs transition-colors lg:text-sm",
      scrolled
        ? "text-muted-foreground hover:text-foreground"
        : "text-white/70 hover:text-white"
    );

  return (
    <header
      className={cn(
        "fixed top-3 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 transition-all duration-300 sm:top-4 sm:w-[calc(100%-2rem)]",
        isScrolled
          ? "rounded-full bg-background/85 shadow-sm backdrop-blur-md"
          : "bg-transparent",
        isMenuOpen && "rounded-2xl bg-background/95 backdrop-blur-md sm:rounded-3xl"
      )}
      style={{
        boxShadow: isScrolled
          ? "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px"
          : "none",
      }}
    >
      <div className="flex items-center justify-between gap-3 px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5">
        <Link
          href="#"
          className={cn(
            "shrink-0 text-sm font-medium tracking-tight transition-colors duration-300 sm:text-base lg:text-lg",
            isScrolled || isMenuOpen ? "text-foreground" : "text-white"
          )}
        >
          Grand Piano
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-4 xl:gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(isScrolled)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Link
            href="#dealers"
            className={cn(
              "inline-flex rounded-full px-4 py-2 text-xs font-medium transition-all lg:text-sm",
              isScrolled
                ? "bg-foreground text-background hover:opacity-80"
                : "bg-white text-foreground hover:bg-white/90"
            )}
          >
            Where to Buy
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={cn(
            "shrink-0 transition-colors lg:hidden",
            isScrolled || isMenuOpen ? "text-foreground" : "text-white"
          )}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border px-4 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-base text-foreground transition-colors hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#dealers"
              className="mt-3 rounded-full bg-foreground px-5 py-3 text-center text-sm font-medium text-background"
              onClick={() => setIsMenuOpen(false)}
            >
              Where to Buy
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
