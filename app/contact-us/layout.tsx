import type { Metadata } from "next";
import Menu from '../ui/mainMenu';
import Footer from '../ui/footer';


export const metadata: Metadata = {
  title: "Affordable, verified real estate in Lekki, Lagos",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=' text-black antialiased'
      >

        <Menu />

        {children}

        <Footer />
      </body>
    </html>
  );
}
