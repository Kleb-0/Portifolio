import Link from "next/link";

export default function NavBar() {
  const glowEffect =
    "hover:!text-violet-700 hover:scale-110 hover:shadow-violet-500 hover:shadow-sm rounded-sm !p-1";
  return (
    <div className="h-20 text-zinc-100 bg-zinc-800 flex items-center">
      <nav className="lg:text-xl md:text-lg text-lg w-full flex items-center justify-center ">
        <ul className="flex gap-12 ">
          <li>
            <Link className={glowEffect} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={glowEffect} href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className={glowEffect} href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={glowEffect} href="/skills">
              Skills
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
