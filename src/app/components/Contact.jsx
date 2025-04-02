'use client';

import React from 'react'
import Image from 'next/image'
import { assets } from '../assets/assets'
import { useState } from 'react';

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "0ec3ea1b-664c-40cf-a742-2e59598f62a7");

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
    };



    return (
        <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 relative'>
            {/* Background Image */}
            <div className='absolute inset-0 -z-10'>
                <Image
                    src={assets.footer_bg_color}
                    alt="Background"
                    className='w-full h-full object-cover'
                    priority
                />
            </div>

            {/* Content */}
            <div className='relative z-10'>
                <h4 className='text-center mb-2 text-lg font-Ovo'>
                    Connect with me
                </h4>

                <h2 className='text-center text-5xl font-Ovo'>
                    Contact Me
                </h2>

                <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                    I'm currently looking for new opportunities. Whether you have a question, a project in mind, or just want to say hi, I'll do my best to get back to you!
                </p>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className='mx-auto max-w-2xl'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>
                    <input type="text" placeholder='Enter your name' required
                        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
                        name='name' />
                    <input type="email" placeholder='Enter your email' required
                        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
                        name='email' />
                </div>
                <textarea className='w-full p-4 outline-none border-[0.5px] border-gray-400 bg-white mb-6 rounded-md h-64'
                    rows={6} placeholder='Enter your message' required
                    name='message' />
                <button className='py-3 px-8 w-max mx-auto flex items-center justify-between gap-2 
                    bg-black/80 text-white hover:bg-black duration-500 rounded-full' type='submit'>
                    Send now
                    <Image src={assets.right_arrow_white} alt='send' className='w-4' />
                </button>
                <p className='mt-4'>{result}</p>
            </form>
        </div>
    )
}

export default Contact
