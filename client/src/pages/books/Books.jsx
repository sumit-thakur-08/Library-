import HeroSearch from "./components/HeroSearch";
import Sidebar from "./components/Sidebar";
import CategoryChips from "./components/CategoryChips";
import BookGrid from "./components/BookGrid";
import AlphabetFilter from "./components/AlphabetFilter";

export default function Books() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSearch />

      <CategoryChips />

      <div className="flex gap-6 px-6 mt-6">
        <Sidebar />
        <BookGrid />
        <AlphabetFilter />
      </div>
    </div>
  );
}
