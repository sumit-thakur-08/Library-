import React, { useState } from "react";
import { X } from "lucide-react";

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { from: "admin", text: "Hello! How can I help you?" },
    { from: "user", text: "Hi, I want to know my pending books." },
  ]);

  const [isOpen, setIsOpen] = useState(true);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { from: "user", text: message }]);
      setMessage("");
    }
  };

  if (!isOpen) return null; // Close chat

  return (
    <div className="w-80 h-96 bg-white shadow-xl rounded-xl flex flex-col fixed right-6 bottom-6 z-50">
      {/* Header with close button */}
      <div className="flex items-center justify-between p-4 border-b font-bold text-gray-800 bg-indigo-50 rounded-t-xl">
        Chat Support
        <button
          className="p-1 rounded hover:bg-gray-200"
          onClick={() => setIsOpen(false)}
        >
          <X size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-lg max-w-[75%] ${
              msg.from === "user"
                ? "bg-indigo-100 self-end text-gray-900"
                : "bg-gray-200 self-start text-gray-800"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-t flex gap-2">
        <input
          type="text"
          className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
