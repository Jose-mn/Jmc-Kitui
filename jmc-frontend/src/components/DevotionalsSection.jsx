import { Link } from "react-router-dom";
import { getLatestDevotionals } from "../data/devotionals";
import { Calendar, BookOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function DevotionalsSection() {
  const latestDevotionals = getLatestDevotionals(3);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Daily Devotionals
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Feed your spirit with daily reflections and biblical insights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {latestDevotionals.map((devotional, index) => (
            <motion.div
              key={devotional.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/devotionals/${devotional.id}`}
                className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden h-full group"
              >
                {devotional.image && (
                  <div className="overflow-hidden">
                    <img
                      src={devotional.image}
                      alt={devotional.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar size={16} />
                    {formatDate(devotional.date)}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition">
                    {devotional.title}
                  </h3>

                  <div className="flex items-center gap-2 text-purple-600 text-sm mb-3">
                    <BookOpen size={16} />
                    <span className="font-medium">{devotional.scripture}</span>
                  </div>

                  <p className="text-gray-600 line-clamp-2 mb-4">
                    {devotional.excerpt}
                  </p>

                  <span className="text-purple-600 font-semibold text-sm inline-flex items-center gap-1">
                    Read More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/devotionals"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-semibold"
          >
            View All Devotionals
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}