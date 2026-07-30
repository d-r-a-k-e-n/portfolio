import { notFound } from "next/navigation";
import ProjectCase from "@/components/portfolio/projectCase";
import { PORTFOLIO_PROJECTS } from "@/constants/portfolio.constants";
import { getDictionary } from "@/lib/get-dictionary";
import { getLocalizedProject } from "@/lib/get-localized-project";
import { isLocale, locales } from "@/i18n/config";

type PortfolioProjectPageProps = {
  params: Promise<{ lang: string; id: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    PORTFOLIO_PROJECTS.map((project) => ({ lang, id: project.id }))
  );
}

export async function generateMetadata({ params }: PortfolioProjectPageProps) {
  const { lang, id } = await params;
  const dict = await getDictionary(lang);
  const project = getLocalizedProject(id, dict);

  if (!project) {
    return { title: dict.projectPage.notFound };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function PortfolioProjectPage({
  params,
}: PortfolioProjectPageProps) {
  const { lang, id } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);
  const project = getLocalizedProject(id, dict);

  if (!project) {
    notFound();
  }

  return <ProjectCase project={project} />;
}
