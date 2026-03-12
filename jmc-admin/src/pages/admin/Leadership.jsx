import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { api } from "../../lib/api";

export default function Leadership() {
  const [leaders, setLeaders] = useState([]);
  const [form, setForm] = useState({
    name: "",
    position: "",
    bio: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchLeaders();
  }, []);

  const fetchLeaders = async () => {
    try {
      const response = await api.leadership.getAll();
      const data = await response.json();
      setLeaders(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching leaders:", err);
      setError("Failed to load leaders");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.position) return;

    const token = localStorage.getItem("token");
    if (!token) {
      setError("Not authenticated. Please login again.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      let response;
      if (editingId) {
        response = await api.leadership.update(editingId, form);
      } else {
        response = await api.leadership.create(form);
      }
      const data = await response.json();

      if (response.ok) {
        if (editingId) {
          setLeaders(leaders.map((l) => (l.leader_id === editingId || l.id === editingId ? { ...l, ...form } : l)));
          setEditingId(null);
        } else {
          setLeaders([data.leader || { ...form }, ...leaders]);
        }
        setForm({ name: "", position: "", bio: "" });
      } else {
        console.error("Leader error:", data);
        setError(data.error || "Failed to submit leader");
      }
    } catch (err) {
      console.error("Error submitting leader:", err);
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this leader?")) return;

    try {
      const response = await api.leadership.delete(id);
      if (response.ok) {
        setLeaders(leaders.filter(l => l.leader_id !== id && l.id !== id));
      } else {
        setError("Failed to delete leader");
      }
    } catch (err) {
      console.error("Error deleting leader:", err);
      setError("Connection error. Please try again.");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-jmcPrimary mb-6">
        Leadership Management
      </h1>

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <Card className="mb-8">
        <CardContent className="p-6 space-y-4">
          <Input
            placeholder="Leader Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <Input
            placeholder="Position"
            value={form.position}
            onChange={(e) => setForm({ ...form, position: e.target.value })}
          />
          <Textarea
            placeholder="Bio"
            rows={5}
            value={form.bio}
            onChange={(e) => setForm({ ...form, bio: e.target.value })}
          />
          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-jmcPrimary hover:bg-jmcPrimary/90 disabled:opacity-50"
          >
            {loading ? (editingId ? "Updating..." : "Adding...") : (editingId ? "Update Leader" : "Add Leader")}
          </Button>
          {editingId && (
            <button
              type="button"
              onClick={() => {
                setEditingId(null);
                setForm({ name: "", position: "", bio: "" });
              }}
              className="ml-4 text-sm text-gray-600 hover:underline"
            >
              Cancel
            </button>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-3">
          {leaders.length === 0 && (
            <p className="text-gray-500">No leaders added yet.</p>
          )}
          {leaders.map((leader) => (
            <div
              key={leader.leader_id || leader.id}
              className="flex justify-between items-start border-b pb-4 last:border-b-0"
            >
              <div className="flex-1">
                <p className="font-semibold text-jmcPrimary">{leader.name}</p>
                <p className="text-sm text-gray-600">{leader.position}</p>
                <p className="text-xs text-gray-500 mt-1">{leader.bio}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleDelete(leader.leader_id || leader.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    setEditingId(leader.leader_id || leader.id);
                    setForm({
                      name: leader.name,
                      position: leader.position,
                      bio: leader.bio || "",
                    });
                  }}
                  className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
