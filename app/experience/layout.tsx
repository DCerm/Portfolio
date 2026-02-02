import type { Metadata } from "next";
//import Menu from '../ui/mainMenu';
import Footer from '../ui/footer';


export const metadata: Metadata = {
  title: "Sam Olasoji | My fullstack development journey",
  description: "Fullstack development journey of Sam Olasoji, a senior fullstack developer specializing in building scalable web applications and interactive user interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">        
      <body
        className='bg-dark text-white antialiased'
      >

        {children}

        <Footer />
      </body>
    </html>
  );
}
