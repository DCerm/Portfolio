import Image from "next/image";
import { Button } from "@/app/ui/buttons";
import { ProjectHead } from "@/app/ui/modules";

export default function Page() {
    return (
        <>
            <ProjectHead name="Brilliant Light Realty" 
                url="https://brilliantlightrealty.com"
                img="/mockup2.jpeg"
                client="Brilliant Light Realty"
                service="Web app frontend development"
                tools="Next.js | Tailwind CSS | Github | Contentful | API | Typescript "
                year="2025" 
                about="Brilliant Light Realty is a real estate company with a vision of providing clients with 
                a personalized and stress-free experience when buying or selling properties. The website serves 
                as a platform for showcasing their listings, providing information about the company, and facilitating 
                communication with potential clients."

            />

            <section className="text-white lg:flex justify-between bg-ox">
                <div className="lg:w-1/2">
                    <h2 className="text-25px md:text-30px lg:text-2xl mb-8 lg:mb-16">Project Overview</h2>

                    <p className="text-lg mt-4">
                        The Brilliant Light Realty website was built to serve as a sleek, modern, and high-performing digital storefront for a growing real estate company. 
                        The goal was to develop a dynamic platform that&apos;s easy to manage on the backend while offering a fast and engaging experience for potential 
                        clients browsing property listings or reading real estate insights.
                    </p>

                    <p className="text-xl font-semibold mt-8 uppercase"> Tech Stack</p>

                    <li><strong>Next.js</strong> – for optimized performance and server-side rendering</li>
                    <li><strong>TypeScript</strong> – for maintainable and scalable code</li>
                    <li><strong>Tailwind CSS</strong> – for rapid, responsive UI development</li>
                    <li><strong>Contentful</strong> – as a headless CMS</li>
                    <li><strong>Google Sheets API</strong> – for form automation and team collaboration</li>

                    <p className="text-xl font-semibold mt-8 uppercase"> Why Next.js?  </p>
                    <p className="text-lg mb-4">Next.js was chosen over plain React for its superior SEO capabilities and support for page-based 
                        routing and server-side rendering. This ensures that search engines can easily crawl and index listings, blogs, and 
                        service pages — a key requirement for visibility in the competitive real estate space.
                    </p>

                    <p className="text-xl font-semibold mt-8 uppercase"> Content Management with Contentful  </p>
                    <p className="text-lg mb-4">To keep the site dynamic and easy to manage, I integrated Contentful as a headless CMS. This allows the client to:</p>

                    <li>Publish new property listings with images and details</li>
                    <li>Post blog articles about real estate trends and tips</li>
                    <li>Edit page content without writing code</li>
                    <li>Utilize a user-friendly interface to manage content, ensuring that the site remains current and relevant.</li>

                    <p className="text-lg mb-4">All content is pulled in dynamically using Contentful&apos;s robust API, giving the client flexibility and control while maintaining frontend consistency.</p>

                    <p className="text-xl font-semibold mt-8 uppercase"> Form Integration & Team Workflow  </p>
                    <p className="text-lg mb-4">Form submissions on the site — such as inquiries and contact messages — are automatically funneled into a Google Spreadsheet via the Google Sheets API. This approach offers:</p>
                    <li>Easy data management for the client team</li>
                    <li>Real-time updates to the team, ensuring no inquiry goes unnoticed</li>
                    <li>Easy access to all submissions in a single, organized location</li>
                    <li>Controlled access to submissions by assigning specific sheets to specific team members</li>

                    <p className="text-xl font-semibold mt-8 uppercase"> Results  </p>
                    <p className="text-lg mb-4">The finished product is a clean, professional, and fully responsive website that loads fast, ranks well, and gives the Brilliant Light Realty team full autonomy over their content. 
                        It&apos;s designed not just to showcase properties but also to build credibility and drive engagement with potential buyers and sellers.
                    </p>

                </div>


                <div className="lg:w-2/5 lg:sticky top-0 h-screen overflow-y-scroll mt-8 lg:mt-0 rounded-xl lg:rounded-3xl ">
                    <p className="text-sm text-center my-2">The website. Scroll over the image for a full-length view</p>
                    <Image src="/blrfull.png" alt="Brilliant Light Realty Website" height={16040} width={2880} 
                        className="w-full h-auto mb-8 lg:mb-16" 
                    />
                    <Button url="https://theleadman.org" text="Visit Website" />
                </div>
            </section>
        </>
    )
}
