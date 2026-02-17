import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Mail, Phone, User } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import bishopElijah from "../assets/leadership/Bishop Elijah 1.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const leaders = [
  {
    id: 1,
    name: "Bishop Elijah Mutua",
    title: "Lead Pastor & Founder",
    image: bishopElijah,
    gradient: "from-slate-700 to-slate-900",
    message: "It is my joy to welcome you to Jesus Manifestation Church — a place where heaven meets earth. Our mandate is simple: to reveal Jesus Christ in His fullness. Whether through the Word, worship, or genuine fellowship, everything we do is anchored in Him. I believe God has a specific purpose for your life, and JMC is a place where that purpose is discovered and nurtured. Come, and let us grow together in the grace of our Lord Jesus Christ.",
    scripture: '"For in Him we live and move and have our being." — Acts 17:28',
    contact: {
      email: "bishop@jmckitui.org",
      phone: "+254 700 000 001"
    }
  },
  {
    id: 2,
    name: "Reverend Ruth Mutua",
    title: "Co-Pastor",
    image: null,
    gradient: "from-stone-500 to-stone-700",
    message: "Welcome to our family! At JMC Kitui, we believe that every person who walks through our doors carries a God-given destiny. My passion is to see families restored, women empowered, and the next generation raised in the fear of God. You are not here by accident — God has orchestrated this moment for you. I pray that as you journey with us, you will experience the transforming love of Jesus in every area of your life.",
    scripture: '"She is clothed with strength and dignity, and she laughs without fear of the future." — Proverbs 31:25',
    contact: {
      email: "rev.ruth@jmckitui.org",
      phone: "+254 700 000 002"
    }
  },
  {
    id: 3,
    name: "Elder Joseph Mwangi",
    title: "Senior Elder",
    image: null,
    gradient: "from-zinc-600 to-zinc-800",
    message: "The elders of JMC are committed to providing spiritual covering, wisdom, and accountability to our church community. We stand on the Word of God and are dedicated to guiding this congregation in truth and integrity. It is our honour to serve alongside our pastors and to ensure that every member of this body is cared for, supported, and growing in their walk with God.",
    scripture: '"The elders who direct the affairs of the church well are worthy of double honour." — 1 Timothy 5:17',
    contact: {
      email: "elder.joseph@jmckitui.org",
      phone: "+254 700 000 003"
    }
  },
  {
    id: 4,
    name: "Deaconess Grace Ndunge",
    title: "Head of Women's Ministry",
    image: null,
    gradient: "from-neutral-500 to-neutral-700",
    message: "To every woman in our congregation and beyond — you are seen, you are valued, and you are deeply loved by God. The Women's Ministry at JMC exists to create a safe space where women can grow spiritually, heal emotionally, and rise into their God-given identity. Together we pray, study the Word, and spur one another towards greater faith. I invite every woman to join us as we seek God together.",
    scripture: '"Many women do noble things, but you surpass them all." — Proverbs 31:29',
    contact: {
      email: "women@jmckitui.org",
      phone: "+254 700 000 004"
    }
  },
  {
    id: 5,
    name: "Pastor Samuel Kioko",
    title: "Youth Pastor",
    image: null,
    gradient: "from-slate-500 to-slate-700",
    message: "To the young people of JMC — you are not the church of tomorrow, you are the church of today! We believe in raising a generation that is bold in faith, grounded in the Word, and unashamed of the Gospel. Our youth ministry is a place where you can ask hard questions, find genuine community, and encounter God in a real way. Step in, be yourself, and let God use you mightily right where you are.",
    scripture: '"Don\'t let anyone look down on you because you are young." — 1 Timothy 4:12',
    contact: {
      email: "youth@jmckitui.org",
      phone: "+254 700 000 005"
    }
  },
  {
    id: 6,
    name: "Minister Esther Kavata",
    title: "Children's Ministry Leader",
    image: null,
    gradient: "from-stone-600 to-stone-800",
    message: "Children are a heritage from the Lord, and at JMC we take that calling seriously. Our Children's Ministry is designed to lay a strong spiritual foundation in the hearts of our little ones through fun, age-appropriate Bible teaching, creative worship, and character development. We partner with parents to raise children who love God, love people, and grow up with a firm identity in Christ.",
    scripture: '"Train up a child in the way he should go, and when he is old he will not depart from it." — Proverbs 22:6',
    contact: {
      email: "children@jmckitui.org",
      phone: "+254 700 000 006"
    }
  }
];

export default function Pastorate() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative pt-20 md:pt-24 pb-24 md:pb-32 px-4 md:px-6 bg-gradient-to-br from-slate-800 via-slate-700 to-stone-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-72 h-72 bg-stone-300 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          />
        </div>

        {/* Decorative gold line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

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
            <div className="w-24 h-0.5 bg-amber-400 mx-auto mb-6" />
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Meet the shepherds God has entrusted to lead, guide, and serve the Jesus Manifestation Church family with wisdom, love, and dedication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LEAD PASTOR FEATURED */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-2xl overflow-hidden rounded-2xl">
              <div className="grid md:grid-cols-2 gap-0">

                {/* Image Side */}
                <div className="relative min-h-[450px] md:min-h-[560px] overflow-hidden bg-slate-900">
                  <img
                    src={leaders[0].image}
                    alt={leaders[0].name}
                    className="w-full h-full object-cover object-top absolute inset-0"
                  />
                  {/* Subtle dark gradient at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />

                  {/* Name overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-px flex-1 bg-amber-400/60" />
                      <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">Lead Pastor</span>
                      <div className="h-px flex-1 bg-amber-400/60" />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <CardContent className="p-8 md:p-12 flex flex-col justify-center bg-white border-l border-stone-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-0.5 bg-amber-400" />
                    <span className="text-amber-600 text-xs font-bold tracking-widest uppercase">A Word from the Pastor</span>
                  </div>

                  <Quote className="w-10 h-10 text-stone-300 mb-4" />

                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-1">
                    {leaders[0].name}
                  </h2>
                  <p className="text-amber-600 font-bold text-base mb-6 tracking-wide">
                    {leaders[0].title}
                  </p>

                  <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-6 italic">
                    "{leaders[0].message}"
                  </p>

                  <div className="bg-stone-50 border-l-4 border-amber-400 p-4 rounded-r-xl mb-8">
                    <p className="text-sm text-stone-500 italic font-medium">
                      {leaders[0].scripture}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`mailto:${leaders[0].contact.email}`}>
                      <Button className="bg-slate-800 text-white px-6 py-2.5 font-semibold hover:bg-slate-800 flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Send Email
                      </Button>
                    </a>
                    <a href={`tel:${leaders[0].contact.phone}`}>
                      <Button variant="outline" className="border-2 border-slate-800 text-slate-800 px-6 py-2.5 font-semibold hover:bg-transparent flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Call
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CO-PASTOR FEATURED */}
      <section className="py-4 md:py-8 px-4 md:px-6 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-2xl overflow-hidden rounded-2xl">
              <div className="grid md:grid-cols-2 gap-0">

                {/* Content Side */}
                <CardContent className="p-8 md:p-12 flex flex-col justify-center bg-white order-2 md:order-1 border-r border-stone-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-0.5 bg-amber-400" />
                    <span className="text-amber-600 text-xs font-bold tracking-widest uppercase">A Word from the Co-Pastor</span>
                  </div>

                  <Quote className="w-10 h-10 text-stone-300 mb-4" />

                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-1">
                    {leaders[1].name}
                  </h2>
                  <p className="text-amber-600 font-bold text-base mb-6 tracking-wide">
                    {leaders[1].title}
                  </p>

                  <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-6 italic">
                    "{leaders[1].message}"
                  </p>

                  <div className="bg-stone-50 border-l-4 border-amber-400 p-4 rounded-r-xl mb-8">
                    <p className="text-sm text-stone-500 italic font-medium">
                      {leaders[1].scripture}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`mailto:${leaders[1].contact.email}`}>
                      <Button className="bg-slate-800 text-white px-6 py-2.5 font-semibold hover:bg-slate-800 flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Send Email
                      </Button>
                    </a>
                    <a href={`tel:${leaders[1].contact.phone}`}>
                      <Button variant="outline" className="border-2 border-slate-800 text-slate-800 px-6 py-2.5 font-semibold hover:bg-transparent flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Call
                      </Button>
                    </a>
                  </div>
                </CardContent>

                {/* Image Side - placeholder */}
                <div className="relative min-h-[450px] md:min-h-[560px] overflow-hidden bg-stone-700 flex items-center justify-center order-1 md:order-2">
                  <div className="text-center p-8">
                    <div className="w-44 h-44 md:w-52 md:h-52 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 border-2 border-white/20">
                      <User className="w-24 h-24 md:w-28 md:h-28 text-white/30" />
                    </div>
                    <p className="text-white/40 text-sm font-medium tracking-widest uppercase">Photo Coming Soon</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-px flex-1 bg-amber-400/60" />
                      <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">Co-Pastor</span>
                      <div className="h-px flex-1 bg-amber-400/60" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* REST OF LEADERSHIP GRID */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-amber-600 text-xs font-bold tracking-widest uppercase">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2 mb-3">
              Ministry Leadership
            </h2>
            <div className="w-16 h-0.5 bg-amber-400 mx-auto mb-4" />
            <p className="text-base md:text-lg text-stone-500 max-w-2xl mx-auto">
              Dedicated servants of God leading our various ministries and departments
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
                <Card className="border-0 shadow-xl overflow-hidden h-full group hover:shadow-2xl transition-all duration-300 rounded-2xl">
                  <div className="grid grid-cols-3 gap-0 h-full">

                    {/* Image Column */}
                    <div className={`relative bg-gradient-to-br ${leader.gradient} col-span-1 min-h-[280px] flex items-center justify-center`}>
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
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30" />
                    </div>

                    {/* Content Column */}
                    <CardContent className="col-span-2 p-5 md:p-6 flex flex-col justify-between bg-white">
                      <div>
                        <div className="w-6 h-0.5 bg-amber-400 mb-3" />
                        <h3 className="text-lg md:text-xl font-black text-slate-900 mb-1">
                          {leader.name}
                        </h3>
                        <p className="text-xs font-bold text-amber-600 tracking-widest uppercase mb-3">
                          {leader.title}
                        </p>
                        <p className="text-sm text-stone-500 leading-relaxed line-clamp-4 mb-3 italic">
                          "{leader.message}"
                        </p>
                        <div className="bg-stone-50 border-l-4 border-amber-400 p-3 rounded-r-lg mb-4">
                          <p className="text-xs text-stone-400 italic line-clamp-2">
                            {leader.scripture}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <a href={`mailto:${leader.contact.email}`}>
                          <Button
                            size="sm"
                            className="bg-slate-800 text-white px-4 py-2 text-xs font-semibold hover:bg-slate-800 flex items-center gap-1"
                          >
                            <Mail className="w-3 h-3" />
                            Email
                          </Button>
                        </a>
                        <a href={`tel:${leader.contact.phone}`}>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border border-slate-800 text-slate-800 px-4 py-2 text-xs font-semibold hover:bg-transparent flex items-center gap-1"
                          >
                            <Phone className="w-3 h-3" />
                            Call
                          </Button>
                        </a>
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
      <section className="py-16 md:py-24 px-4 md:px-6 bg-slate-800 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <motion.div
            className="absolute top-10 left-1/4 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ y: [0, 40, 0], x: [0, 40, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
        {/* Gold top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">We're Here for You</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mt-3 mb-4 md:mb-6">
              Connect With Our Leadership
            </h2>
            <div className="w-16 h-0.5 bg-amber-400 mx-auto mb-6" />
            <p className="text-lg md:text-xl mb-8 text-slate-300 leading-relaxed">
              Our pastoral team is here for you. Whether you need prayer, counselling, or simply want to connect, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.href = '#contact'}
                className="bg-amber-400 text-slate-900 px-10 py-4 font-bold text-lg shadow-2xl hover:bg-amber-400"
              >
                Get In Touch
              </Button>
              <Button
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