import { BookOpen, RotateCcw, UserPlus, ArrowRight } from "lucide-react";

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      user: "Sarah Sharma",
      book: "The Alchemist",
      action: "borrowed",
      icon: BookOpen,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      user: "Rahul Gupta",
      book: "Rich Dad Poor Dad",
      action: "returned",
      icon: RotateCcw,
      color: "bg-green-100 text-green-600",
    },
    {
      id: 3,
      user: "Aditya Verma",
      book: "Think Like a Monk",
      action: "added",
      icon: UserPlus,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-semibold text-gray-800">Recent Activity</h3>
        <BookOpen className="w-5 h-5 text-gray-400" />
      </div>

      {/* Activity List */}
      <ul className="space-y-4">
        {activities.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.id} className="flex items-start gap-3 text-sm">
              {/* Icon */}
              <div className={`p-2 rounded-lg ${item.color}`}>
                <Icon className="w-4 h-4" />
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed">
                <b>{item.user}</b> {item.action} <b>{item.book}</b>
              </p>
            </li>
          );
        })}
      </ul>

      {/* Footer */}
      <button className="mt-5 inline-flex items-center gap-1 text-indigo-600 text-sm font-medium hover:underline">
        View All
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
