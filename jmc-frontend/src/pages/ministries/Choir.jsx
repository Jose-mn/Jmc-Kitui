import { motion } from "framer-motion";
import { Music, Heart, Mic, BookOpen, Calendar, Users, Headphones, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Choir() {
  const navigate = useNavigate();
  const activities = [
    {
      icon: Mic,
      title: "Sunday Worship",
      description: "Leading the congregation into God's presence through anointed praise and worship every Sunday service.",
      color: "bg-purple-600"
    },
    {
      icon: Headphones,
      title: "Choir Rehearsals",
      description: "Weekly practice sessions to sharpen our musical skills and prepare spiritually for ministry through song.",
      color: "bg-purple-700"
    },
    {
      icon: BookOpen,
      title: "Music Workshops",
      description: "Training members in music theory, vocal techniques, and instrument playing to enhance worship excellence.",
      color: "bg-purple-500"
    },
    {
      icon: Star,
      title: "Special Performances",
      description: "Ministering at conferences, weddings, community events, and special church celebrations with powerful songs.",
      color: "bg-purple-600"
    }
  ];

  const events = [
    {
      title: "Choir Rehearsal",
      time: "Saturdays 3:00 PM",
      description: "Weekly rehearsal to prepare worship songs and harmonies for Sunday services"
    },
    {
      title: "Worship Night",
      time: "Last Friday of Month",
      description: "A dedicated evening of praise, worship, and spiritual refreshing through music"
    },
    {
      title: "Music Workshop",
      time: "Monthly",
      description: "Training sessions for vocal improvement and learning new worship songs"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section
        className="relative pt-32 md:pt-40 pb-40 md:pb-52 px-4 md:px-6 overflow-hidden min-h-[80vh] md:min-h-[85vh] flex items-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1200&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-white text-center w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Choir Ministry
            </h1>

            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Leading the church into worship through music and praise. We sing for the glory of God and the edification of His people!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/contact')}
                className="bg-white text-slate-900 px-10 py-4 font-bold text-xl shadow-xl hover:bg-white"
              >
                Join the Choir
              </Button>
              <Button
                onClick={() => navigate('/events')}
                className="bg-yellow-400 text-slate-900 px-10 py-4 font-bold text-xl shadow-xl hover:bg-yellow-400"
              >
                See Events
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Music className="w-8 h-8 text-purple-600" />
                <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                  Our Calling
                </h2>
              </div>
              <div className="w-16 h-1 bg-purple-600 mb-6 rounded-full" />

              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                The Choir Ministry serves through heartfelt worship that prepares the congregation spiritually during services. We believe that music is a powerful tool for connecting people to God's presence.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Members are trained musically and spiritually to minister with excellence and humility. We welcome singers, instrumentalists, and anyone with a passion for worship to join us in lifting the name of the Lord.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-purple-500" />
                  <span className="text-sm font-semibold text-gray-600">Worship</span>
                </div>
                <div className="flex items-center gap-2">
                  <Music className="w-5 h-5 text-purple-500" />
                  <span className="text-sm font-semibold text-gray-600">Music</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-500" />
                  <span className="text-sm font-semibold text-gray-600">Unity</span>
                </div>
              </div>
            </motion.div>

            {/* Image Placeholder */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="w-full h-80 md:h-96 bg-purple-600 flex items-center justify-center">
                <div className="text-center p-8">
                  <Music className="w-24 h-24 text-white/40 mx-auto mb-4" />
                  <p className="text-white/70 font-semibold text-lg">Choir Ministry Image</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ACTIVITIES SECTION */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-purple-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
              Choir Activities
            </h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-4 rounded-full" />
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how we serve God and the church through music ministry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-all duration-300 group bg-white">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gray-200 group-hover:${activity.color} flex items-center justify-center mb-4 mx-auto shadow-lg transition-all duration-300`}>
                        <Icon className="text-gray-400 group-hover:text-white w-8 h-8 md:w-10 md:h-10 transition-colors duration-300" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                        {activity.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {activity.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EVENTS SCHEDULE */}
      <section id="events" className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <Calendar className="w-16 h-16 mx-auto mb-4 text-purple-600" />
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
              Upcoming Events
            </h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-4 rounded-full" />
            <p className="text-base md:text-lg text-gray-600">
              Mark your calendar and join us for these worship gatherings
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-purple-600 font-semibold mb-3">
                      {event.time}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-24 px-4 md:px-6 text-white text-center relative overflow-hidden" style={{ backgroundColor: "#7c3aed" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <motion.div
            className="absolute top-10 left-1/4 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ y: [0, 40, 0], x: [0, 40, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ y: [0, -40, 0], x: [0, -40, 0] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6"
          >
            Ready to Sing With Us?
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl mb-8 text-purple-100 leading-relaxed"
          >
            Whether you're a seasoned singer or just discovering your voice—there's a place for you in the Choir Ministry. Come and worship with us!
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => navigate('/contact')}
              className="bg-yellow-400 text-purple-900 px-10 py-4 font-bold text-lg shadow-2xl hover:bg-yellow-400"
            >
              Join the Choir Ministry
            </Button>
            <Button
              onClick={() => navigate('/about')}
              className="bg-white text-purple-900 px-10 py-4 font-bold text-lg shadow-2xl hover:bg-white"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
