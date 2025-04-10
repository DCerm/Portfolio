
import Image from 'next/image';
import { Button } from '../ui/buttons';
import { H2, H4 } from '../ui/headings';
import {  MdOutlineFactCheck, MdOutlineGavel, MdOutlineHandshake, MdOutlineSearch } from 'react-icons/md';

export default function Home() {

    return (
        <>
            <section className='text-black'>
                <div className='lg:flex'>
                    <div className='lg:w-1/2 lg:pr-[7%]'>
                        <h1 className='text-[9vw] md:text-[8vw] lg:text-[4vw] font-semibold leading-none'>Helping you find real estate that give peace of mind.</h1>
                    </div>

                    <div className='lg:w-1/2 lg:text-right pt-0 lg:pl-[10%] flex flex-col justify-between'>
                        <p className='font-semibold uppercase text-sm md:text-lg lg:text-xl pt-2.5 lg:pt-0'>
                            ©2025, Brilliant light realty™
                        </p>
                        
                    </div>
                </div>

                <div className='mt-8 lg:mt-16 md:max-h-[350px] md:overflow-hidden rounded-xl'>
                    <Image 
                        src="https://res.cloudinary.com/diyynpqmt/image/upload/v1738929369/t-8YwmiDOZSQrPElwLNvPfoPewGofbFR-1621595181-1020X750_j4yjf0.jpg"
                        alt="Pictures of some houses in Lekki | Brilliant Light Realty"
                        height={1080}
                        width={1920}
                        className='lg:-mt-[300px] w-full rounded-xl '
                    />
                </div>

            </section>

            {/* MISSION AND VISION           MISSION AND VISION                MISSION AND VISION             MISSION AND VISION */}
            
            <section className="border-y border-grey lg:py-12">
                <div className='flex flex-col md:flex-row gap-8 lg:gap-0 lg:items-start'>
                    <div className='md:w-1/2 lg:pr-[10%]'>
                        <H4 className='uppercase font-bold' text='our vision'/>
                        <p className='pt-2 lg:pt-5'>To be the number one real estate consultant company providing homes and real estate investment products at best value across Africa.</p>
                    </div>

                    <div className='md:w-1/2  pt-0 lg:pl-[10%]'>
                        <H4 className='uppercase font-bold' text='our mission'/>

                        <p className='pt-2 lg:pt-5'>To provide our clients with the best real estate solutions that meet their needs and exceed their expectations.</p>
                    </div>
                </div>
            </section>
            
            {/*OUR STORY        OUR STORY         OUR STORY         OUR STORY */}

            <section className='flex flex-col'>
                <H2 className="lg:text-[9vw]" text='Our Story' />
                <div className="lg:w-4/5 md:w-5/6 md:self-end mt-5 md:mt-8 lg:mt-24">
                    <p>
                        Brilliant Light Realty was founded in 2019 with a vision 
                        of providing clients with a personalized and stress-free experience when buying or selling properties. 
                        Our team of experts is dedicated to helping you navigate the complex real estate 
                        market with confidence, providing you with the guidance and support you need to make informed decisions that 
                        align with your goals.
                     <br/><br/>
                         We pride ourselves on a seamless, transparent, and stress-free process. With a deep understanding of the market and a 
                         passion for helping clients succeed, we strive to build lasting relationships founded on trust and exceptional results.
                    </p>
                </div>
            </section>

            {/*. MEET OUR FOUNDER       MEET OUR FOUNDER            MEET OUR FOUNDER            MEET OUR FOUNDER */}
            <section className="bg-grey ">
                <div className='lg:flex gap-36 items-center'>
                    <div className=' lg:w-1/2 gap-5 md:pt-8 lg:pt-0 '>
                        <H2 className='' text='Meet Our Founder' />
                        <div className='md:flex flex-col lg:block'>
                            <div className="md:w-5/6 lg:w-full self-end">
                            <p className='pt-5 lg:pt-8 '>Brilliant Light Realty was founded by Abidoye Damilola Ibironke, a visionary leader with a profound commitment to excellence in real estate.
                                <br className='lg:hidden'/><br className='lg:hidden'/> 
                                With years of experience and a genuine passion for helping others, Damilola established the company on the principles of transparency, innovation, 
                                and client-centered service. 
                                
                                <br /><br/>
                                Their dedication to empowering clients through knowledge and personalized guidance has shaped Brilliant Light Realty into a trusted name in the industry.&nbsp;
                                
                                <br className='lg:hidden'/><br className='lg:hidden'/>
                                Under Damilola’s leadership, the company continues to set new standards for professionalism and customer care, ensuring that every client feels valued and 
                                supported throughout their real estate journey.
                            </p>
                            </div>
                        </div>
                        
                    </div>

                    <div className='lg:w-1/2 mt-8 lg:mt-0'>
                        <Image src="https://res.cloudinary.com/diyynpqmt/image/upload/v1740557253/PHOTO-2025-02-26-08-59-49_lgsw1e.jpg" alt="Damilola Abidoye" height={400} width={300} className=" rounded-3xl w-full" />
                    </div>
                </div>

                <div className='lg:flex lg:flex-row-reverse gap-36 items-center pt-12 lg:pt-36'>
                    <div className=' lg:w-1/2 gap-5 md:pt-8 lg:pt-0 '>
                        <H2 className='' text='Our Co-Founder' />
                        <div className='md:flex flex-col lg:block'>
                            <div className="md:w-5/6 lg:w-full self-end">
                            <p className='pt-5 lg:pt-8 '>Aremu Sunday Adesoye is the co-founder and financial partner of Brilliant Light Realty.
                                <br className='lg:hidden'/><br className='lg:hidden'/> 
                                With a background in sales and marketing, he brings invaluable insights to our team. 
                                
                                <br /><br/>
                                As a key financial partner, he has been instrumental in fueling our growth.&nbsp;
                            </p>
                            </div>
                        </div>
                        
                    </div>

                    <div className='lg:w-1/2 mt-8 lg:mt-0'>
                        <Image src="https://res.cloudinary.com/diyynpqmt/image/upload/v1739892645/PHOTO-2025-02-18-07-49-41_unwlib.jpg" alt="" height={400} width={300} className=" rounded-3xl w-full" />
                    </div>
                </div>
            </section>

            {/* HOW WE HELP       HOW WE HELP             HOW WE HELP         HOW WE HELP */}
            <section className="lg:flex  lg:gap-32">
                <div className='lg:w-2/5'>
                    <H2 className="" text="How We Help" />
                    <p className="pt-5">We offer a simplified process to buying, or selling your real estate properties for a profit.
                        
                    </p>
                    <Button url="" className=" mt-5 lg:mt-12" text="View Properties" />
                </div>

                <div className="lg:w-3/5 mt-12 lg:mt-0 md:grid grid-cols-2 md:mt-0">
                    <div className='p-5 border-b border-[#999]'>
                        <MdOutlineSearch className='text-5xl p-2.5 bg-gold rounded-full' />
                        <H4 className='pt-5' text='Property identification and price negotiation' />
                        <p className='pt-5 text-lg'>We assist in locating properties that align with your preferences and budget.
                            We also negotiate the best price for you.
                        </p>
                    </div>
                    <div className='p-5 border-b md:border-l border-[#999]'>
                        <MdOutlineFactCheck className='text-5xl p-2.5 bg-gold rounded-full' />
                        <H4 className='pt-5' text='Property inspection and verification' />
                        <p className='pt-5 text-lg'>We perform due diligence to ensure there are no hidden issues that could affect 
                            its value or your investment
                        </p>
                    </div>
                    <div className='p-5  border-b md:border-b-0 border-[#999]'>
                        <MdOutlineGavel className='text-5xl p-2.5 bg-gold rounded-full' />
                        <H4 className='pt-5' text='Legal Documentation' />
                        <p className='pt-5 text-lg'>We coordinate with legal professionals to handle all necessary documentation. 
                            This protects your interests and ensures compliance with local regulations.
                        </p>
                    </div>
                    <div className='p-5 md:border-l border-[#999]'>
                        <MdOutlineHandshake className='text-5xl p-2.5 bg-gold rounded-full' />
                        <H4 className='pt-5' text='Closing the deal' />
                        <p className='pt-5 text-lg'>We manage the closing process, ensuring that all contractual obligations 
                            are met and that the transfer of ownership is executed efficiently. 
                        </p>
                    </div>
                </div>
            </section>


            {/* FOOTER          FOOTER          FOOTER         FOOTER        FOOTER*/}

        </>
    )
}
