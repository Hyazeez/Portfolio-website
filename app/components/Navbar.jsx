'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { FiArrowUpRight, FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50 dark:bg-gray-400 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        

        <a href="#top" aria-label="Go to top of the page">
          <Image
            src={assets.logoimg}
            alt="Asis Logo"
            width={60}
            height={20}
            className="cursor-pointer hover:opacity-90 transition-opacity duration-200"
          />
        </a>

        <ul className="hidden md:flex space-x-8 font-medium text-gray-900">
          <li><a href="#top" className="hover:text-white transition font-poppins">Home</a></li>
          <li><a href="#about" className="hover:text-white transition font-poppins">About Me</a></li>
          <li><a href="#services" className="hover:text-white transition font-poppins">Services</a></li>
          <li><a href="#work" className="hover:text-white transition font-poppins">My Work</a></li>
          <li><a href="#contact" className="hover:text-white transition font-poppins">Contact Me</a></li>
        </ul>

        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="text-2xl text-gray-700 transition-colors duration-300"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          <a
            href="#contact"
            className="bg-black text-white px-4 py-2 rounded-full transition flex items-center gap-2"
          >
            Contact
          <FiArrowUpRight className="text-white text-sm" />
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center dark:bg-gray-400 space-y-6 py-6 shadow-md text-gray-800 font-medium">
          <li><a href="#top" onClick={toggleMenu} className="hover:text-white font-poppins">Home</a></li>
          <li><a href="#about" onClick={toggleMenu} className="hover:text-white font-poppins">About Me</a></li>
          <li><a href="#services" onClick={toggleMenu} className="hover:text-white font-poppins">Services</a></li>
          <li><a href="#work" onClick={toggleMenu} className="hover:text-white font-poppins">My Work</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="hover:text-white font-poppins">Contact Me</a></li>
          <li>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2"
            >
              Contact
              <FiArrowUpRight className="text-white text-sm" />
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
