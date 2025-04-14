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
                <div className="flex gap-2 items-center ">
                    <MdOutlineCode className='text-xl'/>
                    <p className="text-sm lg:text-lg uppercase">through the stars...</p>
                </div>
                <h3 className="lg:text-2xl text-30px">My Development Journey</h3>

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
