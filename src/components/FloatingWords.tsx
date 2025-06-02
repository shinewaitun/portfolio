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
      const randomWord =
        techWords[Math.floor(Math.random() * techWords.length)];
      const newWord: Word = {
        id: Date.now() + Math.random(),
        word: randomWord,
        x: e.clientX,
        y: e.clientY,
      };

      setWords((prev) => [...prev, newWord]);

      setTimeout(() => {
        setWords((prev) => prev.filter((w) => w.id !== newWord.id));
      }, 1500);
    }

    const div = document.getElementById("jubboltron-div");

    div!.addEventListener("click", handleClick);
    return () => div!.removeEventListener("click", handleClick);
  }, []);

  return (
    <div
      id="jubboltron-div"
      className="absolute inset-0 overflow-hidden z-50 cursor-pointer"
    >
      {words.map(({ id, word, x, y }) => (
        <span
          key={id}
          className="absolute text-white text-opacity-80 text-base font-semibold cursor-pointer animate-float-fade"
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
