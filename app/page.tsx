//import Link from 'next/link';
import Image from 'next/image';
//import Menu from './ui/mainMenu';
import Footer from './ui/footer';
import { Button } from './ui/buttons';
//import { H1, H2, H4 } from './ui/headings';
import { Separator, Experience, Testimony, Project } from './ui/modules';
import { MdOutlineChatBubble, MdOutlineCode,  MdOutlineLaptopMac, MdOutlineVerifiedUser } from 'react-icons/md';


export default function Home() {

    
    return (
        <>
            <section className="flex flex-col items-center justify-center text-center text-white h-screen hidde">
                <Image 
                    src="/Sam-Olasoji.png"
                    alt="Sam Olasoji"
                    className="w-[83px] h-[72px] object-cover rounded-full"
                    width="836"
                    height="720"
                />
                <h1 className='text-lg mt-4 text-gray-400'>I am Sam Olasoji 👋🏻 <br/>
                    a Frontend Developer.
                </h1>
                <h2 className="text-30px md:text-[40px] lg:text-3xl uppercas my-4 leading-none lg:my-6">I create <span className='text-[#0af]'>interactive</span> interfaces people love.</h2>
                <a href="#about"><button className=" px-6 mt-6 py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition">
                    About Me
                </button></a>
                
            </section>


            <div className="py-20 hidden lg:block" />


            <section id="about" className="text-white flex flex-col items-cente border-none lg:w-5/6">
                <div className="flex gap-2 items-center">
                    <MdOutlineVerifiedUser className='text-xl' />
                    <p className="text-sm lg:text-lg uppercase">About Me</p>
                </div>

                <p className='text-25px md:text-30px lg:text-2xl'>Sam Olasoji, <span className="text-gray-400">Your Developer</span> </p>
                <p className="text-lg">Brief description of my experience and journey.</p>

                <div className="flex flex-col lg:flex-row mt-12  gap-2 lg:gap-4">
                    <div className="lg:w-2/5 p-2 bg-dark rounded-lg">
                        <Image src="/sam.jpeg" alt="Sam Olasoji, frontend developer"
                            height={1680}
                            width={2520}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>

                    <div className="lg:w-3/5 p-4 lg:p-8 bg-dark text-white rounded-lg">
                        <p className="text-lg pb-4 border-b border-gray-500">Frontend developer with a passion for creating interactive and user-friendly interfaces. 
                            Proficient in modern frontend technologies and frameworks. Worked as part of a team and independently as a freelancer.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                            <div className='flex gap-2 bg-[#2f2f2f] rounded-lg items-center p-2'>
                                <div className="p-2 rounded-lg bg-white">
                                    <Image src="/icons/next.png" height={225} width={225} alt="" className='w-[25px] ' />
                                </div>                                
                                <p className='text-md lg:text-lg'>Next.js</p>
                            </div>

                            <div className='flex gap-2 bg-[#2f2f2f] rounded-lg p-2 items-center'>
                                <div className="p-2 rounded-lg bg-white">
                                    <Image src="/icons/react.svg" height={225} width={225} alt=""  className='w-[25px] h-auto' />
                                </div>
                                
                                <p className='text-md lg:text-lg'>React.js</p>
                            </div>

                            <div className='flex gap-2 bg-[#2f2f2f] rounded-lg p-2 items-center'>
                                <div className="p-2 rounded-lg bg-white">
                                    <Image src="/icons/tailwind.png" height={225} width={225} alt=""  className='w-[25px] ' />
                                </div>
                                
                                <p className='text-md lg:text-lg'>Tailwind CSS</p>
                            </div>

                            <div className='flex gap-2 bg-[#2f2f2f] rounded-lg p-2 items-center'>
                                <div className="p-2 rounded-lg bg-white">
                                    <Image src="/icons/shadcn.png" height={225} width={225} alt=""  className='w-[25px] ' />
                                </div>
                                
                                <p className='text-md lg:text-lg'>Shadcn UI</p>
                            </div>

                            <div className='flex gap-2 bg-[#2f2f2f] rounded-lg p-2 items-center'>
                                <div className="p-2 rounded-lg bg-white">
                                    <Image src="/icons/html.svg" height={225} width={225} alt=""  className='w-[25px] ' />
                                </div>
                                
                                <p className='text-md lg:text-lg'>HTML / CSS</p>
                            </div>

                            <div className='flex gap-2 bg-[#2f2f2f] rounded-lg p-2 items-center'>
                                <div className="p-2 rounded-lg bg-white">
                                    <Image src="/icons/github.png" height={225} width={225} alt=""  className='w-[25px] ' />
                                </div>
                                
                                <p className='text-md lg:text-lg'>Github</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* PROJECTS        PROJECTS        PROJECTS        PROJECTS        PROJECTS*/}

            <section className="text-white bg-cover">
                <div className="flex gap-2 items-center ">
                    <MdOutlineLaptopMac className='text-xl'/>
                    <p className="text-sm lg:text-lg uppercase">creations</p>
                </div>
                <h3 className="text-30px lg:text-2xl">My Selected Works</h3>

                <div className="grid lg:grid-cols-2 gap-4 mt-8">
                    <Project name="TheLeadman Africa" desc="A leadership training site for legislators and entrepreneurs" url="/projects/theleadman" src="/mockup.jpeg" />
                    <Project name="Brilliant Light Realty" desc="Real estate web app with dynamic content" url="https://brilliantlightrealty.com" src="/mockup2.jpeg" />
                    <Project name="Portfolio" desc="A portfolio website" url="https://faithewobe.vercel.app" src="/mockup3.jpeg" />
                    <Project name="Benison" desc="Home health web app with analytics dashboard" url="https://benison.ng" src="/mockup4.png" />
                </div>

               
            </section>

            {/* EXPERIENCE        EXPERIENCE        EXPERIENCE        EXPERIENCE        EXPERIENCE*/}   

            <section className="text-white">
                <div className="flex gap-2 items-center ">
                    <MdOutlineCode className='text-xl'/>
                    <p className="text-sm lg:text-lg uppercase">development journey</p>
                </div>
                <h3 className="lg:text-2xl text-30px">My Experience</h3>

                <Separator />

                <Experience logo="/bite.png" title="Frontend Developer" company="BITe Agency" date="February 2024 - Present" location="Remote" />
                <Experience logo="/padding.png" title="Frontend Developer" company="Padding Technologies" date="January 2024 - July 2024" location="Remote" />
                <Experience logo="/justnovate.png" title="Project Lead Developer" company="Just Novate (Contract)" date="November 2022 - May 2023" location="Ajah, Lagos" />
                <Experience logo="/webfluxx.png" title="Website Developer" company="WebFlux" date="January 2021 - November 2021" location="Ife, Nigeria" />
                    
                <div className="py-2 lg:py-4" />
                <Button url="/experience" text="View Experience Details" />
            </section>
            

            <section className="text-white">
                <div className="flex gap-2 items-center ">
                    <MdOutlineChatBubble className='text-xl'/>
                    <p className="text-sm lg:text-lg uppercase">Testimonials</p>
                </div>
                <h3 className="lg:text-2xl text-xl">Clients Review</h3>

                <div className="mt-4 flex flex-col lg:flex-row gap-2 lg:gap-8">
                    <div className="border border-gray-700 hover:border-gray-500 hover:shadow-sm hover:shadow-gray-500 text-gray-400 hover:text-white rounded-lg lg:w-1/3 p-4 lg:p-8 flex flex-col justify-between">
                        <p className="text-lg">&quot;I&apos;ve collaborated with Sam on several projects and hold him in high esteem. He&apos;s quick to respond, dependable, resourceful, and pragmatic.
                            He has been wonderful to work with as I navigate the rough seas of growing a business. 
                            I have complete confidence in utilizing his services for any upcoming projects.&quot;
                        </p>
                        <div className="flex gap-4 items-center mt-4">
                            <p className="text-lg lg:text-xl font-semibold text-white">Harry Fiorentinos</p>
                            <p className="text-sm text-gray-400"> - &nbsp; CEO, Raven Gold LLC</p>
                        </div>
                    </div>

                    <Testimony
                        review="&quot;Sam is the best at what he does — website development and optimisation. Today, our website is way faster than it was when we were on WordPress.
		                The website looks much nicer and responds super fast. Engage Sam today, you will not be disappointed at all. I strongly recommend Sam&quot; "
                        name="Olajumoke O." title="CEO, TheLeadman Africa"
                    />

                    <Testimony
                        review="&quot;I had the pleasure of working with Sam on creating my portfolio website. and I couldn&apos;t have asked for a better experience.
                            Sam took my initial Canva designs and transformed them into a stunning, functional website that exceeded my expectations. 
                            His attention to detail and willigness to incorporate my feedback with patience and professionalism were truly impressive.&quot;"
                        name="Faith Ewobe" title="Client, Portfolio Website"
                    />
                </div>

                

            </section>


            {/* FOOTER          FOOTER          FOOTER         FOOTER        FOOTER*/}

            <Footer />
        </>
    )
}
