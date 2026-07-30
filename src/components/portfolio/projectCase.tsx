"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { type IProject } from "@/types/project.type";
import { getRoutes } from "@/constants/routs.constants";
import { useDictionary } from "@/components/dictionary-provider";

type ProjectCaseProps = {
  project: IProject;
};

export default function ProjectCase({ project }: ProjectCaseProps) {
  const { dict, lang } = useDictionary();
  const routes = getRoutes(lang);
  const t = dict.projectPage;

  return (
    <article className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-8 lg:px-16">
      <Link
        href={routes.PORTFOLIO}
        className="mb-8 inline-block text-sm transition-colors hover:text-secondary"
      >
        ← {t.back}
      </Link>

      <header className="mb-10 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        <div className="min-w-0 flex-1">
          <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mb-6 text-lg text-secondary sm:text-xl">
            {t.myRole} {project.role}
          </p>
          <p className="mb-8 max-w-2xl text-sm sm:text-base">
            {project.description}
          </p>

          <div className="mb-8 flex flex-wrap gap-2 sm:gap-3">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-foreground/20 px-3 py-1 text-sm sm:px-4"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            {project.liveUrl && (
              <Link href={project.liveUrl} target="_blank" rel="noreferrer">
                <Button variant="primary">{t.viewLive}</Button>
              </Link>
            )}
            {project.githubUrl && (
              <Link href={project.githubUrl} target="_blank" rel="noreferrer">
                <Button variant="outline">{t.viewCode}</Button>
              </Link>
            )}
          </div>
        </div>

        <div className="relative w-full shrink-0 overflow-hidden rounded-lg lg:w-105">
          <Image
            src={project.image}
            alt={project.title}
            width={840}
            height={840}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </header>

      <Separator className="mb-10 md:mb-14" />

      <section className="mb-12 grid gap-6 md:mb-16 md:grid-cols-[1fr_2fr] md:gap-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl">{t.overviewTitle}</h2>
        <div>
          <h3 className="mb-4 text-xl text-secondary sm:text-2xl">
            {project.overview.title}
          </h3>
          <p className="mb-6 text-sm sm:text-base">
            {project.overview.description}
          </p>
          <p className="mb-3 font-medium">{t.keyRequirements}</p>
          <ul className="list-disc space-y-2 pl-5 text-sm sm:text-base">
            {project.overview.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-12 md:mb-16">
        <div className="mb-6 md:mb-8">
          <h2 className="mb-2 text-2xl sm:text-3xl md:text-4xl">
            {t.previewTitle}
          </h2>
          <p className="max-w-2xl text-sm text-foreground/70 sm:text-base">
            {t.previewDescription}
          </p>
        </div>
        <div className="overflow-hidden rounded-xl bg-tertiary p-2 sm:p-4 md:rounded-2xl md:p-6">
          <Image
            src={project.previewImage}
            alt={`${project.title} interface preview`}
            width={1000}
            height={1000}
            className="h-auto w-full rounded-lg"
          />
        </div>
      </section>

      <Separator className="mb-10 md:mb-14" />

      <section className="mb-12 grid gap-6 md:mb-16 md:grid-cols-[1fr_2fr] md:gap-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl">{t.featuresTitle}</h2>
        <div>
          <h3 className="mb-4 text-xl text-secondary sm:text-2xl">
            {project.result.title}
          </h3>
          <p className="mb-6 text-sm sm:text-base">
            {project.result.description}
          </p>
          <ul className="list-disc space-y-3 pl-5 text-sm sm:text-base">
            {project.result.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      {project.liveUrl && (
        <>
          <Separator className="mb-10 md:mb-14" />
          <section className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="mb-2 text-2xl sm:text-3xl">{t.seeLiveTitle}</h2>
              <p className="text-sm text-foreground/70 sm:text-base">
                {t.seeLiveDescription}
              </p>
            </div>
            <Link href={project.liveUrl} target="_blank" rel="noreferrer">
              <Button variant="primary">{t.openProject}</Button>
            </Link>
          </section>
        </>
      )}
    </article>
  );
}
