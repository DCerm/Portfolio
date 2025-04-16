'use client';

import { useState } from "react";
import { MdOutlineCheckCircle, MdOutlineError } from "react-icons/md";


function ContactForm() {

    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    
    };

    async function submit(e) {
        e.preventDefault();

        const scriptURL = 'https://script.google.com/macros/s/AKfycbyemr-uPjsupfoFRTdOcSCG0E1sQeWlkJDAPHunfMYssT8i2cMuRPW879u1lSTiLAKe/exec';
		const form = document.forms['contactForm'];
        const data = new FormData(form);
		fetch(scriptURL, { mode: 'no-cors', method: 'POST', body: data});

        try {
            const response = await fetch('../../api/sendMail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  to: [inputs.email],
                  cc: [''], 
                  bcc: [''],
                  message: {
                     subject: 'Message Received!',
                     text: `Hello ${inputs.name}, Thanks for reaching out, I am going through the details of your project.`,
                     html: `
                     <html>
                        <head></head>
                        <body>
                           <p>Hello ${inputs.name},</p>
                           <p>Thanks for reaching out. We are off to a great start. <br/> I am going through the details of your project and will reach back soon. </p>

                           <p>Prefer a call?</p>
                           </p>
                           
                           <br>
                            <a href=""><button style="background-color: #c5e4f6; color: #000; font-size:18px; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Book a Call</button></a>
                           <br>
                           <p>Regards,<br><b>Sam Olasoji</b></p>
                           <p><i>Frontend Developer with Finesse</i></p>
                        </body>
                     </html>`,
                  },
               }),
            });


            const result = await response.json();
            document.getElementById('success').style.display = 'block';
            document.getElementById('contactForm').style.display = 'none';
            document.getElementById('error').style.display = 'none';
            console.log(result.message); // You can also add route instead of alert  route.push() add you own page.
            
        } catch (error) {
            document.getElementById('error').style.display = 'block';
            document.getElementById('success').style.display = 'none';
            console.error('Error sending email:', error);
        }

        try {
            const response = await fetch('../../api/sendMail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  to: ['osolasoji@gmail.com'],
                  cc: [''], 
                  bcc: [''],
                  message: {
                     subject: 'New Contact Form Submission',
                     text: `Hi Sam, ${inputs.name} just filled a contact form on your website.`,
                     html: `
                     <html>
                        <head></head>
                        <body>
                           <p>Hello Sam,</p>
                           <p>${inputs.name} just filled a contact form on your website.</p>

                           <p>Here are the details:</p>
                           <p>Name: ${inputs.name}</p>
                           <p>Email: ${inputs.email}</p>
                           <p>Phone: ${inputs.phone}</p>
                           <p>Message: ${inputs.message}</p>
                           
                           <br>
                            <a href="mailto:${inputs.email}"><button style="background-color: #F0CEA0; color: #000; font-size:18px; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Send them a mail now</button></a>
                           <br>
                           <p>Regards,<br><b>Sam Olasoji</b></p>
                           <p><i>Frontend Developer with Finesse</i></p>
                        </body>
                     </html>`,
                  },
               }),
            });
        } catch (error) {
            console.error('Error sending site owner email:', error);
        }
    };

    return (

        <>
        <p id="success" className="flex gap-2 items-center text-lg p-2 bg-col text-black rounded-md hidden"><MdOutlineCheckCircle className="text-25px"/> <span>Message Sent! I will be in touch soon.</span></p>
        <p id="error" className="flex gap-2 items-center text-lg p-2 bg-red-100 text-red-800 rounded-md hidden mb-4"><MdOutlineError /> <span>Message sending failed. Please try again.</span></p>

        <form name="contactForm" id="contactForm" className="flex flex-col gap-5" onSubmit={submit}>
            <div className="flex flex-col">
                <label className="font-semibold" htmlFor="name"> Name <span className="text-[#f00] text-xl">*</span> </label>
                <input required autoComplete="name" className="rounded-md p-2.5 bg-transparent border-b border-gray-500 focus:bordercus:border-white autocomplete " name="name" id="name" placeholder="First and Last Name" onChange={handleChange}/>
            </div>

            <div className="flex flex-col">
                <label className="font-semibold" htmlFor="email">Email Address <span className="text-[#f00] text-xl">*</span></label>
                <input required autoComplete="email" className="rounded-md p-2.5 bg-transparent border-b border-gray-500 focus:border focus:border-white autocomplete" name="email" id="email" placeholder="Email Address" type="email" onChange={handleChange}/>
            </div>

            <div className="flex flex-col">
                <label className="font-semibold" htmlFor="phone">Phone Number  <span className="text-[#f00] text-xl"></span></label>
                <input autoComplete="tel" className="rounded-md p-2.5 bg-transparent border-b border-gray-500 focus:border focus:border-white autocomplete" name="phone" id="phone" placeholder="Phone Number" type="tel" onChange={handleChange}/>
            </div>

            <div className="flex flex-col">
                <label className="font-semibold" htmlFor="message">Write a Message <span className="text-[#f00] text-xl">*</span></label>
                <textarea required className="rounded-md p-2.5 bg-transparent border-b border-gray-500 focus:border focus:border-white autocomplete" name="message" id="message" placeholder="Type in your message" type="text" onChange={handleChange}/>
            </div>

            <input type="submit" className="bg-col rounded-md py-2.5 text-black hover:bg-white text-lg font-semibold" />
        </form>
        </>
    )
}


export { ContactForm }