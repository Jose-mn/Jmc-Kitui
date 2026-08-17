import { motion } from "framer-motion";
import { Users, Heart, Zap, Target, Calendar, Sparkles, BookOpen, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function SundaySchool() {
  const navigate = useNavigate();
  const activities = [
    {
      icon: Sparkles,
      title: "Interactive Bible Lessons",
      description: "Fun, creative, and age-appropriate classes designed to make learning God's Word exciting and memorable.",
      color: "bg-purple-600"
    },
    {
      icon: BookOpen,
      title: "Memory Verse Challenges",
      description: "Encouraging children to hide God's Word in their hearts through engaging memory games and active learning.",
      color: "bg-purple-700"
    },
    {
      icon: Coffee,
      title: "Creative Arts & Crafts",
      description: "Developing young hearts and minds through hands-on crafts, drama, and bible story illustrations.",
      color: "bg-purple-500"
    },
    {
      icon: Target,
      title: "Kids Praise & Worship",
      description: "Teaching children how to praise and worship God with their whole hearts through active songs and actions.",
      color: "bg-purple-600"
    }
  ];

  const events = [
    {
      title: "Weekly Sunday School",
      time: "Sundays 9:00 AM - 10:30 AM",
      description: "Our main weekly gathering running alongside the main service, divided into age-appropriate classes"
    },
    {
      title: "VBS (Vacation Bible School)",
      time: "School Holidays (As Announced)",
      description: "An exciting week-long program filled with activities, scripture lessons, games, and fellowship"
    },
    {
      title: "Sunday School Presentation",
      time: "Quarterly",
      description: "A special service presentation where children share memory verses and songs in the main sanctuary"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-950 transition-colors duration-300">
      <Navigation />

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section
        className="relative pt-32 md:pt-40 pb-40 md:pb-52 px-4 md:px-6 overflow-hidden min-h-[80vh] md:min-h-[85vh] flex items-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=1200&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl"
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
              Sunday School Department
            </h1>

            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Laying a firm spiritual foundation in the hearts of our children through fun, engaging, and Christ-centered Bible teachings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/contact')}
                className="bg-white text-slate-900 px-10 py-4 font-bold text-xl shadow-xl hover:bg-white"
              >
                Connect With Us
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
              className="space-y-6"
            >
              <div className="flex items-center gap-2">
                <span className="text-purple-600 dark:text-purple-400 text-xs font-bold tracking-widest uppercase">Department Mandate</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white transition-colors">
                Raising the Next Generation
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify transition-colors">
                The Sunday School Department at JMC Kitui believes that children are a precious heritage from God. We partner with parents to nurture young hearts in faith and love.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify transition-colors">
                Our team of dedicated teachers provides a safe, fun, and warm environment where children can build healthy friendships, understand scripture stories, and grow up with a firm identity in Christ.
              </p>
            </motion.div>

            {/* Core Values / Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, title: "Warmth", desc: "A safe and friendly environment" },
                { icon: Heart, title: "Foundation", desc: "Centered on scripture values" },
                { icon: Zap, title: "Creativity", desc: "Interactive crafts and activities" },
                { icon: Target, title: "Outreach", desc: "Growing and serving in grace" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <Card className="border border-purple-100 dark:border-slate-800 shadow-lg rounded-xl hover:shadow-xl transition-shadow bg-white dark:bg-slate-900">
                      <CardContent className="p-5 text-center">
                        <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mx-auto mb-3">
                          <Icon className="text-purple-600 dark:text-purple-400 w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1 transition-colors">{item.title}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ACTIVITIES SECTION */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-purple-50/30 dark:bg-purple-900/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-purple-600 dark:text-purple-400 text-xs font-bold tracking-widest uppercase transition-colors">Our Activities</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mt-2 mb-3 transition-colors">
              How We Learn Together
            </h2>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto transition-colors">
              Discover the creative and active ways we share God's love with the children in our church.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((act, i) => {
              const Icon = act.icon;
              return (
                <motion.div
                  key={act.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl bg-white dark:bg-slate-900">
                    <div className={`h-2 ${act.color} w-full rounded-t-2xl`} />
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 rounded-full ${act.color} bg-opacity-10 flex items-center justify-center mx-auto mb-4`}>
                        <Icon className="text-purple-600 dark:text-purple-400 w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 transition-colors">{act.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">{act.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MEETINGS / SCHEDULE SECTION */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-purple-600 dark:text-purple-400 text-xs font-bold tracking-widest uppercase transition-colors">Calendar</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mt-2 mb-3 transition-colors">
              Meeting Schedule
            </h2>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 transition-colors">
              Bring your children to learn and grow in God's Grace at our regular Sunday sessions.
            </p>
          </motion.div>

          <div className="space-y-6">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Card className="border border-purple-100 dark:border-slate-800 shadow-md rounded-2xl hover:shadow-lg transition-shadow bg-white dark:bg-slate-900">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-xl text-slate-900 dark:text-white transition-colors">{event.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 transition-colors">{event.description}</p>
                      </div>
                      <div className="flex items-center gap-2 self-start md:self-auto bg-purple-50 dark:bg-purple-900/30 px-4 py-2 rounded-full">
                        <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <span className="text-sm font-bold text-purple-700 dark:text-purple-300 transition-colors">{event.time}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-purple-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              Bring Your Children
            </h2>
            <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
              We look forward to meeting you and your family this Sunday! Contact us for details.
            </p>
            <Button
              onClick={() => navigate('/contact')}
              className="bg-yellow-400 text-slate-900 px-8 py-3 font-bold text-lg hover:bg-yellow-300"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
