import React from "react";
import StatsGrid from "../../components/users/StatsGrid";
import ActivityTable from "../../components/users/ActivityTable";
import ChatBox from "../../components/users/ChatBox";

const UserDashboard = () => {
  // Dummy data
  const stats = {
    issuedBooks: 5,
    pendingRequests: 2,
    overdueBooks: 1,
    messages: 3,
  };

  const activities = [
    { date: "2026-02-01", action: "Issued Book: Physics", status: "Returned" },
    {
      date: "2026-02-03",
      action: "Requested Book: Chemistry",
      status: "Pending",
    },
  ];

  return (
    <div className="flex h-full relative">
      {/* Main Content */}
      <div className="flex-1 flex flex-col p-6 overflow-y-auto">
        {/* Stats Grid */}
        <div className="mb-6">
          <StatsGrid stats={stats} />
        </div>

        {/* Activity Table */}
        <div className="mb-6">
          <ActivityTable activities={activities} />
        </div>
      </div>

      {/* Chat System - fixed at bottom right */}
      <div className="fixed bottom-6 right-6 z-50">
        <ChatBox />
      </div>
    </div>
  );
};

export default UserDashboard;
