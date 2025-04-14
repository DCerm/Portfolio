import type { Metadata } from "next";
//import Menu from '../ui/mainMenu';
import Footer from '../ui/footer';


export const metadata: Metadata = {
  title: "Sam Olasoji | Frontend Projects",
  description: "Frontend development projects ",
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
