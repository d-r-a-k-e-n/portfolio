import { Button } from "../ui/button";
import Link from "next/link";
import { LINKS_CONSTANTS } from "@/constants/links.constants";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="mb-10 flex w-full flex-col items-center gap-10 md:mb-15 md:flex-row md:items-center md:justify-between lg:gap-16"
    >
      <div className="w-full text-center md:text-left md:flex-1">
        <h1 className="mb-6 text-5xl sm:text-6xl md:mb-10 md:text-7xl lg:text-8xl">
          Hey There, <br /> I&apos;m Ihor
        </h1>
        <p className="mx-auto mb-6 max-w-146 md:mx-0">
          A tristique nulla faucibus in quam metus, eget. Id eleifend arcu
          consectetur nunc, quam adipiscing.A tristique nulla faucibus in quam
          metus, eget. Id eleifend arcu consectetur nunc.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start md:gap-6">
          <Link href={LINKS_CONSTANTS.EMAIL}>
            <Button variant="primary">Say Hello</Button>
          </Link>
          <Button variant="outline">Explore Project</Button>
        </div>
      </div>
      <div className="bg-primary flex h-80 w-64 shrink-0 items-end justify-center overflow-hidden rounded-full sm:h-100 sm:w-72 md:h-120 md:w-80 lg:h-160 lg:w-100">
        <Image src="/sticker.webp" alt="Hero Image" width={800} height={800} />
      </div>
    </section>
  );
}
