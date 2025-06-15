import React from "react";
import VantaBackground from "./Components/VantaBackground.jsx";
import VantaBackgroundwithout from "./Components/VantaBackgroundwithout.jsx";
import About from "./Components/About.jsx";
import { HiArrowDown } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaYoutube, FaMedium, } from "react-icons/fa";
import Project from "./Components/Project.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";

import { Link } from "react-scroll";
function App() {
  return (
    <>
      <div className="relative min-h-screen text-gray-900">
        <VantaBackground  />
       

        {/* Top Navigation */}
        <div className="relative z-10 p-6">
          <div className="text-white text-lg bg-black/30 backdrop-blur-sm rounded px-6 py-2 flex flex-row gap-6 justify-center">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">Home</Link>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">About</Link>
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">Projects</Link>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">Contact</Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full mt-45 text-center px-4">
          <h1 className="text-5xl text-white font-bold mb-4">Hi, I’m Akash Kumar</h1>
          <p className="text-xl text-white mb-6">
            Full Stack Developer (MERN, React, Node.js)
          </p>
          <Link to="about" smooth={true} duration={500} className="bg-indigo-600 text-white flex direction-row px-6 py-3 rounded hover:bg-indigo-700 transition"> 
          View My Work  
          <HiArrowDown className="ml-2 mt-1" />  
          </Link>


        </div>
        {/* Social Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-white">Connect with Me</h3>
          <div className="flex justify-center gap-6 text-white text-3xl">
            <a href="https://github.com/akash200124/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/akash-kumar-5b561a271/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com/@cloudcodeworld" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <FaYoutube />
            </a>
            <a href="https://medium.com/@akashkumar112232" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
              <FaMedium />
            </a>
          </div>
        </div>
      </div>
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

