import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Church, PlayCircle, HeartHandshake, Quote, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ImageCarousel from "@/components/ImageCarousel";
import Footer from "@/components/Footer";
import faithImage from "../assets/devotionals/faith.jpeg";
import prayerImage from "../assets/devotionals/prayer.jpeg";
import purposeImage from "../assets/devotionals/purpose.jpeg";
import pastorateImage from "../assets/pastorate.jpeg";

export default function Home() {
  const navigate = useNavigate();
  const [latestSermons, setLatestSermons] = useState([]);
  const [sermonsLoading, setSermonsLoading] = useState(true);

  useEffect(() => {
    fetchLatestSermons();
  }, []);

  const fetchLatestSermons = async () => {
    try {
      setSermonsLoading(true);
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const res = await fetch(`${apiUrl}/api/sermons`);
      if (!res.ok) throw new Error("Failed to fetch sermons");
      const data = await res.json();
      const allSermons = (Array.isArray(data) ? data : [])
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

      // If DB has sermons, show the most recent ones
      if (allSermons.length > 0) {
        // Find the most recent Sunday
        const now = new Date();
        const lastSunday = new Date(now);
        lastSunday.setDate(now.getDate() - now.getDay());
        lastSunday.setHours(0, 0, 0, 0);
        const nextDay = new Date(lastSunday);
        nextDay.setDate(lastSunday.getDate() + 1);

        const sundaySermons = allSermons.filter((s) => {
          const d = new Date(s.created_at);
          return d >= lastSunday && d < nextDay;
        });

        const picked = sundaySermons.length > 0
          ? sundaySermons.slice(0, 3)
          : allSermons.slice(0, 3);

        setLatestSermons(picked);
        return;
      }

      // DB is empty — fall through to YouTube / hard fallback below
      throw new Error("No sermons in database yet");
    } catch (err) {
      console.error("Error fetching latest sermons:", err);
      // Try to fetch dynamically from YouTube RSS as fallback
      try {
        const ytUrl = 'https://www.youtube.com/feeds/videos.xml?channel_id=UC9sbvr5FmX9fu1VIShXMeYA';
        const ytRes = await fetch(`https://corsproxy.io/?url=${encodeURIComponent(ytUrl)}`);
        if (ytRes.ok) {
          const ytText = await ytRes.text();
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(ytText, "text/xml");
          const entries = xmlDoc.querySelectorAll("entry");

          if (entries && entries.length > 0) {
            const ytSermons = Array.from(entries).slice(0, 3).map((entry, index) => ({
              sermon_id: `yt-home-${index}`,
              title: entry.querySelector("title")?.textContent || "JMC KITUI Sermon",
              speaker: entry.querySelector("author > name")?.textContent || "JMC KITUI",
              video_url: entry.querySelector("link")?.getAttribute("href") || "https://www.youtube.com/@JMCKITUI",
              created_at: entry.querySelector("published")?.textContent || new Date().toISOString()
            }));
            setLatestSermons(ytSermons);
            return;
          }
        }
      } catch (ytErr) {
        console.error("Error fetching from YouTube fallback:", ytErr);
      }

      // Hard fallback: show the most recent known sermon when everything else fails
      setLatestSermons([
        {
          sermon_id: "fallback-1",
          title: "United With the Lord",
          speaker: "Bishop Elijah Mutua",
          video_url: "https://www.youtube.com/watch?v=fkVLZptUHGo",
          created_at: "2026-03-01T10:00:00Z"
        }
      ]);
    } finally {
      setSermonsLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Date TBA";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const extractYoutubeId = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtube\.com\/(?:watch\?v=|live\/)|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };
  return (
    <div className="flex flex-col dark:bg-slate-950 transition-colors duration-300">
      <Navigation />

      {/* HERO SECTION */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Decorative dots */}
              <div className="absolute -top-6 -left-6 flex gap-2 z-20">
                <div className="w-3 h-3 rounded-full bg-purple-600" />
                <div className="w-3 h-3 rounded-full bg-purple-600" />
                <div className="w-3 h-3 rounded-full bg-purple-600" />
              </div>

              {/* Image Carousel */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square md:aspect-auto md:h-[600px]">
                <ImageCarousel />
              </div>

              {/* Decorative bottom right dots */}
              <div className="absolute -bottom-4 -right-4 flex gap-2 z-20">
                <div className="w-3 h-3 rounded-full bg-purple-600" />
                <div className="w-3 h-3 rounded-full bg-purple-600" />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {/* Decorative Quote Marks */}
            <div className="flex gap-2 text-6xl text-gray-300">
              <Quote className="w-16 h-16 fill-current" />
            </div>

            <h2 className="text-5xl font-black text-slate-900 dark:text-white leading-tight transition-colors duration-300">
              Welcome to Jesus Manifestation Church
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              Jesus Manifestation Church is a Christ-centered family where faith is built, lives are transformed, and purpose is discovered. We are committed to teaching the Word of God with clarity, worshipping in truth, and living out the love of Christ in our daily lives. No matter where you are in your journey of faith, this is a place where you can grow, belong, and encounter God.

              “And the Word became flesh and dwelt among us, and we beheld His glory.”
              John 1:14
            </p>

            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
              Join us as we worship, grow in faith, and engage in meaningful ministry. There's a place for you here.
            </p>

            <div className="flex gap-4 pt-4">
              <Button
                onClick={() => navigate('/about')}
                className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 font-semibold text-lg"
              >
                EXPLORE
              </Button>
              <Button
                onClick={() => window.open('https://www.youtube.com/@JMCKITUI', '_blank')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 font-semibold text-lg"
              >
                WATCH LIVE
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MESSAGE FROM PASTORS SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex items-start gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-600" />
              <div className="w-3 h-3 rounded-full bg-purple-600" />
              <div className="w-3 h-3 rounded-full bg-purple-600" />
            </div>
            <h3 className="text-3xl font-bold text-purple-700 dark:text-purple-400">Message from our Pastors</h3>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-transparent dark:border-slate-800 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-justify">
                  Welcome to Jesus Manifestation Church. We are excited to have you visit our website and learn more about who we are as a church community. Our mission is to be a place where the Spirit of God moves freely, transforming lives and equipping believers to manifest the presence and power of Christ in every aspect of their lives.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-justify">
                  Whether you are seeking spiritual growth, community, fellowship, or simply want to understand more about faith in Jesus Christ, we welcome you with open arms. Our services are designed to inspire, challenge, and encourage you in your faith journey.
                </p>

                <p className="text-gray-600 dark:text-gray-400 font-semibold">
                  In His Service,<br />
                  <span className="text-purple-700 dark:text-purple-400">Your Pastoral Team</span>
                </p>
              </div>

              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src={pastorateImage}
                  alt="Pastoral Team"
                  className="rounded-2xl shadow-lg w-full object-cover h-96"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICE TIMES */}
      <section className="py-20 px-6 relative overflow-hidden bg-purple-50/30 dark:bg-purple-900/10 transition-colors duration-300">

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Calendar className="w-16 h-16 mx-auto mb-4 text-purple-600" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-purple-400 mb-4 transition-colors">
              Join Us for Worship
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors">We can't wait to see you!</p>
            <div className="h-1 w-24 mx-auto bg-purple-600 dark:bg-purple-500 rounded-full mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sunday Service",
                time: "8:45 AM - 12:00 PM",
                color: "bg-purple-600",
                icon: Church,
                description: "Main worship service"
              },
              {
                title: "Prayer Meetings",
                time: "Tue & Thu 5:00 - 7:00 PM",
                color: "bg-purple-700",
                icon: HeartHandshake,
                description: "Join us in prayer"
              },
              {
                title: "Friday Nights",
                time: "As Announced",
                color: "bg-purple-500",
                icon: PlayCircle,
                description: "Special prayer services"
              },
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="border-0 shadow-xl overflow-hidden h-full bg-white dark:bg-slate-900 hover:shadow-2xl transition-all duration-300 dark:border dark:border-slate-800">
                    <div className={`h-2 ${service.color}`} />
                    <CardContent className="p-8 text-center">
                      <motion.div
                        className={`w-20 h-20 rounded-full ${service.color} flex items-center justify-center mb-6 shadow-lg mx-auto`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="text-white w-10 h-10" />
                      </motion.div>

                      <h3 className="font-bold text-2xl text-slate-900 dark:text-white mb-2 transition-colors">{service.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 transition-colors">{service.description}</p>

                      <div className={`inline-block px-6 py-3 rounded-full ${service.color} bg-opacity-10 dark:bg-opacity-20 mb-4`}>
                        <p className="text-slate-800 dark:text-slate-200 font-bold text-lg transition-colors">{service.time}</p>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          onClick={() => navigate('/about')}
                          className="mt-4 border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white transition-all"
                        >
                          Learn More
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-gray-600 text-lg mb-6">New here? We'd love to meet you!</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => window.open('https://maps.app.goo.gl/A6gZZLv9NwqAsMh5A', '_blank')}
                className="bg-purple-700 hover:bg-purple-800 text-white px-10 py-4 font-bold text-lg shadow-xl"
              >
                Plan Your Visit
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* DEVOTIONALS/BLOG SECTION */}
      <section className="py-20 px-4 bg-purple-50/30 dark:bg-purple-900/10 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-700 dark:text-purple-400 transition-colors">
              Latest Devotionals
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors">
              Daily inspiration and biblical insights to strengthen your faith
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1, // ADD THIS
                title: "Walking in Faith",
                excerpt: "Discover what it means to truly trust God in every season of life and let faith guide your steps.",
                date: "February 8, 2026",
                author: "Bishop Elijah Mutua",
                image: faithImage,
                category: "Faith"
              },
              {
                id: 2, // ADD THIS
                title: "The Power of Prayer",
                excerpt: "Unlock the transformative power of consistent prayer and communion with God in your daily walk.",
                date: "February 5, 2026",
                author: "Pastor Bernard Nderitu",
                image: prayerImage,
                category: "Prayer"
              },
              {
                id: 3, // ADD THIS
                title: "Living in Purpose",
                excerpt: "God has a unique calling for your life. Learn how to discover and walk in your divine purpose.",
                date: "February 1, 2026",
                author: "Pastor Josphat Musee",
                image: purposeImage,
                category: "Purpose"
              },
            ].map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card
                  className="overflow-hidden h-full hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-white dark:bg-slate-900 dark:border-slate-800 border-0 shadow-lg"
                  onClick={() => navigate(`/devotionals/${post.id}`)} // ADD THIS - makes entire card clickable
                >
                  {/* Featured Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white dark:bg-slate-800 text-gray-800 dark:text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm transition-colors">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3 transition-colors">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 transition-colors">
                      {post.excerpt}
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-slate-800 transition-colors">
                      <span className="text-sm text-gray-700 dark:text-gray-400 font-medium transition-colors">
                        {post.author}
                      </span>
                      <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm inline-flex items-center gap-1 transition-colors">
                        Read More →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => navigate('/devotionals')}
              variant="outline"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 font-semibold text-lg"
            >
              View All Devotionals
            </Button>
          </motion.div>
        </div>
      </section>
      {/* LATEST SERMONS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-purple-400 mb-4 transition-colors">
              Latest Sermons
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors">
              Catch up on recent messages from our church services
            </p>
            <div className="h-1 w-20 mx-auto bg-purple-500 dark:bg-purple-600 rounded-full mt-4" />
          </motion.div>

          {sermonsLoading ? (
            /* Loading skeleton */
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 rounded-lg aspect-video mb-4" />
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : latestSermons.length === 0 ? (
            /* Empty state */
            <div className="text-center py-16">
              <PlayCircle className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">
                No sermons available yet. Check back soon!
              </p>
            </div>
          ) : (
            <>
              {/* Featured (most recent) sermon - large card */}
              {latestSermons[0] && (() => {
                const featured = latestSermons[0];
                const youtubeId = extractYoutubeId(featured.video_url);
                return (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-10"
                  >
                    <Card className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow bg-white dark:bg-slate-900 dark:border dark:border-slate-800">
                      <div className="h-2 bg-purple-600" />
                      {youtubeId ? (
                        <div className="relative w-full pt-[56.25%] bg-black">
                          <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0`}
                            title={featured.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      ) : (
                        <div className="relative w-full pt-[56.25%] bg-purple-800 flex items-center justify-center">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <PlayCircle className="w-20 h-20 text-white opacity-50" />
                          </div>
                        </div>
                      )}
                      <CardContent className="p-10">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-2 transition-colors">
                          {featured.title || "Untitled Sermon"}
                        </h3>
                        <div className="flex items-center justify-center gap-4 text-slate-600 dark:text-slate-400 text-lg font-semibold mb-6 transition-colors">
                          {featured.speaker && (
                            <span className="flex items-center gap-1">
                              <User size={18} className="text-purple-600" />
                              {featured.speaker}
                            </span>
                          )}
                          {featured.created_at && (
                            <span className="flex items-center gap-1">
                              <Calendar size={18} className="text-purple-600" />
                              {formatDate(featured.created_at)}
                            </span>
                          )}
                        </div>
                        {featured.video_url && (
                          <motion.div
                            className="flex justify-center gap-4"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Button
                              onClick={() => window.open(featured.video_url, '_blank')}
                              className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-3 font-bold text-lg shadow-lg"
                            >
                              Watch Full Sermon
                            </Button>
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })()}

              {/* Additional recent sermons as smaller cards */}
              {latestSermons.length > 1 && (
                <div className="grid md:grid-cols-2 gap-6">
                  {latestSermons.slice(1).map((sermon, index) => {
                    const youtubeId = extractYoutubeId(sermon.video_url);
                    return (
                      <motion.div
                        key={sermon.sermon_id || index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow group bg-white dark:bg-slate-900 border-0 shadow-lg dark:border dark:border-slate-800">
                          {/* Thumbnail */}
                          <div className="relative w-full pt-[56.25%] bg-gray-900 overflow-hidden">
                            {youtubeId ? (
                              <>
                                <img
                                  src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
                                  alt={sermon.title}
                                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all flex items-center justify-center">
                                  <a
                                    href={sermon.video_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                                  >
                                    <PlayCircle className="w-7 h-7 text-white fill-white" />
                                  </a>
                                </div>
                              </>
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center bg-purple-700">
                                <PlayCircle className="w-12 h-12 text-white opacity-50" />
                              </div>
                            )}
                          </div>
                          <CardContent className="flex-1 p-5 flex flex-col">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                              {sermon.title || "Untitled Sermon"}
                            </h3>
                            <div className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-400 transition-colors">
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

              {/* View All Sermons Button */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-10"
              >
                <Button
                  onClick={() => window.open('https://www.youtube.com/@JMCKITUI', '_blank')}
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 font-semibold text-lg"
                >
                  View All Sermons
                </Button>
              </motion.div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

