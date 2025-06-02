"use client";

import { useEffect, useState } from "react";

const techWords = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind",
  "Node.js",
  "API",
  "Frontend",
  "Backend",
  "Blog",
  "UI/UX",
];

type Word = {
  id: number;
  word: string;
  x: number;
  y: number;
};

export default function FloatingWords() {
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const randomWord = techWords[Math.floor(Math.random() * techWords.length)];
      const newWord: Word = {
        id: Date.now() + Math.random(), // unique ID
        word: randomWord,
        x: e.clientX,
        y: e.clientY,
      };

      setWords((prev) => [...prev, newWord]);

      setTimeout(() => {
        setWords((prev) => prev.filter((w) => w.id !== newWord.id));
      }, 1500); // Remove after 1.5s
    }

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-50 pointer-events-none">
      {words.map(({ id, word, x, y }) => (
        <span
          key={id}
          className="absolute text-white text-opacity-80 text-base font-semibold pointer-events-none animate-float-fade"
          style={{
            left: x,
            top: y,
            transform: "translate(-50%, -50%)",
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
