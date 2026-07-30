"use client";

import { LINKS_CONSTANTS } from "@/constants/links.constants";
import Link from "next/link";
import { useDictionary } from "@/components/dictionary-provider";

export default function ContactSection() {
  const { dict } = useDictionary();

  return (
    <section id="contact" className="w-full">
      <div className="mb-8 flex flex-col items-center gap-3 text-center sm:mb-12 sm:flex-row sm:justify-between sm:text-left">
        <h3 className="text-xl sm:text-2xl">{dict.contact.title}</h3>
        <Link
          href={LINKS_CONSTANTS.EMAIL}
          className="hover:text-secondary transition-colors"
        >
          {dict.contact.sendMessage}
        </Link>
      </div>
      <h2 className="mx-auto mb-12 max-w-4xl text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        {dict.contact.headlineBefore}{" "}
        <span className="text-secondary">{dict.contact.headlineAccent}</span>
      </h2>
    </section>
  );
}
