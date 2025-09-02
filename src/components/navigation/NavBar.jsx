import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [backButton, setBackButton] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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


  useEffect(() => {
    if (location.pathname === "/contact" || location.pathname === "/quote") {
      setBackButton(true);
    } else {
      setBackButton(false);
    }
  }, [location]);

  const handleAbout = () => {
    setMenuOpen(false);
    document.getElementById("learn-more")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleServices = () => {
    setMenuOpen(false);
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleHome = () => {
    setBackButton(false);
    navigate(-1); 
  };


  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-20 flex ${backButton ? "justify-start" : "justify-end"} items-center px-6 z-50 md:px-12 transition-colors duration-300 ${
          scrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        {backButton ? (
          <IoMdArrowBack className={`text-2xl cursor-pointer md:text-4xl ${scrolled ? "text-black" : "text-white"} `} onClick={handleHome}/>
        ) : (
          null
        )}
        

        {!backButton && (
          <button
            id="menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`relative flex items-center justify-center px-2 rounded-full border shadow-md overflow-hidden ${
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
                  className="text-lg font-medium md:text-xl"
                >
                  Menu
                </motion.span>
              ) : (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl px-2 px-1 text-black font-bold"
                >
                  ✕
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        )}
      </div>

      {/* Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-blueprint z-40 flex flex-col items-center justify-center space-y-8 text-2xl font-medium text-black"
          >
            <Link to='contact' className="hover:text-blue-500 hover:scale-110 transition-all duration-300 ease-in-out" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            <a className="hover:text-blue-500 hover:scale-110 transition-all duration-300 ease-in-out" href="#about" onClick={handleAbout}>About</a>
            <a className="hover:text-blue-500 hover:scale-110 hover: transition-all duration-300 ease-in-out" href="#services" onClick={handleServices}>Services</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
