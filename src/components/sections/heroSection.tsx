import { Button } from "../ui/button";
import Link from "next/link";
import { LINKS_CONSTANTS } from "@/constants/links.constants";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="mb-15 flex flex-row items-center justify-between w-full gap-10"
    >
      <div>
        <h1 className="text-8xl mb-10">
          Hey There, <br /> I’m Ihor
        </h1>
        <p className="max-w-146 mb-6">
          A tristique nulla faucibus in quam metus, eget. Id eleifend arcu
          consectetur nunc, quam adipiscing.A tristique nulla faucibus in quam
          metus, eget. Id eleifend arcu consectetur nunc.
        </p>
        <div className="flex gap-6">
          <Link href={LINKS_CONSTANTS.EMAIL}>
            <Button variant="primary">Say Hello</Button>
          </Link>
          <Button variant="outline">Explore Project</Button>
        </div>
      </div>
      <div className="bg-primary rounded-full w-100 h-160 flex items-end justify-center overflow-hidden">
        {/* <Image src="/sticker.webp" alt="Hero Image" width={800} height={800} /> */}
      </div>
    </section>
  );
}
