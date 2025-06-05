"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Footer() {
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

      const container = document.getElementById("bubble-container-3");
      if (container) {
        container.appendChild(bubble);
      }

      setTimeout(() => {
        bubble.remove();
      }, duration * 1000);
    }

    for (let i = 0; i < 10; i++) createBubble();
    const bubbleInterval = setInterval(createBubble, 1500);

    return () => clearInterval(bubbleInterval);
  }, []);

  return (
    <footer className="w-full bg-sky-300/20 backdrop-blur-md border-t border-sky-100/20 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
        <div
          id="bubble-container-3"
          className="absolute inset-0 z-0 pointer-events-none"
        ></div>

        <div className="flex gap-4">
          <h4 className="text-xl font-bold">Shine Wai Tun</h4>
          <sup className="text-sm text-slate-200 mt-1 ">Software Engineer</sup>
        </div>

        <div>
          <div className="flex justify-center md:justify-end gap-4 mt-2">
            <a
              href="https://github.com/shinewaitun"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition"
            >
              <Github size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/shine-wai-tun"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition"
            >
              <Linkedin size={30} />
            </a>
            <a
              href="mailto:shinewaitun28@gmail.com"
              className="hover:text-yellow-300 transition"
            >
              <Mail size={30} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-slate-300 pb-6">
        &copy; {new Date().getFullYear()} Lucas. All rights reserved.
      </div>
    </footer>
  );
}
