import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../assets/3323.jpeg";

export default function ImageCarousel({ images = [] }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Default images if none provided
  const carouselImages = images.length > 0 ? images : [
    { id: 1, src: image1, label: "Church Service" },
    { id: 2, src: image1, label: "Worship & Praise" },
    { id: 3, src: image1, label: "Community Outreach" },
    { id: 4, src: image1, label: "Youth Ministry" },
  ];
  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoPlay, carouselImages.length]);

  const goToPrev = () => {
    setAutoPlay(false);
    setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToNext = () => {
    setAutoPlay(false);
    setCurrent((prev) => (prev + 1) % carouselImages.length);
  };

  const goToSlide = (index) => {
    setAutoPlay(false);
    setCurrent(index);
  };

  // Resume autoplay after 10 seconds of manual control
  useEffect(() => {
    if (!autoPlay) {
      const timer = setTimeout(() => setAutoPlay(true), 10000);
      return () => clearTimeout(timer);
    }
  }, [autoPlay]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {carouselImages[current].src ? (
            <img
              src={carouselImages[current].src}
              alt={carouselImages[current].label}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-5xl font-bold mb-4">{carouselImages[current].id}</p>
                <p className="text-2xl font-semibold">{carouselImages[current].label}</p>
                <p className="text-sm mt-4 opacity-75">Add your church images here</p>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Previous Button */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all transform hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all transform hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {carouselImages.map((image, index) => (
          <motion.button
            key={image.id}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all ${
              index === current
                ? "bg-white w-8 h-3"
                : "bg-white/50 hover:bg-white/75 w-3 h-3"
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </div>
  );
}
