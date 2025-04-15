import Image from 'next/image';
import Stars from '../ui/stars';
//import { Button } from '../ui/buttons';
import { Experience, Separator } from '../ui/modules';
import {  MdOutlineCode } from 'react-icons/md';

export default function Home() {

    return (
        <>
            <div className="h-full w-full fixed z-[-1] top-0 left-0">
                <Stars />
            </div>

            {/* EXPERIENCE        EXPERIENCE        EXPERIENCE        EXPERIENCE        EXPERIENCE*/}   
            
            <section className="">
                <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 sticky top-0 py-4 backdrop-blur-xl opacity-900">
                    <div>
                        <div className="flex gap-2 items-center">
                            <MdOutlineCode className='text-xl'/>
                            <p className="text-sm lg:text-lg uppercase">through the stars</p>
                        </div>
                        <h3 className="lg:text-2xl text-30px relative">My Frontend Journey</h3>
                    </div>

                    <div className="flex justify-around items-center gap-0">
                        <a href="#bite"><Image src="/bite.png" alt="" height={50} width={50} className="p-1 md:p-2 border border-gray-600 rounded-full w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] hover:border-[#c5e4f6] hover:lg:w-[70px] hover:lg:h-[70px]" /></a>
                        <div className="px-4 lg:px-8 border-t border-gray-600 " />
                        <a href="#padding"><Image src="/padding.png" alt="" height={50} width={50} className="p-1 md:p-2 border border-gray-600 rounded-full w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] hover:border-[#c5e4f6] hover:lg:w-[70px] hover:lg:h-[70px]" /></a>
                        <div className="px-4 lg:px-8 border-t border-gray-600 " />
                        <a href="#jn"><Image src="/justnovate.png" alt="" height={50} width={50} className="p-1 md:p-2 border border-gray-600 rounded-full w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] hover:border-[#c5e4f6] hover:lg:w-[70px] hover:lg:h-[70px]" /></a>
                        <div className="px-4 lg:px-8 border-t border-gray-600 " />
                        <a href="#webflux"><Image src="/webflux.png" alt="" height={50} width={50} className="p-1 md:p-2 border border-gray-600 rounded-full w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] hover:border-[#c5e4f6] hover:lg:w-[70px] hover:lg:h-[70px]" /></a>
                    </div>
                </div>

                <div id="bite" />
                <Separator />

                <Experience logo="/bite.png" title="Frontend Developer" company="BITe Agency" date="February 2024 - Present" location="Remote" />

                <div className="py-4 md:pt-8 pl-4 pb-24 md:p-[10%]">
                    <p className="text-lg lg:text-xl">At BITe Agency, I am responsible for developing interactive interfaces for client projects </p><br />
                    <p className="text-lg lg:text-xl">At BITe Agency, I am responsible for developing interactive interfaces for client projectsAt BITe Agency, 
                        I am responsible for developing interactive interfaces for client projectsAt BITe Agency, I am responsible for developing interactive 
                        interfaces for client projectsAt BITe Agency, I am responsible for developing interactive interfaces for client projectsAt BITe Agency, 
                    </p>
                    <br/>
                    <p className="text-lg lg:text-xl">At BITe Agency, I am responsible for developing interactive interfaces for client projectsAt BITe Agency, 
                        I am responsible for developing interactive interfaces for client projectsAt BITe Agency, I am responsible for developing interactive 
                        interfaces for client projectsAt BITe Agency, I am responsible for developing interactive interfaces for client projectsAt BITe Agency, 
                    </p>
                    <br/>
                    <p className="text-lg lg:text-xl">At BITe Agency, I am responsible for developing interactive interfaces for client projectsAt BITe Agency, 
                        I am responsible for developing interactive interfaces for client projectsAt BITe Agency, I am responsible for developing interactive 
                        interfaces for client projectsAt BITe Agency, I am responsible for developing interactive interfaces for client projectsAt BITe Agency, 
                    </p>
                </div>
                <div id="padding" />
                <Separator  />

                <Experience logo="/padding.png" title="Frontend Developer" company="Padding Technologies" date="January 2024 - July 2024" location="Remote" />

                <div className="py-4 md:pt-8 pl-4 pb-24 md:p-[10%]">
                    <p className="text-lg lg:text-xl">At BITe Agency, I am responsible for developing interactive interfaces for client projects </p><br />
                    <p className="text-lg lg:text-xl">At BITe Agency, I am responsible for developing interactive interfaces for client projectsAt BITe Agency, 
                        I am responsible for developing interactive interfaces for client projectsAt BITe Agency, I am responsible for developing interactive 
                        interfaces for client projectsAt BITe Agency, I am responsible for developing interactive interfaces for client projectsAt BITe Agency, 
                    </p>
                    <br/>
                    <p className="text-lg lg:text-xl">At BITe Agency, I am responsible for developing interactive interfaces for client projectsAt BITe Agency, 
                        I am responsible for developing interactive interfaces for client projectsAt BITe Agency, I am responsible for developing interactive 
                        interfaces for client projectsAt BITe Agency, I am responsible for developing interactive interfaces for client projectsAt BITe Agency, 
                    </p>
                   
                </div>
                <div id="jn" />
                <Separator />

                <Experience logo="/justnovate.png" title="Project Lead Developer" company="Just Novate (Contract)" date="November 2022 - May 2023" location="Ajah, Lagos" />

                <div className="py-4 md:pt-8 pl-4 pb-24 md:p-[10%]">
                    <p className="text-lg lg:text-xl">At BITe Agency, I am responsible for developing interactive interfaces for client projects </p><br />
                    <p className="text-lg lg:text-xl">At BITe Agency, I am responsible for developing interactive interfaces for client projectsAt BITe Agency, 
                        I am responsible for developing interactive interfaces for client projectsAt BITe Agency, I am responsible for developing interactive 
                        interfaces for client projectsAt BITe Agency, I am responsible for developing interactive interfaces for client projectsAt BITe Agency, 
                    </p>
                    <br/>
                    <p className="text-lg lg:text-xl">At BITe Agency, I am responsible for developing interactive interfaces for client projectsAt BITe Agency, 
                        I am responsible for developing interactive interfaces for client projectsAt BITe Agency, I am responsible for developing interactive 
                        interfaces for client projectsAt BITe Agency, I am responsible for developing interactive interfaces for client projectsAt BITe Agency, 
                    </p>
                   
                </div>
                <div id="webflux" />
                <Separator />

                <Experience logo="/webfluxx.png" title="Website Developer" company="WebFlux" date="January 2021 - November 2021" location="Ife, Nigeria" />

                <div className="py-4 md:pt-8 pl-4 pb-24 md:p-[10%]">
                    <p className="text-lg lg:text-xl">At BITe Agency, I am responsible for developing interactive interfaces for client projects </p><br />
                    <p className="text-lg lg:text-xl">At BITe Agency, I am responsible for developing interactive interfaces for client projectsAt BITe Agency, 
                        I am responsible for developing interactive interfaces for client projectsAt BITe Agency, I am responsible for developing interactive 
                        interfaces for client projectsAt BITe Agency, I am responsible for developing interactive interfaces for client projectsAt BITe Agency, 
                    </p>
                    <br/>
                    <p className="text-lg lg:text-xl">At BITe Agency, I am responsible for developing interactive interfaces for client projectsAt BITe Agency, 
                        I am responsible for developing interactive interfaces for client projectsAt BITe Agency, I am responsible for developing interactive 
                        interfaces for client projectsAt BITe Agency, I am responsible for developing interactive interfaces for client projectsAt BITe Agency, 
                    </p>
                    <br/>
                    <p className="text-lg lg:text-xl">At BITe Agency, I am responsible for developing interactive interfaces for client projectsAt BITe Agency, 
                        I am responsible for developing interactive interfaces for client projectsAt BITe Agency, I am responsible for developing interactive 
                        interfaces for client projectsAt BITe Agency, I am responsible for developing interactive interfaces for client projectsAt BITe Agency, 
                    </p>
                </div>
                <Separator />

            </section>            
            

            {/* FOOTER          FOOTER          FOOTER         FOOTER        FOOTER*/}

        </>
    )
}
