'use client'
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion, scale } from "motion/react";

const Header = () => {
  return (
    <div className=" py-10 text-center max-w-5xl mx-auto mt-20">
      <motion.div initial={{scale: 0}} whileInView={{scale: 1}} transition={{duration: 0.8, type: 'spring', stiffness: 100}} className="mb-6">
        <Image src={assets.logo} alt="Azeez Logo" className="mx-auto" width={180} height={50} />
      </motion.div>

      <motion.h2 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className="flex items-center justify-center gap-2 text-2xl text-center mb-6">
        Hey there
        <Image src={assets.handicon} alt="Waving Hand" className="w-7 h-7" />
        I'm Azeez Shaban
      </motion.h2>
      <motion.h1 initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.7}} className="text-4xl font-bold mb-4">Fullstack Developer and Data Science enthusiast</motion.h1>
      <motion.p initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className="text-lg text-gray-600 text-center mb-6">
        I specialize in building high-quality web applications using the latest technologies. My focus is on creating fast, responsive, and user-friendly experiences that help businesses grow and succeed.
      </motion.p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center'>
        <motion.a initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 1}} href="#contact" className="bg-white border-solid border-2 text-black px-4 py-2 rounded-full hover:bg-gray-200 transition flex items-center gap-2">
          Contact Me
          <Image src={assets.arrow} alt="Arrow" className="text-black text-sm w-6" />
        </motion.a>
        <motion.a initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 1.2}} href="#sample-resume.pdf" download className="bg-white border-solid border-2 text-black px-4 py-2 rounded-full hover:bg-gray-200 transition flex items-center gap-2">
          My Resume
          <Image src={assets.download} alt="Arrow" className="text-black text-sm w-6" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
