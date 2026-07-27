import { notFound } from "next/navigation";
import ProjectCase from "@/components/portfolio/projectCase";
import {
  getProjectById,
  PORTFOLIO_PROJECTS,
} from "@/constants/portfolio.constants";

type PortfolioProjectPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: PortfolioProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function PortfolioProjectPage({
  params,
}: PortfolioProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return <ProjectCase project={project} />;
}
