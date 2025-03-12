import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 grid gap-8 p-16 md:grid-cols-[auto_1fr]">
      <Image
        className="rounded-2xl justify-self-center"
        src="/professional-photo.png"
        alt="Calebe Hillesheim Lamb photo"
        width={300}
        height={300}
      />

      <div className="flex flex-col">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-700 to-violet-300 bg-clip-text text-transparent pb-1">Hi! My name is Calebe</h1>
        <p className="text-2xl mt-4 font-semibold">
          I discovered programming when I was 14, in September 2024. Since then,
          I have dedicated myself to Frontend development, taking courses on
          Alura and building projects to solidify my acquired knowledge. I am
          passionate about solving problems and seeing my evolution in real
          time. My goal is to become a skilled developer and live in Europe,
          especially in Switzerland. To make this happen, I am constantly
          improving my skills, mastering English, learning German, exploring new
          technologies, and building real-world projects. I believe that with
          dedication and persistence, I can turn my dreams into reality.
        </p>
      </div>
    </div>
  );
}
