import { motion } from "framer-motion";
import { Music } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Choir() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="min-h-screen bg-gray-50 px-6 py-20">
        <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center">
            <Music size={32} />
          </div>

          <h1 className="text-4xl font-bold text-primary">
            Choir Ministry
          </h1>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Leading the church into worship through music and praise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Calling</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Choir Ministry serves through heartfelt worship that prepares
              the congregation spiritually during services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Members are trained musically and spiritually to minister with
              excellence and humility.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm h-64 flex items-center justify-center text-gray-400">
            Choir Ministry Image
          </div>
        </div>

      </div>
      </div>
        <Footer />
    </div>
  );
}
