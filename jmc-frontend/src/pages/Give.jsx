import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import giveBanner from "@/assets/give-banner.jpeg";

export default function Give() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-950 transition-colors duration-300">
      <Navigation />

      {/* MAIN CONTENT */}
      <section className="flex-1 pt-28 pb-20 px-4 md:px-6 flex items-center justify-center bg-purple-50/10 dark:bg-slate-900/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl mx-auto shadow-2xl rounded-2xl overflow-hidden border-4 border-purple-100 dark:border-purple-900 bg-white"
        >
          <img 
            src={giveBanner} 
            alt="Jesus Manifestation Church Kitui - Paybill 657869" 
            className="w-full h-auto object-cover block"
          />
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}