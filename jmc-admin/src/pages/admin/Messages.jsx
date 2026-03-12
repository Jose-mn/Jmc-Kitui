import { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";
import { api } from "@/lib/api"; // centralized fetch helper

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMessages = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await api.contact.getAll();
      if (!res.ok) throw new Error("Failed to fetch messages");
      const data = await res.json();
      setMessages(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load messages. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const STATUS_OPTIONS = ["New", "Read", "Replied"];

  const updateStatus = async (id, status) => {
    setError("");
    try {
      const res = await api.contact.updateStatus(id, status);
      if (res.ok) {
        setMessages((msgs) =>
          msgs.map((m) => (m.message_id === id ? { ...m, status } : m))
        );
      } else {
        const text = await res.text();
        throw new Error(text || "update failed");
      }
    } catch (err) {
      console.error("Failed to update status", err);
      setError("Unable to change message status. Please try again.");
    }
  };

  const deleteMessage = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    setError("");
    try {
      const res = await api.contact.delete(id);
      if (res.ok) {
        setMessages((msgs) => msgs.filter((m) => m.message_id !== id));
      } else {
        const text = await res.text();
        throw new Error(text || "delete failed");
      }
    } catch (err) {
      console.error("Failed to delete message", err);
      setError("Could not delete message. Please try again.");
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
                <th className="p-4 text-left">Actions</th>
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
                    <select
                      value={msg.status || "New"}
                      onChange={(e) => updateStatus(msg.message_id, e.target.value)}
                      className="text-sm border rounded px-2 py-1"
                    >
                      {STATUS_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="p-4">
                    {new Date(msg.submitted_at).toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => deleteMessage(msg.message_id)}
                      className="text-red-600 hover:underline text-sm"
                    >
                      Delete
                    </button>
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
