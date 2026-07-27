import Link from "next/link";
import { LINKS_CONSTANTS } from "@/constants/links.constants";

export default function PresenceSection() {
  const presenceLinks = [
    {
      href: LINKS_CONSTANTS.GITHUB,
      label: "GitHub",
    },
    {
      href: LINKS_CONSTANTS.UPWORK,
      label: "Upwork",
    },
    {
      href: LINKS_CONSTANTS.LINKEDIN,
      label: "LinkedIn",
    },
    {
      href: LINKS_CONSTANTS.TELEGRAM,
      label: "Telegram",
    },
  ];
  return (
    <section
      id="presence"
      className="bg-primary w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex flex-row gap-20 items-center justify-center py-5 text-[#8EA5FA] mb-30"
    >
      {presenceLinks.map((link) => (
        <Link
          href={link.href}
          className="text-4xl font-bold hover:text-white transition-colors"
          target="_blank"
          key={link.label}
        >
          {link.label}
        </Link>
      ))}
    </section>
  );
}
