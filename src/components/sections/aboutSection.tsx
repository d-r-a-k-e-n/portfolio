"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import HistoryItem from "@/components/historyItem";
import { SKILLS_CONSTANTS } from "@/constants/profile.constants";
import Link from "next/link";
import { useDictionary } from "@/components/dictionary-provider";

type Tab = "skills" | "experience" | "education";

export default function AboutSection() {
  const { dict } = useDictionary();
  const [activeTab, setActiveTab] = useState<Tab>("experience");

  const tabs: { id: Tab; label: string }[] = [
    { id: "skills", label: dict.about.tabs.skills },
    { id: "experience", label: dict.about.tabs.experience },
    { id: "education", label: dict.about.tabs.education },
  ];

  return (
    <section
      id="about"
      className="mb-16 w-full bg-tertiary/45 py-10 text-foreground md:mb-30 md:py-12"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-8 lg:px-16">
        <h2 className="mb-2 text-3xl text-light sm:text-4xl md:text-5xl">
          {dict.about.title}
        </h2>
        <p className="mb-6 max-w-140 text-center text-sm text-light sm:text-base">
          {dict.about.description}
        </p>
        <Link
          href="/CV_Ihor_Vnuk_FullStack.pdf"
          download="CV_Ihor_Vnuk_FullStack.pdf"
        >
          <Button variant="primary">{dict.about.downloadCv}</Button>
        </Link>

        <div className="mt-10 flex w-full flex-col md:mt-16">
          <div className="grid w-full grid-cols-3">
            {tabs.map((tab) => (
              <Button
                variant="underline"
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  activeTab === tab.id
                    ? "border-secondary text-secondary"
                    : "border-transparent text-light hover:text-secondary/80"
                )}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          <div className="mt-8 w-full min-w-0 md:mt-10">
            {activeTab === "skills" && (
              <ul className="m-0 grid list-none grid-cols-3 gap-5 p-0 sm:grid-cols-4 sm:gap-6 md:grid-cols-5 lg:grid-cols-6 lg:gap-7">
                {SKILLS_CONSTANTS.map(({ label, icon: Icon }, index) => (
                  <li
                    key={`${label}-${index}`}
                    title={label}
                    className="flex min-w-0 flex-col items-center justify-center gap-2 text-center text-light"
                  >
                    {Icon ? (
                      <>
                        <Icon
                          aria-hidden
                          className="size-8 shrink-0 sm:size-9 md:size-10"
                        />
                        <span className="max-w-full truncate text-xs font-medium sm:text-sm">
                          {label}
                        </span>
                      </>
                    ) : (
                      <span className="font-[Lora,serif] text-sm font-medium leading-tight sm:text-base md:text-lg">
                        {label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            )}

            {activeTab === "experience" &&
              dict.experience.map(
                ({ period, title, role, description }, index) => (
                  <div key={`${title}-${index}`} className="min-w-0">
                    {index > 0 && <Separator className="my-6 text-light" />}
                    <HistoryItem
                      period={period}
                      title={title}
                      role={role}
                      description={description}
                    />
                  </div>
                )
              )}

            {activeTab === "education" &&
              dict.education.map(
                ({ period, title, role, description }, index) => (
                  <div key={`${title}-${index}`} className="min-w-0">
                    {index > 0 && <Separator className="my-6 text-light" />}
                    <HistoryItem
                      period={period}
                      title={title}
                      role={role}
                      description={description}
                    />
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
