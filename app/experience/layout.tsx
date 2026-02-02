import type { Metadata } from "next";


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
    <div className="text-white">       
        {children}

    </div>
  );
}
