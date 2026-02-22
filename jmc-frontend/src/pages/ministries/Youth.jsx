import { motion } from "framer-motion";
import { Users, Heart, Zap, Target, Calendar, Music, BookOpen, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Youth() {
  const activities = [
    {
      icon: Music,
      title: "Worship Nights",
      description: "Powerful worship sessions where young people encounter God's presence through music and prayer.",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: BookOpen,
      title: "Bible Study",
      description: "Interactive sessions diving deep into God's Word, relevant to the challenges young people face today.",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Coffee,
      title: "Fellowship & Hangouts",
      description: "Building genuine friendships and community through fun activities, game nights, and social gatherings.",
      color: "from-green-600 to-teal-600"
    },
    {
      icon: Target,
      title: "Leadership Training",
      description: "Equipping young leaders with skills to serve in church and make an impact in their communities.",
      color: "from-yellow-600 to-orange-600"
    }
  ];

  const events = [
    {
      title: "Friday Night Worship",
      time: "7:00 PM - 9:00 PM",
      description: "Join us every Friday for an evening of powerful worship and fellowship"
    },
    {
      title: "Youth Bible Study",
      time: "Saturdays 4:00 PM",
      description: "Deep dive into Scripture with discussions relevant to young people"
    },
    {
      title: "Monthly Outreach",
      time: "Last Saturday",
      description: "Serving our community and sharing God's love through action"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section 
        className="relative pt-20 md:pt-24 pb-24 md:pb-32 px-4 md:px-6 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* More Transparent Overlay - No Blue Tint */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-white text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Youth Ministry
            </h1>

            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Empowering young people to grow in faith, leadership, and purpose. You are not the church of tomorrow—you are the church of today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.href = '#contact'}
                className="bg-white text-slate-900 px-8 py-3 font-bold text-lg shadow-xl hover:bg-white"
              >
                Join the Community
              </Button>
              <Button
                onClick={() => window.location.href = '#events'}
                className="bg-yellow-400 text-slate-900 px-8 py-3 font-bold text-lg shadow-xl hover:bg-yellow-400"
              >
                See Events
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section className="py-12 md:py-20 px-4 md:px-6" style={{ backgroundColor: "#f0f9ff" }}>
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
                <Zap className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                  What We Do
                </h2>
              </div>
              <div className="w-16 h-1 bg-blue-600 mb-6 rounded-full" />
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                The Youth Ministry brings together young believers through fellowship, worship, mentorship, and outreach programs. We create a safe space where young people can ask questions, grow spiritually, and discover their God-given purpose.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                We nurture spiritual growth while equipping the youth with life skills rooted in Christian values. Whether through worship nights, Bible studies, or community service, we're committed to raising a generation that loves God and impacts the world.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="text-sm font-semibold text-gray-600">Faith</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-semibold text-gray-600">Community</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-semibold text-gray-600">Purpose</span>
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
              <div className="w-full h-80 md:h-96 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <div className="text-center p-8">
                  <Users className="w-24 h-24 text-white/40 mx-auto mb-4" />
                  <p className="text-white/70 font-semibold text-lg">Youth Ministry Image</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ACTIVITIES SECTION */}
      <section className="py-12 md:py-20 px-4 md:px-6" style={{ backgroundColor: "#dbeafe" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
              Youth Activities
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4 rounded-full" />
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the exciting ways we grow together in faith and community
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
                      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gray-200 group-hover:bg-gradient-to-br group-hover:${activity.color} flex items-center justify-center mb-4 mx-auto shadow-lg transition-all duration-300`}>
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
      <section id="events" className="py-12 md:py-20 px-4 md:px-6" style={{ backgroundColor: "#f0f9ff" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <Calendar className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
              Upcoming Events
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4 rounded-full" />
            <p className="text-base md:text-lg text-gray-600">
              Mark your calendar and join us for these exciting gatherings
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
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3">
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
      <section className="py-16 md:py-24 px-4 md:px-6 text-white text-center relative overflow-hidden" style={{ backgroundColor: "#1e40af" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <motion.div
            className="absolute top-10 left-1/4 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ y: [0, 40, 0], x: [0, 40, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl"
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
            Ready to Join Us?
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed"
          >
            Whether you're looking for community, spiritual growth, or a place to belong—you're welcome here. Come as you are and discover your purpose!
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
              onClick={() => window.location.href = '#contact'}
              className="bg-yellow-400 text-blue-900 px-10 py-4 font-bold text-lg shadow-2xl hover:bg-yellow-400"
            >
              Join the Youth Ministry
            </Button>
            <Button
              className="bg-white text-blue-900 px-10 py-4 font-bold text-lg shadow-2xl hover:bg-white"
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