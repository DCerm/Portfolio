import Image from 'next/image';
import { Button } from "@/app/ui/buttons";
import { ProjectHead } from "@/app/ui/modules";

export default function Page() {
    return (
        <>
            <ProjectHead name="Benison Web App" 
                url="https://benison.ng"
                img="/mockup4.png"
                client="Benison Home Medicare Ltd"
                service="Web app frontend development"
                tools="Next.js | Tailwind CSS | Github | NextAuth | OAuth | Typescript | GSAP | Chart.js | APIs"
                year="2025" 
                about="Benison Home Medicare Limited is a healthcare company that provides home-based medical services. 
                The website serves as a platform for showcasing their services, providing information about the company, 
                and facilitating communication with potential clients."
            />

            <section className="text-white lg:flex justify-between bg-ox">
                <div className="lg:w-1/2">
                    <h2 className="text-25px md:text-30px lg:text-2xl mb-8 lg:mb-16">Project Overview</h2>
                    <p className='text-lg mt-4'>
                    The Benison Web App was developed as a robust, interactive platform aimed at enhancing both the user experience 
                    and the admin&apos;s ability to manage leads and performance insights effectively. Built with Next.js and Tailwind CSS, 
                    the application combines sleek, responsive design with powerful backend integrations and a custom analytics dashboard.
                    </p>

                    <p className="text-xl font-semibold mt-8 uppercase"> Tech Stack</p>
                    <li><strong>Frontend:</strong> Next.js, Tailwind CSS, GSAP (for animation)</li>
                    <li><strong>Backend:</strong> Node.js (via Next API routes), Nodemailer, Brevo SMTP</li>
                    <li><strong>Authentication:</strong> NextAuth with OAuth</li>
                    <li><strong>Analytics & Data:</strong> Chart.js, Google Analytics API, Google Sheets API</li>

                    <p className="text-xl font-semibold mt-8 uppercase"> Core Features</p>
                    <p className='text-lg mt-4 font-semibold'>1. Beautiful, Animated Frontend</p>
                    <p className='text-lg mt-2'>The website&apos;s frontend features a clean layout styled with Tailwind CSS and enhanced with subtle 
                        animations using GSAP. These animations help guide user interaction and bring the interface to life without overwhelming 
                        functionality.
                    </p>

                    <p className='text-lg mt-4 font-semibold'>2. Form Integration with Google Sheets</p>
                    <p className='text-lg mt-2'>All form submissions on the site are dynamically routed to a Google Spreadsheet using the Google 
                        Sheets API, enabling seamless, low-maintenance data collection. This integration gives the Benison team an organized, 
                        real-time overview of user inputs and contact requests.
                    </p>

                    <p className='text-lg mt-4 font-semibold'>3. Email Notifications via Nodemailer & Brevo SMTP</p>
                    <p className='text-lg mt-2'>Whenever a user submits a form, the admin receives an instant email notification using Nodemailer 
                        and Brevo&apos;s SMTP service. This ensures timely follow-ups and reduces lead response time.
                    </p>

                    <p className='text-lg mt-4 font-semibold'>4. Custom Admin Dashboard</p>
                    <p className='text-lg mt-2'>A dedicated admin panel was built into the application, protected by secure login via NextAuth and OAuth. 
                        The dashboard offers:
                    </p>
                    <li><strong>Website Analytics:</strong> Fetched in real-time from the Google Analytics API, displaying traffic metrics and user behavior</li>
                    <li><strong>Form Submissions:</strong> Displayed directly from the connected Google Spreadsheet, with filtering and sorting options</li>

                    <p className='text-lg mt-4 font-semibold'>5. Authentication & Security</p>
                    <p className='text-lg mt-4'>Access to the dashboard is protected by NextAuth, leveraging OAuth providers for secure login. This ensures 
                        only authorized users can view sensitive data and analytics.
                    </p>


                </div>


                <div className="lg:w-2/5 lg:sticky top-0 h-screen overflow-y-scroll mt-8 lg:mt-0 rounded-xl lg:rounded-3xl ">
                    <p className="text-sm text-center my-2">The website. Scroll over the image for a full-length view</p>
                    <Image src="/benison.png" alt="benison web app" height={1480} width={2468} 
                        className=" w-full h-auto mb-8 lg:mb-16" 
                    />
                    <Button url="https://theleadman.org" text="Visit Website" />
                </div>
            </section>
        </>
    )
}