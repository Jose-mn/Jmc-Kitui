import { motion } from "framer-motion";
import { HandHeart, Heart, Shield, Users, Calendar, DoorOpen, Smile, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Ushers() {
  const navigate = useNavigate();
  const activities = [
    {
      icon: DoorOpen,
      title: "Welcoming Guests",
      description: "Being the first point of contact, greeting every person with warmth and directing them to their seats.",
      color: "bg-purple-500"
    },
    {
      icon: Shield,
      title: "Order & Security",
      description: "Maintaining order and ensuring a safe, respectful, and distraction-free worship environment for all.",
      color: "bg-purple-700"
    },
    {
      icon: Smile,
      title: "Hospitality",
      description: "Attending to the needs of congregants, visitors, and guests with love, care, and a servant's heart.",
      color: "bg-purple-600"
    },
    {
      icon: BookOpen,
      title: "Service Support",
      description: "Assisting with offering collection, communion distribution, and smooth coordination of church programmes.",
      color: "bg-purple-600"
    }
  ];

  const events = [
    {
      title: "Ushers Meeting",
      time: "Saturdays 10:00 AM",
      description: "Weekly coordination meeting to plan for Sunday service and assign duties"
    },
    {
      title: "Hospitality Training",
      time: "Monthly",
      description: "Training sessions on best practices in welcoming, etiquette, and conflict resolution"
    },
    {
      title: "Community Outreach",
      time: "Quarterly",
      description: "Visiting the sick, elderly, and new members to extend the church's hospitality beyond Sundays"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section
        className="relative pt-32 md:pt-40 pb-40 md:pb-52 px-4 md:px-6 overflow-hidden min-h-[80vh] md:min-h-[85vh] flex items-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1200&auto=format&fit=crop)',
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
              Ushers Ministry
            </h1>

            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Creating a welcoming, orderly, and respectful worship environment. We serve with discipline, love, and a heart of hospitality!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/contact')}
                className="bg-white text-slate-900 px-10 py-4 font-bold text-xl shadow-xl hover:bg-white"
              >
                Join the Ushers
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
                <HandHeart className="w-8 h-8 text-purple-600" />
                <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                  Our Role
                </h2>
              </div>
              <div className="w-16 h-1 bg-purple-600 mb-6 rounded-full" />

              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Ushers are the first point of contact, ensuring every person feels welcomed and guided during church services. We believe that hospitality is a ministry in itself—reflecting the love of Christ from the moment you walk through the door.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                The ministry operates with discipline, love, and service. Our team is trained to handle various situations with grace, maintain order during services, and create an atmosphere where worship can flow freely.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-purple-500" />
                  <span className="text-sm font-semibold text-gray-600">Love</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-purple-500" />
                  <span className="text-sm font-semibold text-gray-600">Discipline</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-500" />
                  <span className="text-sm font-semibold text-gray-600">Service</span>
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
                  <HandHeart className="w-24 h-24 text-white/40 mx-auto mb-4" />
                  <p className="text-white/70 font-semibold text-lg">Ushers Ministry Image</p>
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
              Ushers Activities
            </h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-4 rounded-full" />
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the ways we serve and create a welcoming church experience
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
              Join us in serving and growing together as a team
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
            Ready to Serve With Us?
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl mb-8 text-purple-100 leading-relaxed"
          >
            Whether you're naturally hospitable or want to grow in the art of serving—the Ushers Ministry is the perfect place for you. Come serve with a smile!
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
              Join the Ushers Ministry
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
