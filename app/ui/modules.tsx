'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/app/ui/buttons";
import { H2, H4 } from './headings';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { PlusIcon } from '@heroicons/react/24/outline';
import { FaCalendar, FaLaptop, FaTools, FaUser } from 'react-icons/fa';


function Separator() {
    return (
        <div className="w-full border-t border-gray-700 my-4"></div>
    )
}

function Toggle ({q, a} : {q: string, a: string}) {
	const [isOpen, setIsOpen] = useState(false);

	function Open() {
		setIsOpen(!isOpen);
	}
	
	return (
		<>
			<div className='border-grey border rounded-xl p-5 mt-5' onClick={Open}>
				<div className='flex gap-5 justify-between'>
					<h4 className='font-normal text-[20px] lg:text-25px lg:text-30px'>{q}</h4>
					<button className='border-0 ' onClick={Open}> { isOpen ? <PlusIcon height={40} className='rotate-45 transition duration-300 ease-in-out border border-grey rounded-full p-2.5' /> : <PlusIcon height={40} className='-rotate-90 transition duration-300 ease-in-out border border-grey rounded-full p-2.5' /> } </button>
				</div>

				<p className={ `${isOpen ? "block transition duration-300 ease-in-out" : "hidden transition duration-300 ease-in-out" }  text-lg py-2.5` }> {a} </p>
			</div>
		</>
	)
}

function ImgToggle ({ imgF, htext, url, ptext, defaultOpen = false} : { imgF: () => void, htext: string, url: string, ptext: string, defaultOpen?: boolean}) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

	function Open() {
		setIsOpen(!isOpen);
	}
    return (
        <div className=' imgF border-b border-[#999] py-5'>
            <div className='flex justify-between' onClick={Open} onMouseOver={imgF} >
                <H4 className="" text={htext} />
                <Link href={url} >
                    <button className='rounded-full p-2.5 border border-black hover:bg-golden hover:border-golden'>
                        <MdOutlineArrowOutward className='text-xl rh45' />
                    </button>
                </Link>
            </div>

            <p className={ `${isOpen ? "block" : "hidden" }  text-lg pt-3.5` } onClick={Open}>{ptext}</p>
        </div>
    )
}

function Services () {
    const img = [
        'https://res.cloudinary.com/diyynpqmt/image/upload/v1739779742/paragon_cfh7br.png',
        'https://res.cloudinary.com/diyynpqmt/image/upload/v1739779738/PHOTO-2025-02-16-20-36-36_gschj0.jpg',
        'https://res.cloudinary.com/diyynpqmt/image/upload/v1739779741/date_extended2_2x_nnuehb.png'
    ];
    const [src, setSrc] = useState(img[0]);

    return (
        <section className="lg:flex bg-grey gap-48">
            <H2  className="hidden md:block lg:hidden" text='We are here to help you find the perfect space' />
            <div className=' lg:w-1/2 md:flex gap-5 md:pt-8 lg:pt-0 lg:block '>
                <H2  className="md:hidden lg:block" text='We are here to help you find the perfect space' />
                <div className="md:w-1/2 lg:w-full" >
                    <div className='pt-8 md:pt-24'>
                        <ImgToggle 
                            defaultOpen={true}
                            imgF={()=> setSrc(img[0])}
                            htext="Houses"
                            url="/properties/houses"
                            ptext="Find more than just a house, find your sanctuary. Explore our curated 
                                listings and uncover the perfect home that resonates with your lifestyle."
                        />

                        <ImgToggle 
                            imgF={()=> setSrc(img[1])}
                            htext="Lands"
                            url="/properties/landed-property"
                            ptext="Brilliant Light Realty provides expert advice on land acquisition, ensuring 
                            your investment is secure, legally sound, and positioned for future growth."
                        />

                        <ImgToggle 
                            imgF={()=> setSrc(img[2])}
                            htext="Real Estate Investments"
                            url="/properties/real-estate-investment"
                            ptext="Whether you’re interested in rental properties, commercial developments, or REITs, 
                            we help you identify 
                            profitable opportunities and build a diversified portfolio tailored to your goals."
                        />
                    </div>
                </div>

                <Image src={src} alt="" height={400} width={300} className="hidden md:block lg:hidden w-1/2 rounded-3xl transition doration-100 ease-in-out" />
            </div>

            <div className='md:w-1/2 lg:flex justify-right hidden lg:block'>
                <Image src={src} alt="" height={400} width={300} className=" rounded-3xl lg:w-full" />
            </div>
        </section>
    )
}


function Testimony({ review, name, title } : { review: string, name: string, title: string }) {
    return (
        
        <div className="border border-gray-700 hover:border-gray-500 hover:shadow-sm hover:shadow-gray-500 text-gray-400 hover:text-white rounded-lg lg:w-1/3 p-4 lg:p-8 flex flex-col justify-between">
            <p className="text-lg">{review}</p>
            <div className="flex gap-4 items-center mt-4">
                <p className="text-lg lg:text-xl font-semibold text-white">{name}</p>
                <p className="text-sm text-gray-400"> - &nbsp; {title}</p>
            </div>
        </div>
    )
}


function Experience({ logo, title, company, date, location } : { logo: string, title: string, company: string, date: string, location: string }) {
    return (
        <>
        <div className='hidden lg:flex gap-2 lg:flex-row justify-between lg:items-center'>
            
            <div className="flex items-center gap-2 lg:gap-4">
                <Image src={logo} alt="" height={50} width={50} className="p-1 md:p-2 border border-gray-700 rounded-full lg:mr-4" />
                <p className="text-md md:text-xl lg:text-25px font-semibold">{title}</p>
                <p className="text-xl lg:text-2xl font-semibold">/</p>
                <p className="text-sm md:text-md lg:text-lg">{company}</p>
            </div>

            <div className="flex lg:flex-col gap-6 lg:gap-2 items-end">
                <p className='text-sm md:text-md lg:text-lg'>{date}</p>
                <p className='text-sm md:text-md lg:text-lg'>{location}</p>
            </div>
        </div>

        <div className="flex gap-4 items-center lg:hidden">
            <Image src={logo} alt="" height={40} width={40} className="p-1 md:p-2 border-gray-700 rounded-full lg:mr-4 h-[40px] md:h-[50px]" />

            <div className="">
                <div className="flex items-center gap-2 lg:gap-4">
                    <p className="text-md md:text-xl lg:text-25px font-semibold">{title}</p>
                    <p className="text-xl lg:text-2xl font-semibold">/</p>
                    <p className="text-sm md:text-md lg:text-lg hidden md:block">{company}</p>
                </div>
                <p className="text-sm md:text-md lg:text-lg md:hidden">{company}</p>

                <div className="flex lg:flex-col gap-2 lg:gap-2 items-end">
                    <p className='text-sm md:text-md lg:text-lg'>{date}</p>
                    <p className='text-sm md:text-md lg:text-lg'>- &nbsp; ({location})</p>
                </div>
            </div>
        </div>

        <Separator />
        </>
    )
}

function Project({ name, desc, src, url } : { name: string, desc: string, src: string, url: string }) {
    return (
        <div className="bg-dark rounded-md card p-4 lg:p-8 pb-0 ">
            <div className="flex gap-2 items-center justify-between">
                <div>
                    <p className="text-xl lg:text-30px font-semibold">{name}</p>
                    <p className="text-md md:text-lg mt-1">{desc}</p>
                </div>

                <Link href={url} className="p-2 rounded-full border border-gray-600 hover:border-white text-gray-400 hover:text-white"><MdOutlineArrowOutward className='text-25px rh45 ' /></Link>
            </div>

            <div className='overflow-hidden overflow-y-hiddden'><Image src={src} alt="" height={1680} width={2520} className="w-full mt-6 h-auto rounded-t-lg overflow-hidden" /></div>
        </div>
    )
}

function ProjectHead({ name, url, img, client, service, tools, year, about } : { name: string, url: string, img: string, client: string, service: string, tools: string, year: string, about: string }) {
    return (
        <section className="text-white ">
            <div className="flex justify-between items-center pb-4 lg:pb-6">
                <h2 className="text-25px md:text-30px lg:text-2xl">{name}</h2>
                <span className="hidden md:block"><Button url={url} text="Visit Website" /></span>
                <Link href={url} className="flex gap-1 md:hidden">Visit Website <MdOutlineArrowOutward className="rh45 mt-1" /></Link>
            </div>

            <Image src={img} alt="benison web app" height={2400} width={3200} 
                className="rounded-xl lg:rounded-3xl w-full h-auto mb-8 lg:mb-16" 
            />

            <div className="lg:flex justify-between">
                <h3 className="text-xl md:text-25px md:pb-2 lg:pb-0 lg:text-30px lg:w-1/4 font-semibold">Project Info</h3>
                <div className="hidden md:flex md:gap-4 lg:gap-16 lg:w-3/4">
                    <div className='md:w-1/4 lg:w-auto'>
                        <div className="flex gap-2 items-center">
                            <FaUser className="text-xl  text-oaf" />
                            <p className="text-xl font-semibold">Client</p>
                        </div>
                        <p className="text-lg text-gray-300">{client}</p>
                    </div>

                    <div className='md:w-1/4 lg:w-auto'>
                        <div className="flex gap-2 items-center">
                            <FaLaptop className="text-xl  text-oaf" />
                            <p className="text-xl font-semibold">Service</p>
                        </div>
                        <p className="text-lg text-gray-300">{service}</p>
                    </div>

                    <div className='md:w-1/4 lg:w-auto'>
                        <div className="flex gap-2 items-center">
                            <FaTools className="text-xl  text-oaf" />
                            <p className="text-xl font-semibold">Tools</p>
                        </div>
                        <p className="text-lg text-gray-300">{tools}</p>
                    </div>

                    <div className='md:w-1/4 lg:w-auto'>
                        <div className="flex gap-2 items-center">
                            <FaCalendar className="text-xl  text-oaf" />
                            <p className="text-xl font-semibold">Year</p>
                        </div>
                        <p className="text-lg text-gray-300">{year}</p>
                    </div>
                </div>

                {/** Mobile view */}
                <div className="mt-6 md:hidden flex gap-4 ">
                    <div className='w-1/2 lg:w-auto'>
                        <div className="flex gap-2 items-center">
                            <FaUser className="text-xl  text-oaf" />
                            <p className="text-lg font-semibold">Client</p>
                        </div>
                        <p className="text-lg text-gray-300">{client}</p>
                    </div>

                    <div className='w-1/2 lg:w-auto'>
                        <div className="flex gap-2 items-center">
                            <FaLaptop className="text-xl  text-oaf" />
                            <p className="text-lg font-semibold">Service</p>
                        </div>
                        <p className="text-lg text-gray-300">{service}</p>
                    </div>
                </div>

                <div className="mt-6 md:hidden flex gap-4 ">
                    <div className='w-1/2 lg:w-auto'>
                        <div className="flex gap-2 items-center">
                            <FaTools className="text-xl  text-oaf" />
                            <p className="text-lg font-semibold">Tools</p>
                        </div>
                        <p className="text-lg text-gray-300">{tools}</p>
                    </div>

                    <div className='w-1/2 lg:w-auto'>
                        <div className="flex gap-2 items-center">
                            <FaCalendar className="text-xl  text-oaf" />
                            <p className="text-lg font-semibold">Year</p>
                        </div>
                        <p className="text-lg text-gray-300">{year}</p>
                    </div>
                </div>
            </div>

            <div className="lg:flex justify-between mt-6 lg:mt-12">
                <h3 className="text-xl md:text-25px md:pb-2 lg:pb-0 lg:text-30px lg:w-1/4 font-semibold">About the Project</h3>
                <div className="lg:w-3/4">
                    <p className="text-lg">{about}</p>
                </div>
            </div>

        </section>
    )
}
export { Separator, Toggle, ImgToggle, Services, Testimony, Experience, Project, ProjectHead }