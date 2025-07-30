import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} id='services' className='px-4 py-10 text-center mt-10'>
        <motion.h3 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{ duration: 0.5, delay: 0.3}} className='text-2xl mb-4'>What I offer</motion.h3>
        <motion.h1 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{ duration: 0.5, delay: 0.5}} className='text-5xl font-bold mb-10'>My Services</motion.h1>
        <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ duration: 0.5, delay: 0.7}} className='text-center mx-auto mt-5 mb-10'>I'm a full-stack developer with expertise in building dynamic web applications. My services include:</motion.p>
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ duration: 0.6, delay: 0.9}} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
          <motion.div whileHover={{scale: 1.05}} className='border border-gray-300 rounded-xl px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lighiHover hover:translate-y-1 transition-all duration-500 hover:shadow-md hover:shadow-black/20 justify-center items-center flex flex-col'>
            <Image src={assets.frontend} alt="Frontend Development" className='w-10 h-10 mx-auto mb-4' />
            <h4 className='text-xl font-semibold mb-2'>Frontend Development</h4>
            <p className='text-gray-600'>Building responsive,modern and user-friendly interfaces that ensure a smooth and engaging experience across all devices.</p>
            <a href='' className='flex items-center gap-2 mt-2'>Learn More<Image src={assets.rightarrow} alt="Arrow" className=' w-10' /></a>
          </motion.div>
          <motion.div whileHover={{scale: 1.05}} className='border border-gray-300 rounded-xl px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lighiHover hover:translate-y-1 transition-all duration-500 hover:shadow-md hover:shadow-black/20 justify-center items-center flex flex-col'>
            <Image src={assets.backend} alt="Backend Development" className='w-10 h-10 mx-auto mb-4' />
            <h4 className='text-xl font-semibold mb-2'>Backend Development</h4>
            <p className='text-gray-600'>Build secure and scalable server-side solutions that power your website or application behind the scenes, ensuring everything runs smoothly.</p>
            <a href='' className='flex items-center gap-2 mt-2'>Learn More<Image src={assets.rightarrow} alt="Arrow" className=' w-10' /></a>
          </motion.div>
          <motion.div whileHover={{scale: 1.05}} className='border border-gray-300 rounded-xl px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lighiHover hover:translate-y-1 transition-all duration-500 hover:shadow-md hover:shadow-black/20 justify-center items-center flex flex-col'>
            <Image src={assets.cloud} alt="Web Development" className='w-10 h-10 mx-auto mb-4' />
            <h4 className='text-xl font-semibold mb-2'>Cloud Solutions</h4>
            <p className='text-gray-600'>Creating scalable cloud applications and services for businesses.</p>
            <a href='' className='flex items-center gap-2 mt-2'>Learn More<Image src={assets.rightarrow} alt="Arrow" className=' w-10' /></a>
          </motion.div>
          <motion.div whileHover={{scale: 1.05}} className='border border-gray-300 rounded-xl px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lighiHover hover:translate-y-1 transition-all duration-500 hover:shadow-md hover:shadow-black/20 justify-center items-center flex flex-col'>
            <Image src={assets.visuals} alt="Web Development" className='w-10 h-10 mx-auto mb-4' />
            <h4 className='text-xl font-semibold mb-2'>Data Visualization</h4>
            <p className='text-gray-600'>Creating interactive and visually appealing data representations.</p>
            <a href='' className='flex items-center gap-2 mt-2'>Learn More<Image src={assets.rightarrow} alt="Arrow" className=' w-10' /></a>
          </motion.div>
          <motion.div whileHover={{scale: 1.05}} className='border border-gray-300 rounded-xl px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lighiHover hover:translate-y-1 transition-all duration-500 hover:shadow-md hover:shadow-black/20 justify-center items-center flex flex-col'>
            <Image src={assets.graphics} alt="Graphic designing" className='w-10 h-10 mx-auto mb-4' />
            <h4 className='text-xl font-semibold mb-2'>Graphic Designing</h4>
            <p className='text-gray-600'>Creating visually appealing graphics and designs for various platforms.</p>
            <a href='' className='flex items-center gap-2 mt-2'>Learn More<Image src={assets.rightarrow} alt="Arrow" className=' w-10' /></a>
          </motion.div>
        </motion.div>
    </motion.div>    
  )
}

export default Services