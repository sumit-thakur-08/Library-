import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  MessageCircle,
  User,
  Bell,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gradient-to-b from-indigo-700 to-indigo-600 text-white flex flex-col h-screen">
      {/* Logo / Header */}
      <div className="px-6 py-5 text-xl font-bold flex items-center gap-2">
        🐢 Turtle Library
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1 mt-4">
        <NavLink
          to="/user/dashboard"
          end
          className="user-nav hover:bg-indigo-500 rounded-md flex items-center gap-2 px-3 py-2"
        >
          <LayoutDashboard size={18} /> Dashboard
        </NavLink>

        <NavLink
          to="/books"
          className="user-nav hover:bg-indigo-500 rounded-md flex items-center gap-2 px-3 py-2"
        >
          <BookOpen size={18} /> Browse Books
        </NavLink>

        <NavLink
          to="/user/requests"
          className="user-nav hover:bg-indigo-500 rounded-md flex items-center gap-2 px-3 py-2"
        >
          <Bell size={18} /> Pending Requests
        </NavLink>

        <NavLink
          to="/user/chat"
          className="user-nav hover:bg-indigo-500 rounded-md flex items-center gap-2 px-3 py-2"
        >
          <MessageCircle size={18} /> Chat
        </NavLink>

        <NavLink
          to="/user/profile"
          className="user-nav hover:bg-indigo-500 rounded-md flex items-center gap-2 px-3 py-2"
        >
          <User size={18} /> Profile
        </NavLink>
      </nav>

      {/* Optional Footer / Info */}
      <div className="px-6 py-4 text-sm text-indigo-200">Welcome, Sunil</div>
    </aside>
  );
}
