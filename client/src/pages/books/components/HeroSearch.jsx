export default function HeroSearch() {
  return (
    <div className="relative mx-6 mt-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-200 overflow-hidden">
      {/* Left Image */}
      <img
        src="https://png.pngtree.com/png-clipart/20240228/original/pngtree-school-library-with-students-png-image_14441072.png"
        alt="Library Left"
        className="absolute left-0 bottom-0 h-full object-contain hidden md:block"
      />

      {/* Right Image */}
      <img
        src="https://png.pngtree.com/png-vector/20231020/ourmid/pngtree-watercolor-library-book-clip-art-png-image_10285452.png"
        alt="Library Right"
        className="absolute right-0 bottom-0 h-full object-contain hidden md:block"
      />

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-neutral-50">
          Welcome to Turtle Library 📚
        </h1>

        <p className="text-neutral-100 mt-3 max-w-xl">
          Explore thousands of books across various categories
        </p>

        <input
          type="text"
          placeholder="Search by book name, author..."
          className="mt-8 w-full max-w-xl rounded-full px-6 py-3 shadow-lg outline-none text-white"
        />
      </div>
    </div>
  );
}
