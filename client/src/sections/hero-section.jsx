import { ArrowRightIcon, CheckIcon, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const specialFeatures = [
    "Free access for students",
    "Issue & return books online",
    "Digital library & resources",
  ];

  return (
    <section className="flex flex-col items-center justify-center px-4 md:px-16 lg:px-24">
      {/* BACKGROUND SVG */}
      <svg
        className="absolute inset-0 -z-10 size-full max-md:hidden"
        width="1440"
        height="720"
        viewBox="0 0 1440 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke="var(--color-gray-200)"
          strokeOpacity=".5"
          d="M-15.227 702.342H1439.7"
        />
        <circle
          cx="711.819"
          cy="372.562"
          r="308.334"
          stroke="var(--color-gray-200)"
          strokeOpacity=".5"
        />
        <circle
          cx="16.942"
          cy="20.834"
          r="308.334"
          stroke="var(--color-gray-200)"
          strokeOpacity=".5"
        />
        <path
          stroke="var(--color-gray-200)"
          strokeOpacity=".5"
          d="M-15.227 573.66H1439.7M-15.227 164.029H1439.7"
        />
        <circle
          cx="782.595"
          cy="411.166"
          r="308.334"
          stroke="var(--color-gray-200)"
          strokeOpacity=".5"
        />
      </svg>

      {/* TOP BADGE */}
      <a
        href="/register"
        className="mt-32 flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium transition hover:bg-gray-100/80"
      >
        <span>New books added for this semester</span>
        <ChevronRight className="size-4" />
      </a>

      {/* MAIN HEADING */}
      <h1 className="mt-4 max-w-3xl scale-105 bg-gradient-to-r from-black to-[#4f46e5] bg-clip-text text-center text-4xl/12 font-bold text-transparent md:scale-100 md:text-6xl/20">
        Smart Library. Simple Access. Better Learning.
      </h1>

      {/* SUB TEXT */}
      <p className="mt-2 max-w-xl text-center text-base/7 text-gray-700">
        Manage books, issue requests, digital resources, and study materials
        seamlessly—built for students, librarians, and faculty.
      </p>

      {/* CTA */}
      <a
        href="/books"
        className="mt-8 flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-2.5 font-medium text-white transition hover:opacity-90"
      >
        <span>Explore Library</span>
        <ArrowRightIcon className="size-5" />
      </a>

      {/* FEATURES */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-gray-500 md:gap-14">
        {specialFeatures.map((feature, index) => (
          <p className="flex items-center gap-2" key={index}>
            <CheckIcon className="size-5 text-indigo-600" />
            <span>{feature}</span>
          </p>
        ))}
      </div>
    </section>
  );
}
