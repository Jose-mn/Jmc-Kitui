import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Users, Award, BookOpen, Globe, Sparkles, Quote } from "lucide-react";
import bishop from "../assets/leadership/bishop-elijah.jpg";
import revRuth from "../assets/leadership/rev-ruth.jpg";
import bannerImage from "../assets/banner.webp";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function About() {
  const coreValues = [
    {
      icon: Heart,
      title: "Love & Unity",
      description: "Building a community rooted in God's love and united in purpose.",
      color: "from-red-600 to-pink-600"
    },
    {
      icon: BookOpen,
      title: "Biblical Teaching",
      description: "Committed to sound doctrine and the clear teaching of God's Word.",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Users,
      title: "Community",
      description: "Creating a family atmosphere where everyone belongs and grows.",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Reaching our community and beyond with the Gospel of Jesus Christ.",
      color: "from-green-600 to-teal-600"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Pursuing excellence in worship, ministry, and service to God.",
      color: "from-yellow-600 to-orange-600"
    },
    {
      icon: Sparkles,
      title: "Spirit-Led",
      description: "Moving in the power and guidance of the Holy Spirit.",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  return (
    <div className="bg-white text-gray-800">
      <Navigation />

      {/* HERO SECTION WITH TRANSPARENT BANNER BACKGROUND */}
      <section 
        className="relative pt-32 md:pt-40 pb-40 md:pb-48 px-4 md:px-6 overflow-hidden"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Transparent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/85 via-purple-800/80 to-purple-900/85" />
        
        {/* Animated elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 drop-shadow-lg">
              About Jesus Manifestation Church
            </h1>

            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-md">
              A Christ-centered ministry committed to revealing Jesus Christ through the Word, the Spirit, and transformed lives.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                onClick={() => window.location.href = '#leadership'}
                className="bg-white text-purple-900 px-8 py-3 font-bold text-lg shadow-xl hover:bg-white"
              >
                Meet Our Leaders
              </Button>
              <Button 
                onClick={() => window.location.href = '#contact'}
                variant="outline" 
                className="bg-white text-purple-900 px-8 py-3 font-bold text-lg shadow-xl hover:bg-white"
              >
                Join Our Family
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Who We Are
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Jesus Manifestation Church (JMC) Kitui is a vibrant, Spirit-filled community of believers committed to manifesting the presence and power of Jesus Christ in our generation. We are more than a congregation—we are a family united by faith, worship, and love.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VISION & MISSION WITH IMAGE CARDS */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            
            {/* VISION CARD */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-2xl overflow-hidden h-full group hover:shadow-3xl transition-all duration-300">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Eye className="w-24 h-24 text-white/40 mx-auto mb-4" />
                      <Quote className="w-12 h-12 text-white/30 mx-auto" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 md:p-8 bg-gradient-to-br from-white to-blue-50">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Our Vision</h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    To be a spiritual home where relationships and gifts are nurtured to serve God and mankind.
                  </p>
                  <div className="mt-6 pt-6 border-t border-blue-200">
                    <p className="text-sm font-semibold text-blue-600 italic">
                      "And the Word became flesh and dwelt among us, and we beheld His glory." - John 1:14
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* MISSION CARD */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-0 shadow-2xl overflow-hidden h-full group hover:shadow-3xl transition-all duration-300">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Target className="w-24 h-24 text-white/40 mx-auto mb-4" />
                      <Quote className="w-12 h-12 text-white/30 mx-auto" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 md:p-8 bg-gradient-to-br from-white to-purple-50">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Our Mission</h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    To teach God's people the biblical truth so that they become effective fishers of men for Jesus Christ.
                  </p>
                  <div className="mt-6 pt-6 border-t border-purple-200">
                    <p className="text-sm font-semibold text-purple-600 italic">
                      "Go therefore and make disciples of all nations..." - Matthew 28:19
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do as a church community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="text-white w-8 h-8 md:w-10 md:h-10" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <BookOpen className="w-16 h-16 mx-auto mb-6 text-purple-600" />
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                What We Believe
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Our faith is built on the solid foundation of God's Word
              </p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-6 md:p-10">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We believe in Jesus Christ as the Son of God and Savior of the world. We believe in the authority of the Bible as the inspired Word of God, and in the work of the Holy Spirit in the life of every believer.
                </p>
                <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-600 mt-6">
                  <p className="italic text-base text-gray-700">
                    "For no other foundation can anyone lay than that which is laid, which is Jesus Christ."
                  </p>
                  <p className="text-sm text-purple-600 font-semibold mt-2">
                    — 1 Corinthians 3:11
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="py-16 md:py-20 px-4 md:px-6 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-center text-slate-900">
            Our Leadership
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            Meet the pastoral team leading Jesus Manifestation Church with vision, wisdom, and dedication
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                    <img
                      src={bishop}
                      alt="Bishop Elijah Mutua"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 md:p-8 text-center bg-gradient-to-br from-white to-purple-50">
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900">Bishop Elijah Mutua</h3>
                    <p className="text-base md:text-lg text-purple-600 font-bold mt-2 mb-4">Lead Pastor</p>
                    <p className="text-base text-gray-700 leading-relaxed">
                      Serving with a heart for God's people, grounded in prayer, humility, and biblical truth.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                    <img
                      src={revRuth}
                      alt="Reverend Ruth Mutua"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 md:p-8 text-center bg-gradient-to-br from-white to-pink-50">
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900">Reverend Ruth Mutua</h3>
                    <p className="text-base md:text-lg text-pink-600 font-bold mt-2 mb-4">Co-Pastor</p>
                    <p className="text-base text-gray-700 leading-relaxed">
                      Passionate about nurturing faith, family, and spiritual growth within the church community.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* COMMUNITY */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          <Users className="w-16 h-16 mx-auto mb-6 text-purple-600" />
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-900">Our Church Family</h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
            We are more than a congregation. We are a family united by faith, worship, and love, with ministries that allow everyone to grow, serve, and belong.
          </p>
          <Button 
            onClick={() => window.location.href = '#contact'}
            className="bg-purple-700 text-white px-10 py-4 font-bold text-lg shadow-xl hover:bg-purple-700"
          >
            Become Part of Our Family
          </Button>
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900 text-white text-center relative overflow-hidden">
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6"
          >
            Come Experience God's Presence
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl mb-8 text-purple-100 leading-relaxed"
          >
            You're always welcome at Jesus Manifestation Church. Join us this Sunday and discover your purpose in God's family.
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
              className="bg-white text-purple-900 px-10 py-4 font-bold text-lg shadow-2xl hover:bg-white"
            >
              Plan Your Visit
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white px-10 py-4 font-bold text-lg hover:bg-transparent hover:text-white"
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