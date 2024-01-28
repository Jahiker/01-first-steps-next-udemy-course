import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Contact us for more information",
  keywords: ["Contact Page", "Jahiker", "Customer"],
};

export default function Contac() {
  return <span className="text-5xl">Contact Page</span>;
}
