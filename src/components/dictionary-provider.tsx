"use client";

import { createContext, useContext } from "react";
import type { Dictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/i18n/config";

type DictionaryContextValue = {
  dict: Dictionary;
  lang: Locale;
};

const DictionaryContext = createContext<DictionaryContextValue | null>(null);

export function DictionaryProvider({
  dict,
  lang,
  children,
}: DictionaryContextValue & { children: React.ReactNode }) {
  return (
    <DictionaryContext.Provider value={{ dict, lang }}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error("useDictionary must be used within DictionaryProvider");
  }
  return context;
}
