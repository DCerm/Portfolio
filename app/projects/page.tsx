
import Image from 'next/image';
import { Button } from '../ui/buttons';
import { H2, H4 } from '../ui/headings';
import { Experience, Separator } from '../ui/modules';
import {  MdOutlineDownload, MdOutlineCode, MdOutlineVerifiedUser } from 'react-icons/md';

export default function Home() {

    return (
        <>
            <section className='bg-dark pt-5 lg:pt-[100px]'>
                <div className='flex flex-col-reverse lg:flex-row gap-12 lg:gap-24 '>
                    <div className='lg:w-3/5 '>
                        <div className="flex gap-2 items-center">
                            <MdOutlineVerifiedUser className='text-xl' />
                            <p className="text-sm lg:text-lg uppercase">I&apos;m sam olasoji</p>
                        </div>
                        <h3 className="text-30px lg:text-2xl">About Me</h3>

                        <div className="text-gray-400 mb-8">
                            <p className="text-lg mt-4">Frontend developer that enjoys creating interactive, user-centric interfaces. </p>
                            <p className='text-lg mt-4'>My development journey started in 2020 with basic HTML, CSS and JavaScript. Later that year, I got introduced to WordPress and I loved the ability to create functional interfaces with drag and drop builders without having to bother much about how things worked under the hood. </p>
                            <p className="text-md lg:text-lg mt-4">As time went on, it wasn&apos;t enough. I felt my creativity was constrained by the limitations of the system I was using, and I desired to give my customers better designs and performance. I picked up an internship in frontend development and thus it began.</p>
                            <p className="text-lg mt-4">I believe interactive, user centric interfaces are pivotal in getting the end-user&apos;s attention and transferring that attention to the product or service offering. </p>
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
                                <a href="mailto:osolasoji@gmail.com">
                                    <p className='text-gray-200 flex gap-1 hover:gap-3 justify-center transition-ease text-lg hover:text-white'>Download Resume <MdOutlineDownload className='mt-1.5' /></p>
                                </a>
                            </div>
                        </div>
                        <Image src="/sam.jpeg" alt="Sam Olasoji" height={720} width={836} className='w-full h-auto rounded-sm hidden' />
                        
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
                <Experience logo="/Sam-Olasoji.png" title="Website Developer" company="WebFlux" date="January 2021 - November 2021" location="Ife, Nigeria" />

            </section>            
            

            {/* FOOTER          FOOTER          FOOTER         FOOTER        FOOTER*/}

        </>
    )
}
