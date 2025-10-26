"use client";

import Skill from "@/components/skill";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="bg-zinc-100 min-h-screen p-5">
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-zinc-900 text-3xl text-center my-10"
      >
        My Technical Skills
      </motion.h1>

      <motion.div
        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      >
        <Skill skill="HTML" skillImg="html.png" />
        <Skill skill="CSS" skillImg="css.png" />
        <Skill skill="Javascript" skillImg="javascript.png" />
        <Skill skill="Tailwind CSS" skillImg="tailwind-css.png" />
        <Skill skill="Bootstrap" skillImg="bootstrap.png" />
        <Skill skill="Next" skillImg="next.png" />
        <Skill skill="React" skillImg="react.png" />
        <Skill skill="Git" skillImg="git.png" />
        <Skill skill="Vercel" skillImg="vercel.svg" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="text-zinc-900 text-3xl text-center my-10"
      >
        Studying
      </motion.h1>

      <motion.div
        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
      >
        <Skill skill="Java" skillImg="java.png" />
        <Skill skill="Go" skillImg="GoLang.png" />
        <Skill skill="Linux" skillImg="linux.webp" />
      </motion.div>
    </div>
  );
}
