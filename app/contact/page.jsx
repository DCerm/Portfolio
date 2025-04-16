import Link from 'next/link';
import Image from 'next/image';
import Stars from '../ui/stars';
import { hand } from '../ui/fonts';
import { Button } from '../ui/buttons';
import { ContactForm } from '../ui/forms';
import { MdOutlineRocketLaunch } from 'react-icons/md';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
    return (
        <>
            <div className='w-full h-full fixed top-0 left-0 z-[-1]'><Stars /></div>

            <section className="md:flex justify-betwee items-center">
                <div className="md:w-3/5 lg:w-1/2">
                    <div>
                        <div className="flex gap-2 items-center">
                            <MdOutlineRocketLaunch className='text-xl'/>
                            <p className="text-sm lg:text-lg uppercase">off to a great start</p>
                        </div>
                        <h3 className="lg:text-2xl text-30px relative">Let's Collaborate and build something beautiful</h3>
                    </div>

                    <div className="flex gap-4 lg:gap-8 mt-4">
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
                <div className="w-2/5 md:w-1/5 lg:pt-0 pt-5 mx-auto md:mx-0">
                    <Image src="/spaceship.png" alt="" height={670} width={1192} clssName=" lg:w-1/5 h-auto " />
                </div>
            </section>  

            <section className="bg-planetin bg-top bg-cover lg:py-[150px]"></section>
            <section className="pt-0 bg-planetfade">
                <div className='lg:flex lg:gap-12 justify-between items-center border border-gray-500 p-4 lg:p-12 rounded-xl bg-o'>
                    <div className='lg:w-3/6 gap-5 flex flex-col '>
                        <p className="text-xl lg:text-[25px]">A frontend people love is achieved with dedication; coding even the minutest details with finesse.</p>
                        <p className={` ${hand.className} text-xl lg:text text-[#0af] `}> — Sam Olasoji</p>

                        <div className="border border-gray-700 hover:border-gray-500 hover:shadow-sm hover:shadow-gray-500 text-gray-400 hover:text-white rounded-lg p-4 lg:p-8 flex flex-col justify-between mt-4 ">
                            <p className="text-lg">&quot;I&apos;ve collaborated with Sam on several projects and hold him in high esteem. He&apos;s quick to respond, dependable, resourceful, and pragmatic.
                                He has been wonderful to work with as I navigate the rough seas of growing a business. 
                                I have complete confidence in utilizing his services for any upcoming projects.&quot;
                            </p>
                            <div className="flex gap-4 items-center mt-4">
                                <p className="text-sm md:text-lg lg:text-xl font-semibold text-white">Harry Fiorentinos</p>
                                <p className="text-sm text-gray-400"> - &nbsp; CEO, Raven Gold LLC</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between bg-ox rounded-lg px-4">
                            <p className="text-lg lg:text-25px font-semibold text-white my-0 py-o">Prefer to book a call?</p>
                            <Button url="" text="Book a Call" />
                        </div>
                    </div>

                    <div className="mt-8 md:mt-0 lg:w-1/2  p-2  lg:pl-12 rounded-xl z-0">
                        <ContactForm />
                    </div>
                </div>
            </section>

        </>
    )
}