import { LINKS_CONSTANTS } from "@/constants/links.constants";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full">
      <div className="flex flex-row items-center gap-2 justify-between mb-12">
        <h3 className="text-2xl">Let’s work Together</h3>
        <Link href={LINKS_CONSTANTS.EMAIL}>Send Message</Link>
      </div>
      <h2 className="text-6xl max-w-4xl text-center mx-auto mb-12">
        Le’ts make something amazing together Start By{" "}
        <span className="text-secondary">Saying Hi</span>
      </h2>
    </section>
  );
}
