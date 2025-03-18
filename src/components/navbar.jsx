"use client";

import Link from "next/link";

export default function NavBar() {
  const glowEffect =
    "hover:text-violet-600 hover:scale-110 hover:shadow-violet-500 hover:shadow-sm rounded-sm !p-1";
  const navItems = ["Home", "Projects", "About", "Skills"];
  

  return (
    <div className="h-20 text-zinc-100 bg-zinc-800 flex items-center">
      <nav className="lg:text-xl md:text-lg text-lg w-full flex items-center justify-center ">
        <ul className="flex gap-12 ">
          <li>
            <Link className={glowEffect} href="/">
              {navItems[0]}
            </Link>
          </li>
          <li>
            <Link className={glowEffect} href="/projects">
              {navItems[1]}
            </Link>
          </li>
          <li>
            <Link className={glowEffect} href="/about">
              {navItems[2]}
            </Link>
          </li>
          <li>
            <Link className={glowEffect} href="/skills">
              {navItems[3]}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
