"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export interface ProjectInfo {
  year: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
}

const timelineEvents: ProjectInfo[] = [
  {
    year: "March 2023 – April 2023",
    title: "Hotel Reservation Systems",
    company: "ACE INSPIRATION",
    description:
      "The Hotel Reservation, Rooms, and Blogs Management System is a full-stack web app developed by a team of three, where I worked as a full-stack developer. It allows users to view room details, select services, and book appointments. Admins can manage rooms, services, and photos through a dashboard, along with blog content.",
    tags: [
      "Spring MVC",
      "Hibernate",
      "MySQL",
      "Javascript",
      "jQuery",
      "Bootstrap",
      "JSTL",
    ],
  },
  {
    year: "May 2023 – July 2023",
    title: "Job Recruitment and Offering Management System",
    company: "ACE INSPIRATION",
    description:
      "The Job Recruitment and Offering Management System is a full-stack web application built by a team of eight, where I contributed as a full-stack developer. The system allows admins to manage job vacancies, staff, applicants, and notifications with full CRUD functionality, including features like pagination, search, sort, and filter. Real-time notifications are enabled via WebSockets for new applicant submissions. I also implemented a custom text editor with JavaScript and developed the dashboard UI, job listings, application handling logic, and job vacancy control actions such as opening, closing, and updating. The backend includes authentication, data flow logic, and file export features.",
    tags: [
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "JPA",
      "MySQL",
      "JavaScript",
      "jQuery",
      "STOMP",
      "SockJS",
      "Izitoast.js",
      "Bootstrap",
      "Thymeleaf",
      "Jasper Studio",
      "JUnit",
    ],
  },
  {
    year: "October 2023 – January 2024",
    title: "BAYON App – Digital Real Estate Marketplace",
    company: "BIGSOFT",
    description:
      "Contributed to the development of a digital real estate marketplace web app as part of a two-person frontend team, with backend API support from a Cambodia-based team. Collaborated directly with the company owner to refine requirements and implement a redesigned UI using Figma. Built core UI logic, user authentication with Firebase (including phone number login), and image uploads to Firebase Cloud Storage. Developed key pages such as home, properties, property detail, and user profile using clean, reusable components. The application supports i18n localization (Myanmar, English, Cambodian) and is fully responsive across devices.",
    tags: [
      "Nuxt.js 3",
      "TypeScript",
      "Pinia",
      "Tailwind CSS",
      "Firebase Authentication",
      "Firestore",
      "Google Maps API",
      "i18n",
      "Figma",
    ],
  },
  {
    year: "April 2024 - August 2024",
    title: "TOWARDS21 – Learning Center and Job Agency",
    company: "TOWARDS21",
    description:
      "Developed a full-stack web application as part of a 3-member team, contributing to both backend and frontend development. Built secure dashboard features with full CRUD operations for all data tables, including advanced search, filtering, sorting, and pagination. Designed and implemented a fully responsive admin dashboard UI using Figma. Developed reusable and customizable table components and handled authentication/authorization. Implemented localization for Myanmar, English, and Japanese. Collaborated on backend API structure, data flow, and business logic using Node.js, Express, and MongoDB.",
    tags: [
      "Next.js 13",
      "React Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "WebSocket",
      "Figma",
      "i18n",
    ],
  },
  {
    year: "February 2024 – May 2024",
    title: "AXURENZE Insurance App",
    company: "ACE DATA SYSTEMS",
    description:
      "Worked as a frontend developer in a large cross-functional team (7 frontend devs, 5 backend devs, and 3 testers) to maintain and enhance an existing insurance web application. Fixed bugs, optimized performance, and implemented new UI updates based on designs provided by the UI/UX team using Figma. Focused on writing clean, maintainable, and scalable code with well-structured components.",
    tags: [
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Figma",
    ],
  },
  {
    year: "May 2024 – August 2024",
    title: "Cloud Database Migration",
    company: "ACE DATA SYSTEMS",
    description:
      "Worked as a C# developer in a team of three to migrate data from Dropbox to Microsoft SharePoint. Developed solutions to align and adapt database structures for seamless migration. Managed Dropbox version conflicts between user data and current versions. Implemented parallel programming techniques to optimize migration performance.",
    tags: [
      "C#",
      "Dropbox API",
      "Microsoft SharePoint",
      "Parallel Programming",
      "Database Migration",
    ],
  },
  {
    year: "August 2024 – January 2025",
    title: "AXR Insurance Dashboard API",
    company: "ACE DATA SYSTEMS",
    description:
      "Worked as a backend developer in a team of seven, building core logic for an insurance system including authentication and authorization. Developed RESTful APIs using Express.js, Sequelize with PostgreSQL, and implemented an IoC container with Inversify.js following Clean Architecture principles. Managed database migrations and seeders for efficient administration and ensured robust error handling in all API endpoints.",
    tags: [
      "Express.js",
      "Sequelize",
      "PostgreSQL",
      "Inversify.js",
      "Clean Architecture",
      "RESTful API",
      "Authentication",
      "Authorization",
    ],
  },
  {
    year: "June 2024 – April 2025",
    title: "ERP System",
    company: "PIXEL PULSE TECH",
    description:
      "Contributed as a full-stack developer in a team of four to build an ERP system handling accounting, inventory, and user management. Developed backend logic with Node.js, Express.js, and Inversify.js (IoC), including automated journal entries, ledgers, profit & loss calculations, and PDF generation. On the frontend, worked with React.js and Next.js, focusing on reusable UI components, dashboard task management, and filtering functionalities. Participated in code reviews and task management to ensure quality and efficiency.",
    tags: [
      "MySQL",
      "Node.js",
      "Express.js",
      "Inversify.js",
      "React.js",
      "Next.js",
      "PDF Generation",
      "Accounting",
      "Inventory Management",
    ],
  },
];

export default function MyProjects() {
  function createBubble(containerId: string) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    const size = Math.random() * 15;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.setProperty("--random-offset", `${Math.random() * 360}deg`);
    const duration = Math.random() * 15 + 10;
    bubble.style.animation = `float ${duration}s linear infinite`;

    const container = document.getElementById(containerId);
    if (container) {
      container.appendChild(bubble);
    }

    setTimeout(() => {
      bubble.remove();
    }, duration * 2000);
  }

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      createBubble("bubble-container");
    }

    const bubbleInterval = setInterval(
      () => createBubble("bubble-container"),
      800
    );

    return () => {
      clearInterval(bubbleInterval);
    };
  }, []);

  return (
    <div className="relative min-w-screen flex items-start justify-center  overflow-hidden">
      <div
        id="bubble-container-1"
        className="absolute inset-0 top-52 z-0 pointer-events-none"
      ></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Projects Milestone
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 space-y-10">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div
                className={`flex flex-col md:flex-row items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="bubble-text md:w-1/2 rounded-2xl p-4 space-y-3">
                  <h3 className="text-gray-100 text-xl font-semibold">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-300">{event.year}</p>
                  <p className="text-sm font-medium text-gray-300 mb-2">
                    {event.company}
                  </p>
                  <p className="text-sm text-gray-100">{event.description}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {event.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
