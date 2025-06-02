"use client";

import { useEffect, useState } from "react";

const techWords = [
  "HTML", "CSS", "JavaScript", "React", "Next.js",
  "Tailwind", "Node.js", "API", "Frontend", "Backend", "Blog", "UI/UX"
];

export default function FloatingWords() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {techWords.map((word, index) => {
        const delay = index * 2; // stagger animation
        const top = `${Math.random() * 90}%`; // random top position

        return (
          <span
            key={index}
            className="absolute text-white text-opacity-20 text-sm md:text-lg whitespace-nowrap animate-floatRight"
            style={{
              top,
              left: "-200px", // start off-screen
              animationDelay: `${delay}s`,
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
}
