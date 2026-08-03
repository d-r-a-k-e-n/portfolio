import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { LINKS_CONSTANTS } from "@/constants/links.constants";
import { FaGithub, FaLinkedin, FaTelegram, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Header from "@/components/header";
import BackgroundBlobs from "@/components/backgroundBlobs";
import Image from "next/image";
import { DictionaryProvider } from "@/components/dictionary-provider";
import { getDictionary } from "@/lib/get-dictionary";
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/config";
import { getRoutes } from "@/constants/routs.constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(locale);

  return {
    title: {
      default: dict.meta.title,
      template: `%s | Ihor Vnuk`,
    },
    description: dict.meta.description,
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
    ],
    authors: [{ name: "Ihor Vnuk" }],
    creator: "Ihor Vnuk",
    openGraph: {
      type: "website",
      locale: locale === "uk" ? "uk_UA" : "en_US",
      url: `https://ihorvnuk.dev/${locale}`,
      title: dict.meta.title,
      description: dict.meta.description,
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
      canonical: `https://ihorvnuk.dev/${locale}`,
      languages: {
        en: "https://ihorvnuk.dev/en",
        uk: "https://ihorvnuk.dev/uk",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(locale);
  const routes = getRoutes(locale);

  return (
    <html
      lang={locale}
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
        <DictionaryProvider dict={dict} lang={locale}>
          <div className="relative z-10 flex min-h-full flex-1 flex-col">
            <Header />
            {children}

            <footer className="flex flex-col items-center gap-6 bg-tertiary/45 px-4 py-8 text-center text-light sm:px-8 md:flex-row md:justify-between md:gap-4 md:px-16 md:py-4 md:text-left">
              <Link href={routes.ROOT} className="shrink-0">
                <Image src="/logo.png" alt="Logo" width={30} height={30} />
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
                &copy; {new Date().getFullYear()} {dict.footer.rights}
              </p>
            </footer>
          </div>
        </DictionaryProvider>
      </body>
    </html>
  );
}
