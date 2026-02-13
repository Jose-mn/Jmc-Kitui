import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { api } from "../../lib/api";

export default function Devotions() {
  const [devotions, setDevotions] = useState([]);
  const [form, setForm] = useState({
    title: "",
    scripture: "",
    content: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchDevotions();
  }, []);

  const fetchDevotions = async () => {
    try {
      const response = await api.devotions.getAll();
      const data = await response.json();
      setDevotions(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching devotions:", err);
      setError("Failed to load devotions");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.content) return;

    const token = localStorage.getItem("token");
    if (!token) {
      setError("Not authenticated. Please login again.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await api.devotions.create(form);
      const data = await response.json();

      if (response.ok) {
        setDevotions([data.devotion || { ...form }, ...devotions]);
        setForm({ title: "", scripture: "", content: "" });
      } else {
        console.error("Create devotion error:", data);
        setError(data.error || "Failed to create devotion");
      }
    } catch (err) {
      console.error("Error creating devotion:", err);
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this devotion?")) return;

    try {
      const response = await api.devotions.delete(id);
      if (response.ok) {
        setDevotions(devotions.filter(d => d.id !== id && d.devotion_id !== id));
      } else {
        setError("Failed to delete devotion");
      }
    } catch (err) {
      console.error("Error deleting devotion:", err);
      setError("Connection error. Please try again.");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-jmcPrimary mb-6">
        Manage Devotions
      </h1>

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <Card className="mb-8">
        <CardContent className="p-6 space-y-4">
          <Input
            placeholder="Devotion Title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />
          <Input
            placeholder="Scripture Reference"
            value={form.scripture}
            onChange={(e) =>
              setForm({ ...form, scripture: e.target.value })
            }
          />
          <Textarea
            placeholder="Devotion Content"
            rows={6}
            value={form.content}
            onChange={(e) =>
              setForm({ ...form, content: e.target.value })
            }
          />
          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-jmcPrimary hover:bg-jmcPrimary/90 disabled:opacity-50"
          >
            {loading ? "Publishing..." : "Publish Devotion"}
          </Button>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-jmcPrimary mb-4">
          Published Devotions ({devotions.length})
        </h2>
        {devotions.length === 0 ? (
          <p className="text-gray-600">No devotions yet.</p>
        ) : (
          devotions.map((devotion) => (
            <Card key={devotion.id} className="rounded-xl shadow-md">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-jmcPrimary mb-1">
                      {devotion.title}
                    </h3>
                    {devotion.scripture && (
                      <p className="text-sm text-gray-600 mb-2">
                        {devotion.scripture}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => handleDelete(devotion.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                  >
                    Delete
                  </button>
                </div>
                <p className="text-gray-700 line-clamp-3">
                  {devotion.content}
                </p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
