import StatCard from "./StatCard";

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      <StatCard title="Total Books" value="12,537" color="blue" />
      <StatCard
        title="Books Borrowed"
        value="2,189"
        sub="+12 Today"
        color="orange"
      />
      <StatCard title="Total Users" value="3,456" color="purple" />
      <StatCard
        title="Overdue Books"
        value="154"
        sub="+5 This Week"
        color="red"
      />
    </div>
  );
}
