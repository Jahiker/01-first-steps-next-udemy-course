"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LinkItem } from "..";

import style from "./ActiveLink.module.css";

const ActiveLink = ({ path, text }: LinkItem) => {
  const pathName = usePathname();
  
  return (
    <Link className={`${style.link} ${pathName === path ? style["active-link"] : ''}`} href={path}>
      {text}
    </Link>
  );
};

export default ActiveLink;
