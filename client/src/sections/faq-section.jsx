import SectionTitle from "../components/section-title";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

export default function FaqSection() {
  const [isOpen, setIsOpen] = useState(null);
  const data = [
    {
      question: "Who can register for a library membership?",
      answer:
        "Students, faculty, and staff can register for a library membership. Institutional access is available for colleges and departments.",
    },
    {
      question: "How can I search for books or resources?",
      answer:
        "You can search the catalog using the library portal by title, author, subject, or ISBN. Filters are available for easy browsing.",
    },
    {
      question: "How do I issue or return books?",
      answer:
        "Books can be issued or returned online through your library account. Notifications are sent for due dates and renewals.",
    },
    {
      question: "Can I access digital resources and e-books?",
      answer:
        "Yes! The library portal provides access to e-books, PDFs, and other digital resources anytime, anywhere.",
    },
    {
      question: "Is there a limit to the number of books I can borrow?",
      answer:
        "Borrowing limits depend on your membership plan. Student plans have standard limits, while premium plans allow more books and longer durations.",
    },
    {
      question: "How do I report a lost or damaged book?",
      answer:
        "You can report lost or damaged books through your library account. Charges may apply according to library policy.",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center">
      <SectionTitle
        title="FAQ's"
        description="Have questions about the library? Find answers to common queries about memberships, borrowing, and resources below."
      />
      <div className="mx-auto mt-12 w-full max-w-xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col border-b border-gray-200 bg-white"
          >
            <h3
              className="flex cursor-pointer items-start justify-between gap-4 py-4 font-medium"
              onClick={() => setIsOpen(isOpen === index ? null : index)}
            >
              {item.question}
              {isOpen === index ? (
                <MinusIcon className="size-5 text-gray-500" />
              ) : (
                <PlusIcon className="size-5 text-gray-500" />
              )}
            </h3>
            <p
              className={`pb-4 text-sm/6 text-gray-500 ${
                isOpen === index ? "block" : "hidden"
              }`}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
