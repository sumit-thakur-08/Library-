import SectionTitle from "../components/section-title";
import { CheckIcon } from "lucide-react";

export default function OurPricingSection() {
  const data = [
    {
      title: "Student Membership",
      description: "Best for students and daily readers",
      price: "₹0",
      buttonText: "Get Access",
      features: [
        "Search & browse library books",
        "Issue and return books online",
        "Access e-books & study material",
        "Track due dates & history",
        "Email reminders for returns",
      ],
    },
    {
      title: "Premium Membership",
      description: "Ideal for researchers & exam preparation",
      price: "₹199",
      mostPopular: true,
      buttonText: "Upgrade Now",
      features: [
        "Unlimited issue requests",
        "Extended borrowing duration",
        "Priority access to new books",
        "Download premium resources",
        "Priority support from library",
      ],
    },
    {
      title: "Institution Plan",
      description: "For colleges & organizations",
      price: "₹999",
      buttonText: "Contact Library",
      features: [
        "Multi-user role-based access",
        "Complete inventory management",
        "Admin & librarian dashboards",
        "Advanced reports & analytics",
        "Dedicated technical support",
      ],
    },
  ];

  return (
    <section id="pricing" className="flex flex-col items-center justify-center">
      <SectionTitle
        title="Library Membership Plans"
        description="Choose the right membership plan to access books, digital resources, and advanced library services."
      />

      <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
        {data.map((item, index) => (
          <div key={index} className="group w-full sm:w-72 md:w-80 lg:w-96">
            <div
              className={`flex flex-col items-center justify-center rounded-xl border border-slate-200 p-6 text-center transition-all duration-300 group-hover:-translate-y-1 ${
                item.mostPopular ? "bg-gray-800 text-white" : "bg-white"
              }`}
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p
                className={item.mostPopular ? "text-gray-400" : "text-gray-500"}
              >
                {item.description}
              </p>
              <p className="mt-4 text-2xl font-semibold">
                {item.price}{" "}
                <span
                  className={`text-sm font-normal ${
                    item.mostPopular ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  /month
                </span>
              </p>
              <button
                className={`mt-4 w-full rounded-lg bg-gray-100 py-2.5 font-medium text-gray-800 transition ${
                  item.mostPopular ? "hover:opacity-90" : "hover:bg-gray-200/70"
                }`}
              >
                {item.buttonText}
              </button>
            </div>

            <div className="mt-2 flex flex-col">
              {item.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 border-b border-gray-200 py-2.5 text-gray-800"
                >
                  <div className="rounded-full bg-gray-800 p-1">
                    <CheckIcon
                      className="size-3 text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
