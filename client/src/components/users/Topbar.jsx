import { Bell, Settings, MessageCircle } from "lucide-react";

export default function Topbar() {
  return (
    <header className="bg-white px-6 py-4 flex items-center justify-between shadow-sm sticky top-0 z-20">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search books, requests..."
        className="w-1/3 px-4 py-2 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Right Icons */}
      <div className="flex items-center gap-5">
        {/* Notifications */}
        <div className="relative cursor-pointer">
          <Bell size={20} className="text-gray-700" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            2
          </span>
        </div>

        {/* Chat / Messages */}
        <div className="relative cursor-pointer">
          <MessageCircle size={20} className="text-gray-700" />
          <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </div>

        {/* Settings */}
        <Settings size={20} className="text-gray-700 cursor-pointer" />

        {/* Profile */}
        <img
          src="https://i.pravatar.cc/40"
          alt="User Profile"
          className="w-9 h-9 rounded-full cursor-pointer"
        />
      </div>
    </header>
  );
}
