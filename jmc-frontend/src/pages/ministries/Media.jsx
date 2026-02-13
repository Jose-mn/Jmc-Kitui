import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Media() {
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
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
            <Camera size={32} />
          </div>

          <h1 className="text-4xl font-bold text-primary">
            Media Team
          </h1>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Sharing the message through sound, visuals, and technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">What We Handle</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Media Team manages audio, video, photography, livestreams,
              and digital communication platforms.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We ensure the gospel reaches beyond the church walls.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm h-64 flex items-center justify-center text-gray-400">
            Media Team Image
          </div>
        </div>

      </div>
      </div>
        <Footer />
    </div>
  );
}
