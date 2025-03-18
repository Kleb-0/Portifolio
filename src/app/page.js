"use client";

import Image from "next/image";
import { easeOut, motion } from "framer-motion";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen !pl-20 bg-zinc-900 text-zinc-100 justify-center">
      <motion.p
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: easeOut }}
        className="text-5xl w-fit"
      >
        <strong className="bg-gradient-to-r from-violet-500 to-violet-300 bg-clip-text text-transparent">
          Hello,
        </strong>{" "}
        I am
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: easeOut }}
        className="text-6xl w-fit"
      >
        Calebe Hillesheim Lamb
      </motion.h1>

      <motion.h3
        initial={{ opacity: 0, x: -500}}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.6, ease: easeOut }}
        className="text-4xl w-fit bg-gradient-to-r from-violet-500 to-violet-300 bg-clip-text text-transparent"
      >
        Frontend Developer
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
            className="rounded-md hover:scale-110 hover:shadow-violet-500 hover:shadow-md  transition-transform duration-350"
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
            className="rounded-md  hover:scale-110 hover:shadow-violet-500 hover:shadow-md  transition-transform duration-350"
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
