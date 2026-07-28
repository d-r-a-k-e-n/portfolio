import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ROUTS_CONSTANTS } from "@/constants/routs.constants";
import { LINKS_CONSTANTS } from "@/constants/links.constants";
import { FaGithub, FaLinkedin, FaTelegram, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Header from "@/components/header";
import BackgroundBlobs from "@/components/backgroundBlobs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ihor Vnuk | Full Stack Developer",
    template: "%s | Ihor Vnuk",
  },
  description:
    "Full Stack Developer specializing in building scalable web applications with Next.js, AI integration, and immersive 3D web experiences.",
  keywords: [
    "Ihor Vnuk",
    "Ihor Vnuk Portfolio",
    "FrontEnd Developer",
    "FullStack Developer",
    "Next.js Portfolio",
    "React Three Fiber",
    "TypeScript Developer",
    "Web Development",
    "Software Engineer",
    "AI Integration",
    "3D Web Experiences",
    "AI Integration",
  ],
  authors: [{ name: "Ihor Vnuk" }],
  creator: "Ihor Vnuk",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ihor-vnuk-portfolio.vercel.app/",
    title: "Ihor Vnuk | Full Stack Developer",
    description:
      "Full Stack Developer specializing in building scalable web applications with Next.js, AI integration, and immersive 3D web experiences.",
    siteName: "Ihor Vnuk Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ihor Vnuk Portfolio",
      },
    ],
  },
  alternates: {
    canonical: "https://ihor-vnuk-portfolio.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="9b2jQhEVOxlqmKVLLHxDefR6Nf1pDzCzpbc5PBZW-nY"
        />
      </head>
      <body className="relative min-h-full flex flex-col">
        <BackgroundBlobs />
        <div className="relative z-10 flex min-h-full flex-1 flex-col">
          <Header />
          {children}

          <footer className="flex flex-col items-center gap-6 bg-tertiary px-4 py-8 text-center text-light sm:px-8 md:flex-row md:justify-between md:gap-4 md:px-16 md:py-4 md:text-left">
            <Link href={ROUTS_CONSTANTS.ROOT} className="shrink-0">
              LOGO
            </Link>

            <nav className="flex flex-row items-center gap-4">
              <Link href={LINKS_CONSTANTS.GITHUB} aria-label="GitHub">
                <FaGithub size={24} strokeWidth={1.5} />
              </Link>
              <Link href={LINKS_CONSTANTS.LINKEDIN} aria-label="LinkedIn">
                <FaLinkedin size={24} strokeWidth={1.5} />
              </Link>
              <Link href={LINKS_CONSTANTS.TELEGRAM} aria-label="Telegram">
                <FaTelegram size={24} strokeWidth={1.5} />
              </Link>
              <Link href={LINKS_CONSTANTS.INSTAGRAM} aria-label="Instagram">
                <FaInstagram size={24} strokeWidth={1.5} />
              </Link>
              <Link href={LINKS_CONSTANTS.EMAIL} aria-label="Email">
                <FiMail size={24} strokeWidth={1.5} />
              </Link>
            </nav>

            <p className="text-sm md:text-base">
              &copy; {new Date().getFullYear()} Ihor. All Rights Reserved.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
