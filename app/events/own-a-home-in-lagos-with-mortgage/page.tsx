import Image from "next/image";
import { H4 } from "@/app/ui/headings";
import { RegistrationForm } from "@/app/ui/forms";

export default function Page () {
    return (
        <>
            <div className="p-0 lg:flex items-center">
                <div className="lg:w-1/2">
                    <Image src="/mortgage.jpg" width="467" height="565"
                    className="h-auto lg:h-screen w-full lg:w-auto rounded-r-lg" 
                    alt="How you can own your own home in Lagos with Mortgage" />
                </div>

                <div className="lg:w-1/2 text-black px-4 pt-8 lg:pr-[5%] flex flex-col gap-4">
                    <h1 className="text-30px leading-none lg:text-2xl capitalize"><span className="text-wine font-semibold">
                        Webinar:</span> Learn how you can own your own home in Lagos with Mortgage
                    </h1>

                    <p ><strong className="text-wine">Venue:</strong> Google Meet</p>
                    <p ><strong className="text-wine">Date:</strong> Wednesday 12th March, 2025</p>
                    <p ><strong className="text-wine">Time:</strong> 7:00pm WAT</p>


                    <div className="mt-6 p-4 bg-grey rounded-lg h-full">
                        <H4 className="mb-6" text="Register to join" />
                        
                        <RegistrationForm />
                    </div>
                </div>
            </div>
        </>
    )
}