import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { StaticImage } from "gatsby-plugin-image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDarkMode = saved === "dark" || (!saved && prefersDark);
    document.documentElement.classList.toggle("dark", isDarkMode);
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    const nowDark = html.classList.contains("dark");
    localStorage.setItem("theme", nowDark ? "dark" : "light");
    setIsDark(nowDark);
  };

  return (
    <nav
      initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white shadow-md py-6 px-4"
    >
      <div className="flex justify-between items-center md:flex-row gap-12 mx-auto md:pl-36 ">
        {/*<Link to="/" className="text-3xl font-bold text-white dark:text-indig">
          &lt; Liliya Dev /&gt;
        </Link>*/}
        <Link to="/" className="block">
          <StaticImage
          src="../images/Logo LV.png"
          alt="Liliya Dev Logo"
          className="max-w-[200px]"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center text-base font-medium pr-24">
          {/*<Link to="/" className="text-2xl text-gray-200 dark:text-gray-100 hover:text-indigo-600 transition">Home</Link>
          <Link to="/page-2" className="text-2xl text-gray-200 dark:text-gray-100 hover:text-indigo-600 transition">Page 2</Link>*/}
          <a href="https://blog.liliyadev.ca/" className="text-2xl text-gray-200 dark:text-gray-100 hover:text-indigo-600 transition">Blog</a>
          <Link to="#contact" className="text-2xl text-gray-200 dark:text-gray-100 hover:text-indigo-600 transition">Contact</Link>
          
          {/* 🌙 Dark Mode Toggle */}
          <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="px-3 py-2 dark:text-gray-100 rounded flex items-center space-x-2"
          >
            {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col md:hidden space-y-4 mt-4 px-4 py-6 bg-blue-600 rounded-lg shadow-lg text-white focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
  {isOpen && (
    <motion.div
      key="mobile-menu"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col md:hidden space-y-4 mt-4 px-4 py-6 bg-blue-600 rounded-lg shadow-lg"
    >
      <a
        href="https://blog.liliyadev.ca/"
        onClick={() => setIsOpen(false)}
        className="text-white text-lg font-medium hover:text-indigo-200 transition"
      >
        Blog
      </a>
      <Link
        to="#contact"
        onClick={() => setIsOpen(false)}
        className="text-white text-lg font-medium hover:text-indigo-200 transition"
      >
        Contact
      </Link>
    </motion.div>
  )}
</AnimatePresence>

    </nav>
  );
};

export default Navbar;
