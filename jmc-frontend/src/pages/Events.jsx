import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ChevronRight,
  Heart,
  BookOpen,
  Music,
  Baby,
  Sparkles
} from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// Fallback image if event has no image_url
import defaultEventImage from "../assets/events/sunday-worship.jpg";

export default function Events() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  const categories = [
    { id: "all", name: "All Events", icon: Calendar },
    { id: "worship", name: "Worship", icon: Music },
    { id: "prayer", name: "Prayer", icon: Heart },
    { id: "teaching", name: "Teaching", icon: BookOpen },
    { id: "youth", name: "Youth", icon: Users },
    { id: "children", name: "Children", icon: Baby },
  ];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
        const res = await fetch(`${apiUrl}/api/events`);
        if (res.ok) {
          const data = await res.json();
          // Map backend fields to UI fields
          const mappedEvents = data.map((ev) => {
            // Pick a random category and color for nice UI since backend doesn't have them yet
            const catOptions = ["worship", "prayer", "teaching", "youth", "children"];
            const colorOptions = ["bg-purple-600", "bg-purple-700", "bg-purple-500"];

            return {
              id: ev.id,
              title: ev.title,
              category: catOptions[ev.id % catOptions.length],
              date: ev.event_date,
              time: "TBA", // Not in schema, fallback
              location: ev.location || "JMC Kitui",
              description: ev.description || "Join us for this wonderful event.",
              image: ev.image_url ? `${apiUrl}${ev.image_url}` : defaultEventImage,
              featured: ev.id % 3 === 0, // Mock featured status
              attendees: "100+",
              color: colorOptions[ev.id % colorOptions.length]
            };
          });
          const scheduleOverrides = [
            {
              id: "prayer-tuesday",
              title: "Midweek Prayer (Tuesday)",
              category: "prayer",
              date: "",
              time: "5:30 PM - 7:00 PM",
              location: "JMC Kitui",
              description: "Join us every Tuesday for a powerful time of prayer, worship, and intercession.",
              image: defaultEventImage,
              featured: false,
              attendees: "Open to all",
              color: "bg-purple-600"
            },
            {
              id: "prayer-thursday",
              title: "Midweek Prayer (Thursday)",
              category: "prayer",
              date: "",
              time: "5:30 PM - 7:00 PM",
              location: "JMC Kitui",
              description: "Thursday prayer meeting to seek God and stand in faith for our community.",
              image: defaultEventImage,
              featured: false,
              attendees: "Open to all",
              color: "bg-purple-700"
            },
            {
              id: "kesha-first-last-friday",
              title: "Kesha Gathering",
              category: "worship",
              date: "",
              time: "7:00 PM - 9:00 PM",
              location: "JMC Kitui",
              description: "Every first and last Friday of the month: Kesha worship to encounter God.",
              image: defaultEventImage,
              featured: false,
              attendees: "Open to all",
              color: "bg-purple-500"
            }
          ];

          setUpcomingEvents([...mappedEvents, ...scheduleOverrides]);
        }
      } catch (err) {
        console.error("Failed to fetch events:", err);
      }
    };
    fetchEvents();
  }, []);

  const filteredEvents = activeFilter === "all"
    ? upcomingEvents
    : upcomingEvents.filter(event => event.category === activeFilter);

  const featuredEvent = upcomingEvents.find(event => event.featured);

  const formatDate = (dateString) => {
    if (!dateString) return "Date TBA";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="flex flex-col min-h-screen dark:bg-slate-950 transition-colors duration-300">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative pt-20 md:pt-24 pb-16 md:pb-24 px-4 md:px-6 bg-purple-900 text-white overflow-hidden">
        {/* Animated Background */}
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
            className="text-center mb-8 md:mb-12"
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
              <Calendar className="w-16 h-16 md:w-20 md:h-20 text-yellow-400" />
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6">
              Upcoming Events
            </h1>

            <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Join us for life-changing gatherings, powerful worship, and transformative teaching at Jesus Manifestation Church.
            </p>
          </motion.div>

          {/* Event Categories Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${activeFilter === category.id
                    ? "bg-white dark:bg-slate-900 text-purple-900 dark:text-purple-400 shadow-xl scale-105"
                    : "bg-white/20 dark:bg-white/10 text-white hover:bg-white/30 dark:hover:bg-white/20"
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  {category.name}
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FEATURED EVENT SECTION */}
      {featuredEvent && activeFilter === "all" && (
        <section className="py-12 md:py-20 px-4 md:px-6 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6 md:mb-8">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors">Featured Event</h2>
              </div>

              <Card className="overflow-hidden border-0 shadow-2xl bg-white dark:bg-slate-900 dark:border dark:border-slate-800 transition-colors">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 md:h-full min-h-[400px]">
                    <img
                      src={featuredEvent.image}
                      alt={featuredEvent.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 ${featuredEvent.color} opacity-40`} />

                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 md:top-6 md:left-6">
                      <span className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-full font-bold text-sm md:text-base shadow-lg flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Featured
                      </span>
                    </div>

                    {/* Date Badge */}
                    <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl transition-colors">
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-semibold transition-colors">Event Date</p>
                      <p className="text-xl md:text-2xl font-black text-purple-900 dark:text-purple-400 transition-colors">{formatDate(featuredEvent.date)}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-6 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`px-3 py-1 rounded-full ${featuredEvent.color} text-white text-xs md:text-sm font-semibold`}>
                          {categories.find(c => c.id === featuredEvent.category)?.name}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4 md:mb-6 transition-colors">
                        {featuredEvent.title}
                      </h3>

                      <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 md:mb-8 transition-colors">
                        {featuredEvent.description}
                      </p>

                      {/* Event Details */}
                      <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 transition-colors">
                          <Clock className="w-5 h-5 md:w-6 md:h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 transition-colors" />
                          <span className="text-sm md:text-base font-semibold">{featuredEvent.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 transition-colors">
                          <MapPin className="w-5 h-5 md:w-6 md:h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 transition-colors" />
                          <span className="text-sm md:text-base font-semibold">{featuredEvent.location}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 transition-colors">
                          <Users className="w-5 h-5 md:w-6 md:h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 transition-colors" />
                          <span className="text-sm md:text-base font-semibold">{featuredEvent.attendees} Expected Attendees</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                      <Button
                        onClick={() => navigate('/contact')}
                        className={`${featuredEvent.color} hover:opacity-90 text-white px-6 md:px-8 py-3 md:py-4 font-bold text-base md:text-lg shadow-xl w-full sm:w-auto`}
                      >
                        Register Now
                        <ChevronRight className="ml-2 w-5 h-5" />
                      </Button>
                      <Button onClick={() => navigate('/about')} variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-6 md:px-8 py-3 md:py-4 font-semibold text-base md:text-lg w-full sm:w-auto">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* ALL EVENTS GRID */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">
              {activeFilter === "all" ? "All Upcoming Events" : `${categories.find(c => c.id === activeFilter)?.name} Events`}
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 transition-colors">
              Mark your calendar and join us for these amazing gatherings
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-300 group border-0 shadow-lg bg-white dark:bg-slate-900 dark:border dark:border-slate-800">
                  {/* Image */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 ${event.color} opacity-30 group-hover:opacity-40 transition-opacity`} />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full ${event.color} text-white text-xs md:text-sm font-semibold shadow-lg`}>
                        {categories.find(c => c.id === event.category)?.name}
                      </span>
                    </div>

                    {/* Date Badge */}
                    <div className="absolute top-4 right-4 bg-white dark:bg-slate-800 rounded-xl p-2 md:p-3 shadow-xl text-center transition-colors">
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold uppercase transition-colors">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </p>
                      <p className="text-xl md:text-2xl font-black text-purple-900 dark:text-purple-400 transition-colors">
                        {new Date(event.date).getDate()}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-5 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                      {event.title}
                    </h3>

                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 transition-colors">
                      {event.description}
                    </p>

                    {/* Event Info */}
                    <div className="space-y-2 mb-5">
                      <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 transition-colors">
                        <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0 transition-colors" />
                        <span className="text-xs md:text-sm font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 transition-colors">
                        <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0 transition-colors" />
                        <span className="text-xs md:text-sm font-medium line-clamp-1">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 transition-colors">
                        <Users className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0 transition-colors" />
                        <span className="text-xs md:text-sm font-medium">{event.attendees}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button
                      onClick={() => navigate('/contact')}
                      className={`w-full ${event.color} hover:opacity-90 text-white font-semibold text-sm md:text-base shadow-lg`}
                    >
                      Register for Event
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* No Events Message */}
          {filteredEvents.length === 0 && (
            <motion.div
              className="text-center py-16 md:py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Calendar className="w-16 h-16 md:w-20 md:h-20 text-gray-300 dark:text-gray-600 mx-auto mb-4 transition-colors" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-600 dark:text-gray-400 mb-2 transition-colors">No Events Found</h3>
              <p className="text-base md:text-lg text-gray-500 dark:text-gray-500 transition-colors">
                There are no {categories.find(c => c.id === activeFilter)?.name.toLowerCase()} events scheduled at this time.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-purple-900 text-white text-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <motion.div
            className="absolute top-10 left-1/4 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ y: [0, 40, 0], x: [0, 40, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-1/4 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ y: [0, -40, 0], x: [0, -40, 0] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Don't Miss Out!
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl mb-6 md:mb-8 text-purple-100 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Stay connected and be the first to know about upcoming events, special programs, and life-changing gatherings at JMC Kitui.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button className="bg-white text-purple-900 hover:bg-gray-100 px-8 md:px-10 py-3 md:py-4 font-bold text-base md:text-lg shadow-2xl w-full sm:w-auto">
              Subscribe to Updates
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 md:px-10 py-3 md:py-4 font-bold text-base md:text-lg w-full sm:w-auto">
              View Calendar
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}