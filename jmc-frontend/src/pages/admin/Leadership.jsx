import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/api";

export default function Leadership() {
  const [leaders, setLeaders] = useState([]);
  const [form, setForm] = useState({
    name: "",
    position: "",
    bio: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // load initial leaders
  useEffect(() => {
    const load = async () => {
      setFetching(true);
      setError("");
      try {
        const res = await api.leadership.getAll();
        if (!res.ok) throw new Error("Unable to load leaders");
        const data = await res.json();
        setLeaders(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch leaders");
      } finally {
        setFetching(false);
      }
    };
    load();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.position) return;

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

      const res = await api.leadership.create({ ...form, image_url });
      if (res.ok) {
        const created = await res.json();
        setLeaders((prev) => [...prev, created]);
        setForm({ name: "", position: "", bio: "" });
        setImageFile(null);
        alert("Leader added successfully!");
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
        Leadership Management
      </h1>

      {error && <p className="text-red-600 mb-2">{error}</p>}

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
              disabled={submitting}
              className="mt-4 bg-jmcPrimary hover:bg-jmcPrimary/90 disabled:opacity-50"
            >
              {submitting ? "Adding..." : "Add Leader"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {fetching && <p>Loading leaders…</p>}
      {!fetching && leaders.length === 0 && (
        <p className="text-gray-500">No leaders added yet.</p>
      )}
      {!fetching && leaders.length > 0 && (
        <Card>
          <CardContent className="p-6 space-y-3">
            {leaders.map((leader) => (
              <div
                key={leader.leader_id || leader.id}
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
      )}
    </div>
  );
}
