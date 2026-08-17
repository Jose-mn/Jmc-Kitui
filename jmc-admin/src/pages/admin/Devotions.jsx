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
    image_url: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
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
      let response;
      if (editingId) {
        response = await api.devotions.update(editingId, form);
      } else {
        response = await api.devotions.create(form);
      }
      const data = await response.json();

      if (response.ok) {
        if (editingId) {
          setDevotions(devotions.map((d) => (d.devotion_id === editingId || d.id === editingId ? { ...d, ...form } : d)));
          setEditingId(null);
        } else {
          setDevotions([data.devotion || { ...form }, ...devotions]);
        }
        setForm({ title: "", scripture: "", content: "", image_url: "" });
      } else {
        console.error("Devotion error:", data);
        setError(data.error || "Failed to submit devotion");
      }
    } catch (err) {
      console.error("Error submitting devotion:", err);
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploadingImage(true);
    setError("");
    try {
      const res = await api.upload.upload(file);
      const data = await res.json();
      if (res.ok) {
        setForm((prev) => ({ ...prev, image_url: data.imageUrl }));
      } else {
        setError(data.error || "Failed to upload image");
      }
    } catch (err) {
      console.error("Image upload error:", err);
      setError("Failed to upload image due to connection error.");
    } finally {
      setUploadingImage(false);
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
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Devotion Image</label>
            <div className="flex items-center gap-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={uploadingImage}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
              />
              {uploadingImage && <span className="text-sm text-gray-500">Uploading image...</span>}
            </div>
            {form.image_url && (
              <div className="mt-2 relative w-32 h-20 rounded-md overflow-hidden border border-gray-200">
                <img
                  src={form.image_url.startsWith("http") ? form.image_url : `${import.meta.env.VITE_API_URL || "http://localhost:5000"}${form.image_url}`}
                  alt="Devotion"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setForm({ ...form, image_url: "" })}
                  className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 text-xs hover:bg-red-700"
                >
                  X
                </button>
              </div>
            )}
          </div>
          <Button
            onClick={handleSubmit}
            disabled={loading || uploadingImage}
            className="bg-jmcPrimary hover:bg-jmcPrimary/90 disabled:opacity-50"
          >
            {loading ? (editingId ? "Updating..." : "Publishing...") : (editingId ? "Update Devotion" : "Publish Devotion")}
          </Button>
          {editingId && (
            <button
              type="button"
              onClick={() => {
                setEditingId(null);
                setForm({ title: "", scripture: "", content: "", image_url: "" });
              }}
              className="ml-4 text-sm text-gray-600 hover:underline"
            >
              Cancel
            </button>
          )}
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
            <Card key={devotion.devotion_id || devotion.id} className="rounded-xl shadow-md">
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
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDelete(devotion.devotion_id || devotion.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => {
                          setEditingId(devotion.devotion_id || devotion.id);
                          setForm({
                            title: devotion.title,
                            scripture: devotion.scripture || "",
                            content: devotion.content,
                            image_url: devotion.image_url || "",
                          });
                        }}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
                      >
                        Edit
                      </button>
                    </div>
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
