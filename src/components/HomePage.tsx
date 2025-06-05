"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

import HeroJumbotron from "./HeroJumboltron";
import MyProjects from "./MyProjects";
import SkillList from "./SkillList";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

const techSkills = [
  { title: "Next.js", rating: 9 },
  { title: "Nuxt.js", rating: 7.5 },
  { title: "TypeScript", rating: 9 },
  { title: "Express.js", rating: 9 },
  { title: "Java SE", rating: 6 },
  { title: ".Net", rating: 6 },
  { title: "SQL", rating: 8 },
  { title: "No SQL", rating: 7.5 },
];

const languageSkills = [
  { title: "Burmese", rating: 10 },
  { title: "English", rating: 8 },
  { title: "Japanese", rating: 6.5 },
  { title: "Chinese", rating: 3 },
];

export default function HomePage() {
  useEffect(() => {
    const jqueryScript = document.createElement("script");
    jqueryScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js";
    jqueryScript.async = true;

    const rippleScript = document.createElement("script");
    rippleScript.src =
      "https://cdn.jsdelivr.net/npm/jquery.ripples@0.6.3/dist/jquery.ripples.min.js";
    rippleScript.async = true;

    document.body.appendChild(jqueryScript);

    jqueryScript.onload = () => {
      document.body.appendChild(rippleScript);
      rippleScript.onload = () => {
        // @ts-ignore
        const $ripple = window.$("#ripple");
        // @ts-ignore
        $ripple.ripples({
          resolution: 512,
          dropRadius: 20,
          perturbance: 0.04,
        });

        $ripple.on("click", function (e: MouseEvent) {
          const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          // @ts-ignore
          $ripple.ripples("drop", x, y, 20, 0.04);
        });
      };
    };

    return () => {
      rippleScript.remove();
      jqueryScript.remove();
    };
  }, []);
  return (
    <div>
      <HeroJumbotron />
      <div
        id="ripple"
        className="bg-sea-gradient relative min-h-screen flex flex-col gap-5 md:gap-16 items-start justify-center overflow-hidden md:pt-20"
      >
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <AboutMe />
        </motion.div>

        <motion.div
          id="skills"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-white">
            Technical Skills
          </h2>
          <SkillList skills={techSkills} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-white">
            Languages
          </h2>
          <SkillList skills={languageSkills} />
        </motion.div>

        <div id="projects">
          <MyProjects />
        </div>

        <div id="contact" className="w-screen">
          <Footer />
        </div>
      </div>
    </div>
  );
}
