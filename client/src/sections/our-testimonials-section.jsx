import SectionTitle from "../components/section-title";
import { StarIcon } from "lucide-react";

export default function OurTestimonialSection() {
  const data = [
    {
      review:
        "Finding and issuing books has never been this easy. The digital library saves so much time during exams.",
      name: "Rohit Kumar",
      date: "12 Jan 2025",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    },
    {
      review:
        "The interface is clean and simple. I can track issued books, due dates, and fines without confusion.",
      name: "Sneha Patel",
      date: "15 Mar 2025",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    },
    {
      review:
        "As a librarian, managing book inventory and issue requests is now fast and completely digital.",
      name: "Amit Verma",
      date: "20 Feb 2025",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
    },
    {
      review:
        "Access to e-books and study materials from anywhere has really improved my learning experience.",
      name: "Neha Sharma",
      date: "20 Sep 2025",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
    },
    {
      review:
        "Everything from book search to renewals works smoothly. Perfect system for a modern college library.",
      name: "Arjun Singh",
      date: "04 Oct 2025",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
    },
    {
      review:
        "The digital records and reports make library management effortless. Highly recommended.",
      name: "Priya Nair",
      date: "01 Nov 2025",
      rating: 5,
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center">
      <SectionTitle
        title="What Our Users Say"
        description="Students and librarians share how our Library Management System improves access, organization, and efficiency."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-88 space-y-4 rounded-md border border-gray-200 bg-white p-3 text-gray-500 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                {Array(item.rating)
                  .fill("")
                  .map((_, index) => (
                    <StarIcon
                      key={index}
                      className="size-4 fill-gray-800 text-gray-800"
                    />
                  ))}
              </div>
              <p>{item.date}</p>
            </div>

            <p>“{item.review}”</p>

            <div className="flex items-center gap-2 pt-3">
              <img
                className="h-8 w-8 rounded-full"
                src={item.image}
                alt={item.name}
              />
              <p className="font-medium text-gray-800">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
