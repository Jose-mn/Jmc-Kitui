import { useState } from "react";
import { Link } from "react-router-dom";
import { devotionals } from "../data/devotionals";
import { Calendar, User, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Devotionals() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDevotionals = devotionals.filter(dev =>
    dev.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dev.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dev.scripture.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVIGATION - This should appear at the top */}
      <Navigation />
      
      <div className="flex-1 px-4 sm:px-6 py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
              Daily Devotionals
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Short daily reflections to encourage your walk with God
            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="mb-8 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search devotionals..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Devotionals Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDevotionals.map((devotional, index) => (
              <motion.div
                key={devotional.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/devotionals/${devotional.id}`}
                  className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden h-full"
                >
                  {devotional.image && (
                    <img
                      src={devotional.image}
                      alt={devotional.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {formatDate(devotional.date)}
                      </span>
                      {devotional.author && (
                        <span className="flex items-center gap-1">
                          <User size={16} />
                          {devotional.author}
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {devotional.title}
                    </h2>

                    <div className="flex items-center gap-2 text-purple-600 text-sm mb-3">
                      <BookOpen size={16} />
                      <span className="font-medium">{devotional.scripture}</span>
                    </div>

                    <p className="text-gray-600 line-clamp-3">
                      {devotional.excerpt}
                    </p>

                    <div className="mt-4 text-purple-600 font-semibold text-sm">
                      Read More →
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredDevotionals.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No devotionals found matching your search.</p>
            </div>
          )}
        </div>
      </div>

      {/* FOOTER - This should appear at the bottom */}
      <Footer />
    </div>
  );
}