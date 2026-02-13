import { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMessages = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/contact`);
      if (!res.ok) throw new Error("Failed to fetch messages");
      const data = await res.json();
      setMessages(data);
    } catch (err) {
      setError("Failed to load messages. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Contact Messages</h1>
        <button
          onClick={fetchMessages}
          className="flex items-center gap-2 px-4 py-2 bg-jmcPrimary text-white rounded-md hover:bg-jmcPrimary/90 transition"
        >
          <RefreshCw size={18} />
          Refresh
        </button>
      </div>

      {loading && <p className="text-gray-600">Loading messages...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && messages.length === 0 && <p className="text-gray-600">No messages yet.</p>}

      {!loading && messages.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="p-4 text-left">Full Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Message</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Submitted At</th>
              </tr>
            </thead>

            <tbody>
              {messages.map((msg) => (
                <tr key={msg.message_id} className="border-t">
                  <td className="p-4">{msg.full_name}</td>
                  <td className="p-4">{msg.email}</td>
                  <td className="p-4 text-gray-600 truncate max-w-xs">
                    {msg.message}
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs
                      ${
                        msg.status === "New"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {msg.status}
                    </span>
                  </td>
                  <td className="p-4">
                    {new Date(msg.submitted_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
