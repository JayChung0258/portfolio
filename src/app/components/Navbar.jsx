'use client';

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { assets } from '../assets/assets'


const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16em)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16em)';
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {   
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        });
    }, []);
        
    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] bg-repeat-x'>
                <Image src={assets.header_bg_color} alt="" className='w-full' />
            </div>

            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
                ${isScrolled ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm transition duration-500' : 'transition duration-500'}`}>
                <a href="">
                    <Image src={assets.logo} alt="" className='w-28 cursor-pointer mr-14' />
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 
                            rounded-full px-12 py-3 ${isScrolled ? '' : 'bg-white shadow-sm bg-opacity-50 transition duration-500'}`}>
                    <li><a className='font-Ovo' href='#top'>Home</a></li>
                    <li><a className='font-Ovo' href='#about'>About</a></li>
                    <li><a className='font-Ovo' href='#services'>Services</a></li>
                    <li><a className='font-Ovo' href='#work'>My Work</a></li>
                    <li><a className='font-Ovo' href='#contact'>Contact Me</a></li>
                </ul>
                <div className='flex items-center gap-4'>
                    <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 
                                                border border-gray-500 rounded-full ml-4'>
                        Contact <Image src={assets.arrow_icon} alt="" className='w-3' />
                    </a>

                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={assets.menu_black} alt="" className='w-6' />
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
                                top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>

                    <div className='absolute top-5 right-5' onClick={closeMenu}>
                        <Image src={assets.close_black} alt="" className='w-6' />
                    </div>


                    <li><a className='font-Ovo' onClick={closeMenu} href='#top'>Home</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href='#about'>About</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href='#services'>Services</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href='#work'>My Work</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href='#contact'>Contact Me</a></li>
                </ul>


            </nav>
        </>
    )
}

export default Navbar