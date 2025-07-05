"use client";

import Skill from "@/components/skill";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="bg-zinc-900 min-h-screen p-5">
      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.8}}
        className="text-zinc-100 text-3xl text-center my-10"
      >
        My Technical skills
      </motion.h1>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <Skill skill="HTML" skillImg="html.png" />
        <Skill skill="CSS" skillImg="css.png" />
        <Skill skill="Javascript" skillImg="javascript.png" />
        <Skill skill="Tailwind CSS" skillImg="tailwind-css.png" />
        <Skill skill="Bootstrap" skillImg="bootstrap.png" />
        <Skill skill="Next" skillImg="next.png" />
        <Skill skill="React" skillImg="react.png" />
        <Skill skill="Git" skillImg="git.png" />
        <Skill skill="Vercel" skillImg="vercel.svg" />
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.8}}
        className="text-zinc-100 text-4xl text-center my-10"
      >
        Studying
      </motion.h1>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <Skill skill="Java" skillImg="java.png" />
        <Skill skill="Go" skillImg="GoLang.png" />
        <Skill skill="Linux" skillImg="linux.webp" />
      </div>
    </div>
  );
}
