import { motion } from "framer-motion";
import { Users, Heart, Zap, Target, Calendar, Sparkles, BookOpen, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ladiesPstImg from "../../assets/leadership/Ladies PST.JPG";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Ladies() {
  const navigate = useNavigate();
  const activities = [
    {
      icon: Heart,
      title: "Ladies' Fellowship & Prayer",
      description: "Regular gatherings for heartfelt prayer, mutual support, and sharing God's grace in every season of life.",
      color: "bg-purple-600"
    },
    {
      icon: BookOpen,
      title: "Word & Character Studies",
      description: "Interactive Bible studies focusing on virtuous living, family building, and walking gracefully in Christ.",
      color: "bg-purple-700"
    },
    {
      icon: Coffee,
      title: "Sisterhood & Mentorship",
      description: "Building strong bonds across generations, where women guide, encourage, and uplift one another.",
      color: "bg-purple-500"
    },
    {
      icon: Sparkles,
      title: "Compassion & Outreach",
      description: "Extending love and practical support to widows, orphans, and less fortunate families in our community.",
      color: "bg-purple-600"
    }
  ];

  const events = [
    {
      title: "Monthly Women's Fellowship",
      time: "Third Saturday 9:00 AM - 12:00 PM",
      description: "Gather with sisters for worship, prayer, and an empowering message tailored for women"
    },
    {
      title: "Weekly Prayer Altar",
      time: "Thursdays 6:00 AM",
      description: "A virtual and physical morning prayer meeting for home and community"
    },
    {
      title: "Ladies' Annual Retreat",
      time: "October (Annually)",
      description: "A time of refreshment, deep ministry, and bonding away from daily routines"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-950 transition-colors duration-300">
      <Navigation />

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section
        className="relative pt-32 md:pt-40 pb-36 md:pb-48 px-4 md:px-6 overflow-hidden min-h-[75vh] md:min-h-[85vh] flex items-center justify-center bg-slate-950"
        style={{
          backgroundImage: `url(${ladiesPstImg})`,
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
              Ladies Department
            </h1>

            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Empowering, encouraging, and equipping women to manifest the love of Christ in their homes, church, and community.
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
                Nurturing Virtuous Women of Faith
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify transition-colors">
                The Ladies Department at Jesus Manifestation Church Kitui provides a community where women of all ages can grow in their relationship with God and build meaningful friendships.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify transition-colors">
                Grounded in Proverbs 31, our focus is to build virtuous character, support one another through life's triumphs and trials, and serve our families and church community with grace and strength.
              </p>
            </motion.div>

            {/* Core Values / Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, title: "Sisterhood", desc: "A safe space of genuine support" },
                { icon: Heart, title: "Devotion", desc: "Anchored in prayer and the Word" },
                { icon: Zap, title: "Growth", desc: "Mentorship and family enrichment" },
                { icon: Target, title: "Outreach", desc: "Touching lives in our community" },
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
              How We Grow Together
            </h2>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto transition-colors">
              Explore the programs designed to support your spiritual walk and foster close friendships.
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
              Join us for fellowship at any of our regular departmental meetings.
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
              Step Into Fellowship Today
            </h2>
            <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
              We would love to welcome you. Reach out to get plugged in, ask questions, or receive support.
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
