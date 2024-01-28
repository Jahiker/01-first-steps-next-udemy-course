import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "Know all our prices",
  keywords: ["Pricing Page", "Jahiker", "Price"],
};

export default function Pricing() {
  return <span className="text-5xl">Pricing Page</span>;
}
