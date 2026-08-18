import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";
import manifestationTvLogo from "../assets/manifestation-tv.png";
import { ChevronDown, Menu, X, Moon, Sun, Tv, Bell, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeContext";

export default function Navigation() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinistriesOpen, setIsMinistriesOpen] = useState(false);
  const [showTvModal, setShowTvModal] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const { theme, setTheme } = useTheme();

  const ministries = [
    { name: "Ladies Department", path: "/departments/ladies" },
    { name: "Men's Department", path: "/departments/men" },
    { name: "Youth Department", path: "/departments/youth" },
    { name: "Sunday School Department", path: "/departments/sundayschool" },
    { name: "Couples Department", path: "/departments/couples" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
    setIsMinistriesOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white dark:bg-slate-900 shadow-sm z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-10" />
              <span className="font-bold text-slate-900 dark:text-white hidden sm:block text-sm md:text-base transition-colors duration-300">
                Jesus Manifestation Church
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6 text-sm">
              <Link to="/" className="text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-400 font-medium transition">
                HOME
              </Link>
              <Link to="/about" className="text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-400 font-medium transition">
                ABOUT US
              </Link>
              <Link to="/pastorate" className="text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-400 font-medium transition">
                PASTORATE
              </Link>
              <Link to="/devotionals" className="text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-400 font-medium transition">
                DEVOTIONALS
              </Link>
              <Link to="/events" className="text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-400 font-medium transition">
                EVENTS
              </Link>

              {/* Desktop Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-400 transition">
                  DEPARTMENTS
                  <ChevronDown size={16} />
                </button>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-3 w-64 bg-white dark:bg-slate-800 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all p-2 z-50 border border-slate-100 dark:border-slate-700"
                >
                  {ministries.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              </div>

              <Link to="/contact" className="text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-400 font-medium transition">
                CONTACT US
              </Link>
            </div>

            {/* CTA Buttons & Theme Toggle */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors mr-1"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* MANIFESTATION TV (COMING SOON) Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => setShowTvModal(true)}
                  className="relative bg-slate-950 hover:bg-slate-900 text-white px-3 py-2 font-semibold text-xs rounded-lg border border-amber-400/50 shadow-md flex items-center gap-2"
                >
                  <img
                    src={manifestationTvLogo}
                    alt="Manifestation TV"
                    className="w-5 h-5 object-contain rounded"
                  />
                  <span className="font-bold tracking-wide">TV WATCH</span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase bg-amber-400 text-slate-950 tracking-wider animate-pulse">
                    Soon
                  </span>
                </Button>
              </motion.div>

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
                  onClick={() => navigate('/give')}
                  className="bg-purple-700 hover:bg-purple-800 text-white px-3 py-2 font-semibold text-sm"
                >
                  GIVE
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="flex items-center lg:hidden gap-2">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-700 dark:text-slate-300 hover:text-purple-700 transition"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800 transition-colors duration-300"
              >
                <div className="py-4 space-y-3">
                  <Link to="/" onClick={closeMenu} className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-purple-700">
                    HOME
                  </Link>
                  <Link to="/about" onClick={closeMenu} className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-purple-700">
                    ABOUT US
                  </Link>
                  <Link to="/pastorate" onClick={closeMenu} className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-purple-700">
                    PASTORATE
                  </Link>
                  <Link to="/devotionals" onClick={closeMenu} className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-purple-700">
                    DEVOTIONALS
                  </Link>
                  <Link to="/events" onClick={closeMenu} className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-purple-700">
                    EVENTS
                  </Link>

                  {/* Mobile Dropdown */}
                  <div>
                    <button
                      onClick={() => setIsMinistriesOpen(!isMinistriesOpen)}
                      className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-purple-700"
                    >
                      DEPARTMENTS
                      <ChevronDown size={18} className={`transform transition-transform ${isMinistriesOpen ? "rotate-180" : ""}`} />
                    </button>

                    {isMinistriesOpen && (
                      <div className="pl-4 space-y-2 mt-2">
                        {ministries.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={closeMenu}
                            className="block px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-purple-700"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link to="/contact" onClick={closeMenu} className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-purple-700">
                    CONTACT US
                  </Link>

                  {/* Mobile CTA Buttons */}
                  <div className="pt-4 space-y-3 border-t border-slate-200 dark:border-slate-800">
                    <Button
                      onClick={() => {
                        setShowTvModal(true);
                        closeMenu();
                      }}
                      className="w-full bg-slate-950 hover:bg-slate-900 text-white font-semibold flex items-center justify-center gap-2 border border-amber-400/50"
                    >
                      <img
                        src={manifestationTvLogo}
                        alt="Manifestation TV"
                        className="w-5 h-5 object-contain rounded"
                      />
                      <span>MANIFESTATION TV</span>
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase bg-amber-400 text-slate-950 tracking-wider">
                        Coming Soon
                      </span>
                    </Button>
                    <Button
                      onClick={() => {
                        window.open('https://www.youtube.com/@JMCKITUI', '_blank');
                        closeMenu();
                      }}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
                    >
                      LIVE STREAM
                    </Button>
                    <Button
                      onClick={() => {
                        navigate('/give');
                        closeMenu();
                      }}
                      className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold"
                    >
                      GIVE
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* MANIFESTATION TV COMING SOON MODAL */}
      <AnimatePresence>
        {showTvModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg bg-slate-950 border border-amber-400/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-center text-white overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute -top-24 -left-24 w-60 h-60 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => {
                  setShowTvModal(false);
                  setSubscribed(false);
                }}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Manifestation TV Logo */}
              <div className="w-48 sm:w-56 mx-auto mb-4 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                <img
                  src={manifestationTvLogo}
                  alt="Manifestation TV Logo"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Coming Soon Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-widest mb-3 shadow-lg">
                <Tv className="w-3.5 h-3.5" />
                <span>Broadcasting Coming Soon</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                Manifestation TV
              </h3>

              <p className="text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4">
                Christ Centered | Truth Driven | Impacting Lives
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                We are launching a 24/7 dedicated Christian television station bringing life-transforming gospel teachings, dynamic praise and worship, and kingdom ministry straight to your home and screens.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {subscribed ? (
                  <div className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-bold text-sm">
                    <CheckCircle className="w-4 h-4" />
                    <span>You'll be notified upon launch!</span>
                  </div>
                ) : (
                  <Button
                    onClick={() => setSubscribed(true)}
                    className="bg-amber-400 hover:bg-amber-300 text-slate-950 px-6 py-3 font-bold text-sm rounded-full shadow-lg flex items-center justify-center gap-2"
                  >
                    <Bell className="w-4 h-4" />
                    <span>Notify Me When Live</span>
                  </Button>
                )}

                <Button
                  onClick={() => {
                    setShowTvModal(false);
                    window.open('https://www.youtube.com/@JMCKITUI', '_blank');
                  }}
                  variant="outline"
                  className="border-purple-400/40 text-purple-200 hover:bg-purple-900/40 px-6 py-3 font-semibold text-sm rounded-full"
                >
                  Watch Online Stream
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}