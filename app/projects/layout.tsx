import type { Metadata } from "next";


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
    <div className="text-white">       
        {children}

    </div>
  );
}
