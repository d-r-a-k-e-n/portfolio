import type { Locale } from "@/i18n/config";
import { defaultLocale, isLocale } from "@/i18n/config";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  uk: () => import("@/dictionaries/uk.json").then((module) => module.default),
};

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["en"]>>;

export async function getDictionary(locale: string): Promise<Dictionary> {
  const lang = isLocale(locale) ? locale : defaultLocale;
  return dictionaries[lang]();
}

export type { Locale };
