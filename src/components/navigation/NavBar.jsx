import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-20 flex justify-between items-center px-6 z-50 transition-colors duration-300 ${
          scrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <h1
          className={`text-2xl font-semibold transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          StaubLogo
        </h1>

        {/* Toggle Button (menu <-> ✕) */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`relative flex items-center justify-center w-16 h-8 rounded-full border shadow-md overflow-hidden ${
            scrolled
              ? "text-black bg-transparent border-black/30"
              : "text-white bg-white/30 border-white/30"
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            {!menuOpen ? (
              <motion.span
                key="menu"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
                className="text-lg font-medium"
              >
                menu
              </motion.span>
            ) : (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                className="text-2xl text-black font-medium"
              >
                ✕
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center space-y-8 text-2xl font-medium text-black"
          >
            <a href="#home" onClick={() => setMenuOpen(false)}>Contact Us</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
