import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const InstagramIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const GithubIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  useEffect(() => setIsMenuOpen(false), [location]);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] flex justify-center transition-all duration-500 pt-0 px-4 md:px-0">
      <nav
        className={`
          flex items-center justify-between transition-all duration-500 ease-in-out relative z-[110]
          ${
            isScrolled || isMenuOpen
              ? "mt-4 w-full md:w-[75%] py-5 px-8 rounded-2xl md:rounded-full bg-black border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-md"
              : "mt-0 w-full py-6 px-8 md:px-12 bg-black/0 border-b border-transparent"
          }
        `}
      >
        <Link to="/" className="flex items-center gap-3 z-[120]">
          <img
            src="/fsdc.jpeg"
            alt="Logo"
            className="h-8 md:h-9 rounded-lg shadow-lg border border-white/5"
          />
          <div className="flex flex-col leading-none">
            <span className="font-black tracking-tighter uppercase text-lg text-white">
              FSDC
            </span>
            <span className="text-[7px] text-purple-500 font-bold tracking-[0.2em] hidden md:block">
              REVA UNIVERSITY
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            to="/"
            className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 ${
              location.pathname === "/"
                ? "text-purple-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            to="/team"
            className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 ${
              location.pathname === "/team"
                ? "text-purple-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Our Team
          </Link>
          <Link
            to="/contact"
            className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 ${
              location.pathname === "/contact"
                ? "text-purple-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Contact Us
          </Link>
          <div className="flex items-center gap-4 ml-2 pl-6 border-l border-white/10 text-gray-400">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all hover:-translate-y-1"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.instagram.com/fsdc_reva/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-all hover:-translate-y-1"
              aria-label="Instagram"
            >
              <InstagramIcon size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle Button - z-index higher than overlay */}
        <button
          className="md:hidden z-[120] p-2 text-white bg-white/5 rounded-xl border border-white/10 outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* FIXED MOBILE OVERLAY - MOVED OUTSIDE NAV TO FIX SPACING ISSUES */}
      <div
        className={`
        fixed inset-0 h-screen w-full bg-black flex flex-col items-center justify-center gap-10 transition-all duration-500 ease-in-out md:hidden z-[105]
        ${
          isMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }
      `}
      >
        {/* Decorative Background Blur for the Menu */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="flex flex-col items-center gap-8 relative z-10">
          <Link
            to="/"
            className="text-5xl font-black italic uppercase tracking-tighter text-white hover:text-purple-500 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/team"
            className="text-5xl font-black italic uppercase tracking-tighter text-white hover:text-purple-500 transition-colors"
          >
            Our Team
          </Link>
          <Link
            to="/contact"
            className="text-5xl font-black italic uppercase tracking-tighter text-white hover:text-purple-500 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex gap-10 mt-6 relative z-10">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-all hover:-translate-y-1"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://www.instagram.com/fsdc_reva/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-all hover:-translate-y-1"
            aria-label="Instagram"
          >
            <InstagramIcon size={20} />
          </a>
        </div>

        <div className="absolute bottom-12 text-[10px] uppercase tracking-[0.5em] text-gray-700 font-bold">
          Full Stack Development Club
        </div>
      </div>
    </header>
  );
};

export default NavBar;
