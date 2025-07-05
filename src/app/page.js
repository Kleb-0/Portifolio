"use client";

import Image from "next/image";
import { easeOut, motion } from "framer-motion";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-zinc-100 text-zinc-900 justify-center md:items-start md:pl-20 px-1">
      <motion.p
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: easeOut }}
        className="md:text-5xl sm:text-4xl text-2xl text-center font-black"
      >
        <strong className="font-black">
          Hello,
        </strong>{" "}
        I am
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: easeOut }}
        className="md:text-6xl sm:text-5xl text-3xl text-center"
      >
        Calebe Hillesheim Lamb
      </motion.h1>

      <motion.h3
        initial={{ opacity: 0, x: -500}}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.6, ease: easeOut }}
        className="md:text-4xl sm:text-3xl text-xl text-center"
      >
        Software developer
      </motion.h3>
      <div className="flex gap-3 mt-6">
        <motion.a
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.2, ease: easeOut }}
          target="blank"
          href="https://github.com/Kleb-0"
        >
          <Image
            className="rounded-md hover:scale-110 hover:shadow-violet-500 hover:shadow-md transition-transform duration-350 max-w-[35px] sm:max-w-full"
            src="/github-logo.png"
            alt="github"
            width={50}
            height={50}
          />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8, ease: easeOut }}
          target="blank"
          href="https://www.linkedin.com/in/calebe-hillesheim-lamb-5a86792a5/"
        >
          <Image
            className="rounded-md  hover:scale-110 hover:shadow-violet-500 hover:shadow-md  transition-transform duration-350 max-w-[35px] sm:max-w-full"
            src="/linkedin-logo.png"
            alt="github"
            width={50}
            height={50}
          />
        </motion.a>
      </div>
    </div>
  );
}
