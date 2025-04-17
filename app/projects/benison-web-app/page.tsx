import Image from 'next/image';
import { ProjectHead } from "@/app/ui/modules";

export default function Page() {
    return (
        <>
            <ProjectHead name="Benison Web App" 
                url="https://benison.ng"
                img="/mockup4.png"
                client="Benison Home Medicare Ltd"
                service="Web app frontend development"
                tools="Next.js | Tailwind CSS | Github | NextAuth | APIs"
                year="2025" 
            />

            <section className="text-white lg:flex justify-between">
                <div className="lg:w-1/2">
                <h2 className="text-25px md:text-30px lg:text-2xl mb-8 lg:mb-16">Project Overview</h2>
                </div>
                <div className="lg:w-2/5 lg:sticky top-0">
                    <Image src="/mockup3.png" alt="benison web app" height={1480} width={2468} 
                        className="rounded-xl lg:rounded-3xl w-full h-auto mb-8 lg:mb-16" 
                    />
                </div>
            </section>
        </>
    )
}