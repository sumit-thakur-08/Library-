import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Layers,
  Settings,
  LogOut,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/slices/authServices";

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      navigate("/login");
    } catch (error) {
      console.log(error);
      console.log("ERROR FAILED");
      alert("Logout Failed , Something went wrong");
    }
  };
  return (
    <aside className="w-64 bg-gradient-to-b from-indigo-700 to-indigo-600 text-white flex flex-col">
      <div className="px-6 py-5 text-xl font-bold flex items-center gap-2">
        🐢 Turtle Library
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <NavLink to="/admin/dashboard" end className="admin-nav">
          <LayoutDashboard size={18} /> Dashboard
        </NavLink>
        <NavLink to="/admin/books" className="admin-nav">
          <BookOpen size={18} /> Manage Books
        </NavLink>
        <NavLink to="/admin/users" className="admin-nav">
          <Users size={18} /> Manage Users
        </NavLink>
        <NavLink to="/admin/categories" className="admin-nav">
          <Layers size={18} /> Categories
        </NavLink>
        <NavLink to="/admin/settings" className="admin-nav">
          <Settings size={18} /> Settings
        </NavLink>
      </nav>

      <button
        className="flex items-center gap-2 px-6 py-4 hover:bg-indigo-500"
        onClick={handleLogout}
      >
        <LogOut size={18} /> Logout
      </button>
    </aside>
  );
}
