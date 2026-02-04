import SectionTitle from "../components/section-title";
import { UserPlusIcon, BookOpenCheckIcon, BarChart3Icon } from "lucide-react";

export default function HowItWorksSection() {
  const data = [
    {
      title: "Register as a Member",
      description:
        "Create your library account as a student, faculty, or staff member to get started.",
      icon: UserPlusIcon,
    },
    {
      title: "Search & Issue Books",
      description:
        "Browse physical books, e-books, and study materials. Request and issue books online.",
      icon: BookOpenCheckIcon,
    },
    {
      title: "Track Library Activity",
      description:
        "Monitor issued books, due dates, fines, and reading history in real time.",
      icon: BarChart3Icon,
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center">
      <SectionTitle
        title="How It Works"
        description="Our Library Management System simplifies book management, issue tracking, and digital access for students and librarians."
      />

      <div className="mt-20 flex flex-wrap items-center justify-center gap-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="rounded-[14px] bg-gray-200/80 p-0.5 pt-4 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative flex max-w-80 flex-col items-center rounded-xl bg-white p-6 pb-10">
              <div className="absolute -top-6 rounded-full bg-indigo-600 p-3">
                <item.icon className="size-6 text-white" />
              </div>

              <h3 className="mt-10 text-center text-base font-medium">
                {item.title}
              </h3>
              <p className="mt-6 text-center text-gray-500">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
