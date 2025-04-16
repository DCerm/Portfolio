
import Image from 'next/image';
import Stars from '../ui/stars';
import { Button } from '../ui/buttons';
import { Experience, Separator } from '../ui/modules';
import {  MdOutlineDownload, MdOutlineCode, MdOutlineVerifiedUser } from 'react-icons/md';

export default function Home() {

    return (
        <>
            <div className="h-full w-full fixed z-[-1] top-0 left-0">
                <Stars />
            </div>
            <section className=' pt-5 lg:pt-[100px]'>
                <div className='flex flex-col-reverse lg:flex-row gap-12 lg:gap-24 items-center'>
                    <div className='lg:w-3/5 '>
                        <div className="flex gap-2 items-center">
                            <MdOutlineVerifiedUser className='text-xl' />
                            <p className="text-sm lg:text-lg uppercase">I&apos;m sam olasoji</p>
                        </div>
                        <h3 className="text-30px lg:text-2xl">About Me</h3>

                        <div className=" mb-8">
                            <p className="text-lg mt-4">Frontend developer with a passion for crafting interactive, user-centric interfaces. </p>
                            <p className='text-lg mt-4'>I began my journey in 2020 with HTML, CSS, and JavaScript, later exploring WordPress to quickly bring ideas to life. But I craved more creative freedom and performance—so I dove deeper, landed a frontend internship, and never looked back. </p>
                            <p className="text-md lg:text-lg mt-4">Today, I focus on building seamless, engaging experiences that capture user attention and connect it to real business value.</p>
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

                    <div className='lg:w-2/5 lg:text-right pt-0  flex flex-col justify-between'>
                        <div className="p-4 rounded-md bg-[#c5e4f6]">
                            <Image src="/resume.png"
                                width={836}
                                height={720}
                                alt=""
                                className='w-full h-auto'
                            />
                            <div className="border-t p-2 bg-[#10294b]">
                                <a href="/frontend_resume.pdf" locale={false} target="_blank">
                                    <p className='text-gray-200 flex gap-1 hover:gap-3 justify-center transition-ease text-lg hover:text-white'>Download Resume <MdOutlineDownload className='mt-1.5' /></p>
                                </a>
                            </div>
                        </div>                        
                    </div>
                </div>
            </section>

             {/* EXPERIENCE        EXPERIENCE        EXPERIENCE        EXPERIENCE        EXPERIENCE*/}   
            
            <section className="">
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
            

            {/* FOOTER          FOOTER          FOOTER         FOOTER        FOOTER*/}

        </>
    )
}
