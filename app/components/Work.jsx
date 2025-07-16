import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react";

const Work = () => {
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} id='work' className='px-4 py-10 text-center mt-10'>
        <motion.h3 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.3}} className='text-2xl mb-4'>My Portfolio</motion.h3>
        <motion.h1 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}} className='text-5xl font-bold'>My Latest Work</motion.h1>
        <motion.p initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.7}} className='text-center mx-auto mt-5 mb-10'>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise:</motion.p>

        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.9}} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
          {workData.map((project,index)=>(
            <motion.div whileHover={{scale: 1.05}} transition={{duration: 0.3}} key={index} className='aspect-square bg-no-repeat bg-center bg-cover rounded-lg relative cursor-pointer group'>
              <Image
                src={project.bgimage}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 transform -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                  <div>
                    <h2 className='font-semibold'>{project.title}</h2>
                    <p className='text-sm text-gray-700'>{project.description}</p>
                  </div>
                  <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
                    >
                      <Image src={assets.send} alt="GitHub link" width={15} height={15} />
                    </a>
                  </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div>
          <motion.a initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay: 1.1}} href='' className='w-max flex iems-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 duration-500'>
            Show More
            <Image src={assets.rightarrow} alt='Right arrow' width={25} height={25}/>
          </motion.a>
        </div>
    </motion.div>
  )
}

export default Work