import type { Metadata } from "next";
import { rosario, syne } from './ui/fonts';
import "./globals.css";
import Script from 'next/script';
//import Gtag from './utils/gtag';


export const metadata: Metadata = {
  title: "Sam Olasoji — Frontend Developer",
  description: "I create interactive interfaces people love.",
  keywords: [
    "website design",
    "web development",
    "SEO",
    "digital marketing",
    "e-commerce",
    "responsive design",
    "user experience",
    "branding",
    "content management",
    "website optimization",
    "website maintenance",
    "website hosting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
        <head>
            <meta name="theme-color" content="#0af" />
        
        </head>
       
      <body
        className={` ${syne.className}  text-white antialiased`}
      >

        {children}

      </body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=" />
      <Script id="gtag" strategy="lazyOnload">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '');
            `}
      </Script>

    </html>
    </>
  );
}
