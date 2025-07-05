"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Skill({ skill, skillImg }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -250 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-zinc-700 flex flex-col items-center justify-between p-4 h-[120px] rounded-lg shadow-md hover:scale-110 hover:shadow-violet-600"
    >
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1 }}
      >
        <Image
          className="inline-block"
          width={50}
          height={50}
          src={`/skills/${skillImg}`}
          alt="Skill"
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
        className="text-zinc-100 text-md sm:text-lg md:text-xl mt-auto"
      >
        {skill}
      </motion.p>
    </motion.div>
  );
}
