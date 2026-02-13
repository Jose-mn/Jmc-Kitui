import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinistriesOpen, setIsMinistriesOpen] = useState(false);

  const ministries = [
    { name: "Youth Ministry", path: "/ministries/youth" },
    { name: "Choir Ministry", path: "/ministries/choir" },
    { name: "Ushers Ministry", path: "/ministries/ushers" },
    { name: "Media Team", path: "/ministries/media" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
    setIsMinistriesOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
            <img src={logo} alt="Logo" className="h-10" />
            <span className="font-bold text-slate-900 hidden sm:block text-sm md:text-base">
              Jesus Manifestation Church
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 text-sm">
            <Link to="/about" className="text-slate-700 hover:text-purple-700 font-medium transition">
              ABOUT US
            </Link>
            <Link to="/pastorate" className="text-slate-700 hover:text-purple-700 font-medium transition">
              PASTORATE
            </Link>
            <Link to="/devotionals" className="text-slate-700 hover:text-purple-700 font-medium transition">
              DEVOTIONALS
            </Link>
            <Link to="/events" className="text-slate-700 hover:text-purple-700 font-medium transition">
              EVENTS
            </Link>
            
            {/* Desktop Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-purple-700 transition">
                MINISTRIES
                <ChevronDown size={16} />
              </button>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 mt-3 w-56 bg-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all p-2 z-50"
              >
                {ministries.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            </div>

            <Link to="/contacts" className="text-slate-700 hover:text-purple-700 font-medium transition">
              CONTACT US
            </Link>
          </div>

          {/* CTA Buttons - Hidden on small screens */}
          {/* CTA Buttons */}
<div className="hidden md:flex items-center gap-3">
  {/* Animated LIVE STREAM Button */}
 <motion.div
  animate={{
    boxShadow: [
      "0 0 0px rgba(239, 68, 68, 0.5)",
      "0 0 20px rgba(239, 68, 68, 0.8)",
      "0 0 0px rgba(239, 68, 68, 0.5)",
    ],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
  className="rounded-lg"
>
  <Button
    onClick={() => window.open('https://www.youtube.com/@JMCKITUI', '_blank')}
    className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 font-semibold text-sm"
  >
    <motion.span
      className="inline-block w-2 h-2 bg-white rounded-full mr-2"
      animate={{
        opacity: [1, 0.3, 1],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
      }}
    />
    LIVE STREAM
  </Button>
</motion.div>

  {/* GIVE ONLINE Button */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Button
      onClick={() => window.open('/give', '_blank')}
      className="bg-purple-700 hover:bg-purple-800 text-white px-3 py-2 font-semibold text-sm"
    >
      GIVE ONLINE
    </Button>
  </motion.div>
</div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-purple-700 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3">
                <Link
                  to="/about"
                  className="block py-2 text-slate-700 hover:text-purple-700 font-medium transition"
                  onClick={closeMenu}
                >
                  ABOUT US
                </Link>
                <Link
                  to="/pastorate"
                  className="block py-2 text-slate-700 hover:text-purple-700 font-medium transition"
                  onClick={closeMenu}
                >
                  PASTORATE
                </Link>
                <Link
                  to="/devotionals"
                  className="block py-2 text-slate-700 hover:text-purple-700 font-medium transition"
                  onClick={closeMenu}
                >
                  DEVOTIONALS
                </Link>
                <Link
                  to="/events"
                  className="block py-2 text-slate-700 hover:text-purple-700 font-medium transition"
                  onClick={closeMenu}
                >
                  EVENTS
                </Link>

                {/* Mobile Ministries Dropdown */}
                <div>
                  <button
                    onClick={() => setIsMinistriesOpen(!isMinistriesOpen)}
                    className="flex items-center justify-between w-full py-2 text-slate-700 hover:text-purple-700 font-medium transition"
                  >
                    MINISTRIES
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform ${isMinistriesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {isMinistriesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-2 mt-2"
                      >
                        {ministries.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block py-2 text-sm text-slate-600 hover:text-purple-700 transition"
                            onClick={closeMenu}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/contact us"
                  className="block py-2 text-slate-700 hover:text-purple-700 font-medium transition"
                  onClick={closeMenu}
                >
                  CONTACT US
                </Link>

                {/* Mobile CTA Buttons */}
                <div className="pt-4 space-y-3 border-t border-slate-200">
                  <Button
                    onClick={() => {
                      window.open('/live', '_blank');
                      closeMenu();
                    }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
                  >
                    LIVE STREAM
                  </Button>
                  <Button
                    onClick={() => {
                      window.open('/give', '_blank');
                      closeMenu();
                    }}
                    className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold"
                  >
                    GIVE ONLINE
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}