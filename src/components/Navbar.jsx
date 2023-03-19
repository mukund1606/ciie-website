import { useEffect, useState } from "react";
import srmLogoWhite from "../assets/SRM_Logo_White.png";
import srmLogoBlack from "../assets/SRM_Logo_Black.png";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Link } from "react-router-dom";

function NavElement() {
  const navElementProperties = `text-gray-600 font-medium hover:text-[#0047ab] dark:hover:text-[#0769ae] ease-in duration-600 transition hover:scale-[115%] dark:text-gray-300 dark:hover:text-blue-400`;
  return (
    <>
      <li className={navElementProperties}>
        <Link to="/">Home</Link>
      </li>
      <li className={navElementProperties}>
        <Link to="/about-us">About Us</Link>
      </li>
      <li className={navElementProperties}>
        <Link to="/events">Events</Link>
      </li>
      <li className={navElementProperties}>
        <Link to="/team">Team</Link>
      </li>
      <li className={navElementProperties}>
        <Link to="/alumni">Alumni</Link>
      </li>
      <li className={navElementProperties}>
        <Link to="/contact-us">Contact Us</Link>
      </li>
    </>
  );
}

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        setIsDarkMode(e.matches);
      });
  }, [isDarkMode]);

  return (
    <>
      <div className="h-[6.5rem]" />
      <nav className="flex flex-col bg-slate-100 rounded-b-lg dark:bg-black bg-opacity-60 dark:bg-opacity-60 shadow fixed w-full dark:shadow-gray-900 top-0 backdrop-blur z-10">
        <motion.div
          className="h-2 w-full bg-[#0047ab] z-[100] opacity-50 rounded-lg"
          style={{ scaleX: scrollYProgress }}
        />
        <div className="flex justify-around p-3">
          <div className="image-box">
            <Link to="/">
              {isDarkMode ? (
                <img
                  src={srmLogoWhite}
                  alt="logo"
                  className="w-40 hover:scale-105 ease-in duration-400 transition"
                />
              ) : (
                <img
                  src={srmLogoBlack}
                  alt="logo"
                  className="w-40 hover:scale-105 ease-in duration-400 transition"
                />
              )}
            </Link>
          </div>
          <div className="mobile-nav md:hidden flex items-center">
            <button
              className="p-2 text-gray-700 dark:text-gray-100 rounded-lg outline-none border-gray-400 border"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox={isMobileNavOpen ? "0 0 20 20" : "0 0 24 24"}
                fill={isMobileNavOpen ? "currentColor" : "none"}
                stroke={isMobileNavOpen ? "" : "currentColor"}
                strokeWidth={isMobileNavOpen ? 1 : 2}
              >
                {isMobileNavOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="nav hidden md:flex items-center">
            <ul className="flex gap-8 md:gap-5 lg:gap-8">
              <NavElement />
            </ul>
          </div>
        </div>
        <AnimatePresence>
          {isMobileNavOpen && (
            <motion.div
              className="top-[6.5rem] left-0 w-full md:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <ul className="flex flex-col items-center gap-2 p-5 border-t-2 dark:border-slate-900">
                <NavElement />
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
