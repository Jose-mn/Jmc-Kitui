import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Church, PlayCircle, HeartHandshake, Quote } from "lucide-react";
import {useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ImageCarousel from "@/components/ImageCarousel";
import Footer from "@/components/Footer";
import faithImage from "../assets/devotionals/faith.jpeg";
import prayerImage from "../assets/devotionals/prayer.jpeg";
import purposeImage from "../assets/devotionals/purpose.jpeg";
import pastorateImage from "../assets/pastorate.jpeg";
export default function Home() {
  const navigate = useNavigate(); // ADD THIS LINE
  return (
    <div className="flex flex-col">
      <Navigation />

      {/* HERO SECTION */}
      <section className="pt-24 pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Decorative dots */}
              <div className="absolute -top-6 -left-6 flex gap-2 z-20">
                <div className="w-3 h-3 rounded-full bg-red-600" />
                <div className="w-3 h-3 rounded-full bg-red-600" />
                <div className="w-3 h-3 rounded-full bg-red-600" />
              </div>

              {/* Image Carousel */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square md:aspect-auto md:h-[600px]">
                <ImageCarousel />
              </div>

              {/* Decorative bottom right dots */}
              <div className="absolute -bottom-4 -right-4 flex gap-2 z-20">
                <div className="w-3 h-3 rounded-full bg-purple-600" />
                <div className="w-3 h-3 rounded-full bg-purple-600" />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {/* Decorative Quote Marks */}
            <div className="flex gap-2 text-6xl text-gray-300">
              <Quote className="w-16 h-16 fill-current" />
            </div>

            <h2 className="text-5xl font-black text-slate-900 leading-tight">
              Welcome to Jesus Manifestation Church
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Jesus Manifestation Church is a Christ-centered family where faith is built, lives are transformed, and purpose is discovered. We are committed to teaching the Word of God with clarity, worshipping in truth, and living out the love of Christ in our daily lives. No matter where you are in your journey of faith, this is a place where you can grow, belong, and encounter God.

            “And the Word became flesh and dwelt among us, and we beheld His glory.”
                John 1:14
            </p>

            <p className="text-base text-gray-600 leading-relaxed">
              Join us as we worship, grow in faith, and engage in meaningful ministry. There's a place for you here.
            </p>

            <div className="flex gap-4 pt-4">
              <Button 
  onClick={() => navigate('/about')}
  className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 font-semibold text-lg"
>
  EXPLORE
</Button>
              <Button 
                onClick={() => window.open('https://www.youtube.com/@JMCKITUI', '_blank')}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-semibold text-lg"
              >
                WATCH LIVE
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MESSAGE FROM PASTORS SECTION */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex items-start gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-600" />
              <div className="w-3 h-3 rounded-full bg-red-600" />
              <div className="w-3 h-3 rounded-full bg-red-600" />
            </div>
            <h3 className="text-3xl font-bold text-purple-700">Message from our Pastors</h3>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                  Welcome to Jesus Manifestation Church. We are excited to have you visit our website and learn more about who we are as a church community. Our mission is to be a place where the Spirit of God moves freely, transforming lives and equipping believers to manifest the presence and power of Christ in every aspect of their lives.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                  Whether you are seeking spiritual growth, community, fellowship, or simply want to understand more about faith in Jesus Christ, we welcome you with open arms. Our services are designed to inspire, challenge, and encourage you in your faith journey.
                </p>

                <p className="text-gray-600 font-semibold">
                  In His Service,<br/>
                  <span className="text-purple-700">Your Pastoral Team</span>
                </p>
              </div>

              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img 
  src={pastorateImage} 
  alt="Pastoral Team" 
  className="rounded-2xl shadow-lg w-full object-cover h-96" 
/>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICE TIMES */}
<section className="py-20 px-6 relative overflow-hidden">
  {/* Animated Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
  <div className="absolute inset-0 opacity-30">
    <motion.div
      className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl"
      animate={{ 
        scale: [1, 1.2, 1],
        x: [0, 50, 0],
        y: [0, 30, 0]
      }}
      transition={{ duration: 8, repeat: Infinity }}
    />
    <motion.div
      className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl"
      animate={{ 
        scale: [1.2, 1, 1.2],
        x: [0, -50, 0],
        y: [0, -30, 0]
      }}
      transition={{ duration: 8, repeat: Infinity, delay: 1 }}
    />
  </div>

  <div className="max-w-5xl mx-auto relative z-10">
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Calendar className="w-16 h-16 mx-auto mb-4 text-purple-600" />
      </motion.div>
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
        Join Us for Worship
      </h2>
      <p className="text-gray-600 text-lg">We can't wait to see you!</p>
      <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-4" />
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        { 
          title: "Sunday Service", 
          time: "8:45 AM - 12:00 PM", 
          color: "from-blue-500 to-cyan-500",
          icon: Church,
          description: "Main worship service"
        },
        { 
          title: "Prayer Meetings", 
          time: "Tue & Thu 5:00 - 7:00 PM", 
          color: "from-purple-500 to-pink-500",
          icon: HeartHandshake,
          description: "Join us in prayer"
        },
        { 
          title: "Friday Nights", 
          time: "As Announced", 
          color: "from-yellow-400 to-orange-500",
          icon: PlayCircle,
          description: "Special prayer services"
        },
      ].map((service, i) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <Card className="border-0 shadow-xl overflow-hidden h-full bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />
              <CardContent className="p-8 text-center">
                <motion.div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg mx-auto`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="text-white w-10 h-10" />
                </motion.div>
                
                <h3 className="font-bold text-2xl text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{service.description}</p>
                
                <div className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${service.color} bg-opacity-10 mb-4`}>
                  <p className="text-slate-800 font-bold text-lg">{service.time}</p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    className={`mt-4 border-2 hover:text-white transition-all ${
                      i === 0 ? 'border-blue-500 text-blue-600 hover:bg-blue-500' :
                      i === 1 ? 'border-purple-500 text-purple-600 hover:bg-purple-500' :
                      'border-orange-500 text-orange-600 hover:bg-orange-500'
                    }`}
                  >
                    Learn More
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>

    {/* Call to Action */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
      className="text-center mt-16"
    >
      <p className="text-gray-600 text-lg mb-6">New here? We'd love to meet you!</p>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button 
          onClick={() => window.open('https://maps.app.goo.gl/A6gZZLv9NwqAsMh5A', '_blank')}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 font-bold text-lg shadow-xl"
        >
          Plan Your Visit
        </Button>
      </motion.div>
    </motion.div>
  </div>
</section>
{/* DEVOTIONALS/BLOG SECTION */}
<section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
  <div className="container mx-auto max-w-6xl">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Latest Devotionals
      </h2>
      <p className="text-gray-600 text-lg">
        Daily inspiration and biblical insights to strengthen your faith
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          id: 1, // ADD THIS
          title: "Walking in Faith",
          excerpt: "Discover what it means to truly trust God in every season of life and let faith guide your steps.",
          date: "February 8, 2026",
          author: "Bishop Elijah Mutua",
          image: faithImage,
          category: "Faith"
        },
        {
          id: 2, // ADD THIS
          title: "The Power of Prayer",
          excerpt: "Unlock the transformative power of consistent prayer and communion with God in your daily walk.",
          date: "February 5, 2026",
          author: "Pastor Bernard Nderitu",
          image: prayerImage,
          category: "Prayer"
        },
        {
          id: 3, // ADD THIS
          title: "Living in Purpose",
          excerpt: "God has a unique calling for your life. Learn how to discover and walk in your divine purpose.",
          date: "February 1, 2026",
          author: "Pastor Josphat Musee",
          image: purposeImage,
          category: "Purpose"
        },
      ].map((post, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <Card 
            className="overflow-hidden h-full hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            onClick={() => navigate(`/devotionals/${post.id}`)} // ADD THIS - makes entire card clickable
          >
            {/* Featured Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
              </div>
            </div>

            <CardContent className="p-6">
              {/* Meta Info */}
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-700 font-medium">
                  {post.author}
                </span>
                <span className="text-blue-600 font-semibold text-sm inline-flex items-center gap-1">
                  Read More →
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>

    {/* View All Button */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-center mt-12"
    >
      <Button
        onClick={() => navigate('/devotionals')}
        variant="outline"
        className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 font-semibold text-lg"
      >
        View All Devotionals
      </Button>
    </motion.div>
  </div>
</section>
      {/* LATEST SERMON */}
<section className="py-20 bg-gradient-to-b from-slate-50 to-white px-6">
  <div className="max-w-4xl mx-auto">
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent mb-4">
        Latest Sermon
      </h2>
      <div className="h-1 w-20 mx-auto bg-yellow-500 rounded-full" />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
        <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        
        {/* YouTube Video Embed */}
        <div className="relative w-full pt-[56.25%] bg-black">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/RX8k09Gz-rc?autoplay=1&mute=1&loop=1&playlist=RX8k09Gz-rc&controls=1&modestbranding=1&rel=0"
            title="Latest Sermon"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <CardContent className="p-10 bg-gradient-to-br from-white to-slate-50">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-2">
            The assurance of our Faith
          </h3>
          <p className="text-slate-600 text-center text-lg font-semibold mb-6">
            Bishop Maurice Kareithi - February 11, 2026
          </p>

          <motion.div
            className="flex justify-center gap-4"
            whileHover={{ scale: 1.05 }}
          >
            <Button 
              onClick={() => window.open('https://www.youtube.com/live/RX8k09Gz-rc?si=YyJSmhXnv9njcYRz')}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-10 py-3 font-bold text-lg shadow-lg"
            >
              Watch Full Sermon
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  </div>
</section>

      <Footer />
    </div>
  );
}

