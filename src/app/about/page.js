"use client"

import Image from "next/image";
import { easeIn, easeOut, motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 grid gap-8 p-16 md:grid-cols-[auto_1fr]">
      <motion.div
        initial={{ opacity: 0, y: -50}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: easeOut }}
      >
        <Image
          className="rounded-2xl justify-self-center"
          src="/professional-photo.png"
          alt="Calebe Hillesheim Lamb photo"
          width={300}
          height={300}
        />
      </motion.div>
      <div className="flex flex-col">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: easeOut }}
          className="text-4xl font-bold underline decoration-2 pb-1">
          Hi! My name is Calebe
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: easeOut }}
          className="text-2xl mt-4">
          I discovered programming when I was 14, in September 2024. Since then,
          I have dedicated myself to Frontend development, taking courses on
          Alura and building projects to solidify my acquired knowledge. I am
          passionate about solving problems and seeing my evolution in real
          time. My goal is to become a skilled developer and live in Europe,
          especially in Switzerland. To make this happen, I am constantly
          improving my skills, mastering English, learning German, exploring new
          technologies, and building real-world projects. I believe that with
          dedication and persistence, I can turn my dreams into reality.
        </motion.p>
      </div>
    </div>
  );
}
