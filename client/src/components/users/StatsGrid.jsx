import StatCard from "./StatCard";

export default function StatsGrid({ stats }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      <StatCard
        title="Books Issued"
        value={stats?.issuedBooks || 0}
        color="blue"
      />
      <StatCard
        title="Pending Requests"
        value={stats?.pendingRequests || 0}
        color="orange"
      />
      <StatCard
        title="Overdue Books"
        value={stats?.overdueBooks || 0}
        color="red"
      />
      <StatCard title="Messages" value={stats?.messages || 0} color="green" />
    </div>
  );
}
