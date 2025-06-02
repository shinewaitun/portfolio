"use client";

import Image from "next/image";
import Waves from "./Waves";
import FloatingWords from "./FloatingWords";

export default function HeroJumbotron() {
  return (
    <section className="relative flex w-full min-h-screen flex-col md:flex-row items-center justify-center overflow-hidden bg-sky-gradient px-4">
      <FloatingWords />
      <div className="z-10 flex flex-col justify-start items-start text-start text-white md:w-1/2 cursor-pointer select-none">
        <h1 className="text-4xl md:text-6xl text-start font-bold drop-shadow-lg">
          Hello!
        </h1>
        <p className="mt-4 text-lg md:text-3xl max-w-xl text-start drop-shadow-lg">
          I'm <span className="font-semibold">Lucas</span>.
        </p>
        <p className="mt-4 text-lg md:text-6xl max-w-xl text-start drop-shadow-lg">
          <span className="font-semibold">Software Engineer</span>.
        </p>
      </div>

      <div className="relative w-[450px] h-[600px] md:w-[500px] md:h-[500px] flex items-center justify-center">
        <Image
          src="/my_photo.png"
          alt="Portrait of [Your Name]"
          fill
          className="object-contain"
          priority
        />
      </div>
      <Waves />
    </section>
  );
}
