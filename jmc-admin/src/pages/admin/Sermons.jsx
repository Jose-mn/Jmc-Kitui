import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { api } from "../../lib/api";

export default function Sermons() {
  const [sermons, setSermons] = useState([]);
  const [form, setForm] = useState({
    title: "",
    speaker: "",
    video: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchSermons();
  }, []);

  const fetchSermons = async () => {
    try {
      const response = await api.sermons.getAll();
      const data = await response.json();
      setSermons(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching sermons:", err);
      setError("Failed to load sermons");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.speaker || !form.video) return;

    const token = localStorage.getItem("token");
    if (!token) {
      setError("Not authenticated. Please login again.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await api.sermons.create({
        title: form.title,
        speaker: form.speaker,
        video: form.video,
      });

      const data = await response.json();

      if (response.ok) {
        setSermons([data.sermon || { ...form }, ...sermons]);
        setForm({ title: "", speaker: "", video: "" });
      } else {
        console.error("Create sermon error:", data);
        setError(data.error || "Failed to create sermon");
      }
    } catch (err) {
      console.error("Error creating sermon:", err);
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this sermon?")) return;

    try {
      const response = await api.sermons.delete(id);
      if (response.ok) {
        setSermons(sermons.filter(s => s.id !== id && s.sermon_id !== id));
      } else {
        setError("Failed to delete sermon");
      }
    } catch (err) {
      console.error("Error deleting sermon:", err);
      setError("Connection error. Please try again.");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-jmcPrimary mb-6">
        Manage Sermons
      </h1>

      <Card className="mb-8">
        <CardContent className="p-6 space-y-4">
          {error && (
            <div className="bg-red-100 text-red-700 p-4 rounded-lg">
              {error}
            </div>
          )}
          <Input
            placeholder="Sermon Title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />
          <Input
            placeholder="Speaker"
            value={form.speaker}
            onChange={(e) =>
              setForm({ ...form, speaker: e.target.value })
            }
          />
          <Input
            placeholder="YouTube / Video Link"
            value={form.video}
            onChange={(e) =>
              setForm({ ...form, video: e.target.value })
            }
          />
          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-jmcPrimary hover:bg-jmcPrimary/90"
          >
            {loading ? "Adding..." : "Add Sermon"}
          </Button>
        </CardContent>
      </Card>

      {sermons.length === 0 ? (
        <p className="text-gray-500">No sermons yet.</p>
      ) : (
        <div className="space-y-4">
          {sermons.map((sermon) => (
            <Card key={sermon.id || sermon.sermon_id}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-jmcDark">
                      {sermon.title}
                    </h3>
                    <p className="text-gray-600">Speaker: {sermon.speaker}</p>
                  </div>
                  <Button
                    variant="destructive"
                    onClick={() =>
                      handleDelete(sermon.id || sermon.sermon_id)
                    }
                    className="bg-red-500 hover:bg-red-600"
                  >
                    Delete
                  </Button>
                </div>
                {sermon.video && (
                  <a
                    href={sermon.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm"
                  >
                    Watch video
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
