import Image from "next/image";
import { Button } from "@/app/ui/buttons";
import { ProjectHead } from "@/app/ui/modules";

export default function Page() {
    return (
        <>
            <ProjectHead name="The Leadman Africa Website" 
                url="https://brilliantlightrealty.com"
                img="/mockup.jpeg"
                client="The Leadman Africa"
                service="Web app frontend development"
                tools="React.js | CSS3 | Github | API "
                year="2025" 
                about="The Leadman Affrica is a human capital development company that equips leaders and young professionals
                    with the skills and mindset to thrive in a rapidly changing world. The website serves as a platform for
                    showcasing their services, programs, and resources. It is also the registration portal  for their training programs."
            />

            <section className="text-white lg:flex justify-between bg-dark">
                <div className="lg:w-1/2">
                    <h2 className="text-30px lg:text-2xl mb-8 ">Project Overview</h2>

                        <p className="text-lg mt-4">
                            The  project involved a full revamp of an existing WordPress website. While the original site was functional, 
                            it fell short on performance, user experience, and modern design standards. I was brought on to improve these 
                            aspects — both visually and technically — and migrate the platform to a more performant and maintainable stack.
                        </p>

                        <Image src="/tlmb4.png" alt="before" height={916} width={ 1530 } className="w-full h-auto mt-8" />
                        <p className="text-sm text-center mt-2 mb-8">The Leadman website before the redesign</p>

                        <p className="text-xl font-semibold mt-8 uppercase"> Tech Stack</p>

                            <li><strong>React.js</strong> – for building reusable, performant components</li>

                            <li><strong>CSS3</strong> – for responsive styling and custom animations</li>

                            <li><strong>GitHub</strong> – version control and team collaboration</li>

                            <li><strong>Google Analytics</strong> – for user behavior tracking and traffic insights</li>

                        <p className="text-xl font-semibold mt-8 uppercase"> Performance Improvements</p>

                        <p className="text-lg mb-4">One of the key goals was drastically improving performance across all pages. 
                            By rebuilding the site from scratch in React, I was able to achieve:
                        </p>
                            <li><strong>First Contentful Paint (FCP):</strong> 0.6s</li>

                            <li><strong>Speed Index:</strong> 0.9s</li>

                            <li><strong>Instantaneous page transitions</strong> through route-based code splitting and caching strategies</li>

                        <p className="text-xl font-semibold mt-8 uppercase"> Visual Enhancements & Interactivity </p>
                        <p className="text-lg">
                            The website was redesigned with a focus on elegance, clarity, and engagement. I created <strong>reusable UI components</strong> that kept the 
                            codebase clean while ensuring consistency across the site. <strong>A custom scrolling text background built in SVG </strong> 
                            added visual flair and movement, helping to capture user attention without distracting from key content.
                        </p>

                        <p className="text-xl font-semibold mt-8 uppercase"> Analytics and Optimization  </p>
                        <p className="text-lg">I implemented Google Analytics to monitor traffic sources, user behavior, and key conversion paths. This setup 
                            supports ongoing marketing efforts and informed future iterations of the website.
                        </p>

                </div>

                <div className="lg:w-2/5 lg:sticky top-0 h-screen overflow-y-scroll mt-8 lg:mt-0">
                    <p className="text-sm text-center my-2">The redesigned website. Scroll over the image for a full-length view</p>
                    <Image src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1744905715/theleadman.org/screencapture-theleadman-org-2025-04-17-16_58_22_p45uwk.png" 
                        alt="The Leadman Africa website" height={12344} width={2880} 
                        className=" w-full h-auto mb-8 lg:mb-16" 
                    />
                    <Button url="https://theleadman.org" text="Visit Website" />
                </div>
            </section>
        </>
    )
}
