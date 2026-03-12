import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/api";

export default function Devotions() {
  const [devotions, setDevotions] = useState([]);
  const [form, setForm] = useState({
    title: "",
    scripture: "",
    content: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      setFetching(true);
      setError("");
      try {
        const res = await api.devotions.getAll();
        if (!res.ok) throw new Error("Failed to load devotions");
        const data = await res.json();
        setDevotions(data);
      } catch (err) {
        console.error(err);
        setError("Could not fetch devotions");
      } finally {
        setFetching(false);
      }
    };
    load();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.content) return;

    setError("");
    try {
      setSubmitting(true);
      let image_url = null;

      if (imageFile) {
        const uploadRes = await api.upload(imageFile);
        if (uploadRes.ok) {
          const uploadData = await uploadRes.json();
          image_url = uploadData.imageUrl;
        } else {
          throw new Error("Image upload failed");
        }
      }

      const res = await api.devotions.create({ ...form, image_url });
      if (res.ok) {
        const created = await res.json();
        setDevotions((prev) => [...prev, created]);
        setForm({ title: "", scripture: "", content: "" });
        setImageFile(null);
        alert("Devotion published successfully!");
      } else {
        const txt = await res.text();
        throw new Error(txt || "Create failed");
      }
    } catch (err) {
      console.error(err);
      setError(err.message || "An error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-jmcPrimary mb-6">
        Manage Devotions
      </h1>

      {error && <p className="text-red-600 mb-2">{error}</p>}

      <Card className="mb-8">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <Input
                  placeholder="Devotion Title"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Scripture Reference</label>
                <Input
                  placeholder="Scripture Reference"
                  value={form.scripture}
                  onChange={(e) => setForm({ ...form, scripture: e.target.value })}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Featured Image</label>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
              <Textarea
                placeholder="Devotion Content"
                rows={6}
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
              />
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="mt-4 bg-jmcPrimary hover:bg-jmcPrimary/90 disabled:opacity-50"
            >
              {submitting ? "Publishing..." : "Publish Devotion"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {fetching && <p>Loading devotions…</p>}
      {!fetching && devotions.length === 0 && (
        <p className="text-gray-500">No devotions yet.</p>
      )}
      {!fetching && devotions.length > 0 && (
        <Card>
          <CardContent className="p-6 space-y-3">
            {devotions.map((d) => (
              <div key={d.devotion_id || d.id} className="border-b pb-2">
                <p className="font-semibold">{d.title}</p>
                <p className="text-sm text-gray-500">{d.scripture}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}