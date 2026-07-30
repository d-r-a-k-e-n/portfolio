import type { ITestimonial } from "@/types/testimonial.type";

export const TESTIMONIALS_CONSTANTS: ITestimonial[] = [
  {
    id: "1",
    name: "Taras H.",
    role: "CEO at KodiX",
    quote:
      "Ihor migrated our legacy platforms to Next.js and Tailwind and we saw about a 35% boost in page load speed and SEO. He also shipped OpenAI-powered features and an interactive 3D product customizer with React Three Fiber-plus reliable Stripe payments. Rare to find someone who owns both the frontend polish and the full-stack delivery.",
    color: "bg-orange-500",
  },
  {
    id: "2",
    name: "Maksym T.",
    role: "CEO at Training Club",
    quote:
      "As a FrontEnd developer at Training Club, Ihor rebuilt our interface and navigation so the site felt clearer on mobile and desktop. Bounce rate dropped, forms became easier to use, and support tickets related to UI issues fell by roughly 25%. He cares about real user outcomes, not just shipping screens.",
    color: "bg-green-500",
  },
  {
    id: "3",
    name: "Vlad K.",
    role: "Backend Developer at KodiX",
    quote:
      "Collaborating with Ihor on our 3D and AI-heavy products was smooth end to end. He kept the NestJS/API side in sync with a complex R3F scene, used solid TypeScript throughout, and never left edge cases for later. His Drive Customizer-level work-real-time materials, state sync, deployment-sets a high bar for the team.",
    color: "bg-blue-500",
  },
];
