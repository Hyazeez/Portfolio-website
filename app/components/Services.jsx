import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='px-4 py-10 text-center mt-20'>
        <h3 className='text-2xl mb-4'>What I offer</h3>
        <h1 className='text-5xl font-bold'>My Services</h1>
        <p className='text-center mx-auto mt-5 mb-10'>I'm a full-stack developer with expertise in building dynamic web applications. My services include:</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
          <div className='border border-gray-300 rounded-xl px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lighiHover hover:translate-y-1 transition-all duration-500 hover:shadow-md hover:shadow-black/20 justify-center items-center flex flex-col'>
            <Image src={assets.website} alt="Web Development" className='w-10 h-10 mx-auto mb-4' />
            <h4 className='text-xl font-semibold mb-2'>Web Development</h4>
            <p className='text-gray-600'>Building responsive and user-friendly websites using modern technologies.</p>
            <a href='' className='flex items-center gap-2 mt-2'>Learn More<Image src={assets.rightarrow} alt="Arrow" className=' w-10' /></a>
          </div>
          <div className='border border-gray-300 rounded-xl px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lighiHover hover:translate-y-1 transition-all duration-500 hover:shadow-md hover:shadow-black/20 justify-center items-center flex flex-col'>
            <Image src={assets.cloud} alt="Web Development" className='w-10 h-10 mx-auto mb-4' />
            <h4 className='text-xl font-semibold mb-2'>Cloud Solutions</h4>
            <p className='text-gray-600'>Creating scalable cloud applications and services for businesses.</p>
            <a href='' className='flex items-center gap-2 mt-2'>Learn More<Image src={assets.rightarrow} alt="Arrow" className=' w-10' /></a>
          </div>
          <div className='border border-gray-300 rounded-xl px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lighiHover hover:translate-y-1 transition-all duration-500 hover:shadow-md hover:shadow-black/20 justify-center items-center flex flex-col'>
            <Image src={assets.visuals} alt="Web Development" className='w-10 h-10 mx-auto mb-4' />
            <h4 className='text-xl font-semibold mb-2'>Data Visualization</h4>
            <p className='text-gray-600'>Creating interactive and visually appealing data representations.</p>
            <a href='' className='flex items-center gap-2 mt-2'>Learn More<Image src={assets.rightarrow} alt="Arrow" className=' w-10' /></a>
          </div>
          <div className='border border-gray-300 rounded-xl px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lighiHover hover:translate-y-1 transition-all duration-500 hover:shadow-md hover:shadow-black/20 justify-center items-center flex flex-col'>
            <Image src={assets.graphics} alt="Graphic designing" className='w-10 h-10 mx-auto mb-4' />
            <h4 className='text-xl font-semibold mb-2'>Graphic Designing</h4>
            <p className='text-gray-600'>Creating visually appealing graphics and designs for various platforms.</p>
            <a href='' className='flex items-center gap-2 mt-2'>Learn More<Image src={assets.rightarrow} alt="Arrow" className=' w-10' /></a>
          </div>
          <div className='border border-gray-300 rounded-xl px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lighiHover hover:translate-y-1 transition-all duration-500 hover:shadow-md hover:shadow-black/20 justify-center items-center flex flex-col'>
            <Image src={assets.android} alt="App Development" className='w-10 h-10 mx-auto mb-4' />
            <h4 className='text-xl font-semibold mb-2'>Mobile App Development</h4>
            <p className='text-gray-600'>Building cross-platform mobile applications for iOS and Android.</p>
            <a href='' className='flex items-center gap-2 mt-2'>Learn More<Image src={assets.rightarrow} alt="Arrow" className=' w-10' /></a>
          </div>
        </div>
    </div>    
  )
}

export default Services