"use client";

import { useState } from "react";
import Link from "next/link";
import { ROUTS_CONSTANTS } from "@/constants/routs.constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dot, Star } from "@/components/decorations";
import Image from "next/image";

const navLinks = [
  { href: ROUTS_CONSTANTS.HOME, label: "Home" },
  { href: ROUTS_CONSTANTS.PORTFOLIO, label: "Portfolio" },
  { href: ROUTS_CONSTANTS.ABOUT, label: "About" },
  { href: ROUTS_CONSTANTS.TESTIMONIAL, label: "Testimonial" },
  { href: ROUTS_CONSTANTS.CONTACT, label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-tertiary/45 px-4 py-4 backdrop-blur-md sm:px-8 lg:px-16 text-light">
      <div className="relative mx-auto flex max-w-7xl flex-row items-center justify-between gap-4">
        <Star
          size={10}
          className="pointer-events-none absolute -left-1 top-0 opacity-80 sm:-left-3"
        />
        <Dot className="pointer-events-none absolute -bottom-1 left-8 hidden sm:block" />

        <Link href={ROUTS_CONSTANTS.ROOT} className="shrink-0 font-medium">
          <Image src="/logo.png" alt="Logo" width={30} height={30} />
        </Link>

        <nav className="relative hidden flex-row items-center gap-8 md:flex lg:gap-10">
          <Star
            size={8}
            className="pointer-events-none absolute -top-3 left-1/3 opacity-70"
          />
          <Dot className="pointer-events-none absolute -bottom-2 right-8" />
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-secondary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Star
            size={12}
            className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 opacity-90"
          />
        </nav>

        <Button
          variant="ghost"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="relative flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span
            className={cn(
              "absolute h-0.5 w-5 bg-foreground transition-all duration-200",
              open ? "rotate-45" : "-translate-y-1.5"
            )}
          />
          <span
            className={cn(
              "absolute h-0.5 w-5 bg-foreground transition-all duration-200",
              open ? "opacity-0" : "opacity-100"
            )}
          />
          <span
            className={cn(
              "absolute h-0.5 w-5 bg-foreground transition-all duration-200",
              open ? "-rotate-45" : "translate-y-1.5"
            )}
          />
        </Button>
      </div>

      <nav
        className={cn(
          "flex flex-col gap-4 overflow-hidden transition-all duration-200 md:hidden",
          open ? "mt-4 max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setOpen(false)}
            className="py-1 text-lg hover:text-secondary transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
