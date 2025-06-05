import { Bolt, DatabaseZap, Forward, Laptop } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="relative min-w-screen flex flex-col md:flex-row items-start justify-center overflow-hidden">
      <div className="container flex flex-col gap-8 justify-center items-center text-start mx-auto px-4 py-8 relative z-10">
        <div className="flex w-fit bubble-text rounded-2xl justify-start items-center gap-5 py-2 px-4">
          <Laptop color="white" size={50} />
          <p className="text-xl sm:text-2xl md:text-3xl text-white select-none cursor-pointer">
            Full Stack Development
          </p>
        </div>
        <div className="flex bubble-text rounded-2xl justify-start items-center gap-5 py-2 px-4">
          <Bolt color="white" size={50} />
          <p className="text-xl sm:text-2xl md:text-3xl text-white select-none cursor-pointer">
            Software Engineering
          </p>
        </div>
        <div className="flex bubble-text rounded-2xl justify-start items-center gap-5 py-2 px-4">
          <DatabaseZap color="white" size={50} />
          <p className="text-xl sm:text-2xl md:text-3xl text-white select-none cursor-pointer">
            Database Administration
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-start mb-6 text-white">
          About me
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-start text-white font-medium leading-relaxed">
          Hey there! I'm someone who loves creating things — whether it’s a
          smooth user interface, a clever piece of code, or a new side project
          just for fun. I believe technology should feel intuitive, design
          should tell a story, and good coffee makes everything better. I build
          with intention and curiosity, always learning, always iterating.
        </p>
        <button
          onClick={() => window.open("/Shine Wai Tun's Resume_.pdf", "_blank")}
          className="flex justify-center items-center gap-2 cursor-pointer bubble-text text-white px-4 py-2 mt-3 rounded-xl"
        >
          Know me more
          <Forward />
        </button>
      </div>
    </div>
  );
}
