import React from "react";

const ActivityTable = ({ activities }) => {
  return (
    <div className="bg-white shadow rounded-xl p-4 overflow-x-auto">
      <h3 className="text-lg font-bold mb-4 text-gray-800">Recent Activity</h3>
      <table className="w-full text-left min-w-[500px]">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="py-3 px-4 text-sm font-medium text-gray-600">
              Date
            </th>
            <th className="py-3 px-4 text-sm font-medium text-gray-600">
              Action
            </th>
            <th className="py-3 px-4 text-sm font-medium text-gray-600">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {activities?.length ? (
            activities.map((item, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-100 hover:bg-indigo-50 transition-colors"
              >
                <td className="py-2 px-4 text-gray-700">{item.date}</td>
                <td className="py-2 px-4 text-gray-700">{item.action}</td>
                <td
                  className={`py-2 px-4 font-medium ${
                    item.status.toLowerCase() === "pending"
                      ? "text-orange-600"
                      : item.status.toLowerCase() === "returned"
                        ? "text-green-600"
                        : "text-gray-700"
                  }`}
                >
                  {item.status}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text-center py-6 text-gray-400">
                No activity yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityTable;
