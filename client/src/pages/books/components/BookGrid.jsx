import BookCard from "./BookCard";

export default function BookGrid() {
  const books = [
    {
      id: 1,
      title: "Start With Why",
      author: "Simon Sinek",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnqkbceeCzJKyKz1qTDcu4VgnWI0uXIt1iUw&s",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    },
    {
      id: 3,
      title: "Think Like a Monk",
      author: "Jay Shetty",
      image: "https://m.media-amazon.com/images/I/81s6DUyQCZL.jpg",
    },
    {
      id: 4,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
    },
    {
      id: 5,
      title: "Deep Work",
      author: "Cal Newport",
      image: "https://m.media-amazon.com/images/I/81JJ7fyyKyS.jpg",
    },
    {
      id: 6,
      title: "The Alchemist",
      author: "Paulo Coelho",
      image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
    },
    {
      id: 5,
      title: "Deep Work",
      author: "Cal Newport",
      image: "https://m.media-amazon.com/images/I/81JJ7fyyKyS.jpg",
    },
    {
      id: 6,
      title: "Socail Economy",
      author: "Vivek Khesari",
      image: "https://m.media-amazon.com/images/I/81s6DUyQCZL.jpg",
    },
  ];

  return (
    <div className="grid flex-1 grid-cols-4 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
