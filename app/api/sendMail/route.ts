
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const { to, cc, bcc, message } = await req.json();

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_SERVER_HOST,
            port: 587,
            secure: false, // Set to true for port 465, otherwise false
            auth: {
                user: process.env.SMTP_SERVER_USERNAME,
                pass: process.env.SMTP_SERVER_PASSWORD,
            },
        });

        const info = await transporter.sendMail({
            from: process.env.SITE_MAIL_RECIEVER,
            to,                                    
            cc,                                    
            bcc,                                   
            subject: message.subject || 'No Subject', 
            text: message.text,        
            html: message.html,                  
        });

        return NextResponse.json({ message: 'Email sent successfully', info }, { status: 200 });
    } catch (error) {
        let emessage
        if (error instanceof Error) {
            emessage = error.message
        }
        console.error('Error sending email:', emessage);
        return NextResponse.json({ message: 'Failed to send email', error: emessage }, { status: 500 });
    }
}

/*
const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

const transporter = nodemailer.createTransport({
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: false,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export async function Transporter () {
  return transporter;
}

export async function sendMail({
    //email,
    //sendTo,
    subject,
    text,
    html,
  }: {
    email: string;
    sendTo?: string;
    subject: string;
    text: string;
    html?: string;
  }) {
    
    const info = await transporter.sendMail({
      from: SITE_MAIL_RECIEVER,
      to: 'webtest898@gmail.com',
      subject: subject,
      text: text,
      html: html ? html : '',
    });
    console.log('Message Sent', info.messageId);
    console.log('Mail sent to', SITE_MAIL_RECIEVER);
    return info;
}
*/
