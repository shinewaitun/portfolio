"use client";

import { useEffect } from "react";

export default function MyProjects() {
  const timelineEvents = [
    {
      year: "2010",
      title: "Foundation",
      description:
        "Our company was founded with a vision to revolutionize the industry.",
    },
    {
      year: "2013",
      title: "First Major Achievement",
      description: "We won our first industry award for innovation.",
    },
    {
      year: "2015",
      title: "Expansion",
      description: "We expanded our operations to three new countries.",
    },
    {
      year: "2018",
      title: "Milestone Reached",
      description: "We celebrated serving our 1 millionth customer.",
    },
    {
      year: "2021",
      title: "New Era Begins",
      description: "We launched our revolutionary new product line.",
    },
  ];

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

      const container = document.getElementById("bubble-container");
      if (container) {
        container.appendChild(bubble);
      }

      setTimeout(() => {
        bubble.remove();
      }, duration * 2000);
    }

    for (let i = 0; i < 10; i++) createBubble();
    const bubbleInterval = setInterval(createBubble, 800);

    return () => clearInterval(bubbleInterval);
  }, []);

  return (
    <div className="relative min-w-screen flex items-start justify-center pt-20 overflow-hidden">
      <div
        id="bubble-container"
        className="absolute inset-0 z-0 pointer-events-none"
      ></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Our History
        </h2>
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="absolute h-full left-1/2"></div>
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div className="order-1 w-5/12"></div>
              {/* <div className="z-20 flex items-center justify-center order-1">
                <div className="relative w-13 h-13">
                  <div className="w-full h-full bubble-2" />
                </div>
              </div> */}
              <div
                className={`bubble-text order-1 backdrop-blur-lg rounded-3xl shadow-xl w-5/12 px-6 py-4 ${
                  index % 2 === 0 ? "text-right" : "text-left"
                }`}
              >
                <h3 className="mb-3 font-bold text-white text-xl">
                  {event.year}: {event.title}
                </h3>
                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
