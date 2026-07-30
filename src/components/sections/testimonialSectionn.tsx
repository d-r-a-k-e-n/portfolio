"use client";

import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDictionary } from "@/components/dictionary-provider";

export default function TestimonialSection() {
  const { dict } = useDictionary();
  const testimonials = dict.testimonials.items;
  const [activeIndex, setActiveIndex] = useState(0);
  const total = testimonials.length;
  const active = testimonials[activeIndex];

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % total);

  return (
    <section
      id="testimonial"
      className="mx-auto mb-16 w-full max-w-7xl px-4 sm:px-8 md:mb-30 lg:px-16"
    >
      <h2 className="mb-10 text-center text-3xl text-foreground sm:text-4xl md:mb-14 md:text-5xl">
        {dict.testimonials.title}
      </h2>

      <div className="mb-8 flex flex-col items-center gap-10 md:mb-10 md:flex-row md:items-center md:justify-center md:gap-14 lg:gap-20">
        <div className="relative mb-6 h-72 w-56 shrink-0 sm:mb-8 sm:h-80 sm:w-64 md:mb-0 md:h-96 md:w-72">
          {testimonials.map(({ id, color }, index) => {
            const stackOffset = (index - activeIndex + total) % total;
            const isActive = stackOffset === 0;

            return (
              <div
                key={id}
                className={cn(
                  "absolute inset-0 transition-all duration-500 ease-out",
                  isActive ? "opacity-100" : "opacity-90"
                )}
                style={{
                  zIndex: total - stackOffset,
                  transform: `translateY(${stackOffset * 14}px) translateX(${stackOffset * 10}px) scale(${1 - stackOffset * 0.04})`,
                }}
              >
                <div
                  className={cn(
                    "relative h-full w-full overflow-hidden rounded-2xl shadow-lg",
                    color
                  )}
                />
              </div>
            );
          })}
        </div>

        <div className="relative w-full max-w-xl text-center md:text-left">
          <p className="relative mb-8 text-sm leading-relaxed text-foreground sm:text-base md:mb-10 md:text-lg">
            {active.quote}
          </p>
          <p className="mb-1 text-lg font-semibold text-foreground sm:text-xl">
            {active.name}
          </p>
          <p className="text-xs text-foreground/70 sm:text-sm">{active.role}</p>
        </div>
      </div>

      <div className="flex flex-row justify-center gap-4">
        <Button
          variant="outline"
          aria-label={dict.testimonials.prev}
          onClick={goPrev}
          className="px-4 sm:px-6"
        >
          <FiArrowLeft className="size-4" />
        </Button>
        <Button
          variant="outline"
          aria-label={dict.testimonials.next}
          onClick={goNext}
          className="px-4 sm:px-6"
        >
          <FiArrowRight className="size-4" />
        </Button>
      </div>
    </section>
  );
}
