import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.date) return;

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

      // 2. Create Event
      const res = await fetch(`${apiUrl}/api/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ ...form, image_url }),
      });

      if (res.ok) {
        setEvents([...events, form]);
        setForm({ title: "", date: "", location: "" });
        setImageFile(null);
        alert("Event added successfully!");
      } else {
        alert("Failed to add event");
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
        Manage Events
      </h1>

      <Card className="mb-8">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
                <Input
                  placeholder="Event Title"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
                <Input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <Input
                  placeholder="Location"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Event Image</label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files[0])}
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="mt-4 bg-jmcPrimary hover:bg-jmcPrimary/90 disabled:opacity-50"
            >
              {loading ? "Adding..." : "Add Event"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-3">
          {events.length === 0 && (
            <p className="text-gray-500">No events created yet.</p>
          )}
          {events.map((event, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-semibold">{event.title}</p>
                <p className="text-sm text-gray-500">
                  {event.date} • {event.location}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
