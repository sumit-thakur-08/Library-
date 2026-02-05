const categories = [
  "All",
  "Elementary",
  "High School",
  "Managment",
  "Programming",
];

export default function Sidebar() {
  return (
    <div className="w-56 bg-white rounded-xl p-4 shadow-sm">
      {categories.map((cat) => (
        <div
          key={cat}
          className="px-4 py-2 rounded-lg cursor-pointer hover:bg-indigo-200"
        >
          {cat}
        </div>
      ))}
    </div>
  );
}
