'use client';

import Link from 'next/link';
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
    <section className="py-1 bg-gold text-black flex justify-center items-center gap-6 sticky absolute top-0 w-full z-50">
        <p className="text-lg">Webinar: Own a home in Lagos with mortgage</p>
        <Link href="/events/own-a-home-in-lagos-with-mortgage"><button className='bg-wine text-white hover:bg-white hover:text-black px-5 py-1.5 rounded-md'>Register</button></Link>
    </section>
  <div className='sticky absolute top-16 lg:top-12 z-40' id="homeMenu">
    <div className={`flex justify-between gap-5 items-center px-2.5 lg:px-12 py-2.5 mt-2.5  ${isScrolled ? 'rounded-xl mx-1 lg:mx-5 top-1 bg-white mt-2.5 lg:px-6 border ' : 'bg-white '}`} id="mainMenu">
      <div >
        <Link href='/' style={{cursor:'pointer'}}>
          <div className='flex white items-center gap-2.5 '> 
            <Image src="/BRILLIANT-light-realty-logo.jpg" 
              alt="Brilliant Light Realty Logo" className=''
              width="60"
              height="50" 
            />
            <h1 id="menun" className={`text-md lg:text-xl font-bold ${isScrolled ? 'text-gold ' : 'text-gold'}`}>Brilliant <br className='md:hidden' />Light Realty</h1>
          </div>
        </Link>
      </div>

      <div className='flex gap-5 items-center '>
        <menu className={styles.menuItems + ` ${isScrolled ? 'text-black ' : ' text-black'} lg:flex white hidden text-lg `}>
          <Link href="/" className='target:underline target:decoration-double hover:underline decoration-wavy underline-offset-8 decoration-black'><li>Home</li></Link>
          <Link href="/about-us" className='target:underline target:decoration-double hover:underline decoration-wavy underline-offset-8 decoration-black'><li>About Us</li></Link>
          <Link href="/blog" className='target:underline target:decoration-double hover:underline decoration-wavy underline-offset-8 decoration-black'><li>Resources</li></Link>
          <Link href="/contact-us" className='target:underline target:decoration-double hover:underline decoration-wavy underline-offset-8 decoration-black'><li >Contact Us</li></Link>
        </menu>

        <div className='hidden lg:block'>
          <Link href="/properties"><button className='px-5 pt-2.5 pb-3.5 rounded-xl font-semibold text-black bg-gold hover:bg-golden' >Explore Properties</button></Link>
        </div>

        <button onClick={toggleMenu} className={`text-[45px] font-bold lg:hidden ${isScrolled? 'text-black' : 'text-gold' }`}>{isOpen ? <MdOutlineClose /> : <MdOutlineMenu />} </button>
      </div>

    </div>

    <div className={`$ flex flex-col lg:hidden top-20 text-xl bg-golden text-black py-2.5 gap-2.5 absolute text-center w-[98%] mx-1 rounded-xl ${isOpen ? 'translate-y-[7px] transition duration-300 ease-in-out' : '-translate-y-[200%]'}`} >
      <Link href='/' onClick={closeMenu} className='border-b border-grey pt-2.5 pb-2.5'>Home</Link>
      <Link href='/about-us'onClick={closeMenu} className='border-b border-grey pt-1.5 pb-2.5'>About Us</Link>
      <Link href='/blog'onClick={closeMenu} className='border-b border-grey pt-1.5 pb-2.5'>Resources</Link>
      <Link href='/contact-us'onClick={closeMenu} className='border-b border-grey pt-1.5 pb-2.5'>Contact Us</Link>
      <Link href='/properties'onClick={closeMenu} className=' border-grey pt-1.5 pb-2.5'>Explore Properties</Link>
    </div>  
  </div>
  </>
);

return menu;

}


export default MainMenu;
