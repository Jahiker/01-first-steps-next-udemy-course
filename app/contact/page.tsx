import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Contact us for more information",
  keywords: ["Contact Page", 'Jahiker', 'Customer']
};

export default function Contac() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">Contact Page</span>
    </main>
  );
};
