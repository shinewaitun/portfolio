"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function SkillList({
  skills,
}: {
  skills: { title: string; rating: number }[];
}) {
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
      if (container) container.appendChild(bubble);

      setTimeout(() => bubble.remove(), duration * 1000);
    }

    for (let i = 0; i < 10; i++) createBubble();
    const bubbleInterval = setInterval(createBubble, 1000);
    return () => clearInterval(bubbleInterval);
  }, []);

  return (
    <div className="relative min-w-screen flex items-start justify-center  overflow-hidden">
      <div
        id="bubble-container-2"
        className="absolute inset-0 z-0 pointer-events-none"
      ></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-wrap gap-6 justify-center">
          {skills.map(({ title, rating }, index) => (
            <motion.div
              className="bubble-text bg-white/10 rounded-xl backdrop-blur-md px-6 py-4 shadow-lg w-full sm:w-[48%]"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-white font-semibold text-lg">{title}</h3>
                <span className="text-white font-medium">{rating}/10</span>
              </div>
              <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-aquamarine-gradient transition-all duration-500 ease-in-out"
                  style={{ width: `${(rating / 10) * 100}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
