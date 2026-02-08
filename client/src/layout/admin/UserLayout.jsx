import { Outlet } from "react-router-dom";
import Sidebar from "../../components/users/Sidebar";
import Topbar from "../../components/users/Topbar";

export default function UserLayout() {
  return (
    <div className="flex h-screen bg-indigo-50">
      {/* Sidebar fixed left, full height */}
      <aside className="w-64 flex-shrink-0">
        <Sidebar />
      </aside>

      {/* Right content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar fixed at top */}
        <div className="sticky top-0 z-20">
          <Topbar />
        </div>

        {/* Main content scrollable */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
