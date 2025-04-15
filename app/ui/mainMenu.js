
//import Link from 'next/link';
import NavLink from 'next/link';
import { MdOutlineHome, MdOutlinePerson2, MdOutlineWorkHistory, MdOutlineLaptopMac, MdOutlineMessage } from 'react-icons/md';

function MainMenu() {
    /*
  const [isOpen, setIsOpen] = useState(true);

  // Toggle the mobile menu open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };  
  
  const closeMenu = () => setIsOpen(false);*/

    function Tip({ tip }) {
        return (
            <div className="p-2 bg-col text-black absolute z-1 hidden rounded-lg lg:mt-[3%] tooltip">
                <p className="text-lg"> {tip} </p>
            </div>
        )
    }

const menu = (

    <>
        <section className="flex fixed bottom-[2%] lg:bottom-[5%] py-0 items-center justify-center z-10000 w-full">

            <div className='flex bg-[#ffffff10] backdrop-blur-md opacity-300 text-gray-400 p-2.5 lg:py-4 lg:px-8 justify-around w-full lg:w-1/2 text-center rounded-xl'>
                <NavLink href='/'  className='border border-gray-500 hover:text-[#0af] hover:border-[#0af] p-1.5 lg:p-2.5 rounded-full text-30px lg:text-2xl font-light'> <MdOutlineHome /> <Tip tip="Home" /> </NavLink>
                <NavLink href='/about-me' className='border border-gray-500 hover:text-[#0af] hover:border-[#0af] p-1.5 lg:p-2.5 rounded-full text-30px lg:text-2xl'> <MdOutlinePerson2 /> <Tip tip="About Me" /></NavLink>
                <NavLink href='/experience' className='border border-gray-500 hover:text-[#0af] hover:border-[#0af] p-1.5 lg:p-2.5 rounded-full text-30px lg:text-2xl'> <MdOutlineWorkHistory /> <Tip tip="Work Experience" /></NavLink>
                <NavLink href='/projects' className=' border border-gray-500 hover:text-[#0af] hover:border-[#0af] p-1.5 lg:p-2.5 rounded-full text-30px lg:text-2xl'> <MdOutlineLaptopMac /> <Tip tip="Projects" /></NavLink>
                <NavLink href='/contact' className=' border border-gray-500 hover:text-[#0af] hover:border-[#0af] p-1.5 lg:p-2.5 rounded-full text-30px lg:text-2xl'> <MdOutlineMessage /> <Tip tip="Contact Me" /></NavLink>
            </div>  
        </section>
  </>
);

return menu;

}


export default MainMenu;