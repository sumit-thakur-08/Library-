export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <img
        src={book.image}
        alt={book.title}
        className="h-48 w-full object-cover rounded-lg"
      />

      <h3 className="mt-3 font-semibold">{book.title}</h3>
      <p className="text-sm text-gray-500">{book.author}</p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
          Available
        </span>
        <button className="text-sm px-3 py-1 rounded bg-indigo-500 text-white">
          Issue
        </button>
      </div>
    </div>
  );
}
