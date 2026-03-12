import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/api";

// admin/events management page: list, create, edit, delete events
export default function Events() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // fetch existing events
  useEffect(() => {
    const load = async () => {
      setFetching(true);
      setError("");
      try {
        const res = await api.events.getAll();
        if (!res.ok) throw new Error("Unable to load events");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch events");
      } finally {
        setFetching(false);
      }
    };
    load();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.date) return;

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

      const res = await api.events.create({ ...form, image_url });
      if (res.ok) {
        const created = await res.json();
        setEvents((prev) => [...prev, created]);
        setForm({ title: "", date: "", location: "" });
        setImageFile(null);
        alert("Event added successfully!");
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
        Manage Events
      </h1>

      {error && <p className="text-red-600 mb-2">{error}</p>}

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
              disabled={submitting}
              className="mt-4 bg-jmcPrimary hover:bg-jmcPrimary/90 disabled:opacity-50"
            >
              {submitting ? "Adding..." : "Add Event"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {fetching && <p>Loading events…</p>}
      {!fetching && events.length === 0 && (
        <p className="text-gray-500">No events created yet.</p>
      )}
      {!fetching && events.length > 0 && (
        <Card>
          <CardContent className="p-6 space-y-3">
            {events.map((event) => (
              <div
                key={event.event_id || event.id}
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
      )}
    </div>
  );
}
