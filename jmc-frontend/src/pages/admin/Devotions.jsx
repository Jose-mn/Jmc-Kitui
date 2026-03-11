import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Devotions() {
  const [devotions, setDevotions] = useState([]);
  const [form, setForm] = useState({
    title: "",
    scripture: "",
    content: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.content) return;

    try {
      setLoading(true);
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const token = localStorage.getItem("token");
      let image_url = null;

      // 1. Upload Image (if provided)
      if (imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);

        const uploadRes = await fetch(`${apiUrl}/api/upload`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`
          },
          body: formData,
        });

        if (uploadRes.ok) {
          const uploadData = await uploadRes.json();
          image_url = uploadData.imageUrl;
        } else {
          alert("Image upload failed");
          return;
        }
      }

      // 2. Create Devotion
      const res = await fetch(`${apiUrl}/api/devotions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ ...form, image_url }),
      });

      if (res.ok) {
        setDevotions([...devotions, form]);
        setForm({ title: "", scripture: "", content: "" });
        setImageFile(null);
        alert("Devotion published successfully!");
      } else {
        alert("Failed to publish devotion");
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
        Manage Devotions
      </h1>

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
              disabled={loading}
              className="mt-4 bg-jmcPrimary hover:bg-jmcPrimary/90 disabled:opacity-50"
            >
              {loading ? "Publishing..." : "Publish Devotion"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
