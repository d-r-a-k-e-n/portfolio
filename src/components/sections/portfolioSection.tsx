import Image from "next/image";
import Link from "next/link";

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "Tennis Company",
      description:
        "A tristique nulla faucibus in quam metus, eget. Id eleifend arcuA tristique nulla faucibus in quam metus",
      image: "/scp.png",
    },
    {
      id: 2,
      title: "Tennis Company",
      description:
        "A tristique nulla faucibus in quam metus, eget. Id eleifend arcuA tristique nulla faucibus in quam metus",
      image: "/scp.png",
    },
    {
      id: 3,
      title: "Tennis Company",
      description:
        "A tristique nulla faucibus in quam metus, eget. Id eleifend arcuA tristique nulla faucibus in quam metus",
      image: "/scp.png",
    },
  ];

  return (
    <section id="portfolio" className="mb-30">
      <h2 className="text-5xl mb-6">Portfolio</h2>
      <div className="flex flex-row gap-6 overflow-x-auto w-full">
        {projects.map((project) => (
          <Link href={`/portfolio-project/${project.id}`} key={project.id}>
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={600}
              className="rounded-lg mb-4"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
