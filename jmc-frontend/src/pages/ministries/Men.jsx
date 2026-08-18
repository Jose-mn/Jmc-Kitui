import { motion } from "framer-motion";
import { Users, Heart, Zap, Target, Calendar, Shield, BookOpen, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import menPstImg from "../../assets/leadership/Men's PST.JPG";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Men() {
  const navigate = useNavigate();
  const activities = [
    {
      icon: Shield,
      title: "Men's Breakfast & Prayer",
      description: "Early morning gatherings for worship, earnest prayer, and open discussions on life, family, and leadership.",
      color: "bg-purple-600"
    },
    {
      icon: BookOpen,
      title: "Word & Fellowship Studies",
      description: "Interactive Bible sessions designed to strengthen character, faith, and practical discipleship in daily living.",
      color: "bg-purple-700"
    },
    {
      icon: Coffee,
      title: "Mentorship & Bonding",
      description: "A strong brotherhood encouraging seasoned men to mentor younger generations, sharing life experiences and values.",
      color: "bg-purple-500"
    },
    {
      icon: Target,
      title: "Community Outreach",
      description: "Active community involvement, offering guidance, practical support, and sharing the Gospel in our neighborhoods.",
      color: "bg-purple-600"
    }
  ];

  const events = [
    {
      title: "Monthly Men's Fellowship",
      time: "Second Saturday 8:00 AM - 11:00 AM",
      description: "Gather with brothers for breakfast, corporate prayer, and an encouraging word on spiritual leadership"
    },
    {
      title: "Weekly Men's Prayer",
      time: "Tuesdays 5:30 PM - 7:00 PM",
      description: "Corporate prayer and intercession for families, church, and nation"
    },
    {
      title: "Men's Summit & Retreat",
      time: "August (Annually)",
      description: "A dedicated weekend of outdoor bonding, sports, and spiritual empowerment"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-950 transition-colors duration-300">
      <Navigation />

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section
        className="relative pt-32 md:pt-40 pb-36 md:pb-48 px-4 md:px-6 overflow-hidden min-h-[75vh] md:min-h-[85vh] flex items-center justify-center bg-slate-950"
        style={{
          backgroundImage: `url(${menPstImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-slate-950/80 to-purple-950/80" />
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px]" />

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
              Men's Department
            </h1>

            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Building strong, committed, and spiritually grounded men who lead with integrity, faith, and love in their homes and communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/contact')}
                className="bg-white text-slate-900 px-10 py-4 font-bold text-xl shadow-xl hover:bg-white"
              >
                Get Connected
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
                Iron Sharpening Iron
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify transition-colors">
                The Men's Department at JMC Kitui is dedicated to raising godly men who serve as pillars in the church, family, and society.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify transition-colors">
                Through fellowship and mentorship, we study biblical principles to guide us in our responsibilities. We believe in providing strong accountability, moral integrity, and practical service to others.
              </p>
            </motion.div>

            {/* Core Values / Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, title: "Brotherhood", desc: "Walking side-by-side in faith" },
                { icon: Heart, title: "Integrity", desc: "Leading with moral uprightness" },
                { icon: Zap, title: "Leadership", desc: "Wisdom for home and career" },
                { icon: Target, title: "Discipleship", desc: "Equipping to serve others" },
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
              How We Stand Together
            </h2>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto transition-colors">
              Discover how we connect, fellowship, and build character through our departmental programs.
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
              Join us for fellowship at any of our regular meetings.
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
              Join the Brotherhood
            </h2>
            <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
              Ready to grow as a leader, father, husband, and brother? Get connected with us today.
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
