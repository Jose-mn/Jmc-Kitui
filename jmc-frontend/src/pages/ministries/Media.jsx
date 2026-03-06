import { motion } from "framer-motion";
import { Camera, Heart, Video, Monitor, Calendar, Users, Radio, Tv } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Media() {
  const navigate = useNavigate();
  const activities = [
    {
      icon: Video,
      title: "Livestreaming",
      description: "Broadcasting services live to reach believers and seekers beyond the church walls through digital platforms.",
      color: "bg-purple-600"
    },
    {
      icon: Camera,
      title: "Photography & Video",
      description: "Capturing church moments, events, and testimonials to document God's work in our community.",
      color: "bg-purple-700"
    },
    {
      icon: Monitor,
      title: "Visual Presentations",
      description: "Creating and managing worship slides, sermon visuals, and multimedia content for impactful services.",
      color: "bg-purple-500"
    },
    {
      icon: Radio,
      title: "Sound Engineering",
      description: "Managing audio systems to ensure clear, balanced, and excellent sound for every church gathering.",
      color: "bg-purple-600"
    }
  ];

  const events = [
    {
      title: "Media Training",
      time: "Saturdays 2:00 PM",
      description: "Hands-on training in photography, videography, and sound engineering skills"
    },
    {
      title: "Content Planning",
      time: "First Monday of Month",
      description: "Strategic planning for social media content, church announcements, and digital outreach"
    },
    {
      title: "Equipment Workshop",
      time: "Quarterly",
      description: "Technical sessions on operating cameras, mixers, projectors, and streaming tools"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-950 transition-colors duration-300">
      <Navigation />

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section
        className="relative pt-32 md:pt-40 pb-40 md:pb-52 px-4 md:px-6 overflow-hidden min-h-[80vh] md:min-h-[85vh] flex items-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&auto=format&fit=crop)',
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
              Media Team
            </h1>

            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Sharing the message through sound, visuals, and technology. We amplify God's Word to reach every ear and every screen!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/contact')}
                className="bg-white text-slate-900 px-10 py-4 font-bold text-xl shadow-xl hover:bg-white"
              >
                Join the Team
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
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white dark:bg-slate-950 transition-colors duration-300">
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
                <Camera className="w-8 h-8 text-purple-600" />
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white transition-colors">
                  What We Handle
                </h2>
              </div>
              <div className="w-16 h-1 bg-purple-600 mb-6 rounded-full" />

              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 transition-colors">
                The Media Team manages audio, video, photography, livestreams, and digital communication platforms. We are the bridge between the pulpit and the world, ensuring the gospel reaches beyond the church walls.
              </p>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 transition-colors">
                We combine creativity with technology to create an immersive worship experience. From crisp sound to stunning visuals, our team works behind the scenes to serve the body of Christ.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-purple-500" />
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 transition-colors">Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tv className="w-5 h-5 text-orange-500" />
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 transition-colors">Technology</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-500" />
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 transition-colors">Outreach</span>
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
                  <Camera className="w-24 h-24 text-white/40 mx-auto mb-4" />
                  <p className="text-white/70 font-semibold text-lg">Media Team Image</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ACTIVITIES SECTION */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-purple-50/30 dark:bg-slate-900/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-3 transition-colors">
              Media Activities
            </h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-4 rounded-full" />
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
              Discover the exciting ways our team serves through media and technology
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
                  <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-all duration-300 group bg-white dark:bg-slate-900 dark:border dark:border-slate-800">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gray-200 dark:bg-slate-800 group-hover:${activity.color} flex items-center justify-center mb-4 mx-auto shadow-lg transition-all duration-300`}>
                        <Icon className="text-gray-400 dark:text-gray-500 group-hover:text-white w-8 h-8 md:w-10 md:h-10 transition-colors duration-300" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">
                        {activity.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
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
      <section id="events" className="py-12 md:py-20 px-4 md:px-6 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <Calendar className="w-16 h-16 mx-auto mb-4 text-purple-600" />
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-3 transition-colors">
              Upcoming Events
            </h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-4 rounded-full" />
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 transition-colors">
              Join us for training, planning, and fellowship
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
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-900 dark:border dark:border-slate-800">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 flex items-center justify-center transition-colors">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold mb-3 transition-colors">
                      {event.time}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">
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
            className="absolute bottom-10 right-1/4 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl"
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
            Ready to Serve Behind the Scenes?
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl mb-8 text-orange-100 leading-relaxed"
          >
            Whether you're into photography, videography, sound, or social media—your skills can make a kingdom impact. Join the Media Team today!
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
              className="bg-yellow-400 text-orange-900 px-10 py-4 font-bold text-lg shadow-2xl hover:bg-yellow-400"
            >
              Join the Media Team
            </Button>
            <Button
              onClick={() => navigate('/about')}
              className="bg-white text-orange-900 px-10 py-4 font-bold text-lg shadow-2xl hover:bg-white"
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
