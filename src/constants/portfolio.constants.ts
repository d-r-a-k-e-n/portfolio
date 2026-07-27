import { type IProject } from "@/types/project.type";

export const DEFAULT_PROJECT_PREVIEW = "/preview-pages.png";

export const PORTFOLIO_PROJECTS: IProject[] = [
  {
    id: "drive-customizer",
    title: "Drive Customizer: Interactive 3D Brand Visualizer",
    role: "FullStack developer, DevOps, UI/UX designer",
    description:
      "Drive Customizer is a high-fidelity, full-stack 3D automotive configuration platform. The project showcases a seamless blend of immersive 3D graphics and modern web development, allowing users to interactively customize vehicles in real-time. It features a complete ecosystem-from an engaging landing page and model selection catalog to a sophisticated 3D editor and a community showcase-all built on a robust, scalable architecture.",
    skills: ['TypeScript',
      'Tailwind CSS',
      'Next.js',
      'NestJS',
      'Three.js'],
    liveUrl: "https://drive-customizer.vercel.app/",
    image: "/dc.png",
    previewImage: "/dcp.png",
    overview: {
      title: "The Task",
      description:
        "The primary objective was to build a sophisticated 3D application that bridges the gap between high-end visual rendering and a functional, multi-page user flow. The challenge was to ensure that complex 3D assets could be manipulated smoothly while maintaining data persistence across the entire application.",
      points: [
        'Implementing a real-time 3D engine capable of high-performance material and component manipulation.',
        'Developing a multi-page navigation system that allows users to browse, select, and view 3D models without performance bottlenecks.',
        'Building a modular and secure backend to manage model data and save unique user configurations.',
        'Synchronizing complex 3D scene states with a modern UI to provide instantaneous visual feedback.',
        'Ensuring the application is fully optimized for cloud deployment and fast loading times.',

      ],
    },
    result: {
      title: "The Result",
      description:
        "I engineered a professional Full-Stack platform with a focus on visual excellence and technical performance:",
      points: [
        'Immersive 3D Experience: Developed using React Three Fiber (Three.js), featuring real-time material updates, optimized lighting, and interactive mesh selection for a high-fidelity car configuration.',
        'Modern Frontend Architecture: Leveraged Next.js and TypeScript to create a SEO-friendly, fast, and type-safe multi-page application with seamless transitions.',
        'Scalable Backend & Data Persistence: Built a robust NestJS API integrated with MongoDB, ensuring efficient storage of complex car configurations and user-generated data.',
        'Advanced State Management: Utilized Zustand to synchronize the 3D scene\'s state with the UI, providing instantaneous feedback without performance overhead.',
        'Polished UI/UX: Crafted a sleek, responsive interface using Tailwind CSS, ensuring a consistent experience across desktops, tablets, and smartphones.',
        'Reliable Cloud Deployment: Successfully deployed and configured the entire ecosystem on Vercel, optimizing it for production-ready performance.',
      ],
    },
  },
  {
    id: "simple-chocolate",
    title: "Simply Chocolate: FullStack E-Commerce Platform",
    role: "FullStack developer and DevOps",
    description:
      "Simple chocolate is a modern, high-performance e-commerce platform designed for a boutique chocolate store. The project demonstrates a full-cycle development approach, from architecting a scalable Nx Monorepo to implementing secure payment processing. It features a seamless user experience, a robust product management system, and a responsive design.",
    skills: ['React',
      'ExpressJS',
      'MongoDB',
      'Stripe',
      'DevOps'],
    liveUrl: "https://my-simply-chocolate.vercel.app/",
    image: "/sc.png",
    previewImage: "/scp.png",

    overview: {
      title: "The Task",
      description:
        "The goal was to create a launch-ready online store capable of handling high traffic and processing complex data structures, while ensuring maximum security for user transactions.",
      points: [
        'Developing a scalable architecture to support future functionality expansion.',
        'Integrating a reliable and secure payment gateway.',
        'Ensuring full responsiveness and optimization of the application across all devices.',
        'Deploying the application on cloud platforms.',
      ],
    },
    result: {
      title: "The Result",
      description:
        "I developed a professional FullStack application with the following key features:",
      points: [
        'Robust architecture: I used Nx Monorepo to organize the codebase into reusable libraries and applications, which significantly improved maintainability.',
        'Secure transactions: I integrated the Stripe API, which ensures secure credit card processing and real-time payment confirmation.',
        'Data reliability: I built a custom REST API based on Node.js and MongoDB with optimized schemas for products and customer reviews.',
        'Modern UI/UX: Used React to create a smooth, interactive interface with fast loading times and seamless transitions.',
        'Real-time deployment: Successfully deployed the frontend on Vercel and the backend on Render, ensuring a stable and fast production environment.',
      ],
    },
  },
  {
    id: "harry-potter",
    title: "Harry Potter: The Wizarding World Encyclopedia",
    role: "FrontEnd Developer",
    description:
      "Hogwarts Explorer is a dynamic, interactive web application designed for fans of the Wizarding World. The project is an API-driven encyclopedia that allows users to discover characters, filter them by houses, search for favorites, and view detailed information. It demonstrates a professional approach to building multi-page applications using modern JavaScript, modular SCSS, and efficient data handling.",
    skills: ["Pages", "JavaScript", "HTML", "SCSS", "REST API"],
    liveUrl: "https://d-r-a-k-e-n.github.io/Harry-Potter/",
    image: "/hp.png",
    previewImage: "/hpp.png",
    overview: {
      title: "The Task",
      description:
        "The goal was to create an engaging, fast, and visually appealing character database that feels like a part of the Harry Potter universe. The challenge was to handle a large dataset from an external API while maintaining high performance and clean code.",
      points: [
        "Implementing a robust search and filtering system (by House).",
        "Creating a multi-page structure with dynamic routing for character details.",
        "Achieving a high level of UI/UX polish using advanced SCSS techniques.",
      ],
    },
    result: {
      title: "The Result",
      description:
        "I developed a high-quality FrontEnd application with a focus on performance and maintainability:",
      points: [
        "Dynamic Data Rendering: Developed a custom engine in Vanilla JavaScript to fetch data from the HP-API and dynamically generate content, reducing initial load time.",
        "Scalable Styling: Used SCSS with a modular structure, which allowed for easy management and consistent UI components across all pages.",
        "Advanced Interactivity: Implemented criteria filtering, providing users with an instant response without reloading the page.",
        "Adaptive Layout: Developed a mobile-first responsive design that looks magical on any screen size, from small smartphones to large monitors.",
      ],
    },
  },
] as const;

export function getProjectById(id: string): IProject | undefined {
  return PORTFOLIO_PROJECTS.find((project) => project.id === id);
}
