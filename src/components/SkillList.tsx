"use client";

import { UserIcon } from "lucide-react";
import { useEffect } from "react";

export default function SkillList() {
  const skills = Array.from({ length: 10 }, () => ({
    Icon: UserIcon,
    title: "User",
  }));

  useEffect(() => {
    function createBubble() {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");

      const size = Math.random() * 15;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.setProperty("--random-offset", `${Math.random() * 360}deg`);
      const duration = Math.random() * 15 + 10;
      bubble.style.animation = `float ${duration}s linear infinite`;

      const container = document.getElementById("bubble-container-2");
      if (container) {
        container.appendChild(bubble);
      }

      setTimeout(() => {
        bubble.remove();
      }, duration * 1000);
    }

    for (let i = 0; i < 10; i++) createBubble();
    const bubbleInterval = setInterval(createBubble, 1000);

    return () => clearInterval(bubbleInterval);
  }, []);

  return (
    <div className="relative min-w-screen min-h-screen flex items-start justify-center pt-20 overflow-hidden">
      <div
        id="bubble-container-2"
        className="absolute top inset-20 z-0 pointer-events-none"
      ></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          My Skills
        </h2>
        <div className="flex flex-col items-center space-y-6">
          {skills.map(({ Icon, title }, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-6 py-4 backdrop-blur-lg rounded-3xl shadow-xl w-full max-w-md bubble-2"
            >
              <div className="text-white text-2xl">
                <Icon />
              </div>
              <p className="text-white font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
