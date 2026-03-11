import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Devotionals() {
  const [searchTerm, setSearchTerm] = useState("");
  const [devotionals, setDevotionals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDevotionals = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
        const res = await fetch(`${apiUrl}/api/devotions`);
        if (res.ok) {
          const data = await res.json();
          const mappedData = data.map(dev => ({
            id: dev.id,
            title: dev.title,
            scripture: dev.scripture || "N/A",
            excerpt: dev.content ? dev.content.substring(0, 150) + "..." : "",
            date: dev.created_at,
            author: "JMC Kitui",
            image: dev.image_url ? `${apiUrl}${dev.image_url}` : "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80",
          }));
          setDevotionals(mappedData);
        }
      } catch (err) {
        console.error("Failed to fetch devotionals:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDevotionals();
  }, []);

  const filteredDevotionals = devotionals.filter(dev =>
    dev.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dev.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dev.scripture.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString) => {
    if (!dateString) return "Date TBA";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-950 transition-colors duration-300">
      {/* NAVIGATION - This should appear at the top */}
      <Navigation />

      <div className="flex-1 px-4 sm:px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-purple-900 dark:text-white mb-4 transition-colors">
              Daily Devotionals
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
              Short daily reflections to encourage your walk with God
            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="mb-8 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search devotionals..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
            />
          </div>

          {/* Devotionals Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDevotionals.map((devotional, index) => (
              <motion.div
                key={devotional.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/devotionals/${devotional.id}`}
                  className="block bg-white dark:bg-slate-900 border border-transparent dark:border-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full"
                >
                  {devotional.image && (
                    <img
                      src={devotional.image}
                      alt={devotional.title}
                      className="w-full h-48 object-cover"
                    />
                  )}

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3 transition-colors">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {formatDate(devotional.date)}
                      </span>
                      {devotional.author && (
                        <span className="flex items-center gap-1">
                          <User size={16} />
                          {devotional.author}
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">
                      {devotional.title}
                    </h2>

                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 text-sm mb-3 transition-colors">
                      <BookOpen size={16} />
                      <span className="font-medium">{devotional.scripture}</span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 line-clamp-3 transition-colors">
                      {devotional.excerpt}
                    </p>

                    <div className="mt-4 text-purple-600 dark:text-purple-400 font-semibold text-sm transition-colors">
                      Read More →
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredDevotionals.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg transition-colors">No devotionals found matching your search.</p>
            </div>
          )}
        </div>
      </div>

      {/* FOOTER - This should appear at the bottom */}
      <Footer />
    </div>
  );
}