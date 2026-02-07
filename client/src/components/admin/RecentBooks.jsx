import { BookOpen, ArrowRight } from "lucide-react";

const books = [
  { title: "A Promised Land", author: "Barack Obama" },
  { title: "Think Like a Monk", author: "Jay Shetty" },
  { title: "Atomic Habits", author: "James Clear" },
];

export default function RecentBooks() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
          <BookOpen size={18} className="text-indigo-600" />
          Recent Book Additions
        </h3>
      </div>

      {/* List */}
      <ul className="space-y-3">
        {books.map((book, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-3 rounded-lg
            hover:bg-indigo-50 transition"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-600
                flex items-center justify-center"
              >
                <BookOpen size={16} />
              </div>

              <div>
                <p className="text-sm font-medium text-gray-800">
                  {book.title}
                </p>
                <p className="text-xs text-gray-500">{book.author}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <button
        className="mt-4 w-full flex items-center justify-center gap-2
        text-sm font-medium text-indigo-600
        hover:text-indigo-700 transition"
      >
        View All
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
