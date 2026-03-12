import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { api } from "../../lib/api";

// initial placeholders while loading
const placeholderStats = [
  { title: "Events", value: 0 },
  { title: "Sermons", value: 0 },
  { title: "Devotions", value: 0 },
  { title: "Messages", value: 0 },
  { title: "Media Files", value: 0 },
];

const growthData = [
  { month: "Jan", growth: 20 },
  { month: "Feb", growth: 35 },
  { month: "Mar", growth: 50 },
  { month: "Apr", growth: 65 },
  { month: "May", growth: 90 },
];

export default function Analytics() {
  const [stats, setStats] = useState(placeholderStats);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const [eventsRes, sermonsRes, devotionsRes, messagesRes, mediaRes] =
          await Promise.all([
            api.events.getAll(),
            api.sermons.getAll(),
            api.devotions.getAll(),
            api.contact.getAll(),
            api.upload.getAll(),
          ]);

        const [events, sermons, devotions, messages, media] = await Promise.all([
          eventsRes.json(),
          sermonsRes.json(),
          devotionsRes.json(),
          messagesRes.json(),
          mediaRes.json(),
        ]);

        setStats([
          { title: "Events", value: Array.isArray(events) ? events.length : 0 },
          { title: "Sermons", value: Array.isArray(sermons) ? sermons.length : 0 },
          { title: "Devotions", value: Array.isArray(devotions) ? devotions.length : 0 },
          { title: "Messages", value: Array.isArray(messages) ? messages.length : 0 },
          { title: "Media Files", value: Array.isArray(media) ? media.length : 0 },
        ]);
      } catch (err) {
        console.error("Failed to load analytics stats", err);
      }
    };
    loadStats();
  }, []);

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-jmcPrimary">
        Dashboard Analytics
      </h1>

      {/* Stat Cards */}
      <div className="grid md:grid-cols-5 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="rounded-2xl shadow-xl hover:scale-105 transition">
              <CardContent className="p-6 text-center">
                <h2 className="text-lg text-gray-500">{stat.title}</h2>
                <p className="text-3xl font-bold text-jmcPrimary">
                  {stat.value}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Growth Chart */}
      <Card className="rounded-2xl shadow-xl">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-jmcPrimary mb-4">
            Monthly Growth
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={growthData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="growth"
                stroke="#6B21A8"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Messages Summary */}
      <Card className="rounded-2xl shadow-xl">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-jmcPrimary mb-4">
            Message Status Summary
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <p className="text-gray-600 text-sm">New Messages</p>
              <p className="text-2xl font-bold text-green-600">12</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <p className="text-gray-600 text-sm">Read Messages</p>
              <p className="text-2xl font-bold text-blue-600">8</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <p className="text-gray-600 text-sm">Replied Messages</p>
              <p className="text-2xl font-bold text-purple-600">4</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
