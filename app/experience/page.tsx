import Image from 'next/image';
//import { Button } from '../ui/buttons';
import { Experience, Separator } from '../ui/modules';
import {  MdOutlineCode } from 'react-icons/md';

export default function Home() {

    return (
        <>
            {/* EXPERIENCE        EXPERIENCE        EXPERIENCE        EXPERIENCE        EXPERIENCE*/}   
            
            <section className="">
                <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 sticky top-0 py-4 backdrop-blur-xl opacity-900">
                    <div>
                        <div className="flex gap-2 items-center">
                            <MdOutlineCode className='text-xl'/>
                            <p className="text-sm lg:text-lg uppercase">through the stars</p>
                        </div>
                        <h3 className="lg:text-2xl text-30px relative">My Fullstack Development Journey</h3>
                    </div>

                    <div className="flex justify-around items-center gap-0">
                        <a href="#ojailu"><Image src="/ojalogo.jpg" alt="" height={50} width={50} className="p-1 md:p-2 border border-gray-600 rounded-full w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] hover:border-[#0af] hover:lg:w-[55px] hover:lg:h-[55px]" /></a>
                        <div className="px-4 lg:px-8 border-t border-gray-600 " />
                        <a href="#bite"><Image src="/bite.png" alt="" height={50} width={50} className="p-1 md:p-2 border border-gray-600 rounded-full w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] hover:border-[#0af] hover:lg:w-[55px] hover:lg:h-[55px]" /></a>
                        <div className="px-4 lg:px-8 border-t border-gray-600 " />
                        <a href="#padding"><Image src="/padding.png" alt="" height={50} width={50} className="p-1 md:p-2 border border-gray-600 rounded-full w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] hover:border-[#0af] hover:lg:w-[55px] hover:lg:h-[55px]" /></a>
                        <div className="px-4 lg:px-8 border-t border-gray-600 " />
                        <a href="#jn"><Image src="/justnovate.png" alt="" height={50} width={50} className="p-1 md:p-2 border border-gray-600 rounded-full w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] hover:border-[#0af] hover:lg:w-[55px] hover:lg:h-[55px]" /></a>
                        <div className="px-4 lg:px-8 border-t border-gray-600 " />
                        <a href="#webflux"><Image src="/webflux.png" alt="" height={50} width={50} className="p-1 md:p-2 border border-gray-600 rounded-full w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] hover:border-[#0af] hover:lg:w-[55px] hover:lg:h-[55px]" /></a>
                    </div>
                </div>



                <div id="ojailu" className='pb-[0%] md:pb-[20%] lg:pb-[10%]'/>
                <Separator />
                <Experience logo="/ojalogo.jpg" title="Fullstack Developer (WordPress)" company="Oja Ilu" date="October 2025 - Present" location="Remote" />

                <div className="py-4 md:pt-8 pl-4  md:px-[10%]">
                    <p className="text-lg lg:text-xl">Oja Ilu is a large-scale merchant listing platform designed to support businesses across multiple categories and serve millions of users nationwide. 
                        The platform was built on WordPress, with extensive custom PHP development to extend native functionality and support complex merchant and user workflows.<br/><br/>
                        My contributions included developing custom features for managing merchant listings, categories, and structured business data, implementing role-based access for merchants and administrators, 
                        and optimizing queries and data handling for performance and scalability. Given the platform&apos;s intended scale, careful attention was paid to system extensibility, database interactions, and maintaining clean separation between presentation and business logic.<br/><br/>
                        Oja Ilu shares many similarities with e-commerce systems; large searchable catalogs, merchant-facing dashboards, discovery experiences for users, and performance considerations at scale. This experience further deepened my understanding of building merchant-focused platforms 
                        on top of existing frameworks while maintaining long-term reliability and code quality.
                    </p><br />
                </div>


                <div id="bite" className='pb-[50%] md:pb-[20%] lg:pb-[10%]'/>
                <Separator />
                <Experience logo="/bite.png" title="Lead Fullstack Developer" company="BITe Agency" date="February 2024 - Present" location="Remote" />
            
                <div className="py-4 md:pt-8 pl-4  md:px-[10%]">
                    <p className="text-lg lg:text-xl">At Bite Agency, I work as a full-stack software engineer delivering multiple production applications and client websites across different industries. The role required balancing speed and quality, building reliable, scalable systems while meeting real business deadlines and evolving requirements.<br/><br/>
                        One of the major products I contributed to was the Medical Residency Trust Fund (MRTF) Portal, a nationwide platform built for the national body of resident doctors in Nigeria. Developed using a PHP framework, the portal supported complex workflows such as user onboarding, structured data submissions, application processing, administrative reviews, and reporting. 
                        As a government-facing system with a growing user base, reliability, security, and maintainability were critical. This experience strengthened my approach to database design, API structure, and writing clean, extensible back-end logic that could scale with increased usage.<br/><br/>
                        In addition to MRTF, I worked on multiple client applications and websites, building custom back-end services, RESTful APIs, and responsive front-end interfaces. These projects often involved transactional workflows, role-based access control, third-party integrations, and performance-sensitive features. 
                        Working across several codebases improved my ability to quickly understand new domains, translate business requirements into technical solutions, and collaborate closely with designers, product stakeholders, and other engineers. I regularly participated in code reviews, debugging, performance optimization, and iterative feature delivery within Agile workflows.
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
                    <p className="text-lg lg:text-xl">Performance was never an afterthought. I regularly audited and enhanced website speed and user engagement using tools like Hotjar, 
                        Microsoft Clarity, and Google PageSpeed Insights. These insights helped us fine-tune load times, user journeys, and overall experience to drive better results 
                        for our clients.
                    </p>
                </div>
                <div id="padding" className='pb-[50%] md:pb-[20%] lg:pb-[10%]' />
                <Separator  />

                <Experience logo="/padding.png" title="Frontend Developer" company="Padding Technologies" date="January 2024 - July 2024" location="Remote" />

                <div className="py-4 md:pt-8 pl-4 md:px-[10%]">
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
                <div id="jn" className='pb-[40%] md:pb-[20%] lg:pb-[10%]' />
                <Separator />

                <Experience logo="/justnovate.png" title="Project Lead Developer" company="Just Novate (Contract)" date="November 2022 - May 2023" location="Ajah, Lagos" />

                <div className="py-4 md:pt-8 pl-4 md:px-[10%]">
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
                <div id="webflux" className='pb-[50%] md:pb-[20%] lg:pb-[10%]' />
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
