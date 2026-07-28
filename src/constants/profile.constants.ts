import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiSass,
  SiTailwindcss,
  SiShadcnui,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGit,
  SiGithub,
  SiGitlab,
  SiAxios,
  SiGraphql,
  SiVite,
  SiStripe,
  SiFigma,
  SiThreedotjs,
  SiPostman,
  SiPrisma,
  SiJest,
  SiDocker,
  SiJsonwebtokens,
} from "react-icons/si";
import { type IHistoryItem } from "@/types/historyItem.type";

export type SkillItem = {
  label?: string;
  icon?: IconType;
};

export const SKILLS_CONSTANTS: SkillItem[] = [
  { icon: SiHtml5 },
  { icon: SiCss },
  { icon: SiSass },
  { icon: SiTailwindcss },
  { icon: SiShadcnui },
  { icon: SiJavascript },
  { icon: SiTypescript },
  { icon: SiReact },
  { icon: SiReact },
  { icon: SiNextdotjs },
  { icon: SiRedux },
  { label: "Zustand" },
  { icon: SiNodedotjs },
  { icon: SiExpress },
  { icon: SiNestjs },
  { label: "SQL" },
  { label: "NoSQL" },
  { icon: SiPostgresql },
  { icon: SiMongodb },
  { icon: SiRedis },
  { icon: SiGit },
  { icon: SiGithub },
  { icon: SiGitlab },
  { icon: SiAxios },
  { label: "REST API" },
  { icon: SiGraphql },
  { label: "tRPC" },
  { icon: SiVite },
  { icon: SiStripe },
  { icon: SiFigma },
  { icon: SiThreedotjs },
  { label: "R3F" },
  { icon: SiPostman },
  { icon: SiPrisma },
  { icon: SiJest },
  { label: "Playwright" },
  { icon: SiJsonwebtokens },
  { icon: SiDocker },
  { label: "Vercel / AWS / Render" },
  { label: "CI/CD" },
];

export const EXPERIENCE_CONSTANTS: IHistoryItem[] = [
  {
    period: "01.2025 - Present",
    title: "KodiX",
    role: "FullStack Developer",
    description:
      "Migrated legacy platforms to Next.js and Tailwind CSS, achieving a 35% improvement in page load speeds and SEO. Integrated OpenAI API for real-time AI responses and developed interactive 3D product customization using React Three Fiber (R3F). Implemented secure payment processing via Stripe and optimized React performance to ensure high application stability.",
  },
  {
    period: "12.2024 - 02.2025",
    title: "Training Club",
    role: "FrontEnd Developer",
    description:
      "Optimized website interface and navigation, resulting in a significant reduction in bounce rates and increased mobile user engagement. Improved form usability and implemented clear error handling systems, which reduced customer support requests by 25%. Focused on cross-browser adaptability and UI performance.",
  },
] as const;

export const EDUCATION_CONSTANTS: IHistoryItem[] = [
  {
    period: "2022 - 2026",
    title:
      "Zolochiv Vocational College of Lviv Polytechnic National University",
    role: "Computer Science",
    description:
      "Focused on fundamental computer science principles, including algorithms, data structures, and software engineering. Gained a solid understanding of computer systems architecture, networking basics, and database management systems.",
  },
  {
    period: "2024 - 2024",
    title: "Genius Space",
    role: "FullStack Developer",
    description:
      "Intensive full-stack development program focused on modern web technologies. Gained hands-on experience in building and deploying full-featured web applications using the MERN/PERN stack. Mastered REST API design, state management, and server-side logic.",
  },
] as const;
