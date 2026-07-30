"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dot, Star } from "@/components/decorations";
import Image from "next/image";
import { useDictionary } from "@/components/dictionary-provider";
import { getRoutes } from "@/constants/routs.constants";
import { locales, type Locale } from "@/i18n/config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { dict, lang } = useDictionary();
  const pathname = usePathname();
  const routes = getRoutes(lang);

  const navLinks = [
    { href: routes.HOME, label: dict.nav.home },
    { href: routes.PORTFOLIO, label: dict.nav.portfolio },
    { href: routes.ABOUT, label: dict.nav.about },
    { href: routes.TESTIMONIAL, label: dict.nav.testimonial },
    { href: routes.CONTACT, label: dict.nav.contact },
  ];

  const switchLocalePath = (nextLocale: Locale) => {
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    return segments.join("/") || `/${nextLocale}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-tertiary/45 px-4 py-4 backdrop-blur-md sm:px-8 lg:px-16 text-light">
      <div className="relative mx-auto flex max-w-7xl flex-row items-center justify-between gap-4">
        <Star
          size={10}
          className="pointer-events-none absolute -left-1 top-0 opacity-80 sm:-left-3"
        />
        <Dot className="pointer-events-none absolute -bottom-1 left-8 hidden sm:block" />

        <Link href={routes.ROOT} className="shrink-0 font-medium">
          <Image src="/logo.png" alt="Logo" width={30} height={30} />
        </Link>

        <nav className="relative hidden flex-row items-center gap-6 md:flex lg:gap-10">
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
          <div className="flex items-center gap-2 text-sm font-medium">
            {locales.map((locale, index) => (
              <span key={locale} className="flex items-center gap-2">
                {index > 0 && <span className="text-light/40">/</span>}
                <Link
                  href={switchLocalePath(locale)}
                  className={cn(
                    "uppercase transition-colors hover:text-secondary",
                    lang === locale ? "text-secondary" : "text-light/70"
                  )}
                >
                  {locale}
                </Link>
              </span>
            ))}
          </div>
          <Star
            size={12}
            className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 opacity-90"
          />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <div className="flex items-center gap-2 text-sm font-medium">
            {locales.map((locale, index) => (
              <span key={locale} className="flex items-center gap-2">
                {index > 0 && <span className="text-light/40">/</span>}
                <Link
                  href={switchLocalePath(locale)}
                  className={cn(
                    "uppercase transition-colors hover:text-secondary",
                    lang === locale ? "text-secondary" : "text-light/70"
                  )}
                >
                  {locale}
                </Link>
              </span>
            ))}
          </div>
          <Button
            variant="ghost"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="relative flex h-10 w-10 items-center justify-center"
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
