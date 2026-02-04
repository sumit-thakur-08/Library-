import SectionTitle from "../components/section-title";

export default function MeetOurTeamSection() {
  const data = [
    {
      name: "Dr. Rahul Sharma",
      title: "Chief Librarian & Director",
      image: "/assets/team-user-1.png",
    },
    {
      name: "Anita Verma",
      title: "Library Systems Manager",
      image: "/assets/team-user-2.png",
    },
    {
      name: "Karan Mehta",
      title: "Library Software Engineer",
      image: "/assets/team-user-3.png",
    },
    {
      name: "Pooja Nair",
      title: "Digital Resources & UX Specialist",
      image: "/assets/team-user-4.png",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center">
      <SectionTitle
        title="Meet Our Team"
        description="A dedicated team of librarians, technologists, and designers working together to build a smarter library experience."
      />

      <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-64 w-52 object-cover"
            />
            <h3 className="mt-2 text-base font-medium">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
