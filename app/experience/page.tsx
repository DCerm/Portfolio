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
                    <p className="text-lg lg:text-xl">At BITe Agency, I played a key role in delivering fast, responsive, and user-friendly web experiences 
                        for small businesses and growing brands. My work focused on turning design files into functional front-end interfaces using modern 
                        frameworks such as React.js, Next.js, and Tailwind CSS—ensuring pixel-perfect responsiveness across devices. 
                    </p><br />

                    <p className="text-lg lg:text-xl">I built and deployed fully functional static websites using Next.js, integrating Contentful as a headless 
                        CMS and Neon Db as the database layer to ensure scalable content management and data handling. For projects requiring user accounts and secure access, 
                        I implemented robust authentication flows using NextAuth and OAuth, enabling secure and seamless sign-in experiences.
                    </p>
                    <br/>
                    <p className="text-lg lg:text-xl">To support business decision-making, I developed custom dashboards that allowed website owners to track traffic and monitor 
                        form submissions in real-time. I also prioritized SEO optimization, using tools like SEMrush, Ubersuggest, Google Trends, and Next SEO, along with proper 
                        structured metadata to boost organic visibility.
                    </p>
                    <br/>
                    <p className="text-lg lg:text-xl">Performance was never an afterthought—I regularly audited and enhanced website speed and user engagement using tools like Hotjar, 
                        Microsoft Clarity, and Google PageSpeed Insights. These insights helped us fine-tune load times, user journeys, and overall experience to drive better results 
                        for our clients.
                    </p>
                </div>
                <div id="padding" />
                <Separator  />

                <Experience logo="/padding.png" title="Frontend Developer" company="Padding Technologies" date="January 2024 - July 2024" location="Remote" />

                <div className="py-4 md:pt-8 pl-4 pb-24 md:p-[10%]">
                    <p className="text-lg lg:text-xl">At Padding Technologies, I contributed to building clean, user-friendly frontend components using React.js and Tailwind CSS, 
                        helping deliver seamless and intuitive digital experiences. My focus was on creating reusable, maintainable components that adhered to modern UI/UX standards 
                        while ensuring responsiveness and performance across devices. 
                    </p><br />
                    <p className="text-lg lg:text-xl">Collaboration was central to our workflow—I worked closely with teammates on large-scale projects, actively participating in sprint planning, 
                        daily stand-ups, and technical discussions to align on goals and ensure smooth delivery. 
                    </p>
                    <br/>
                    <p className="text-lg lg:text-xl">I also participated in code reviews, offering constructive feedback to improve code quality, performance, and scalability. 
                        This not only strengthened our development standards but also encouraged continuous learning within the team.
                    </p>
                   
                </div>
                <div id="jn" />
                <Separator />

                <Experience logo="/justnovate.png" title="Project Lead Developer" company="Just Novate (Contract)" date="November 2022 - May 2023" location="Ajah, Lagos" />

                <div className="py-4 md:pt-8 pl-4 pb-24 md:p-[10%]">
                    <p className="text-lg lg:text-xl">At Just Novate, I worked closely with clients to understand their goals and define clear website requirements and functionalities 
                        tailored to their business needs. I led the development and update of custom WordPress websites, ensuring each project delivered both visual appeal and practical functionality. 
                    </p><br />
                    <p className="text-lg lg:text-xl">A core part of my role was optimizing each page for search engines by implementing essential SEO elements such as meta tags, titles, and descriptions. 
                        I also implemented security measures to safeguard sites against vulnerabilities and attacks, ensuring stable and secure online experiences for users and business owners alike. 
                    </p>
                    <br/>
                    <p className="text-lg lg:text-xl">Beyond development, I integrated essential tools like Google Analytics for traffic monitoring and various payment solutions to support online transactions. 
                        I maintained existing WordPress websites with regular updates, troubleshooting, and content management to ensure peak performance and user satisfaction.
                    </p>
                   
                </div>
                <div id="webflux" />
                <Separator />

                <Experience logo="/webfluxx.png" title="Website Developer" company="WebFlux" date="January 2021 - November 2021" location="Ife, Nigeria" />

                <div className="py-4 md:pt-8 pl-4 pb-24 md:p-[10%]">
                    <p className="text-lg lg:text-xl">At WebFlux, I was responsible for managing hosting environments for multiple clients using cPanel and Plesk interfaces. I ensured server-side stability by 
                        conducting regular backups, monitoring security logs, and maintaining system integrity across multiple domains. 
                    </p><br />
                    <p className="text-lg lg:text-xl">Part of my responsibilities also involved on-page SEO optimization—adding relevant meta tags, titles, and descriptions to ensure all websites were search 
                        engine friendly and easily discoverable. This blend of technical hosting management and SEO-focused development helped deliver secure, high-performing websites for a variety of businesses.
                    </p>
                    
                    
                </div>
                <Separator />

            </section>            
            

            {/* FOOTER          FOOTER          FOOTER         FOOTER        FOOTER*/}

        </>
    )
}
