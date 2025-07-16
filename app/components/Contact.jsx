import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react";

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

    formData.append("access_key", "51512ecd-0405-4d77-a587-8f06e562823e");

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    const data = await response.json();

    if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
    } else {
        console.log("Error", data);
        setResult(data.message);
    }
    }


  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} id='contact' className='px-4 py-10 text-center mt-10'>
        <motion.h3 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.3}} className='text-2xl mb-4'>Connect with me</motion.h3>
        <motion.h1 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.3}} className='text-5xl font-bold'>Get in touch</motion.h1>

        <motion.form initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay: 0.9}} onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                <motion.input initial={{y: -50, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 1.1}} type='text' placeholder='Enter your name' required name='name'
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
                <motion.input initial={{y: -50, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 1.1}} type='email' placeholder='Enter your email' required name='email'
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
            </div>
            <motion.textarea initial={{y: -50, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 1.1}} placeholder='Enter your message' name='message' className='w-full flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' required></motion.textarea>
            <motion.button whileHover={{scale: 1.05}} transition={{duration: 0.3}} type='submit' className='w-max flex iems-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 duration-500 cursor-pointer'>
                Submit now<Image src={assets.rightarrow} alt='Right arrow' width={25} height={25}/></motion.button>
            
            <p className='mt-2'>{result}</p>
        </motion.form>
    </motion.div>
  )
}

export default Contact