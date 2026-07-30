import type { Locale } from "@/i18n/config";

export function getRoutes(lang: Locale) {
  const root = `/${lang}`;

  return {
    ROOT: root,
    HOME: `${root}#home`,
    PORTFOLIO: `${root}#portfolio`,
    ABOUT: `${root}#about`,
    TESTIMONIAL: `${root}#testimonial`,
    CONTACT: `${root}#contact`,
    project: (id: string) => `${root}/portfolio-project/${id}`,
  } as const;
}
