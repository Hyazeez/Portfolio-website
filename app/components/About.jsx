import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
return (
    <div id='about' className='px-4 py-10 text-center mt-20'>
        <h3 className='text-2xl mb-4'>Introduction</h3>
        <h1 className='text-4xl font-bold'>About Me</h1>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='sm:w-110'>
                <div className='sm:w-90 w-full rounded-3xl mx-25'>
                <Image 
                    src={assets.userimg} 
                    alt="Portrait of Azeez Shaban" 
                    className="w-full rounded-3xl mx-auto"
                    priority
                />
                </div>
            </div>
            <div className='flex-1'>
                <p className='text-lg text-gray-600 mb-6 max-w-2xl text-justify'>
                    I am a passionate full-stack developer with experience in building dynamic web applications. My expertise lies in both front-end and back-end development, allowing me to create seamless user experiences.
                </p>
                <p className='text-lg text-gray-600 mb-10 max-w-2xl text-justify'>
                    I enjoy working with modern technologies like React, Next.js, and Node.js, and I am always eager to learn and implement new tools. I am also enthusiastic about exploring data science tech trends and how they can be integrated into web development. Outside of coding, I love contributing to open-source and sharing knowledge.
                </p>

                <ul className='grid gap-6 sm:grid-cols-3 grid-cols-1 max-w-2xl mt-10'>
                    {infoList.map(({ icon, title, description }, index) => (
                        <li
                            key={index}
                            className='text-left border border-gray-300 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 transition-all duration-500 hover:shadow-md hover:shadow-black/20'
                        >
                            <Image src={icon} alt={title} className='w-10 h-10 mb-4' />
                            <h3 className='font-semibold text-lg text-gray-700'>{title}</h3>
                            <p className='text-gray-600 text-sm mt-2'>{description}</p>
                        </li>
                    ))}
                </ul>
                <h3>Technologies I work with</h3>
            </div>
        </div>
    </div>
)
}

export default About;