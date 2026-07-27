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
      className="mb-16 w-full bg-primary py-5 text-[#8EA5FA] md:mb-30"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center justify-items-center gap-x-4 gap-y-4 px-4 sm:gap-x-8 sm:px-8 md:flex md:flex-row md:justify-center md:gap-16 lg:gap-20 lg:px-16">
        {presenceLinks.map((link) => (
          <Link
            href={link.href}
            className="text-xl font-bold transition-colors hover:text-white sm:text-2xl md:text-3xl lg:text-4xl"
            target="_blank"
            key={link.label}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
