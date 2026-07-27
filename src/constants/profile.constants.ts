import { type IHistoryItem } from "@/types/historyItem.type";

export const SKILLS_CONSTANTS = [
  "HTML",
  "CSS",
  "SCSS",
  "Tailwind",
  "Shadcn",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Redux Toolkit",
  "Zustand",
  "Node.js",
  "Express.js",
  "Nest.js",
  "SQL",
  "NoSQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Git",
  "GitHub",
  "GitLab",
  "Axios",
  "REST API",
  "Graphql",
  "tRPC",
  "Vite",
  "Stripe",
  "Figma",
  "Three.js",
  "R3F",
  "Postman",
  "Prisma ORM",
  "Jest",
  "Playwright",
  "Authentication (JWT)",
  "Docker",
  "Deployment (Vercel / AWS / Render)",
  "CI/CD",
] as const;

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
