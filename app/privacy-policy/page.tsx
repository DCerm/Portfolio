import Link from 'next/link';


export default function Home() {

  return (
    <>
      
      {/*    PRIVACY POLICY */}

      <section className=" px-5 lg:px-20p py-24 lg:py-100 rounded-xl">

      <div className="">
        <h2 className="text-30px lg:text-2xl font-semibold capitalize  text-blue">privacy policy</h2>
        <p className='pb-8 lg:pb-12'>Effective from: February 1, 2025.</p>

        <p className=' font-normal'>Brilliant Light Realty is committed to protecting the privacy of our clients and website users. This privacy policy outlines how we collect, use, and safeguard your personal information.</p>

        <h4 className='text-25px lg:text-30px font-semibold pt-5'>Information We Collect</h4>
        <p className=''>
          We may collect the following types of information:<br/><br/>

          <strong className=''>Personal Information:</strong> Name, email address, phone number, address, and other details provided during homecare scheduling.<br/><br/>

          <strong className=''>Health Information:</strong> Medical history or care needs shared with us to develop personalized care plans.<br/><br/>

          <strong className=''>Technical Information:</strong> IP address, browser type, and other data collected through cookies when you visit our website.<br/><br/>
        </p>

        <h4 className='text-25px lg:text-30px font-semibold pt-5'>How We Use Your Information</h4>

        <p className=' font-normal'>Your information is used for the following purposes:</p>

        <ol className='list-decimal py-2.5 pl-5'>
          <li className='text-lg'>To provide and manage our services.</li>

          <li className='text-lg'>To respond to enquiries and schedule consultations.</li>

          <li className='text-lg'>To improve our website and services.</li>

          <li className='text-lg'> To comply with legal obligations or protect our legal rights.</li>
        </ol>

        <h4 className='text-25px lg:text-30px font-semibold pt-5'>How We Share Your Information</h4>

        <p className=''>We do not sell or share your personal information with third parties, except as necessary to:

        <ol className='list-decimal py-2.5 pl-5'>
          <li className='text-lg'>Comply with legal requirements.</li>  

          <li className='text-lg'>Facilitate service delivery through trusted partners.</li>

          <li className='text-lg'>Protect the safety and rights of our clients and staff.</li>
        </ol>
        </p>

        <h4 className='text-25px lg:text-30px font-semibold pt-5'>Data Security</h4>

        <p className=''>We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure. 
          These measures include encrypted data storage and secure server access.
        </p>

        <h4 className='text-25px lg:text-30px font-semibold pt-5'>Your Rights</h4>

        <p className=''>You have the right to:</p>

        <ol className='list-decimal py-2.5 pl-5'>
          <li className='text-lg'>Access and update your personal information.</li>
        
          <li className='text-lg'>Request the deletion of your data.</li>

          <li className='text-lg'>Opt out of marketing communications.</li>
        </ol>

        <p className=''>To exercise these rights, please <Link href="/contact-us" className='underline'>contact us.</Link></p>

        <h4 className='text-25px lg:text-30px font-semibold pt-5'>Cookies and Tracking Technologies</h4>

        <p className=''>Our website uses cookies to enhance the user experience and analyze website traffic. You can manage cookie preferences through your browser settings.</p>

        <h4 className='text-25px lg:text-30px font-semibold pt-5'>Changes to This Privacy Policy</h4>

        <p className=''>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>

        <h4 className='text-25px lg:text-30px font-semibold pt-5'>Contact Us</h4>

        <p className=''>If you have any questions or concerns about this privacy policy, please contact us at: </p>

        <div className='mt-5 gap-5 flex flex-col gap-5'>

            <p>Phone: <Link href="tel:+2347030261398" className='underline hover:decoration-wavy underline-offset-8'>+2347030261398 </Link></p>

            <p>WhatsApp: <Link href="wa.me/2347030261398" className='underline hover:decoration-wavy underline-offset-8'>+2347030261398 </Link></p>

            <p><Link href="mailto:sales@brilliantlightrealty.com" className='hover:underline hover:decoration-wavy underline-offset-8'>sales@brilliantlightrealty.com </Link></p>

            <p><Link href="mailto:support@brilliantlightrealty.com" className='hover:underline hover:decoration-wavy underline-offset-8'>support@brilliantlightrealty.com </Link></p>

            <p><Link href="mailto:investment@brilliantlightrealty.com" className='hover:underline hover:decoration-wavy underline-offset-8'>investment@brilliantlightrealty.com </Link></p>

            <p>A2 348/385, HFP Eastline Shopping Complex, Abraham Adesanya, Ajah, Lagos State</p>

        </div>
        </div>
      </section>

      
      {/* FOOTER */}
      
    </>
  );
}
