import React from "react";
import toolshub from "../assets/project/toolshub.png";
import urlsort from "../assets/project/urlsort.png";
import chat from "../assets/project/chat.png";
import portfolio from "../assets/project/portfolio.png";
import document from "../assets/project/document.jpg";
import selfCar from "../assets/project/selfCar.png";

const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website built using React and Tailwind CSS.",
    github: "https://github.com/Akash200124/portfolio",
    live: "https://portfolio-sandy-delta-57.vercel.app/",
    image: portfolio,
  },
  {
    title: "Tools Hub - Daily Utilities",
    description:
      "Multi-functional utility app with image compression, PDF converter, QR generator, and more. Built using the MERN stack.",
    github: "https://github.com/Akash200124/ToolsHub",
    live: "https://tools-hub-ashen.vercel.app/",
    image: toolshub,
  },
  {
    title: "URL Shortener",
    description: "A full-stack URL shortener using Node.js, Express, and MongoDB.",
    github: "https://github.com/Akash200124/url-shortner-fe",
    live: "https://shorturl-one-delta.vercel.app/",
    image: urlsort,
  },
  {
    title: "Self-Driving Car with Neural Network",
    description:
      "AI-powered simulation where a car learns to drive using a neural network. Built in vanilla JavaScript without external libraries.",
    github: "https://github.com/Akash200124/NeuralNetwork-selfDriven-car",
    live: "", // Add live link if hosted
    image: selfCar,
  },
  {
    title: "Document Management System",
    description:
      "A secure system for uploading and managing documents with user authentication using Node.js and Express.",
    github: "https://github.com/Akash200124/DocumentManagementSystem",
    live: "", // Add live link if hosted
    image: document,
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A chat app with authentication, real-time messaging, and room creation using Socket.IO and MERN stack.",
    github: "https://github.com/Akash200124/chatApp",
    live: "", // Add live link if hosted
    image: chat,
  },
];

const Projects = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-[#1c1c1c] text-indigo-500 px-4 py-2" id="projects">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-10 bg-[#1c1c1c]">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 h-80 mt-5 group"
          >
            {/* Background Image */}
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

            {/* Content */}
            <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4 text-sm">{project.description}</p>
              <div className="flex gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition text-sm"
                  >
                    Live
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
