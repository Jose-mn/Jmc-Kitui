import { useState } from "react";
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

// Import event images from assets
import sundayWorshipImage from "../assets/events/sunday-worship.jpg";
import prayerMeetingImage from "../assets/events/prayer-meeting.jpg";
import bibleStudyImage from "../assets/events/bible-study.jpg";
import youthConferenceImage from "../assets/events/youth-conference.jpg";
import childrenSundaySchoolImage from "../assets/events/children-sunday-school.jpg";
import nightOfWorshipImage from "../assets/events/night-of-worship.jpg";

export default function Events() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Events", icon: Calendar },
    { id: "worship", name: "Worship", icon: Music },
    { id: "prayer", name: "Prayer", icon: Heart },
    { id: "teaching", name: "Teaching", icon: BookOpen },
    { id: "youth", name: "Youth", icon: Users },
    { id: "children", name: "Children", icon: Baby },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Sunday Worship Service",
      category: "worship",
      date: "2026-02-16",
      time: "8:45 AM - 12:00 PM",
      location: "Main Sanctuary, JMC Kitui",
      description: "Join us for powerful worship, inspiring preaching, and fellowship as we celebrate God's goodness together.",
      image: sundayWorshipImage,
      featured: true,
      attendees: "300+",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Mid-Week Prayer Meeting",
      category: "prayer",
      date: "2026-02-18",
      time: "5:00 PM - 7:00 PM",
      location: "Prayer Hall, JMC Kitui",
      description: "A time of intercession, thanksgiving, and seeking God's face for our church, families, and nation.",
      image: prayerMeetingImage,
      featured: false,
      attendees: "150+",
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 3,
      title: "Bible Study: Walking in Faith",
      category: "teaching",
      date: "2026-02-19",
      time: "6:00 PM - 8:00 PM",
      location: "Fellowship Hall",
      description: "Deep dive into God's Word with Bishop Elijah Mutua. This week's topic: Living by Faith in Uncertain Times.",
      image: bibleStudyImage,
      featured: false,
      attendees: "100+",
      color: "from-yellow-600 to-orange-600"
    },
    {
      id: 4,
      title: "Youth Empowerment Conference 2026",
      category: "youth",
      date: "2026-02-21",
      time: "9:00 AM - 4:00 PM",
      location: "JMC Kitui Campus",
      description: "A transformative one-day conference for young people focusing on purpose, leadership, and spiritual growth.",
      image: youthConferenceImage,
      featured: true,
      attendees: "200+",
      color: "from-green-600 to-teal-600"
    },
    {
      id: 5,
      title: "Children's Sunday School",
      category: "children",
      date: "2026-02-23",
      time: "9:00 AM - 11:00 AM",
      location: "Children's Ministry Center",
      description: "Fun-filled Bible lessons, creative activities, and character-building sessions for kids aged 3-12.",
      image: childrenSundaySchoolImage,
      featured: false,
      attendees: "80+",
      color: "from-pink-600 to-rose-600"
    },
    {
      id: 6,
      title: "Night of Worship & Miracles",
      category: "worship",
      date: "2026-02-28",
      time: "6:00 PM - 10:00 PM",
      location: "Main Sanctuary",
      description: "An evening of powerful worship, prophetic ministry, and supernatural encounters with the Holy Spirit.",
      image: nightOfWorshipImage,
      featured: true,
      attendees: "500+",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  const filteredEvents = activeFilter === "all" 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === activeFilter);

  const featuredEvent = upcomingEvents.find(event => event.featured);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative pt-20 md:pt-24 pb-16 md:pb-24 px-4 md:px-6 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white overflow-hidden">
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
                  className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                    activeFilter === category.id
                      ? "bg-white text-purple-900 shadow-xl scale-105"
                      : "bg-white/20 text-white hover:bg-white/30"
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
        <section className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6 md:mb-8">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Featured Event</h2>
              </div>

              <Card className="overflow-hidden border-0 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 md:h-full min-h-[400px]">
                    <img
                      src={featuredEvent.image}
                      alt={featuredEvent.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${featuredEvent.color} opacity-40`} />
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 md:top-6 md:left-6">
                      <span className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-full font-bold text-sm md:text-base shadow-lg flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Featured
                      </span>
                    </div>

                    {/* Date Badge */}
                    <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                      <p className="text-xs md:text-sm text-gray-600 font-semibold">Event Date</p>
                      <p className="text-xl md:text-2xl font-black text-purple-900">{formatDate(featuredEvent.date)}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-6 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${featuredEvent.color} text-white text-xs md:text-sm font-semibold`}>
                          {categories.find(c => c.id === featuredEvent.category)?.name}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-4 md:mb-6">
                        {featuredEvent.title}
                      </h3>

                      <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                        {featuredEvent.description}
                      </p>

                      {/* Event Details */}
                      <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                        <div className="flex items-center gap-3 text-gray-700">
                          <Clock className="w-5 h-5 md:w-6 md:h-6 text-purple-600 flex-shrink-0" />
                          <span className="text-sm md:text-base font-semibold">{featuredEvent.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                          <MapPin className="w-5 h-5 md:w-6 md:h-6 text-purple-600 flex-shrink-0" />
                          <span className="text-sm md:text-base font-semibold">{featuredEvent.location}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                          <Users className="w-5 h-5 md:w-6 md:h-6 text-purple-600 flex-shrink-0" />
                          <span className="text-sm md:text-base font-semibold">{featuredEvent.attendees} Expected Attendees</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                      <Button 
                        onClick={() => window.location.href = '#contact'}
                        className={`bg-gradient-to-r ${featuredEvent.color} hover:opacity-90 text-white px-6 md:px-8 py-3 md:py-4 font-bold text-base md:text-lg shadow-xl w-full sm:w-auto`}
                      >
                        Register Now
                        <ChevronRight className="ml-2 w-5 h-5" />
                      </Button>
                      <Button variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-6 md:px-8 py-3 md:py-4 font-semibold text-base md:text-lg w-full sm:w-auto">
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
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              {activeFilter === "all" ? "All Upcoming Events" : `${categories.find(c => c.id === activeFilter)?.name} Events`}
            </h2>
            <p className="text-base md:text-lg text-gray-600">
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
                <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-300 group border-0 shadow-lg">
                  {/* Image */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-30 group-hover:opacity-40 transition-opacity`} />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${event.color} text-white text-xs md:text-sm font-semibold shadow-lg`}>
                        {categories.find(c => c.id === event.category)?.name}
                      </span>
                    </div>

                    {/* Date Badge */}
                    <div className="absolute top-4 right-4 bg-white rounded-xl p-2 md:p-3 shadow-xl text-center">
                      <p className="text-xs text-gray-600 font-semibold uppercase">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </p>
                      <p className="text-xl md:text-2xl font-black text-purple-900">
                        {new Date(event.date).getDate()}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-5 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {event.title}
                    </h3>

                    <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    {/* Event Info */}
                    <div className="space-y-2 mb-5">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Clock className="w-4 h-4 text-purple-600 flex-shrink-0" />
                        <span className="text-xs md:text-sm font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <MapPin className="w-4 h-4 text-purple-600 flex-shrink-0" />
                        <span className="text-xs md:text-sm font-medium line-clamp-1">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Users className="w-4 h-4 text-purple-600 flex-shrink-0" />
                        <span className="text-xs md:text-sm font-medium">{event.attendees}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button 
                      onClick={() => window.location.href = '#contact'}
                      className={`w-full bg-gradient-to-r ${event.color} hover:opacity-90 text-white font-semibold text-sm md:text-base shadow-lg`}
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
              <Calendar className="w-16 h-16 md:w-20 md:h-20 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-600 mb-2">No Events Found</h3>
              <p className="text-base md:text-lg text-gray-500">
                There are no {categories.find(c => c.id === activeFilter)?.name.toLowerCase()} events scheduled at this time.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900 text-white text-center relative overflow-hidden">
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