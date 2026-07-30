"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import HistoryItem from "@/components/historyItem";
import {
  SKILLS_CONSTANTS,
  EXPERIENCE_CONSTANTS,
  EDUCATION_CONSTANTS,
} from "@/constants/profile.constants";
import Link from "next/link";

const tabs = ["Skills", "Experience", "Education"] as const;
type Tab = (typeof tabs)[number];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Experience");

  return (
    <section
      id="about"
      className="mb-16 w-full bg-tertiary/45 py-10 text-foreground md:mb-30 md:py-12"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-8 lg:px-16">
        <h2 className="mb-2 text-3xl sm:text-4xl md:text-5xl text-light">
          About
        </h2>
        <p className="mb-6 max-w-140 text-center text-sm sm:text-base text-light">
          I’m a Full Stack Developer building scalable digital products. I
          bridge the gap between robust backend logic and high-performance
          frontends, with a current focus on integrating AI and 3D web (R3F)
          into next-gen user experiences.
        </p>
        <Link
          href="/CV_Ihor_Vnuk_FullStack.pdf"
          download="CV_Ihor_Vnuk_FullStack.pdf"
        >
          <Button variant="primary">Download CV</Button>
        </Link>

        <div className="mt-10 flex w-full flex-col md:mt-16">
          <div className="grid w-full grid-cols-3">
            {tabs.map((tab) => (
              <Button
                variant="underline"
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  activeTab === tab
                    ? "border-secondary text-secondary"
                    : "border-transparent text-light hover:text-secondary/80"
                )}
              >
                {tab}
              </Button>
            ))}
          </div>

          <div className="mt-8 w-full min-w-0 md:mt-10">
            {activeTab === "Skills" && (
              <ul className="m-0 grid list-none grid-cols-3 gap-5 p-0 sm:grid-cols-4 sm:gap-6 md:grid-cols-5 lg:grid-cols-6 lg:gap-7">
                {SKILLS_CONSTANTS.map(({ label, icon: Icon }, index) => (
                  <li
                    key={`${label}-${Icon}-${index}`}
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

            {activeTab === "Experience" &&
              EXPERIENCE_CONSTANTS.map(
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

            {activeTab === "Education" &&
              EDUCATION_CONSTANTS.map(
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
