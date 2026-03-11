import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Sermons() {
  const [sermons, setSermons] = useState([]);
  const [form, setForm] = useState({
    title: "",
    speaker: "",
    video: "",
  });
  const [loading, setLoading] = useState(false);

  // Initial fetch of sermons would go here ideally

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.speaker || !form.video) return;

    try {
      setLoading(true);
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const token = localStorage.getItem("token");

      const res = await fetch(`${apiUrl}/api/sermons`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSermons([...sermons, form]);
        setForm({ title: "", speaker: "", video: "" });
        alert("Sermon added successfully!");
      } else {
        alert("Failed to add sermon");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-jmcPrimary mb-6">
        Manage Sermons
      </h1>

      <Card className="mb-8">
        <CardContent className="p-6 space-y-4">
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
            className="bg-jmcPrimary hover:bg-jmcPrimary/90 disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Sermon"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
