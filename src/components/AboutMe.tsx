import { Bolt, DatabaseZap, Laptop } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="relative min-w-screen flex flex-col md:flex-row items-start justify-center overflow-hidden">
      <div className="container flex flex-col gap-8 justify-center items-center text-start mx-auto px-4 py-8 relative z-10">
        <div className="flex w-fit bubble-text rounded-2xl justify-start items-center gap-5 py-2 px-4">
          <Laptop size={50} />
          <p className="text-xl sm:text-2xl md:text-3xl select-none cursor-pointer">
            Full Stack Development
          </p>
        </div>
        <div className="flex bubble-text rounded-2xl justify-start items-center gap-5 py-2 px-4">
          <Bolt size={50} />
          <p className="text-xl sm:text-2xl md:text-3xl select-none cursor-pointer">
            Software Engineering
          </p>
        </div>
        <div className="flex bubble-text rounded-2xl justify-start items-center gap-5 py-2 px-4">
          <DatabaseZap size={50} />
          <p className="text-xl sm:text-2xl md:text-3xl select-none cursor-pointer">
            Database Administration
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-start mb-6 text-white">
          About me
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-start text-white font-medium leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, iure?
          Sint eveniet ducimus culpa, asperiores at, cupiditate architecto
          excepturi laboriosam sunt omnis, maxime neque voluptatem velit
          consequuntur consectetur soluta. Nisi! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aperiam reiciendis deleniti ab est,
          aspernatur delectus cumque dicta quibusdam veritatis, mollitia
          expedita. Excepturi magni cupiditate totam omnis esse quas sapiente
          distinctio?
        </p>
      </div>
    </div>
  );
}
