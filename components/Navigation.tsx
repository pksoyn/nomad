"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
//import styles from "../styles/Navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  return (
    <ul>
      <li>
        <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
      </li>
      <li>
        <Link href="/about-us">About Us</Link>
        {path === "/about-us" ? "🔥" : ""}
      </li>
    </ul>
  );
}
