'use client'
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className=" px-4 py-10 text-center">
      <div className="mb-4">
        <Image src={assets.logo} alt="Azeez Logo" className="w-40 mx-auto" />
      </div>

      <h2 className="flex items-center justify-center gap-2 text-2xl text-center mb-6">
        Hey there
        <Image src={assets.handicon} alt="Waving Hand" className="w-7 h-7" />
        I'm Azeez Shaban
      </h2>
      <h1 className="text-4xl font-bold mb-6">Fullstack Developer based in Sri Lanka</h1>
      <p className="text-lg text-gray-600 text-center mx-25 mb-6">
        I specialize in building high-quality web applications using the latest technologies. My focus is on creating fast, responsive, and user-friendly experiences that help businesses grow and succeed.
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center'>
        <a href="#contact" className="bg-white border-solid border-2 text-black px-4 py-2 rounded-full hover:bg-gray-200 transition flex items-center gap-2">
          Contact Me
          <Image src={assets.arrow} alt="Arrow" className="text-black text-sm w-6" />
        </a>
        <a href="#sample-resume.pdf" download className="bg-white border-solid border-2 text-black px-4 py-2 rounded-full hover:bg-gray-200 transition flex items-center gap-2">
          My Resume
          <Image src={assets.download} alt="Arrow" className="text-black text-sm w-6" />
        </a>
      </div>
    </div>
  );
};

export default Header;
