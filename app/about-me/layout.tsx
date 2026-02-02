import type { Metadata } from "next";
//import Menu from '../ui/mainMenu';
import Footer from '../ui/footer';


export const metadata: Metadata = {
  title: "Sam Olasoji | About Me",
  description: "Fullstack developer specializing in building scalable web applications and interactive user interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="text-white">       
        {children}

    </div>
  );
}
