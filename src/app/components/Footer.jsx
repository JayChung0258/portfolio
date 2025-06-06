import React from 'react'
import { assets } from '../assets/assets'
import Image from 'next/image'

function Footer() {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <Image src={assets.logo} alt="" className='w-24 mx-auto mb-2' />
                <div className='w-max flex items-center gap-2 mx-auto mb-4'>
                    <Image src={assets.mail_icon} alt="" className='w-6' />
                    jaychung025877@gmail.com
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%]
                            py-6 mt-12'>
                <p> &copy; 2025 Jay Hung. All rights reserved. </p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li>
                        <a href="https://www.linkedin.com/in/jay-hung-a06367191/">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/JayChung0258">GitHub</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer