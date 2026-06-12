"use client";

import Link from "next/link";
import { NavArrowIcon } from "@/components/ui/nav-arrow-icon";
import { cn } from "@/lib/utils";

const footerLinks = {
  explore: [
    { label: "About", href: "#about" },
    { label: "Models", href: "#products" },
    { label: "Technology", href: "#technology" },
    { label: "Gallery", href: "#gallery" },
    { label: "Series", href: "#series" },
    { label: "Specs", href: "#specs" },
  ],
  about: [
    { label: "Specifications", href: "#specs" },
    { label: "Details", href: "https://www.roland.com/global/products/gp-9/", external: true },
    { label: "Where to Buy", href: "#dealers" },
  ],
  service: [
    { label: "Owner's Manual", href: "https://www.roland.com/global/support/manuals/", external: true },
    { label: "Support", href: "https://www.roland.com/global/support/", external: true },
    { label: "Quick Start", href: "https://www.roland.com/global/products/gp-9/", external: true },
    { label: "Roland Cloud", href: "https://www.roland.com/global/promos/roland_cloud/", external: true },
  ],
};

function FooterLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "footer-link-hover group flex items-center justify-between gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground",
        external && "pr-1"
      )}
    >
      <span>{label}</span>
      <NavArrowIcon size="sm" />
    </Link>
  );
}

export function FooterSection() {
  return (
    <footer className="w-full bg-background">
      <div className="border-t border-border px-4 py-8 sm:px-6 sm:py-12 md:px-10 md:py-16 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-5 gap-y-8 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-12">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="text-lg font-medium text-foreground">
              Grand Piano
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Roland GP-9 digital grand pianos. Modern elegance, authentic touch, and immersive sound for the home.
            </p>
          </div>

          <div className="min-w-0 self-start">
            <h4 className="mb-3 text-sm font-medium text-foreground">Explore</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          <div className="flex min-w-0 flex-col gap-8 sm:gap-10 lg:contents">
            <div className="min-w-0">
              <h4 className="mb-3 text-sm font-medium text-foreground">About</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {footerLinks.about.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href} label={link.label} external={link.external} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              <h4 className="mb-3 text-sm font-medium text-foreground">Service</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {footerLinks.service.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href} label={link.label} external={link.external} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border px-4 py-5 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-xs text-muted-foreground sm:text-left">
            © {new Date().getFullYear()} Roland. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <Link
              href="https://www.instagram.com/rolandglobal/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <span>Instagram</span>
              <NavArrowIcon size="sm" className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.youtube.com/user/RolandChannel"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <span>YouTube</span>
              <NavArrowIcon size="sm" className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.roland.com/global/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <span>Roland</span>
              <NavArrowIcon size="sm" className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
