import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_PROJECTS } from "@/constants/portfolio.constants";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="mb-16 w-full md:mb-30">
      <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl">Portfolio</h2>
      <div className="flex w-full flex-row gap-4 overflow-x-auto pb-2 sm:gap-6">
        {PORTFOLIO_PROJECTS.map((project) => (
          <Link
            href={`/portfolio-project/${project.id}`}
            key={project.id}
            className="shrink-0"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={600}
              className="mb-4 h-auto w-88 rounded-lg sm:w-80 md:w-[400px] lg:w-[500px]"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
