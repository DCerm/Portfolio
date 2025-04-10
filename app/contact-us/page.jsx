import Link from 'next/link';
import { ContactForm } from '../ui/forms';

export default function Contact() {
    return (
        <>
            <section className="py-6 lg:py-12 bg-golden">
                <h1 className="font-demibold lg:text-[9vw] md:text-[8vw] text-[15vw]">Get in touch</h1>
            </section>
            <section className="pt-0">
                <div className='md:flex mt-12 items-center'>
                    <div className='md:w-1/2 gap-5 flex flex-col gap-5'>

                        <p>Phone: <Link href="tel:+2347030261398" className='underline hover:decoration-wavy underline-offset-8'>+2347030261398 </Link></p>

                        <p>WhatsApp: <Link href="wa.me/2347030261398" className='underline hover:decoration-wavy underline-offset-8'>+2347030261398 </Link></p>

                        <p><Link href="mailto:sales@brilliantlightrealty.com" className='hover:underline hover:decoration-wavy underline-offset-8'>sales@brilliantlightrealty.com </Link></p>

                        <p><Link href="mailto:support@brilliantlightrealty.com" className='hover:underline hover:decoration-wavy underline-offset-8'>support@brilliantlightrealty.com </Link></p>

                        <p><Link href="mailto:investment@brilliantlightrealty.com" className='hover:underline hover:decoration-wavy underline-offset-8'>investment@brilliantlightrealty.com </Link></p>

                        <p>A2 348/385, HFP Eastline Shopping Complex, Abraham Adesanya, Ajah, Lagos State</p>

                    </div>

                    <div className="mt-8 md:mt-0 md:w-1/2 bg-grey p-5 lg:p-12 rounded-xl">
                        <ContactForm />
                    </div>
                </div>
            </section>

        </>
    )
}