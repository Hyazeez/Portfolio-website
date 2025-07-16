import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react";

const About = () => {
return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 2}} id='about' className='px-4 py-10 text-center mt-10'>
        <motion.h3 initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.3}} className='text-2xl mb-4'>Introduction</motion.h3>
        <motion.h1 initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.3}} className='text-5xl font-bold'>About Me</motion.h1>

        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}} className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='sm:w-110'>
                <motion.div initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale:1}} transition={{duration: 0.6}} className='sm:w-90 w-full rounded-3xl mx-25'>
                <Image 
                    src={assets.userimg} 
                    alt="Portrait of Azeez Shaban" 
                    className="w-full rounded-3xl mx-auto"
                    priority
                />
                </motion.div>
            </div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.8}} className='flex-1'>
                <p className='text-lg text-gray-600 mb-6 max-w-2xl text-justify'>
                    I am a passionate full-stack developer with experience in building dynamic web applications. My expertise lies in both front-end and back-end development, allowing me to create seamless user experiences.
                </p>
                <p className='text-lg text-gray-600 mb-10 max-w-2xl text-justify'>
                    I enjoy working with modern technologies like React, Next.js, and Node.js, and I am always eager to learn and implement new tools. I am also enthusiastic about exploring data science tech trends and how they can be integrated into web development. Outside of coding, I love contributing to open-source and sharing knowledge.
                </p>

                <motion.ul initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8, delay: 1}} className='grid gap-6 sm:grid-cols-3 grid-cols-1 max-w-2xl mt-10'>
                    {infoList.map(({ icon, title, description }, index) => (
                        <motion.li whileHover={{scale: 1.05}}
                            key={index}
                            className='text-left border border-gray-300 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 transition-all duration-500 hover:shadow-md hover:shadow-black/20'
                        >
                            <Image src={icon} alt={title} className='w-10 h-10 mb-4' />
                            <h3 className='font-semibold text-lg text-gray-700'>{title}</h3>
                            <p className='text-gray-600 text-sm mt-2'>{description}</p>
                        </motion.li>
                    ))}
                </motion.ul>
                <motion.h3 initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 1.3}} className='my-6 text-xl font-medium text-black'>Technologies I Work With</motion.h3>
                <motion.ul initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 1.5}} className='flex flex-wrap justify-center sm:justify-start gap-4'>
                    {toolsData.map(({ name, tool }, index) => (
                    <motion.li whileHover={{scale: 1.05}}
                        key={index} title={name}
                        className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 transition-all duration-500 hover:shadow-md hover:shadow-black/20'
                    >
                        <Image src={tool} alt={name} className='w-6 sm:w-7' />
                    </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>
    </motion.div>
)
}

export default About;