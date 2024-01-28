import { Navbar } from "@/components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className={`${inter.className} flex flex-col items-center p-24`}>
        <span className="text-7xl">Hola Mundo</span>
        {children}
      </main>
    </>
  );
}
