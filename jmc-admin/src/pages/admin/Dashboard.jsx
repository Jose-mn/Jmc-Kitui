import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { api } from "../../lib/api";

export default function Dashboard() {
  const [stats, setStats] = useState({
    events: 0,
    sermons: 0,
    messages: 0,
    devotions: 0,
    leaders: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [eventsRes, sermonsRes, messagesRes, devotionsRes, leadersRes] = await Promise.all([
        api.events.getAll(),
        api.sermons.getAll(),
        api.contact.getAll(),
        api.devotions.getAll(),
        api.leadership.getAll(),
      ]);

      const events = await eventsRes.json();
      const sermons = await sermonsRes.json();
      const messages = await messagesRes.json();
      const devotions = await devotionsRes.json();
      const leaders = await leadersRes.json();

      setStats({
        events: Array.isArray(events) ? events.length : 0,
        sermons: Array.isArray(sermons) ? sermons.length : 0,
        messages: Array.isArray(messages) ? messages.length : 0,
        devotions: Array.isArray(devotions) ? devotions.length : 0,
        leaders: Array.isArray(leaders) ? leaders.length : 0,
      });
    } catch (err) {
      console.error("Error fetching stats:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-jmcPrimary mb-8">
        Dashboard Overview
      </h1>

      {loading ? (
        <p className="text-gray-600">Loading statistics...</p>
      ) : (
        <div className="grid md:grid-cols-5 gap-6">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <p className="text-sm text-gray-500">Total Events</p>
              <h2 className="text-3xl font-bold text-jmcSecondary mt-2">{stats.events}</h2>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <p className="text-sm text-gray-500">Total Sermons</p>
              <h2 className="text-3xl font-bold text-jmcSecondary mt-2">{stats.sermons}</h2>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <p className="text-sm text-gray-500">New Messages</p>
              <h2 className="text-3xl font-bold text-jmcSecondary mt-2">{stats.messages}</h2>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <p className="text-sm text-gray-500">Devotions</p>
              <h2 className="text-3xl font-bold text-jmcSecondary mt-2">{stats.devotions}</h2>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <p className="text-sm text-gray-500">Leaders</p>
              <h2 className="text-3xl font-bold text-jmcSecondary mt-2">{stats.leaders}</h2>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
