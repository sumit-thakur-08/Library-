import {
  BookOpen,
  MessageCircle,
  BookMarked,
  AlertTriangle,
} from "lucide-react";

const colorMap = {
  blue: {
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    iconBg: "bg-indigo-100",
    icon: BookOpen, // Books Issued
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    iconBg: "bg-orange-100",
    icon: BookMarked, // Pending Requests
  },
  red: {
    bg: "bg-red-50",
    text: "text-red-600",
    iconBg: "bg-red-100",
    icon: AlertTriangle, // Overdue Books
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-600",
    iconBg: "bg-green-100",
    icon: MessageCircle, // Messages
  },
};

export default function StatCard({ title, value, sub, color = "blue" }) {
  const styles = colorMap[color] || colorMap.blue;
  const Icon = styles.icon;

  return (
    <div className="rounded-xl bg-white p-5 shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-semibold text-gray-900">{value}</h3>
          {sub && (
            <p className={`text-xs mt-1 font-medium ${styles.text}`}>{sub}</p>
          )}
        </div>

        <div className={`p-3 rounded-lg ${styles.iconBg} ${styles.text}`}>
          <Icon size={22} />
        </div>
      </div>
    </div>
  );
}
