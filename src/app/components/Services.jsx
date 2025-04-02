import React from 'react'
import { serviceData, assets } from '../assets/assets'
import Image from 'next/image'


function Services() {
    return (
        <div id='services' className='w-full px-[6%] max-w-[1800px] mx-auto py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>
                What I offer
            </h4>

            {/* title */}
            <h2 className='text-center mb-2 text-5xl font-Ovo'>
                Services
            </h2>

            <p className='max-w-2xl mx-auto font-Ovo'>
                I am a full stack developer with 2 years of experience in Python, Django, React, and full-stack development.
                Also, I have experience in implementing machine learning models into web services.
            </p>

            <div className='grid grid-cols-auto gap-6 my-10'>
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 
                                                hover:shadow-black hover:-translate-y-1 duration-300 cursor-pointer hover:bg-lightHover'>
                        <Image src={icon} alt="" className='w-10' />
                        <h3 className='my-4 text-lg text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>
                            {description}
                        </p>
                        <a href={link} className='flex items-center gap-2 mt-4 text-sm'>
                            Learn more <Image src={assets.right_arrow} alt="" className='w-4' />
                        </a>
                    </div>
                ))}
            </div>



        </div>
    )
}

export default Services