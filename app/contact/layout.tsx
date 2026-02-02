import type { Metadata } from "next";
//import Menu from '../ui/mainMenu';
import Footer from '../ui/footer';


export const metadata: Metadata = {
  title: "Contact Sam Olasoji",
  description: "Say hi or ask a question",
  openGraph: {
    title: "Contact Sam Olasoji",
    description: "Say hi or ask a question",
    url: "https://samolasoji.vercel.app/contact",
    siteName: "Sam Olasoji",
  },
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
