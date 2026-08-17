import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Mail, Phone, User } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import bishopElijah from "../assets/leadership/bishop-elijah.jpg";
import revRuth from "../assets/leadership/rev-ruth.jpg";
import elderJoseph from "../assets/leadership/Men's PST.JPG";
import deaconessGrace from "../assets/leadership/Ladies PST.JPG";
import youthPST from "../assets/leadership/YOUTH PST.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const leaders = [
  {
    id: 1,
    name: "Bishop Elijah Mutua",
    title: "Senior Pastor",
    image: bishopElijah,
    gradient: "bg-purple-800",
    message: "It is my joy to welcome you to Jesus Manifestation Church — a place where heaven meets earth. Our mandate is simple: to reveal Jesus Christ in His fullness. Whether through the Word, worship, or genuine fellowship, everything we do is anchored in Him. I believe God has a specific purpose for your life, and JMC is a place where that purpose is discovered and nurtured. Come, and let us grow together in the grace of our Lord Jesus Christ.",
    scripture: '"For in Him we live and move and have our being." — Acts 17:28',
    contact: {}
  },
  {
    id: 2,
    name: "Pastor Ruth Mutua",
    image: revRuth,
    gradient: "bg-purple-700",
    message: "Welcome to our family! At JMC Kitui, we believe that every person who walks through our doors carries a God-given destiny. My passion is to see families restored, women empowered, and the next generation raised in the fear of God. You are not here by accident — God has orchestrated this moment for you. I pray that as you journey with us, you will experience the transforming love of Jesus in every area of your life.",
    scripture: '"She is clothed with strength and dignity, and she laughs without fear of the future." — Proverbs 31:25',
    contact: {}
  },
  {
    id: 3,
    name: "Pastor Jacob Munene",
    title: "Men's Department Leader",
    image: elderJoseph,
    gradient: "bg-purple-600",
    message: "The Men's Department is committed to raising strong, faith-filled leaders who serve their families and communities with wisdom, moral integrity, and deep conviction. We stand on the Word of God to support one another in our spiritual walks.",
    scripture: '"As iron sharpens iron, so one man sharpens another." — Proverbs 27:17',
    contact: {}
  },
  {
    id: 4,
    name: "Pastor Ruth Samuel",
    title: "Women's Department Leader",
    image: deaconessGrace,
    gradient: "bg-purple-700",
    message: "The Ladies Department exists to create a nurturing space where women can grow spiritually, build a sisterhood of prayer, and rise into their God-given identity. Together we stand and serve with grace.",
    scripture: '"Many women do noble things, but you surpass them all." — Proverbs 31:29',
    contact: {}
  },
  {
    id: 5,
    name: "Mercy Kaari Tom",
    title: "Youth Department Leader",
    image: youthPST,
    gradient: "bg-purple-600",
    message: "Our youth department raises a bold, unashamed generation grounded in the Word. We welcome all young people to find community, learn, and grow in their faith walk.",
    scripture: '"Don\'t let anyone look down on you because you are young." — 1 Timothy 4:12',
    contact: {}
  },
  {
    id: 6,
    name: "Alice John",
    title: "Sunday School Department Leader",
    image: null,
    gradient: "bg-purple-800",
    message: "We are committed to laying a strong spiritual foundation in the hearts of our children. Through creative Bible teaching and loving support, we raise children who grow up with a firm identity in Christ.",
    scripture: '"Train up a child in the way he should go, and when he is old he will not depart from it." — Proverbs 22:6',
    contact: {}
  }
];

export default function Pastorate() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-slate-950 transition-colors duration-300">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative pt-20 md:pt-24 pb-24 md:pb-32 px-4 md:px-6 bg-purple-900 text-white overflow-hidden">
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

        {/* Decorative gold line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-400" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <span className="text-amber-400 text-sm font-bold tracking-widest uppercase">
                — Jesus Manifestation Church —
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 drop-shadow-lg">
              Our Pastorate
            </h1>
            <div className="w-24 h-0.5 bg-purple-400 mx-auto mb-6" />
            <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
              Meet the shepherds God has entrusted to lead, guide, and serve the Jesus Manifestation Church family with wisdom, love, and dedication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LEAD PASTOR FEATURED */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-2xl overflow-hidden rounded-2xl bg-white dark:bg-slate-900 dark:border dark:border-slate-800 transition-colors duration-300">
              <div className="grid md:grid-cols-2 gap-0">

                {/* Image Side */}
                <div className="relative min-h-[450px] md:min-h-[560px] overflow-hidden bg-slate-900">
                  <img
                    src={leaders[0].image}
                    alt={leaders[0].name}
                    className="w-full h-full object-cover object-top absolute inset-0"
                  />



                  {/* Name overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-px flex-1 bg-purple-400/60" />
                      <span className="text-purple-300 text-xs font-bold tracking-widest uppercase">Lead Pastor</span>
                      <div className="h-px flex-1 bg-purple-400/60" />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <CardContent className="p-8 md:p-12 flex flex-col justify-center bg-white dark:bg-slate-900 border-l border-purple-100 dark:border-slate-800 transition-colors">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-0.5 bg-purple-500" />
                    <span className="text-purple-600 dark:text-purple-400 text-xs font-bold tracking-widest uppercase transition-colors">A Word from the Pastor</span>
                  </div>

                  <Quote className="w-10 h-10 text-purple-300 dark:text-purple-500 mb-4 transition-colors" />

                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-1 transition-colors">
                    {leaders[0].name}
                  </h2>
                  <p className="text-purple-600 dark:text-purple-400 font-bold text-base mb-6 tracking-wide transition-colors">
                    {leaders[0].title}
                  </p>

                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic transition-colors">
                    "{leaders[0].message}"
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-xl mb-8 transition-colors">
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic font-medium transition-colors">
                      {leaders[0].scripture}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    {/* Contact buttons removed */}
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CO-PASTOR FEATURED */}
      <section className="py-4 md:py-8 px-4 md:px-6 bg-purple-50/30 dark:bg-purple-900/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-2xl overflow-hidden rounded-2xl bg-white dark:bg-slate-900 dark:border dark:border-slate-800 transition-colors duration-300">
              <div className="grid md:grid-cols-2 gap-0">

                {/* Content Side */}
                <CardContent className="p-8 md:p-12 flex flex-col justify-center bg-white dark:bg-slate-900 order-2 md:order-1 border-r border-purple-100 dark:border-slate-800 transition-colors">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-0.5 bg-purple-500" />
                    <span className="text-purple-600 dark:text-purple-400 text-xs font-bold tracking-widest uppercase transition-colors">A Word from the Co-Pastor</span>
                  </div>

                  <Quote className="w-10 h-10 text-purple-300 dark:text-purple-500 mb-4 transition-colors" />

                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-1 transition-colors">
                    {leaders[1].name}
                  </h2>
                  <p className="text-amber-600 dark:text-amber-500 font-bold text-base mb-6 tracking-wide transition-colors">
                    {leaders[1].title}
                  </p>

                  <p className="text-base md:text-lg text-stone-600 dark:text-gray-300 leading-relaxed mb-6 italic transition-colors">
                    "{leaders[1].message}"
                  </p>

                  <div className="bg-stone-50 dark:bg-slate-800 border-l-4 border-amber-400 p-4 rounded-r-xl mb-8 transition-colors">
                    <p className="text-sm text-stone-500 dark:text-gray-400 italic font-medium transition-colors">
                      {leaders[1].scripture}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    {/* Contact buttons removed */}
                  </div>
                </CardContent>

                {/* Image Side - placeholder */}
                <div className="relative min-h-[450px] md:min-h-[560px] overflow-hidden bg-purple-700 flex items-center justify-center order-1 md:order-2">
                  <div className="text-center p-8">
                    <div className="w-44 h-44 md:w-52 md:h-52 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 border-2 border-white/20">
                      <User className="w-24 h-24 md:w-28 md:h-28 text-white/30" />
                    </div>
                    <p className="text-white/40 text-sm font-medium tracking-widest uppercase">Photo Coming Soon</p>
                  </div>
                  <div className="absolute inset-0 bg-purple-900/60" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-px flex-1 bg-purple-400/60" />
                      <span className="text-purple-300 text-xs font-bold tracking-widest uppercase">Co-Pastor</span>
                      <div className="h-px flex-1 bg-purple-400/60" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* REST OF LEADERSHIP GRID */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-purple-600 dark:text-purple-400 text-xs font-bold tracking-widest uppercase transition-colors">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mt-2 mb-3 transition-colors">
              Department Leadership
            </h2>
            <div className="w-16 h-0.5 bg-purple-505 mx-auto mb-4" />
            <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
              Dedicated servants of God leading our various departments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {leaders.slice(2).map((leader, index) => (
              <motion.div
                key={leader.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="border-0 shadow-xl overflow-hidden h-full group hover:shadow-2xl transition-all duration-300 rounded-2xl bg-white dark:bg-slate-900 dark:border dark:border-slate-800">
                  <div className="grid grid-cols-3 gap-0 h-full">

                    {/* Image Column */}
                    <div className={`relative ${leader.gradient} col-span-1 min-h-[280px] flex items-center justify-center`}>
                      {leader.image ? (
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="text-center p-4">
                          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3 border border-white/20">
                            <User className="w-10 h-10 text-white/40" />
                          </div>
                          <p className="text-white/30 text-xs font-medium tracking-widest uppercase">Soon</p>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-purple-900/30" />
                    </div>

                    {/* Content Column */}
                    <CardContent className="col-span-2 p-5 md:p-6 flex flex-col justify-between bg-white dark:bg-slate-900 border-l border-transparent dark:border-slate-800 transition-colors">
                      <div>
                        <div className="w-6 h-0.5 bg-purple-400 mb-3" />
                        <h3 className="text-lg md:text-xl font-black text-slate-900 dark:text-white mb-1 transition-colors">
                          {leader.name}
                        </h3>
                        <p className="text-xs font-bold text-purple-600 dark:text-purple-400 tracking-widest uppercase mb-3 transition-colors">
                          {leader.title}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-300 leading-relaxed line-clamp-4 mb-3 italic transition-colors">
                          "{leader.message}"
                        </p>
                        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-3 rounded-r-lg mb-4 transition-colors">
                          <p className="text-xs text-gray-500 dark:text-gray-400 italic line-clamp-2 transition-colors">
                            {leader.scripture}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        {/* Contact buttons removed */}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-purple-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <motion.div
            className="absolute top-10 left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ y: [0, 40, 0], x: [0, 40, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
        {/* Gold top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-purple-400" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-purple-300 text-xs font-bold tracking-widest uppercase">We're Here for You</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mt-3 mb-4 md:mb-6">
              Connect With Our Leadership
            </h2>
            <div className="w-16 h-0.5 bg-purple-400 mx-auto mb-6" />
            <p className="text-lg md:text-xl mb-8 text-purple-200 leading-relaxed">
              Our pastoral team is here for you. Whether you need prayer, counselling, or simply want to connect, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/contact')}
                className="bg-purple-400 text-purple-900 px-10 py-4 font-bold text-lg shadow-2xl hover:bg-purple-300"
              >
                Get In Touch
              </Button>
              <Button
                onClick={() => navigate('/contact')}
                variant="outline"
                className="border-2 border-white text-white px-10 py-4 font-bold text-lg bg-transparent hover:text-white"
              >
                Request Prayer
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}