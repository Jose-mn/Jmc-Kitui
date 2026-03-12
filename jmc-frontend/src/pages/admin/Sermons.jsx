import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/api";

export default function Sermons() {
  const [sermons, setSermons] = useState([]);
  const [form, setForm] = useState({
    title: "",
    speaker: "",
    video: "",
  });
  const [fetching, setFetching] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // fetch existing sermons on mount
  useEffect(() => {
    const load = async () => {
      setFetching(true);
      setError("");
      try {
        const res = await api.sermons.getAll();
        if (!res.ok) throw new Error("Could not fetch sermons");
        const data = await res.json();
        setSermons(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load sermons");
      } finally {
        setFetching(false);
      }
    };
    load();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.speaker || !form.video) return;

    setError("");
    try {
      setSubmitting(true);
      const res = await api.sermons.create(form);
      if (res.ok) {
        const created = await res.json();
        setSermons((prev) => [...prev, created]);
        setForm({ title: "", speaker: "", video: "" });
        alert("Sermon added successfully!");
      } else {
        const txt = await res.text();
        throw new Error(txt || "Create failed");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to add sermon");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-jmcPrimary mb-6">
        Manage Sermons
      </h1>

      {error && <p className="text-red-600 mb-2">{error}</p>}

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
            disabled={submitting}
            className="bg-jmcPrimary hover:bg-jmcPrimary/90 disabled:opacity-50"
          >
            {submitting ? "Adding..." : "Add Sermon"}
          </Button>
        </CardContent>
      </Card>

      {fetching && <p>Loading sermons…</p>}
      {!fetching && sermons.length === 0 && (
        <p className="text-gray-500">No sermons yet.</p>
      )}
      {!fetching && sermons.length > 0 && (
        <Card>
          <CardContent className="p-6 space-y-3">
            {sermons.map((s) => (
              <div key={s.sermon_id || s.id} className="border-b pb-2">
                <p className="font-semibold">{s.title}</p>
                <p className="text-sm text-gray-500">
                  {s.speaker}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
