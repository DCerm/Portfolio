'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  MdOutlineHome,
  MdOutlinePerson2,
  MdOutlineWorkHistory,
  MdOutlineLaptopMac,
  MdOutlineMessage
} from 'react-icons/md';

function MainMenu() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  function Tip({ tip }) {
    return (
      <div className="p-2 bg-col text-black absolute z-1 hidden rounded-lg lg:mt-[3%] tooltip">
        <p className="text-lg"> {tip} </p>
      </div>
    );
  }

  const getLinkClass = (path) =>
    `border ${isActive(path) ? 'text-[#0af] border-[#0af]' : 'text-gray-300 border-gray-400'} 
     hover:text-[#0af] hover:border-[#0af] p-1.5 lg:p-2.5 
     rounded-full text-30px lg:text-[50px] font-light`;

  return (
    <section className="flex fixed bottom-[2%] lg:bottom-[5%] py-0 items-center justify-center z-[10000] w-full menu">
      <div className="flex bg-[#ffffff10] backdrop-blur-md opacity-300 text-gray-300 py-2.5 lg:py-4 justify-around w-full lg:w-1/2 text-center rounded-xl menuitems">
        <Link href="/" className={getLinkClass('/')}>
          <MdOutlineHome />
          <Tip tip="Home" />
        </Link>

        <Link href="/about-me" className={getLinkClass('/about-me')}>
          <MdOutlinePerson2 />
          <Tip tip="About Me" />
        </Link>

        <Link href="/experience" className={getLinkClass('/experience')}>
          <MdOutlineWorkHistory />
          <Tip tip="Work Experience" />
        </Link>

        <Link href="/projects" className={getLinkClass('/projects')}>
          <MdOutlineLaptopMac />
          <Tip tip="Projects" />
        </Link>

        <Link href="/contact" className={getLinkClass('/contact')}>
          <MdOutlineMessage />
          <Tip tip="Contact" />
        </Link>
      </div>
    </section>
  );
}

export default MainMenu;
