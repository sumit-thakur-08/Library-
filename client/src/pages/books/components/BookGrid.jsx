import BookCard from "./BookCard";

export default function BookGrid() {
  return (
    <div className="grid flex-1 grid-cols-4 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <BookCard key={i} />
      ))}
    </div>
  );
}
