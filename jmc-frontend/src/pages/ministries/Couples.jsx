import { motion } from "framer-motion";
import { Users, Heart, Shield, Sparkles, Calendar, BookOpen, Home, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import couplesImg from "./couples department.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Couples() {
  const navigate = useNavigate();
  const activities = [
    {
      icon: Heart,
      title: "Marriage Enrichment Seminars",
      description: "Interactive workshops exploring Biblical communication, intimacy, conflict resolution, and lifelong covenant partnership.",
      color: "bg-purple-600"
    },
    {
      icon: Sparkles,
      title: "Couples Dinners & Retreats",
      description: "Special romantic dinners, weekend retreats, and bonding activities designed for couples to relax and reconnect.",
      color: "bg-purple-700"
    },
    {
      icon: Home,
      title: "Family & Financial Stewardship",
      description: "Practical guidance on raising godly children, managing joint finances, and building a peaceful, hospitable home.",
      color: "bg-purple-500"
    },
    {
      icon: Shield,
      title: "Premarital & Marriage Counseling",
      description: "Dedicated mentorship and confidential pastoral guidance for engaged couples and marriages at all stages.",
      color: "bg-purple-600"
    }
  ];

  const events = [
    {
      title: "Monthly Couples Fellowship & Dinner",
      time: "Second Saturday 4:00 PM - 7:00 PM",
      description: "An evening of worship, candid marital discussions, fellowship, and dinner."
    },
    {
      title: "Premarital Foundations Class",
      time: "Sundays 8:30 AM",
      description: "Structured 8-week course preparing engaged couples for a lifetime of Biblical marriage."
    },
    {
      title: "Annual Couples Getaway Retreat",
      time: "November (Annually)",
      description: "A memorable weekend getaway focused on spiritual renewal, rest, and romance."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-950 transition-colors duration-300">
      <Navigation />

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section
        className="relative pt-32 md:pt-40 pb-36 md:pb-48 px-4 md:px-6 overflow-hidden min-h-[75vh] md:min-h-[85vh] flex items-center justify-center bg-slate-950"
        style={{
          backgroundImage: `url(${couplesImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-slate-950/80 to-purple-950/80" />
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px]" />

        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl"
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-600/60 backdrop-blur-md border border-purple-400/40 text-amber-300 text-xs font-bold uppercase tracking-widest mb-6">
              <Heart className="w-4 h-4 text-purple-300" />
              Jesus Manifestation Church
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Couples Department
            </h1>
            <div className="w-32 h-1 bg-amber-400 mx-auto mb-8 rounded-full shadow-lg" />
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Building Christ-Centered Marriages, Strong Families, and Lifelong Covenant Bonds
            </p>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW & LEADER SECTION */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <span className="text-purple-600 dark:text-purple-400 text-xs font-bold tracking-widest uppercase mb-2 block">
                Covenant & Love
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
                Strengthening Christian Homes
              </h2>
              <div className="w-20 h-1 bg-purple-600 mb-6 rounded-full" />
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The JMC Couples Ministry is dedicated to enriching marriages through Biblical truth, practical wisdom, and supportive community. We believe healthy marriages create healthy families, which form the bedrock of a thriving church.
              </p>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Whether you are newly married, celebrating decades together, or preparing for holy matrimony, our fellowship provides a safe and encouraging space to grow together in love and faith.
              </p>

              <div className="bg-purple-50 dark:bg-purple-950/40 border-l-4 border-amber-400 p-4 rounded-r-xl mb-6">
                <p className="text-sm italic font-semibold text-purple-950 dark:text-purple-200">
                  "Therefore what God has joined together, let no one separate." — Matthew 19:6
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => navigate('/contact')}
                  className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2.5 font-bold"
                >
                  Join Couples Ministry
                </Button>
                <Button
                  onClick={() => navigate('/contact')}
                  variant="outline"
                  className="border-purple-600 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 px-6 py-2.5 font-bold"
                >
                  Request Marriage Counseling
                </Button>
              </div>
            </motion.div>

            {/* Leader Card Side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-900 to-slate-950 p-2 border border-purple-500/30"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src={couplesImg}
                  alt="Couples Department Leader"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-amber-300 font-bold block mb-1">
                    Department Leader
                  </span>
                  <h3 className="text-2xl font-black text-white mb-1">
                    Couples Ministry Leadership
                  </h3>
                  <p className="text-sm text-purple-200 font-medium">
                    Jesus Manifestation Church Kitui
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ACTIVITIES SECTION */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-purple-600 dark:text-purple-400 text-xs font-bold tracking-widest uppercase mb-2 block">
              Ministry Focus
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-3">
              Couples Activities & Pillars
            </h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-4 rounded-full" />
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Targeted programs designed to nurture friendship, romance, and spiritual unity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {activities.map((act, index) => {
              const Icon = act.icon;
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-all duration-300 group bg-white dark:bg-slate-900 dark:border dark:border-slate-800 rounded-2xl">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 rounded-2xl ${act.color} text-white flex items-center justify-center mb-4 mx-auto shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3">
                        {act.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {act.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <Calendar className="w-16 h-16 mx-auto mb-4 text-purple-600" />
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-3">
              Couples Events Schedule
            </h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-4 rounded-full" />
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
              Mark your calendar and join us for meaningful gatherings
            </p>
          </motion.div>

          <div className="space-y-6">
            {events.map((evt, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-purple-50/50 dark:bg-slate-800/60 border border-purple-100 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {evt.title}
                  </h3>
                  <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/60 px-3 py-1 rounded-full mb-2">
                    {evt.time}
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {evt.description}
                  </p>
                </div>
                <Button
                  onClick={() => navigate('/contact')}
                  className="bg-purple-700 hover:bg-purple-800 text-white shrink-0"
                >
                  Register / Info
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
