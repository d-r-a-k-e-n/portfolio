import { Button } from "../ui/button";
import Link from "next/link";
import { LINKS_CONSTANTS } from "@/constants/links.constants";
import Image from "next/image";
import { Orbit, SquiggleArrow, Star } from "@/components/decorations";
import { ROUTS_CONSTANTS } from "@/constants/routs.constants";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="mb-10 flex w-full flex-col items-center gap-10 md:mb-15 md:flex-row md:items-center md:justify-between lg:gap-16"
    >
      <div className="hero-fade-in w-full text-center md:text-left md:flex-1">
        <div className="relative mb-6 inline-block md:mb-10">
          <h1 className="relative z-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Hey There, <br /> I&apos;m Ihor
          </h1>
          <Orbit className="hero-orbit absolute -inset-x-6 -inset-y-2 hidden w-[calc(100%+3rem)] sm:block md:-inset-x-10 md:w-[calc(100%+5rem)]" />
          <Star
            size={14}
            className="hero-twinkle pointer-events-none absolute -top-1 right-8 hidden sm:block md:right-16"
          />
          <Star
            size={10}
            className="hero-twinkle pointer-events-none absolute bottom-2 left-2 hidden opacity-80 sm:block"
            style={{ animationDelay: "0.8s" }}
          />
          <Star
            size={12}
            className="hero-twinkle pointer-events-none absolute top-1/2 -right-2 hidden md:block lg:-right-6"
            style={{ animationDelay: "1.4s" }}
          />
        </div>

        <p className="mx-auto mb-6 max-w-146 md:mx-0">
          A Full Stack Developer dedicated to building high-performance web
          applications with immersive 3D experiences and AI-powered features.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start md:gap-6">
          <Link href={LINKS_CONSTANTS.EMAIL}>
            <Button variant="primary">Say Hello</Button>
          </Link>
          <Link href={ROUTS_CONSTANTS.PORTFOLIO}>
            <Button variant="outline">Explore Project</Button>
          </Link>
        </div>
      </div>

      <div
        className="hero-fade-in relative shrink-0"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="hero-float absolute -top-8 -left-6 z-10 sm:-left-10">
          <SquiggleArrow className="h-20 w-14 rotate-[-20deg] opacity-90 sm:h-24 sm:w-16" />
        </div>
        <Star
          size={18}
          className="hero-twinkle pointer-events-none absolute -top-3 -right-2 z-10 sm:-right-4"
        />
        <Star
          size={12}
          className="hero-twinkle pointer-events-none absolute -bottom-2 left-6 z-10 opacity-90"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="hero-float absolute -right-4 bottom-8 z-10 sm:-right-8"
          style={{ animationDelay: "1.2s" }}
        >
          <SquiggleArrow className="h-16 w-12 rotate-150 opacity-80" />
        </div>

        <div className="bg-primary relative flex h-80 w-64 items-end justify-center overflow-hidden rounded-full sm:h-100 sm:w-72 md:h-120 md:w-80 lg:h-160 lg:w-100">
          <Image
            src="/sticker.webp"
            alt="Hero Image"
            width={800}
            height={800}
            className="relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
