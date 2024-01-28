import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import path from "path";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map((item) => (
        <Link key={item.path} className="mr-2" href={item.path}>
          {item.text}
        </Link>
      ))}
    </nav>
  );
};