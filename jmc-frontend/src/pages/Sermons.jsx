import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, Calendar, User, Search } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Sermons() {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSermons();
  }, []);

  const fetchSermons = async () => {
    try {
      setLoading(true);
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const res = await fetch(`${apiUrl}/api/sermons`);

      if (!res.ok) throw new Error("Failed to fetch sermons");

      const data = await res.json();
      setSermons(Array.isArray(data) ? data : []);
      setError(null);
    } catch (err) {
      console.error("Error fetching sermons:", err);
      setError("Unable to load sermons at this moment. Please try again later.");
      setSermons([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredSermons = sermons.filter(sermon =>
    sermon.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sermon.speaker?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString) => {
    if (!dateString) return "Date TBA";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const extractYoutubeId = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative pt-20 md:pt-24 pb-16 md:pb-24 px-4 md:px-6 bg-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-4"
            >
              <PlayCircle className="w-16 h-16 md:w-20 md:h-20 text-purple-300" />
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6">
              Our Sermons
            </h1>

            <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Watch and listen to powerful messages that will transform, inspire, and strengthen your faith in Jesus Christ.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEARCH & FILTER */}
      <section className="py-8 px-4 md:px-6 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search sermons by title or speaker..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* SERMONS GRID */}
      <section className="flex-1 py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="inline-block"
              >
                <PlayCircle className="w-12 h-12 text-purple-600 opacity-50" />
              </motion.div>
              <p className="mt-4 text-gray-600 text-lg">Loading sermons...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20 bg-red-50 rounded-lg border border-red-200">
              <p className="text-red-600 text-lg mb-4">{error}</p>
              <Button
                onClick={fetchSermons}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Try Again
              </Button>
            </div>
          ) : filteredSermons.length === 0 ? (
            <div className="text-center py-20">
              <PlayCircle className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">
                {searchTerm
                  ? "No sermons match your search."
                  : "No sermons available at this time. Check back soon!"}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSermons.map((sermon, index) => {
                const youtubeId = extractYoutubeId(sermon.video_url);
                return (
                  <motion.div
                    key={sermon.sermon_id || index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow">
                      {/* Video Thumbnail */}
                      <div className="relative w-full pt-[56.25%] bg-gray-900 overflow-hidden group">
                        {youtubeId ? (
                          <>
                            <img
                              src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
                              alt={sermon.title}
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all flex items-center justify-center">
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <a
                                  href={sermon.video_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                                >
                                  <PlayCircle className="w-8 h-8 text-white fill-white" />
                                </a>
                              </motion.div>
                            </div>
                          </>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-purple-700">
                            <PlayCircle className="w-12 h-12 text-white opacity-50" />
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <CardContent className="flex-1 p-5 flex flex-col">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition">
                          {sermon.title || "Untitled Sermon"}
                        </h3>

                        <div className="space-y-2 mb-4 text-sm text-gray-600">
                          {sermon.speaker && (
                            <div className="flex items-center gap-2">
                              <User size={16} className="text-purple-600" />
                              <span>{sermon.speaker}</span>
                            </div>
                          )}
                          {sermon.created_at && (
                            <div className="flex items-center gap-2">
                              <Calendar size={16} className="text-purple-600" />
                              <span>{formatDate(sermon.created_at)}</span>
                            </div>
                          )}
                        </div>

                        {sermon.video_url && (
                          <motion.a
                            href={sermon.video_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto pt-4 inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition"
                            whileHover={{ x: 5 }}
                          >
                            <PlayCircle size={18} />
                            Watch Sermon
                          </motion.a>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
