import { ArrowRightIcon } from "lucide-react";
import SectionTitle from "../components/section-title";

export default function CallToActionSection() {
  return (
    <section className="flex flex-col items-center justify-center py-20">
      <SectionTitle
        title="Get Your Library Access Today"
        description="Join our Library Management System to browse books, access study materials, and manage your library account easily."
      />
      <a
        href="/register"
        className="mt-4 flex items-center gap-2 rounded-full bg-gray-900 px-8 py-2.5 font-medium text-white transition hover:opacity-90"
      >
        Register Now
        <ArrowRightIcon className="size-5" />
      </a>
    </section>
  );
}
