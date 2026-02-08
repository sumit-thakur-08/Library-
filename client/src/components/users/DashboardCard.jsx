import React from "react";

const DashboardCard = ({ title, value, color }) => {
  const colorMap = {
    blue: "bg-blue-500",
    orange: "bg-orange-500",
    red: "bg-red-500",
    green: "bg-green-500",
  };

  return (
    <div
      className={`p-4 rounded shadow-md text-white ${colorMap[color] || "bg-gray-500"}`}
    >
      <h3 className="text-lg">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default DashboardCard;
