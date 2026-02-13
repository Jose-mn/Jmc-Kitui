import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { api } from "../../lib/api";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await api.events.getAll();
      const data = await response.json();
      setEvents(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching events:", err);
      setError("Failed to load events");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.date) return;

    const token = localStorage.getItem("token");
    if (!token) {
      setError("Not authenticated. Please login again.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await api.events.create({
        title: form.title,
        date: form.date,
        location: form.location,
      });

      const data = await response.json();

      if (response.ok) {
        setEvents([data.event || { ...form }, ...events]);
        setForm({ title: "", date: "", location: "" });
      } else {
        console.error("Create event error:", data);
        setError(data.error || "Failed to create event");
      }
    } catch (err) {
      console.error("Error creating event:", err);
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;

    try {
      const response = await api.events.delete(id);
      if (response.ok) {
        setEvents(events.filter(e => e.id !== id && e.event_id !== id));
      } else {
        setError("Failed to delete event");
      }
    } catch (err) {
      console.error("Error deleting event:", err);
      setError("Connection error. Please try again.");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-jmcPrimary mb-6">
        Manage Events
      </h1>

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <Card className="mb-8">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-4">
            <Input
              placeholder="Event Title"
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
              required
            />
            <Input
              type="date"
              value={form.date}
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
              required
            />
            <Input
              placeholder="Location"
              value={form.location}
              onChange={(e) =>
                setForm({ ...form, location: e.target.value })
              }
            />
            <Button
              type="submit"
              disabled={loading}
              className="bg-jmcPrimary hover:bg-jmcPrimary/90 disabled:opacity-50"
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
          {events.map((event) => (
            <div
              key={event.id || event.event_id}
              className="flex justify-between items-center border-b pb-3 last:border-b-0"
            >
              <div className="flex-1">
                <p className="font-semibold text-jmcPrimary">{event.title}</p>
                <p className="text-sm text-gray-600">
                  📅 {event.date || event.event_date} {event.location && `• 📍 ${event.location}`}
                </p>
              </div>
              <button
                onClick={() => handleDelete(event.id || event.event_id)}
                className="ml-4 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
              >
                Delete
              </button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
