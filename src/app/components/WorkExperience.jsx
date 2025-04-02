'use client';

import React from 'react'
import Image from 'next/image'
import { assets, workExperience } from '../assets/assets'

const WorkExperience = () => {
    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>
                Experience
            </h4>

            <h2 className='text-center mb-2 text-5xl font-Ovo'>
                Work Experience
            </h2>

            <div className='flex flex-col gap-16 my-20 max-w-6xl mx-auto'>
                {workExperience.map((experience, index) => (
                    <div key={index} className='flex flex-col lg:flex-row gap-10'>
                        {/* Company Logo */}
                        {experience.logo && (
                            <div className='w-24 h-24 rounded-2xl overflow-hidden shadow-md'>
                                <Image src={experience.logo} alt={experience.company} className='w-full h-full object-cover' />
                            </div>
                        )}

                        {/* Experience Details */}
                        <div className='flex-1'>
                            <div className='flex flex-col md:flex-row md:items-center justify-between mb-4'>
                                <h3 className='text-2xl '>{experience.position}</h3>
                                <p className='text-gray-600'>{experience.duration}</p>
                            </div>
                            <p className='text-gray-600 mb-6 font-medium'>{experience.company}</p>

                            <ul className='space-y-4'>
                                {experience.achievements.map((achievement, achievementIndex) => (
                                    <li key={achievementIndex} className='flex gap-4'>
                                        <Image src={assets.code_icon} alt="" className='w-6 h-6 mt-1 flex-shrink-0' />
                                        <p className='text-gray-700'>
                                            {achievement}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkExperience 