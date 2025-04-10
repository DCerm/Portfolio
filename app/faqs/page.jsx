import { Toggle } from '../ui/modules';
import { H2 } from '../ui/headings';
import { Button } from '../ui/buttons';

export default function Faq() {
    return (
        <section className='bg-grey'>
            <div className='lg:flex lg:items-start'>
                <div className='lg:w-1/2 lg:pr-[10%]'>
                    <H2 className='' text='Your burning question, answered.'/>
                </div>

                <div className='lg:w-1/2 lg:text-right pt-5 lg:pt-0 lg:pl-[5%]'>
                    <p className=''>
                        If you have any questions about our services, the real estate market, or anything else
                        that isn&apos;t answered in our FAQs, feel free to reach out to us.
                    </p>

                </div>
            </div>

            <div className='pt-6 lg:pt-36'>
                <Toggle 
                    q= "What services does Brilliant Light Realty offer?"
                    a= "Brilliant Light Realty specializes in helping clients buy, sell, rent, and invest in real estate. Our services include property search, market analysis, title verification, financing assistance, and investment advisory."
                /> 
                <Toggle 
                    q= "How can I find affordable housing options in Nigeria?"
                    a= "We work closely with developers and government initiatives to provide access to affordable housing projects across Nigeria. From Rent-to-Own schemes to flexible payment plans, we’ll help you find a home that fits your budget and lifestyle."
                /> 
                <Toggle 
                    q= "How do I verify the authenticity of a property or land title?"
                    a= "Our team conducts thorough due diligence, including title verification and regulatory compliance checks, to ensure your investment is secure. We also guide you through the process of obtaining necessary documentation to avoid fraud or legal issues."
                /> 
                <Toggle 
                    q= "How do I start investing in real estate with little capital?"
                    a= "Real estate investment doesn’t always require huge capital. Options like fractional ownership, REITs, and small-scale rental properties allow you to start small. We’ll help you explore these opportunities and create a strategy that aligns with your budget."
                /> 
                <Toggle 
                    q= "What should I consider before buying land in Nigeria?"
                    a= "Key factors include location, infrastructure development, title authenticity, and future growth potential. Our team provides expert advice and handles all due diligence to ensure your land purchase is safe and profitable."
                /> 
                <Toggle 
                    q= "Can I rent a property through Brilliant Light Realty?"
                    a= "Absolutely! We offer a wide range of rental options, from luxury apartments to affordable family homes. Whether you need a short-term lease or a long-term rental, we’ll find a property that meets your needs."
                /> 
                <Toggle 
                    q= "How does Brilliant Light Realty support first-time homebuyers?"
                    a= "We understand that buying your first home can be overwhelming. That’s why we offer step-by-step guidance, from property search and financing to legal processes and closing. Our goal is to make your homeownership journey smooth and stress-free."
                /> 
                <Toggle 
                    q= "Why should I choose Brilliant Light Realty over other agencies?"
                    a= "At Brilliant Light Realty, we prioritize transparency, professionalism, and personalized service. With years of experience, a deep understanding of the Nigerian market, and a commitment to your goals, we’re your trusted partner for all things real estate. Let us guideyou every step of the way—your real estate dreams are within reach!"
                />    
            </div> 

            <div className='mt-8 flex flex-col md:flex-row gap-3 md:gap-8 justify-center '>
                <Button url="/properties" text= 'Explore Properties'
                    className='' 
                /> 
                <Button url="/contact-us" text="Contact Us" 
                    className='bg-golden hover:bg-wine hover:text-white' 
                />      
            </div>       
                
        </section>
    )
}