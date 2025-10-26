"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Project({ image, name, github, deploy }) {
  return (
    <div>
      <motion.div
        className="md:w-sm w-[200px] bg-zinc-200 p-8 rounded-lg sm:rounded-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl flex justify-center mb-4 font-semibold text-zinc-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
        >
          {name}
        </motion.h1>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
        >
          <Image
            className="rounded-lg"
            src={image}
            alt="Project Image"
            width={400}
            height={400}
            layout="intrinsic"
          />
        </motion.div>

        <div className="flex justify-center gap-3 sm:gap-6 mt-3.5 sm:mt-5">
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 250, damping: 15 }}
          >
            <Image
              className="rounded-md hover:scale-110 max-w-4/5 sm:max-w-full"
              src="/github-logo.png"
              alt="Github icon"
              width={50}
              height={50}
            />
          </motion.a>

          <motion.a
            href={deploy}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 250, damping: 15 }}
          >
            <Image
              className="rounded-md hover:scale-110 max-w-4/5 sm:max-w-full"
              src="/vercel-logo.png"
              alt="Vercel icon"
              width={50}
              height={50}
            />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
