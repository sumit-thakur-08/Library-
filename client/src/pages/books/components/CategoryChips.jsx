const chips = ["All", "Fiction", "Programming", "Management", "School"];

export default function CategoryChips() {
  return (
    <div className="flex gap-3 px-6 mt-6 overflow-x-auto">
      {chips.map((chip) => (
        <button
          key={chip}
          className="px-4 py-2 rounded-full bg-white shadow text-sm hover:bg-indigo-400 hover:text-blue-50"
        >
          {chip}
        </button>
      ))}
    </div>
  );
}
