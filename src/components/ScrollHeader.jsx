import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header when user scrolls past the hero section (roughly 300px)
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const navItems = [
    { name: "About", id: "about" },
    { name: "Technologies", id: "technologies" },
    { name: "Experience", id: "experience" },
    { name: "Achievements", id: "achievements" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-neutral-800"
        >
          <nav className="container mx-auto px-8 py-6">
            <div className="flex items-center justify-between">
              {/* Logo/Name */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-bold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent"
              >
                Islam Assanov
              </motion.div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => scrollToSection(item.id)}
                    className="text-neutral-300 hover:text-white transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-neutral-300 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden mt-4 space-y-2 overflow-hidden"
                >
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left text-neutral-300 hover:text-white transition-colors duration-200 py-2"
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default ScrollHeader;
