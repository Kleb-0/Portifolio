"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    setShowText(true);

  }, []);
  return (
    <div className="flex flex-col min-h-screen !pl-20 bg-zinc-900 text-zinc-100 justify-center">
      <p className="text-4xl w-fit">
        <strong className="bg-gradient-to-r from-violet-500 to-violet-300 bg-clip-text text-transparent">
          Hello,
        </strong>{" "}
        I am
      </p>
      {showText ? (
        <TypeAnimation
          sequence={[
            "Calebe Hillesheim Lamb",
            1700,
            "Frontend Developer",
            1700,
            "Calebe Hillesheim Lamb",
            1700,]}
          wrapper="h1"
          speed={50}
          className="!text-5xl w-fit"
        />
      ) : (
        <h1 className="!text-5xl w-fit">C</h1>
      )}
      <h3 className="!text-3xl w-fit bg-gradient-to-r from-violet-500 to-violet-300 bg-clip-text text-transparent">
        Software Engineer
      </h3>
      <div className="flex gap-3 !mt-6">
        <a target="blank" href="https://github.com/Kleb-0">
          <Image
            className="rounded-md hover:scale-110 hover:shadow-violet-500 hover:shadow-md  transition-transform duration-350"
            src="/github-logo.png"
            alt="github"
            width={50}
            height={50}
          />
        </a>
        <a target="blank" href="https://www.linkedin.com/feed/">
          <Image
            className="rounded-md  hover:scale-110 hover:shadow-violet-500 hover:shadow-md  transition-transform duration-350"
            src="/linkedin-logo.png"
            alt="github"
            width={50}
            height={50}
          />
        </a>
      </div>
    </div>
  );
}
