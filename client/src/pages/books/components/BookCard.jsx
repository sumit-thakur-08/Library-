export default function BookCard() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnqkbceeCzJKyKz1qTDcu4VgnWI0uXIt1iUw&s"
        className="h-48 w-full object-cover rounded-lg"
      />

      <h3 className="mt-3 font-semibold">Start With Why</h3>
      <p className="text-sm text-gray-500">Simon Sinek</p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-xs text-indigo-600 bg-white px-2 py-1 rounded">
          Available
        </span>
        <button className="text-sm px-3 py-1 rounded bg-indigo-500 text-white">
          Issue
        </button>
      </div>
    </div>
  );
}
