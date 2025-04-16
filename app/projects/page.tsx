
//import Image from 'next/image';
import Stars from '../ui/stars';
//import { Button } from '../ui/buttons';
import { Project, Testimony } from '../ui/modules';
import {  MdOutlineLaptopMac, MdOutlineChatBubble } from 'react-icons/md';

export default function Home() {

    return (
        <>
            <div className="h-full w-full fixed z-[-1] top-0 left-0 canvas-wrapper">
                <Stars />

            </div>
            {/* PROJECTS        PROJECTS        PROJECTS        PROJECTS        PROJECTS*/}
            
            <section className="text-white bg-cover">
                <div className="flex gap-2 items-center ">
                    <MdOutlineLaptopMac className='text-xl'/>
                    <p className="text-sm lg:text-lg uppercase">creations</p>
                </div>
                <h3 className="text-30px lg:text-2xl">My Selected Works</h3>

                <div className="grid lg:grid-cols-2 gap-4 mt-8">
                    <Project name="TheLeadman Africa" desc="A leadership training site for legislators and entrepreneurs" url="https://theleadman.org" src="/mockup.jpeg" />
                    <Project name="Brilliant Light Realty" desc="Real estate web app with dynamic content" url="https://brilliantlightrealty.com" src="/mockup2.jpeg" />
                    <Project name="Portfolio" desc="A portfolio website" url="https://faithewobe.vercel.app" src="/mockup3.jpeg" />
                    <Project name="Benison" desc="Home health web app with analytics dashboard" url="https://benison.ng" src="/mockup4.png" />
                    
                </div>

                
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

        </>
    )
}
