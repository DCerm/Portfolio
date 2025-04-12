
import Image from 'next/image';
import { Button } from '../ui/buttons';
import { H2, H4 } from '../ui/headings';
import {  MdOutlineDownload, MdOutlineSubdirectoryArrowRight, MdOutlineVerifiedUser } from 'react-icons/md';

export default function Home() {

    return (
        <>
            <section className='bg-dark'>
                <div className='flex flex-col lg:flex-row gap-12 lg:gap-24'>
                    <div className='lg:w-1/2 '>
                        <div className="flex gap-2 items-center">
                            <MdOutlineVerifiedUser className='text-xl' />
                            <p className="text-sm lg:text-lg uppercase">I&apos;m sam olasoji</p>
                        </div>
                        <h3 className="text-30px lg:text-2xl">About Me</h3>

                        <div className="text-gray-400 mb-8">
                            <p className="text-lg mt-4">Frontend developer that enjoys creating interactive, user-centric interfaces. </p>
                            <p className='text-lg mt-4'>My development journey started in 2020 with basic HTML, CSS and JavaScript. Later that year, I got introduced to WordPress and I loved the ability to create functional interfaces with drag and drop builders without having to bother much about how things worked under the hood. </p>
                            <p className="text-md lg:text-lg mt-4">As time went on, it wasn't enough. I felt my creativity was constrained by the limitations of the system I was using, and I desired to give my customers better designs and performance. I picked up an internship in frontend development and thus it began.</p>
                            <p className="text-lg mt-4">I believe interactive, user centric interfaces are pivotal in getting the end-user's attention and transferring that attention to the product or service offering. </p>
                        </div>

                        <Button url="mailto:osolasoji@gmail.com" text="osolasoji@gmail.com" />
                        <h4 className='font-semibold text-xl mt-10 text-white'>My Development Essentials</h4>

                        <div className="flex font-normal gap-2 lg:gap-4 items-center mt-1 lg:mt-4">
                            <p className='text-md'>Next.js</p>
                            <p className='text-xl'>/</p>
                            <p className='text-md'>React.js</p>
                            <p className='text-xl'>/</p>
                            <p className='text-md'>Tailwind CSS</p>
                            <p className='text-lg'>/</p>
                            <p className='text-md'>Github</p>

                        </div>

                    </div>

                    <div className='lg:w-1/2 lg:text-right pt-0  flex flex-col justify-between'>
                        <div className="p-4 rounded-md bg-[#c5e4f6]">
                            <Image src="/resume.png"
                                width={836}
                                height={720}
                                alt=""
                                className='w-full h-auto'
                            />
                            <div className="border-t p-2 bg-[#10294b]">
                                <a href="mailto:osolasoji@gmail.com">
                                    <p className='text-gray-200 flex gap-1 hover:gap-3 justify-center transition-ease text-lg hover:text-white'>Download Resume <MdOutlineDownload className='mt-1.5' /></p>
                                </a>
                            </div>
                        </div>
                        <Image src="/sam.jpeg" alt="Sam Olasoji" height={720} width={836} className='w-full h-auto rounded-sm hidden' />
                        
                    </div>
                </div>

                

            </section>

                 <section className="inset-0 z-10 text-white bg-dark">
                    <div className="flex flex-col lg:flex-row justify-between items-start hidde">
                        <div className="lg:w-1/2">
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
                            <h2 className="text-25px lg:text-2xl uppercas my-4 leading-none lg:my-6">I create <span className='text-[#0af]'>interactive</span> interfaces people love.</h2>
                            <button className=" px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition">
                                Explore My Works
                            </button>
                        </div>

                        <div className="lg:w-1/5 hidden lg:block">
                            <div className="p-4 rounded-md bg-[#c5e4f6]">
                            <Image src="/resume.png"
                                width={836}
                                height={720}
                                alt=""
                                className='w-full h-auto'
                            />
                            <div className="border-t p-2 bg-[#10294b]">
                                <a href="mailto:osolasoji@gmail.com">
                                    <p className='text-gray-400 text-lg'>osolasoji@gmail.com</p>
                                    <p className='text-gray-200 flex gap-1 hover:gap-3 transition-ease text-lg hover:text-white'>craft an email <MdOutlineSubdirectoryArrowRight className='mt-1.5' /></p>
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>

                
                    
                </section>

            {/* MISSION AND VISION           MISSION AND VISION                MISSION AND VISION             MISSION AND VISION */}
            
            

            {/* FOOTER          FOOTER          FOOTER         FOOTER        FOOTER*/}

        </>
    )
}
