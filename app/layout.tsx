import type { Metadata } from "next";
import { syne } from './ui/fonts';
import Stars from './ui/stars';
import "./globals.css";
import Script from 'next/script';
import Menu from './ui/mainMenu';
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
       
        <body className={` ${syne.className} text-white antialiased`}>
            <div className="h-full w-full fixed z-[-1] top-0 left-0">
                <Stars />
            </div>

            <Menu />
            {children}

        </body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-PS2ELQH4RT" />
        <Script id="gtag" strategy="lazyOnload">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PS2ELQH4RT');
            `}
        </Script>

    </html>
    </>
  );
}
