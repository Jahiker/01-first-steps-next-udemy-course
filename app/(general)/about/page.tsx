import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "All About this Page",
  keywords: ["About Page", "Jahiker", "Information"],
};

export default function About() {
  return <span className="text-5xl">About Page</span>;
}
