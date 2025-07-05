"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [currentPage, setCurrentPage] = useState([0]);
  const glowEffect =
    "hover:text-violet-600 hover:scale-110 hover:shadow-violet-500 hover:shadow-sm rounded-sm p-1";
  const navItems = ["Home", "Projects", "About", "Skills"];

  return (
    <div className="h-20 text-zinc-100 bg-zinc-800 flex items-center">
      <nav className="md:text-lg text-md w-full flex items-center justify-center ">
        <ul className="flex gap-5 sm:gap-12 ">
          <li>
            <Link onClick={setCurrentPage[0]} className={glowEffect} href="/">
              {navItems[0]}
            </Link>
          </li>
          <li>
            <Link
              onClick={setCurrentPage[1]}
              className={glowEffect}
              href="/projects"
            >
              {navItems[1]}
            </Link>
          </li>
          <li>
            <Link
              onClick={setCurrentPage[2]}
              className={glowEffect}
              href="/about"
            >
              {navItems[2]}
            </Link>
          </li>
          <li>
            <Link
              onClick={setCurrentPage[3]}
              className={glowEffect}
              href="/skills"
            >
              {navItems[3]}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
