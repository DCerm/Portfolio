import Image from "next/image";
import { Button } from "@/app/ui/buttons";
import { ProjectHead } from "@/app/ui/modules";

export default function Page() {
    return (
        <>
            <ProjectHead name="Portfolio Website" 
                url="https:/faithewobe.vercel.app"
                img="/mockup3.jpeg"
                client="Faith Ewobe"
                service="Static website development"
                tools="React.js | Github "
                year="2025" 
                about="The Faith Ewobe Portfolio was developed as a personal brand website that highlights the client&apos;s 
                professional presence through speed, simplicity, and elegance."

            />

            <section className="text-white lg:flex justify-between bg-dark">
                <div className="lg:w-1/2">
                    <h2 className="text-25px md:text-30px lg:text-2xl mb-8 lg:mb-16">Project Overview</h2>
                    <p className="text-lg mt-4">Built with React.js, the site was designed to reflect Faith&apos;s unique personality 
                        and skills while ensuring fast performance and a seamless user experience across devices.
                    </p>

                    <p className="text-xl font-semibold mt-8 uppercase"> Tech Stack</p>
                    <li><strong>React.js</strong> – for building reusable, performant components</li>
                    <li><strong>CSS3</strong> – for responsive styling and custom animations</li>
                    <li><strong>GitHub</strong> – version control </li>
                    <li><strong>Google Analytics</strong> – for user behavior tracking and traffic insights</li>

                    <p className="text-xl font-semibold mt-8 uppercase">Key Features</p>
                    <p className='text-lg mt-4 font-semibold'> Lightning-Fast Performance</p>
                    <p className='text-lg mt-2'>One of the major goals for the site was instantaneous navigation—achieved 
                        through optimized routing and preloading techniques in React. Page transitions occur without delay, 
                        making navigation feel smooth and responsive. The site also boasts fast page load times, optimized 
                        with performance best practices like image compression and minimal use of blocking scripts.
                    </p>

                    <p className='text-lg mt-4 font-semibold'> Clean, Minimalist Design</p>
                    <p className='text-lg mt-2'>The UI was carefully crafted with a clean, modern aesthetic. Generous white 
                        space, well-organized content blocks, and thoughtful typography create a pleasant reading experience 
                        and keep the user&apos;s attention focused on Faith&apos;s work. The layout is fully responsive, adapting 
                        gracefully to mobile, tablet, and desktop screens.
                    </p>

                    <p className='text-lg mt-4 font-semibold'> Instant Page Switch</p>
                    <p className='text-lg mt-2'>To simulate the feel of a single-page application (SPA), React Router was used 
                        to enable instant route transitions without full-page reloads. This ensures that users stay engaged and 
                        that navigation across sections (About, Projects, Contact, etc.) feels natural and fluid.
                    </p>

                    <p className='text-lg mt-4 font-semibold'> Component-Driven Architecture</p>
                    <p className='text-lg mt-2'>The site is built using a component-driven architecture, allowing for easy 
                        updates and scalability. Each section of the website is encapsulated in reusable components, making 
                        it simple to add new features or modify existing ones without affecting the overall structure.
                    </p>

                    <p className="text-xl font-semibold mt-8 uppercase">  Outcomes</p>
                    <p className="text-lg mb-4">The end result was a sleek, high-performance portfolio that effectively showcases 
                        Faith Ewobe&apos;s personality and skills while maintaining the flexibility and scalability of a modern React codebase. 
                        The project succeeded in giving the client a professional digital presence that feels fast, thoughtful, and 
                        beautifully organized.
                    </p>

                </div>

                <div className="lg:w-2/5 lg:sticky top-0 h-screen overflow-y-scroll mt-8 lg:mt-0 rounded-xl lg:rounded-3xl ">
                    <p className="text-sm text-center my-2">The website. Scroll over the image for a full-length view</p>
                    <Image src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1744985952/faith_evjtqc.png" 
                        alt="portfolio website" height={9346} width={2880} 
                        className=" w-full h-auto mb-8 lg:mb-16" 
                    />
                    <Button url="https://faithewobe.vercel.app" text="Visit Website" />

                </div>
            </section>
        </>
    )
}
