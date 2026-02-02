import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Separator } from './modules';


function Footer() {
    

    return (
        <>

            <section className="pb-0 flex flex-col justify-between lg:gap-36 text-white  bg-astr bg-no-repeat bg-left-bottom  bg-auto">
                <div className='flex flex-col items-center gap-8'>
                    <p className='lg:text-[5vw] text-[50px] md:text-[9vw] pt-32 lg:pt-5 text-center leading-none font-light'>🫱🏻‍🫲🏼</p>
                    <p className='text-xl lg:text-30px'>Need a scalable app users love?</p>
                    <p className='font-semibold lg:text-[7vw] text-[12vw] md:text-[9vw] lg:pt-10 lg:pt-0 text-center leading-none font-light'>Let&apos;s Talk</p>

                    <Link href="/contact" className="mb-6 lg:my-10"><button className="rounded-full pl-8 pr-2 py-2 flex gap-4 items-center text-xl border border-gray-700">Contact Me 
                        <MdOutlineArrowOutward className='rh45 p-1 bg-white rounded-full text-black text-30px' />
                    </button></Link>

                    <div className="flex gap-4 lg:gap-8">
                        <div className="hover:text-oaf">
                            <Link href="linkedin.com/in/sam-olasoji" className="flex gap-2"><FaLinkedin className="text-xl rh45 hover:text-white" /> LinkedIn</Link>
                        </div>
                        <div className="hover:text-oaf">
                            <Link href="mailto:osolasoji@gmail.com" className="flex gap-2"><FaEnvelope className="text-xl rh45 hover:text-white" /> Email</Link>
                        </div>
                        <div className="hover:text-oaf">
                        <Link href="mailto:osolasoji@gmail.com" className="flex gap-2"><FaGithub className="text-xl rh45  hover:text-blue" />GitHub</Link>
                        </div>
                    </div>
                </div>

                <div className="pb-24 lg:pb-0">
                    <Separator />
                </div>
            </section>

            
        </>
    )
}

export default Footer