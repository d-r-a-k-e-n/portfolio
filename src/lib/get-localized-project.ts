import type { Dictionary } from "@/lib/get-dictionary";
import {
  getProjectById,
  PORTFOLIO_PROJECTS,
} from "@/constants/portfolio.constants";
import type { IProject } from "@/types/project.type";

type ProjectId = keyof Dictionary["projects"];

export function getLocalizedProject(
  id: string,
  dict: Dictionary
): IProject | undefined {
  const base = getProjectById(id);
  const localized = dict.projects[id as ProjectId];

  if (!base || !localized) return undefined;

  return {
    ...base,
    title: localized.title,
    role: localized.role,
    description: localized.description,
    overview: localized.overview,
    result: localized.result,
  };
}

export function getLocalizedProjects(dict: Dictionary): IProject[] {
  return PORTFOLIO_PROJECTS.map((project) => {
    const localized = getLocalizedProject(project.id, dict);
    return localized ?? project;
  });
}
