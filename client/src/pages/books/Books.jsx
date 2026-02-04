import { useState } from "react";
import { Search, BookOpen, User } from "lucide-react";

const booksData = [
  {
    id: 1,
    title: "Start With Why",
    author: "Simon Sinek",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfN0Qgk_0H_WIzWxJ0gSp2vJNZqgW031W6nA&s",
    status: "Available",
  },
  {
    id: 2,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    cover: "https://images-na.ssl-images-amazon.com/images/I/81t2CVWEsUL.jpg",
    status: "Issued",
  },
  {
    id: 3,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    cover: "https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg",
    status: "Available",
  },

  {
    id: 4,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoTcL9hnwF5FHeAut_UNol3M7d-WD1P-sXfA&s",
    status: "Available",
  },
  {
    id: 1,
    title: "Start With Why",
    author: "Simon Sinek",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfN0Qgk_0H_WIzWxJ0gSp2vJNZqgW031W6nA&s",
    status: "Available",
  },
  {
    id: 2,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    cover:
      "https://m.media-amazon.com/images/I/610J0377U4L._AC_UF1000,1000_QL80_.jpg",
    status: "Issued",
  },
  {
    id: 3,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9l26qBnO7zCdei7KJZ9ysuYBIaxlLBT4ppQ&s",
    status: "Available",
  },

  {
    id: 4,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7dQXaXfV7KAUNAqRdnhJvjFYCjaME3CQTBg&s",
    status: "Available",
  },
  {
    id: 1,
    title: "Start With Why",
    author: "Simon Sinek",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfN0Qgk_0H_WIzWxJ0gSp2vJNZqgW031W6nA&s",
    status: "Available",
  },
  {
    id: 2,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    cover: "https://images-na.ssl-images-amazon.com/images/I/81t2CVWEsUL.jpg",
    status: "Issued",
  },
  {
    id: 3,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    cover: "https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg",
    status: "Available",
  },

  {
    id: 4,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoTcL9hnwF5FHeAut_UNol3M7d-WD1P-sXfA&s",
    status: "Available",
  },
  {
    id: 1,
    title: "Start With Why",
    author: "Simon Sinek",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfN0Qgk_0H_WIzWxJ0gSp2vJNZqgW031W6nA&s",
    status: "Available",
  },
  {
    id: 2,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    cover:
      "https://m.media-amazon.com/images/I/610J0377U4L._AC_UF1000,1000_QL80_.jpg",
    status: "Issued",
  },
  {
    id: 3,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9l26qBnO7zCdei7KJZ9ysuYBIaxlLBT4ppQ&s",
    status: "Available",
  },

  {
    id: 4,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7dQXaXfV7KAUNAqRdnhJvjFYCjaME3CQTBg&s",
    status: "Available",
  },
];

function BookCard({ book }) {
  return (
    <div className="bg-white rounded-xl border hover:shadow-md transition overflow-hidden">
      <img
        src={book.cover}
        alt={book.title}
        className="h-44 w-full object-cover"
      />
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {book.title}
        </h3>
        <p className="text-xs text-gray-500">{book.author}</p>

        <div className="mt-3 flex items-center justify-between">
          <span
            className={`text-[11px] px-2 py-0.5 rounded-full ${
              book.status === "Available"
                ? "bg-indigo-50 text-indigo-600"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {book.status}
          </span>
          <button
            className={`text-xs px-3 py-1 rounded-md ${
              book.status === "Available"
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Issue
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BooksPage() {
  const [query, setQuery] = useState("");

  const filteredBooks = booksData.filter((b) =>
    b.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden lg:block">
        <div className="p-6 flex items-center gap-2 text-indigo-600 font-bold text-lg">
          <BookOpen size={20} /> Turtle Library
        </div>

        <div className="px-4">
          <p className="text-xs text-gray-400 mb-2">Libraries</p>
          <ul className="space-y-1 text-sm">
            <li className="px-3 py-2 rounded-md bg-indigo-50 text-indigo-600">
              Elementary
            </li>
            <li className="px-3 py-2 rounded-md hover:bg-gray-100">Primary</li>
            <li className="px-3 py-2 rounded-md hover:bg-gray-100">
              High School
            </li>
          </ul>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-5">
          <div className="relative w-full max-w-md">
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search books"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-200 outline-none"
            />
          </div>

          <div className="ml-4 flex items-center gap-3">
            <User className="text-gray-500" />
          </div>
        </div>

        {/* Alphabet filter */}
        <div className="flex flex-wrap gap-2 text-xs mb-6">
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((l) => (
            <button
              key={l}
              className="px-2 py-1 rounded-md border bg-white hover:bg-indigo-50 hover:text-indigo-600"
            >
              {l}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </main>
    </div>
  );
}
