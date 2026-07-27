export interface IProjectSection {
  title: string;
  description: string;
  points: string[];
};

export interface IProject {
  id: string;
  title: string;
  role: string;
  description: string;
  skills: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  previewImage: string;
  overview: IProjectSection;
  result: IProjectSection;
};
