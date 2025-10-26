"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Skill({ skill, skillImg }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 250, damping: 15 },
      }}
      className="shadow-md bg-zinc-200 flex flex-col items-center justify-between p-4 h-[120px] rounded-lg"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        <Image
          className="inline-block"
          width={50}
          height={50}
          src={`/skills/${skillImg}`}
          alt={skill}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        className="text-zinc-900 text-md sm:text-lg md:text-xl mt-auto"
      >
        {skill}
      </motion.p>
    </motion.div>
  );
}
