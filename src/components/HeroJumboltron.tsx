"use client";

import Image from "next/image";
import Waves from "./Waves";
import FloatingWords from "./FloatingWords";

export default function HeroJumbotron() {
  return (
    <section className="relative flex w-full min-h-screen flex-col md:flex-row items-center justify-center overflow-hidden bg-sky-gradient px-4">
      <FloatingWords />
      <div className="z-10 flex flex-col justify-start items-start text-start text-white pt-20 md:pt-0 md:w-1/2 cursor-pointer select-none">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg">
          Hello!
        </h1>
        <p className="mt-4 text-base sm:text-xl md:text-3xl max-w-xl drop-shadow-lg">
          I'm <span className="font-semibold">Shine Wai Tun</span>.
        </p>
        <p className="mt-4 text-xl sm:text-3xl md:text-6xl max-w-xl drop-shadow-lg">
          <span className="font-semibold">Software Engineer</span>.
        </p>
      </div>

      <div className="relative w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] md:w-[500px] md:h-[500px] flex items-center justify-center mb-20 md:mb-0">
        <Image
          src="/my_photo.png"
          alt="Portrait of Lucas"
          fill
          className="object-contain select-none cursor-pointer"
          priority
        />
      </div>
      <Waves />
    </section>
  );
}
