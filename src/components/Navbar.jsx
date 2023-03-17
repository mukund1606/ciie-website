import { useState } from "react";
import srmLogo from "../assets/SRM_Logo.png";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Link } from "react-router-dom";

function NavElement() {
  const navElementProperties = `text-gray-600 hover:text-blue-600 ease-in duration-600 transition hover:scale-[115%]`;
  return (
    <>
      <li className={navElementProperties}>
        <Link to="/">Home</Link>
      </li>
      <li className={navElementProperties}>
        <Link to="/">About Us</Link>
      </li>
      <li className={navElementProperties}>
        <Link to="/">Events</Link>
      </li>
      <li className={navElementProperties}>
        <Link to="/">Contact Us</Link>
      </li>
    </>
  );
}

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <nav className="flex flex-col bg-white bg-opacity-90 shadow sticky top-0 backdrop-blur z-10">
      <motion.div
        className="h-2 w-full bg-[#0047ab] z-[100] opacity-50 rounded-lg"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="flex justify-around p-3">
        <div className="image-box">
          <Link to="/">
            <img
              src={srmLogo}
              alt="logo"
              className="w-40 hover:scale-105 ease-in duration-400 transition"
            />
          </Link>
        </div>
        <div className="mobile-nav md:hidden flex items-center">
          <button
            className="p-2 text-gray-700 rounded-md outline-none border-gray-400 border"
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
          <AnimatePresence>
            {isMobileNavOpen && (
              <motion.ul
                className="absolute top-[6.5rem] left-0 flex items-center flex-col gap-4 bg-white bg-opacity-90 shadow p-4 rounded-md w-full"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <NavElement />
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        <div className="nav hidden md:flex items-center">
          <ul className="flex gap-8">
            <NavElement />
          </ul>
        </div>
      </div>
    </nav>
  );
}
