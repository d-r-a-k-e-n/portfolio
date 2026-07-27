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

const tabs = ["Skills", "Experience", "Education"] as const;
type Tab = (typeof tabs)[number];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Experience");

  return (
    <section
      id="about"
      className="bg-tertiary w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex flex-col items-center justify-center py-12 text-foreground mb-30"
    >
      <h2 className="text-5xl mb-2">About</h2>
      <p className="max-w-130 text-center mb-6">
        A tristique nulla faucibus in quam metus, eget. Id eleifend arcu
        consectmetus, eget. Id eleifend arcu consectetur nunc.
      </p>
      <Button variant="primary">Download CV</Button>

      <div className="flex flex-col w-full max-w-7xl mt-16 px-16">
        <div className="grid grid-cols-3 w-full items-center justify-center">
          {tabs.map((tab) => (
            <Button
              variant="underline"
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                activeTab === tab
                  ? "text-secondary border-secondary text-center"
                  : "text-foreground border-transparent hover:text-secondary/80 text-center"
              )}
            >
              {tab}
            </Button>
          ))}
        </div>

        <div className="w-full mt-10">
          {activeTab === "Skills" && (
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-10 gap-y-8 list-none p-0 m-0">
              {SKILLS_CONSTANTS.map((skill) => (
                <li
                  key={skill}
                  className="text-2xl font-[Lora,serif] font-medium"
                >
                  {skill}
                </li>
              ))}
            </ul>
          )}

          {activeTab === "Experience" &&
            EXPERIENCE_CONSTANTS.map(
              ({ period, title, role, description }, index) => (
                <div key={`${title}-${index}`}>
                  {index > 0 && <Separator className="my-6" />}
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
                <div key={`${title}-${index}`}>
                  {index > 0 && <Separator className="my-6" />}
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
    </section>
  );
}
