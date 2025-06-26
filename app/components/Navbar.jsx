'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <a href="#top" aria-label="Go to top of the page">
          <Image
            src={assets.logoimg}
            alt="Asis Logo"
            width={80}
            height={20}
            className="cursor-pointer hover:opacity-90 transition-opacity duration-200"
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-800">
          <li><a href="#top" className="hover:text-indigo-600 transition">Home</a></li>
          <li><a href="#about" className="hover:text-indigo-600 transition">About Me</a></li>
          <li><a href="#services" className="hover:text-indigo-600 transition">Services</a></li>
          <li><a href="#work" className="hover:text-indigo-600 transition">My Work</a></li>
          <li><a href="#contact" className="hover:text-indigo-600 transition">Contact Me</a></li>
        </ul>

        {/* Contact CTA (desktop only) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition flex items-center gap-2"
          >
            Contact
            <FiArrowUpRight className="text-white text-sm" />
          </a>
        </div>

        {/* Hamburger Menu Icon (mobile only) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white space-y-6 py-6 shadow-md">
          <li><a href="#top" onClick={toggleMenu} className="hover:text-indigo-600">Home</a></li>
          <li><a href="#about" onClick={toggleMenu} className="hover:text-indigo-600">About Me</a></li>
          <li><a href="#services" onClick={toggleMenu} className="hover:text-indigo-600">Services</a></li>
          <li><a href="#work" onClick={toggleMenu} className="hover:text-indigo-600">My Work</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="hover:text-indigo-600">Contact Me</a></li>
          <li>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 flex items-center gap-2"
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
