import { useParams, Link } from "react-router-dom";
import { getDevotionalById } from "../Data/Devotionals";
import { Calendar, User, BookOpen, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function DevotionalDetail() {
  const { id } = useParams();
  console.log("URL ID:", id); // DEBUG

  const devotional = getDevotionalById(id);
  console.log("Found devotional:", devotional); // DEBUG

  if (!devotional) {
    console.log("Devotional not found!"); // DEBUG
    return (
      <div className="min-h-screen flex flex-col dark:bg-slate-950 transition-colors duration-300">
        <Navigation />
        <div className="flex-1 px-6 py-20 bg-white dark:bg-slate-950 flex items-center justify-center transition-colors duration-300">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Devotional Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors">Looking for ID: {id}</p>
            <Link to="/devotionals" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 hover:underline transition-colors">
              ← Back to Devotionals
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-950 transition-colors duration-300">
      <Navigation />

      <div className="flex-1 px-4 sm:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          {/* Back Button */}
          <Link
            to="/devotionals"
            className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-6 font-medium transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Devotionals
          </Link>

          {/* Article */}
          <article className="bg-white dark:bg-slate-900 border border-transparent dark:border-slate-800 rounded-xl shadow-lg p-6 sm:p-10 transition-colors duration-300">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              {devotional.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 border-b dark:border-slate-800 mb-6 pb-6 transition-colors">
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                {formatDate(devotional.date)}
              </span>
              {devotional.author && (
                <span className="flex items-center gap-2">
                  <User size={18} />
                  {devotional.author}
                </span>
              )}
              {devotional.category && (
                <span className="bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-semibold transition-colors">
                  {devotional.category}
                </span>
              )}
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-600 dark:border-purple-500 p-4 mb-6 transition-colors">
              <div className="flex items-start gap-2">
                <BookOpen className="text-purple-600 dark:text-purple-400 mt-1 transition-colors" size={20} />
                <div>
                  <p className="font-semibold text-purple-900 dark:text-purple-300 transition-colors">{devotional.scripture}</p>
                  <p className="text-gray-700 dark:text-gray-300 italic mt-1 transition-colors">"{devotional.excerpt}"</p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              {devotional.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed transition-colors">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          {/* Navigation to other devotionals */}
          <div className="mt-8 text-center">
            <Link
              to="/devotionals"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-semibold"
            >
              View All Devotionals
            </Link>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}