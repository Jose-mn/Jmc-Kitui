import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Leadership() {
  const [leaders, setLeaders] = useState([]);
  const [form, setForm] = useState({
    name: "",
    position: "",
    bio: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.position) return;

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

      // 2. Add Leader
      const res = await fetch(`${apiUrl}/api/leadership`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ ...form, image_url }),
      });

      if (res.ok) {
        setLeaders([...leaders, form]);
        setForm({ name: "", position: "", bio: "" });
        setImageFile(null);
        alert("Leader added successfully!");
      } else {
        alert("Failed to add leader");
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
        Leadership Management
      </h1>

      <Card className="mb-8">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Leader Name</label>
                <Input
                  placeholder="Leader Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                <Input
                  placeholder="Position"
                  value={form.position}
                  onChange={(e) => setForm({ ...form, position: e.target.value })}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Profile Photo (Optional)</label>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
              <Textarea
                placeholder="Bio"
                rows={5}
                value={form.bio}
                onChange={(e) => setForm({ ...form, bio: e.target.value })}
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="mt-4 bg-jmcPrimary hover:bg-jmcPrimary/90 disabled:opacity-50"
            >
              {loading ? "Adding..." : "Add Leader"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-3">
          {leaders.length === 0 && (
            <p className="text-gray-500">No leaders added yet.</p>
          )}
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-semibold">{leader.name}</p>
                <p className="text-sm text-gray-500">{leader.position}</p>
                <p className="text-xs text-gray-400">{leader.bio}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
