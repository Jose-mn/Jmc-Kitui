import { motion } from "framer-motion";
import { Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Youth() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-6">Youth Ministry</h1>

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <Users size={32} />
          </div>

          <h1 className="text-4xl font-bold text-primary">
            Youth Ministry
          </h1>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Empowering young people to grow in faith, leadership, and purpose.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              What We Do
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Youth Ministry brings together young believers through
              fellowship, worship, mentorship, and outreach programs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We nurture spiritual growth while equipping the youth with life
              skills rooted in Christian values.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm h-64 flex items-center justify-center text-gray-400"
          >
            Youth Ministry Image
          </motion.div>

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="bg-primary text-white px-8 py-3 rounded-xl font-medium hover:opacity-90">
            Join the Youth Ministry
          </button>
        </motion.div>

      </div>
      </div>
        <Footer />
    </div>
  );
}
