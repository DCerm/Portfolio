'use client';

import { useState } from "react";
import { MdOutlineArrowOutward, MdOutlineCheckCircle, MdOutlineError } from "react-icons/md";


function ContactForm() {

    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    
    };

    async function submit(e) {
        e.preventDefault();

        const scriptURL = 'https://script.google.com/macros/s/AKfycbxbZl_yDDn3UeTgn6uiOhb-GzNdaNP9FAyWrg9MiuXV_vMO4BT7wPZ262dWKnlqPKQF/exec';
		const form = document.forms['contactForm'];
        const data = new FormData(form);
		fetch(scriptURL, { mode: 'no-cors', method: 'POST', body: data});
        console.log('Form submitted', inputs.email, inputs.name);

        try {
            const response = await fetch('../../api/sendMail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  to: [inputs.email],
                  cc: [''], 
                  bcc: [''],
                  message: {
                     subject: 'We have gotten your message',
                     text: `Hello ${inputs.name}, Thanks for reaching out. We have gotten your message and will be in touch with you soon.`,
                     html: `
                     <html>
                        <head></head>
                        <body>
                           <p>Hello ${inputs.name},</p>
                           <p>Thanks for reaching out. We have gotten your message and will be in touch with you soon. <br> 
                           Keep an eye on your email for our response. </p>

                           <p>Can't wait? Click the button below to start a chat.</p>
                           </p>
                           
                           <br>
                            <a href="https://wa.me/2347030261398"><button style="background-color: #F0CEA0; color: #000; font-size:18px; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Start a chat</button></a>
                           <br>
                           <p>Regards,<br><b>Abidoye Damilola</b></p>
                           <p><i>CEO, Brilliant Light Realty</i></p>
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
                  to: ['webtest898@gmail.com, brilliantlightrealty21@gmail.com'],
                  cc: [''], 
                  bcc: [''],
                  message: {
                     subject: 'New Contact Form Submission',
                     text: `Hi Damilola, ${inputs.name} just filled a contact form on your website.`,
                     html: `
                     <html>
                        <head></head>
                        <body>
                           <p>Hello Damilola,</p>
                           <p>${inputs.name} just filled a contact form on your website.</p>

                           <p>Here are the details:</p>
                           <p>Name: ${inputs.name}</p>
                           <p>Email: ${inputs.email}</p>
                           <p>Phone: ${inputs.phone}</p>
                           <p>Message: ${inputs.message}</p>
                           
                           <br>
                            <a href="mailto:${inputs.email}"><button style="background-color: #F0CEA0; color: #000; font-size:18px; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Send them a mail now</button></a>
                           <br>
                           <p>Regards,<br><b>Abidoye Damilola</b></p>
                           <p><i>CEO, Brilliant Light Realty</i></p>
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
        <p id="success" className="flex gap-2 items-center text-lg p-2 bg-green-100 text-green-800 rounded-md hidden"><MdOutlineCheckCircle className="text-25px"/> <span>Message Sent! We will be in touch soon.</span></p>
        <p id="error" className="flex gap-2 items-center text-lg p-2 bg-red-100 text-red-800 rounded-md hidden mb-4"><MdOutlineError /> <span>Message sending failed. Please try again.</span></p>

        <form name="contactForm" id="contactForm" className="flex flex-col gap-5" onSubmit={submit}>
            <div className="flex flex-col">
                <label className="font-semibold" htmlFor="name">Full Name <span className="text-[#f00] text-xl">*</span> </label>
                <input required autoComplete="name" className="rounded-md p-2.5 focus:border focus:border-gold autocomplete focus:border-sm focus:bg-[#eee] " name="name" id="name" placeholder="First and Last Name" onChange={handleChange}/>
            </div>

            <div className="flex flex-col">
                <label className="font-semibold" htmlFor="email">Email Address <span className="text-[#f00] text-xl">*</span></label>
                <input required autoComplete="email" className="rounded-md p-2.5 focus:border-sm focus:border-gold autocomplete focus:bg-[#eee]" name="email" id="email" placeholder="Email Address" type="email" onChange={handleChange}/>
            </div>

            <div className="flex flex-col">
                <label className="font-semibold" htmlFor="phone">Phone Number  <span className="text-[#f00] text-xl">*</span></label>
                <input required autoComplete="tel" className="rounded-md p-2.5 focus:border-sm focus:border-gold autocomplete focus:bg-[#eee]" name="phone" id="phone" placeholder="Phone Number" type="tel" onChange={handleChange}/>
            </div>

            <div className="flex flex-col">
                <label className="font-semibold" htmlFor="message">Message <span className="text-[#f00] text-xl">*</span></label>
                <textarea required className="rounded-md p-2.5 focus:border-sm focus:border-gold autocomplete focus:bg-[#eee]" name="message" id="message" placeholder="Type in your message" type="text" onChange={handleChange}/>
            </div>

            <input type="submit" className="bg-gold rounded-md py-2.5 text-black hover:bg-golden font-semibold" />
        </form>
        </>
    )
}

function FooterForm() {

    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    
    };

    async function submit(e) {
        e.preventDefault();

        const scriptURL = 'https://script.google.com/macros/s/AKfycbxbZl_yDDn3UeTgn6uiOhb-GzNdaNP9FAyWrg9MiuXV_vMO4BT7wPZ262dWKnlqPKQF/exec';
		const form = document.forms['subForm'];
        const data = new FormData(form);
		fetch(scriptURL, { mode: 'no-cors', method: 'POST', body: data});
        console.log('Form submitted', inputs.mail);

        try {
            const response = await fetch('../../api/sendMail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  to: ['webtest898@gmail.com'],
                  cc: [''], 
                  bcc: [''],
                  message: {
                     subject: 'Someone just subscribed to Brilliant Light Realty&apos;s Newsletter',
                     text: `Hello ${inputs.mail}just subscribed.`,
                     html: `
                     <html>
                        <head></head>
                        <body>
                           <p>Hello ${inputs.mail} just subscribed to Brilliant Light Realty&apos;s Newsletter.</p>
                           
                        </body>
                     </html>`,
                  },
               }),
            });


            const result = await response.json();
            document.getElementById('subsuccess').style.display = 'block';
            document.getElementById('subForm').style.display = 'none';
            document.getElementById('suberror').style.display = 'none';
            console.log(result.message); // You can also add route instead of alert  route.push() add you own page.
            
        } catch (error) {
            document.getElementById('suberror').style.display = 'block';
            document.getElementById('subsuccess').style.display = 'none';
            console.error('Error sending email:', error);
        }
    }

    return (
        <>
        <p id="subsuccess" className="flex gap-2 items-center text-lg p-2 bg-green-100 text-green-800 rounded-md hidden"><MdOutlineCheckCircle className="text-25px"/> <span>Subscribed successfully.</span></p>
        <p id="suberror" className="flex gap-2 items-center text-lg p-2 bg-red-100 text-red-800 rounded-md hidden mb-4"><MdOutlineError /> <span>Something went wrong. Please try again.</span></p>

        <form className="text-lg bg-[#f1f1f133] rounded-full" name="subForm" id="subForm" onSubmit={submit}>
            <div className="backdrop-blur-sm border-none p-1 rounded-full opacity-100 flex">
                <input type="email" 
                    className=' text-white font-semibold outline-none bg-transparent autofill:bg-none py-1.5 px-5 min-w-[300px] placeholder:text-[#ddd]' 
                    id="mail" name="mail" placeholder='Your email address' required autoComplete="email" onChange={handleChange}
                />
                <button className='rounded-full bg-gold hover:bg-golden p-2.5 text-black '><MdOutlineArrowOutward className='rh45 ' /></button>
            </div>
        </form>
        </>
    )
}

function RegistrationForm() {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    
    };

    async function submit(e) {
        e.preventDefault();

        const scriptURL = 'https://script.google.com/macros/s/AKfycbyHon1iSu58ke4CzUlW87EXk65YM23CoD2V0AnbwhhInkQdmRU87wCdvcIJgvehFVqW/exec';
		const form = document.forms['regForm'];
        const data = new FormData(form);
		fetch(scriptURL, { mode: 'no-cors', method: 'POST', body: data});
        console.log('Form submitted', inputs.Email, inputs.First_Name);

        try {
            const response = await fetch('../../api/sendMail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  to: [inputs.Email],
                  cc: [''], 
                  bcc: [''],
                  message: {
                     subject: 'Thanks for Registering',
                     text: `Hello ${inputs.First_Name}, Reserve your spot here.`,
                     html: `
                     <html>
                        <head></head>
                        <body>
                           <p>Hello ${inputs.First_Name},</p>
                           <p>Your registeration has been received. Click the button below to reserve your spot and get the meeting link.</p>
                           
                           <br>
                            <a href="https://calendar.app.google/t7MjVvuos7z8Bmxz9"><button style="background-color: #F0CEA0; color: #000; font-size:18px; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Reserve Spot</button></a>
                           <br>
                           <p>Regards,<br><b>Abidoye Damilola</b></p>
                           <p><i>CEO, Brilliant Light Realty</i></p>
                        </body>
                     </html>`,
                  },
               }),
            });


            const result = await response.json();
            document.getElementById('success').style.display = 'block';
            document.getElementById('regForm').style.display = 'none';
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
                  to: ['webtest898@gmail.com, brilliantlightrealty21@gmail.com'],
                  cc: [''], 
                  bcc: [''],
                  message: {
                     subject: 'New Registration',
                     text: `Hi Damilola, ${inputs.First_Name} just registered for your webinar.`,
                     html: `
                     <html>
                        <head></head>
                        <body>
                           <p>Hello Damilola,</p>
                           <p>${inputs.First_Name} has registered to be a part of your upcoming webinar. Here is the Google Meet link that has been sent to them ahead of the webinar.</p>
                           
                           <br>
                            <a href="meet.google.com/tsh-rvwj-ctq"><button style="background-color: #F0CEA0; color: #000; font-size:18px; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Meeting Link</button></a>
                           <br>
                           <p>Regards,<br><b>Abidoye Damilola</b></p>
                           <p><i>CEO, Brilliant Light Realty</i></p>
                        </body>
                     </html>`,
                  },
               }),
            });
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };


    return (
        
        <>
        <p id="success" className="flex gap-2 items-center text-lg p-2 bg-green-100 text-green-800 rounded-md hidden"><MdOutlineCheckCircle className="text-25px"/> <span>Registration Successful. Check your mail for an invite.</span></p>
        <p id="error" className="flex gap-2 items-center text-lg p-2 bg-red-100 text-red-800 rounded-md hidden mb-4"><MdOutlineError /> <span>Registration Failed. Please try again.</span></p>

        <form className="placeholder-black" name="regForm" onSubmit={submit} id="regForm">
            <div className="flex gap-2">
                <input type="text" className="rounded-md p-2.5 w-1/2 focus:border focus:border-gold autocomplete focus:border-sm focus:bg-[#eee] " name="First_Name" id="First_Name" placeholder="First Name" onChange={handleChange} required/>
                <input type="text" className="rounded-md p-2.5 w-1/2 focus:border focus:border-gold autocomplete focus:border-sm focus:bg-[#eee] " name="Last_Name" id="Last_Name" placeholder="Last Name" onChange={handleChange}/>
            </div>

            <div className="flex gap-2 mt-4">
                <input type="email" className="rounded-md p-2.5 w-full focus:border focus:border-gold autocomplete focus:border-sm focus:bg-[#eee] " name="Email" id="Email" placeholder="Email Address" onChange={handleChange} required/>
                <input type="tel" className="rounded-md p-2.5 w-full focus:border focus:border-gold autocomplete focus:border-sm focus:bg-[#eee] " name="Phone" id="Phone" placeholder="Phone Number" onChange={handleChange}/>
            </div>

            <button type="submit" className="bg-gold rounded-md py-2.5 text-black hover:bg-golden font-semibold w-full mt-4">Register</button>
        </form>
        </>
    )
}

export { ContactForm, FooterForm, RegistrationForm }