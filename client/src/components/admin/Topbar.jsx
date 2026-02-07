import { Bell, Settings } from "lucide-react";

export default function Topbar() {
  return (
    <header className="bg-white px-6 py-4 flex items-center justify-between shadow-sm">
      <input
        type="text"
        placeholder="Search..."
        className="w-1/3 px-4 py-2 rounded-lg bg-gray-100 outline-none"
      />

      <div className="flex items-center gap-5">
        <div className="relative">
          <Bell />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </div>
        <Settings />

        <img src="https://i.pravatar.cc/40" className="w-9 h-9 rounded-full" />
      </div>
    </header>
  );
}
