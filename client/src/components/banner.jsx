import { ArrowRightIcon } from "lucide-react";

export default function Banner() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center bg-gradient-to-b from-indigo-600 to-indigo-700 py-2 text-center font-medium text-white">
      <p>Welcome to the Library Management System 📚</p>
      <a
        href="/books"
        className="ml-3 flex items-center gap-1 rounded-md bg-white px-3 py-1 text-xs text-indigo-700 transition hover:bg-slate-200 active:scale-95"
      >
        Explore Books
        <ArrowRightIcon className="size-3.5" />
      </a>
    </div>
  );
}
