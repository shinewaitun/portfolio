"use client";
import { useEffect } from "react";
import HeroJumbotron from "./HeroJumboltron";
import MyProjects from "./MyProjects";
import SkillList from "./SkillList";
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
        className="bg-sea-gradient relative min-h-screen flex flex-col items-start justify-center pt-20 overflow-hidden"
      >
        <SkillList />
        <MyProjects />
      </div>
    </div>
  );
}
