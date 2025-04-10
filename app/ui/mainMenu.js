'use client';

import Link from 'next/link';
import NavLink from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './mainMenu.module.css';
import { MdOutlineMenu, MdOutlineClose } from 'react-icons/md';

function MainMenu() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };  
  
  const closeMenu = () => setIsOpen(false);

const menu = (

    <>
        <div className="flex justify-center items-center">
        <div className="sticky bottom-10 px-2 py-1 backdrop-blur-sm border-none  rounded-full opacity-900 bg-gray-600 z-50">

            <div className='flex gap-5 items-center '>
                <menu className="flex gap-5 ">
                <NavLink href="/" className='rounded-full shadow-gray-300 '>
                    <Image src="/Sam-Olasoji.png" alt="home" height={720} width={836} className="w-[40px] h-[40px] rounded-full" />
                </NavLink>
                <NavLink href="/about-us" className='target:underline target:decoration-double hover:underline decoration-wavy underline-offset-8 decoration-black'><li>About Us</li></NavLink>
                <NavLink href="/blog" className='target:underline target:decoration-double hover:underline decoration-wavy underline-offset-8 decoration-black'><li>Resources</li></NavLink>
                <NavLink href="/contact-us" className='target:underline target:decoration-double hover:underline decoration-wavy underline-offset-8 decoration-black'><li >Contact Us</li></NavLink>
                </menu>

                <div className='hidden lg:block'>
                <NavLink href="/properties"><button className={`px-5 pt-2.5 pb-3.5 rounded-xl font-semibold text-black bg-gold hover:bg-golden`} >Explore Properties</button></NavLink>
                </div>

                <button onClick={toggleMenu} className='text-[45px] text-black font-bold lg:hidden'>{isOpen ? <MdOutlineClose /> : <MdOutlineMenu />} </button>
            </div>


            <div className={`$ flex flex-col lg:hidden top-20 text-xl bg-golden text-black py-2.5 gap-2.5 absolute text-center w-[98%] mx-1 rounded-xl ${isOpen ? 'translate-y-[7px] transition duration-300 ease-in-out' : '-translate-y-[200%]'}`} >
            <NavLink href='/' onClick={closeMenu} className='border-b border-grey pt-2.5 pb-2.5'>Home</NavLink>
            <NavLink href='/about-us'onClick={closeMenu} className='border-b border-grey pt-1.5 pb-2.5'>About Us</NavLink>
            <NavLink href='/blog'onClick={closeMenu} className='border-b border-grey pt-1.5 pb-2.5'>Resources</NavLink>
            <NavLink href='/contact-us'onClick={closeMenu} className=' border-b border-grey pt-1.5 pb-2.5'>Contact Us</NavLink>
            <NavLink href='/properties'onClick={closeMenu} className=' border-grey pt-1.5 pb-2.5'>Explore Properties</NavLink>
            </div>  
        </div>
        </div>

  </>
);

return menu;

}


export default MainMenu;