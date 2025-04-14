import type { Metadata } from "next";
import Menu from '../ui/mainMenu';
import Footer from '../ui/footer';


export const metadata: Metadata = {
  title: "Sam Olasoji | About Me",
  description: "Frontend developer creating interactive interfaces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=' text-white antialiased'
      >


        {children}

        <Footer />
      </body>
    </html>
  );
}
