import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Mail, Phone, MapPin, DollarSign } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Give() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative pt-20 md:pt-24 pb-16 md:pb-24 px-4 md:px-6 bg-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"
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
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-4"
            >
              <Heart className="w-16 h-16 md:w-20 md:h-20 text-purple-300 fill-purple-300" />
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6">
              Partner With Us in Ministry
            </h1>

            <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
              Your generous giving makes it possible for Jesus Manifestation Church to reach more lives, serve our community, and advance God's kingdom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="flex-1 py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid md:grid-cols-2 gap-12 items-center mb-16"
          >
            {/* Left: Message */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Generosity Makes a Difference
              </h2>

              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                At Jesus Manifestation Church, we believe in the principle of sowing and reaping. When you give, you're not just supporting a church—you're investing in:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Powerful preaching and biblical teaching",
                  "Youth and children's ministry programs",
                  "Community outreach and compassion initiatives",
                  "Worship and fellowship events",
                  "Facility maintenance and growth"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <p className="text-sm text-gray-600 italic">
                "God loves a cheerful giver." — 2 Corinthians 9:7
              </p>
            </div>

            {/* Right: Why Give Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-purple-50 rounded-2xl p-8 border border-purple-200"
            >
              <Heart className="w-16 h-16 text-purple-600 mb-6 fill-purple-600" />

              <blockquote className="text-2xl font-bold text-gray-900 mb-4">
                "It is more blessed to give than to receive."
              </blockquote>

              <p className="text-gray-700 leading-relaxed mb-6">
                Giving is not just about money—it's about showing love for God and His kingdom. When you support JMC, you're joining us in the mission to manifest Jesus Christ in our generation.
              </p>

              <p className="text-sm text-gray-600 font-semibold">
                — Acts 20:35
              </p>
            </motion.div>
          </motion.div>

          {/* GIVING OPTIONS */}
          <div className="mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ways to Give
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: MapPin,
                  title: "In Person",
                  description: "Give during our Sunday services or visit us at any time.",
                  link: "Plan Your Visit",
                  href: "https://maps.app.goo.gl/A6gZZLv9NwqAsMh5A"
                },
                {
                  icon: Mail,
                  title: "By Mail",
                  description: "Mail your check or support to our church office.",
                  link: "Get Address",
                  href: "/contact"
                },
                {
                  icon: Phone,
                  title: "Contact Us",
                  description: "Call us to discuss giving options that work for you.",
                  link: "Contact Us",
                  href: "tel:+254701504560"
                }
              ].map((option, i) => {
                const Icon = option.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-6 text-center flex flex-col h-full">
                        <motion.div
                          className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center mx-auto mb-6"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {option.title}
                        </h3>

                        <p className="text-gray-600 mb-6 flex-1">
                          {option.description}
                        </p>

                        <motion.a
                          href={option.href}
                          target={option.href.startsWith("http") || option.href.startsWith("tel:") ? "_blank" : undefined}
                          rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="inline-block mt-auto px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {option.link}
                        </motion.a>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-purple-900 text-white rounded-2xl p-8 md:p-12 text-center"
          >
            <DollarSign className="w-16 h-16 mx-auto mb-6 text-purple-300" />

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Questions About Giving?
            </h3>

            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              We're here to help. Reach out to our office with any questions about how you can partner with us.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+254701504560"
                className="flex items-center justify-center gap-3 bg-purple-600  hover:bg-purple-700 px-8 py-3 rounded-lg font-semibold transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} />
                Call Us
              </motion.a>

              <motion.a
                href="/contact"
                className="flex items-center justify-center gap-3 bg-gray-700 hover:bg-gray-600 px-8 py-3 rounded-lg font-semibold transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                Send Message
              </motion.a>
            </div>

            <p className="text-slate-400 text-sm mt-6">
              🙏 Thank you for your faithfulness and generosity!
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}