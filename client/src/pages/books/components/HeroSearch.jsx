export default function HeroSearch() {
  return (
    <div className="relative mx-6 mt-6 rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-300">
      {/* Cloud / Mist Effect */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl" />

      {/* Soft Glow */}
      <div
        className="absolute top-1/2 left-1/2 w-[500px] h-[200px] 
        -translate-x-1/2 -translate-y-1/2 
        bg-white/20 blur-3xl rounded-full"
      />

      {/* Left Illustration */}
      <img
        src="https://png.pngtree.com/png-clipart/20240228/original/pngtree-school-library-with-students-png-image_14441072.png"
        className="absolute left-0 bottom-0 h-full opacity-90 hidden md:block"
      />

      {/* Right Illustration */}
      <img
        src="https://png.pngtree.com/png-vector/20231020/ourmid/pngtree-watercolor-library-book-clip-art-png-image_10285452.png"
        className="absolute right-0 bottom-0 h-full opacity-90 hidden md:block"
      />

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-20">
        <h1 className="text-4xl font-semibold text-white drop-shadow-md">
          Welcome to Turtle Library 📚
        </h1>

        <p className="text-white/90 mt-4 max-w-xl">
          Explore thousands of books across various categories
        </p>

        {/* Glass Search */}
        <div className="mt-10 w-full max-w-xl bg-white/30 backdrop-blur-lg rounded-full shadow-xl">
          <input
            type="text"
            placeholder="Search by book name, author..."
            className="w-full bg-transparent px-6 py-4 rounded-full outline-none text-white placeholder-white/80"
          />
        </div>
      </div>
    </div>
  );
}
