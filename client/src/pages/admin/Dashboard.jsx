import StatsGrid from "../../components/admin/StatsGrid";
import RecentBooks from "../../components/admin/RecentBooks";
import RecentActivity from "../../components/admin/RecentActivity";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-indigo-700">
          Welcome Back, Khushi kumari!
        </h1>
        <p className="text-gray-500">
          Here’s an overview of the Turtle Library's current status and
          activity.
        </p>
      </div>

      {/* Stats */}
      <StatsGrid />

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentBooks />
        <RecentActivity />
      </div>
    </div>
  );
}
