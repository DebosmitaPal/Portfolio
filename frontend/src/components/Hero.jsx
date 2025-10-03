import React, { useEffect, useState } from "react";
import { FaGithub, FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Debosmita from "../assets/image.jpg";
import HTML5Icon from "../assets/tech_icons/html.webp";
import JSIcon from "../assets/tech_icons/javascript.png";
import JavaIcon from "../assets/tech_icons/java.png";
import VSCodeIcon from "../assets/tech_icons/vscode.png";
import DockerIcon from "../assets/tech_icons/docker.webp";
import ReactIcon from "../assets/tech_icons/react.png";
import MongoIcon from "../assets/tech_icons/mongodb.jpeg";

const words = ["Developer", "Designer", "Problem Solver"];

function Typewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === words[wordIndex].length) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const timer = setTimeout(() => {
        setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <span className="text-violet-400 font-extrabold transition-all duration-150">
      {words[wordIndex].substring(0, charIndex)}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
}

const techIcons = [
  { src: HTML5Icon, alt: "HTML5", style: "top-[0%] right-[40%]" },
  { src: JSIcon, alt: "JavaScript", style: "top-[10%] right-[-40%]" },
  { component: <FaGithub className="text-4xl text-white" />, alt: "GitHub", style: "top-[28%] left-[0%]" },
  { src: JavaIcon, alt: "Java", style: "top-[10%] left-[-30%]" },
  { src: MongoIcon, alt: "MongoDB", style: "top-[40%] right-[-20%]" },
  { src: VSCodeIcon, alt: "VS Code", style: "top-[60%] left-[-30%]" },
  { src: ReactIcon, alt: "React", style: "top-[85%] right-[-35%]" },
  { src: DockerIcon, alt: "Docker", style: "bottom-[2%] left-[-0%]" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto items-center pt-10 pb-10 z-10 gap-y-10 md:gap-0">
        {/* Left column - gradient text name */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start px-4 md:px-10 text-center md:text-left">
          <h3 className="text-violet-400 text-2xl font-semibold mb-2">Hello, I'm</h3>
          <h1 className="bg-gradient-to-r from-fuchsia-500 via-blue-400 to-orange-400 bg-clip-text text-transparent text-3xl md:text-6xl font-extrabold mb-2 leading-tight font-serif pr-15">Debosmita</h1>
          <h1 className="bg-gradient-to-r from-fuchsia-500 via-blue-400 to-orange-400 bg-clip-text text-transparent text-3xl md:text-6xl font-extrabold leading-tight font-serif">Pal</h1>
          {/* Buttons Section */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center">
            {/* Resume Download Button */}
            <a
              href="/resume_debosmita.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-lg hover:bg-violet-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300"
            >
              <span>Download Resume</span>
              <FaArrowDown className="text-lg animate-bounce" />
            </a>
            {/* GitHub Icon Button */}
            <a
              href="https://github.com/DebosmitaPal"
              className="flex items-center gap-2 justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-violet-500/50 mt-2 sm:mt-0"
            >
              <FaGithub className="text-white text-2xl" />
            </a>
          </div>
        </div>

        {/* Center image with glowing gradient ring */}
        <div className="relative mx-8 flex-shrink-0 flex items-center justify-center">
          {/* Glowing gradient blur with opacity */}
          <span className="absolute w-[16rem] h-[16rem] md:w-[22rem] md:h-[22rem] rounded-full bg-gradient-to-tr from-cyan-200 via-purple-500 to-pink-500 opacity-60 filter blur-2xl animate-pulse z-0"></span>
          {/* White subtle glow ring with transparency */}
          <span className="absolute w-[14rem] h-[14rem] md:w-[19rem] md:h-[19rem] rounded-full bg-white opacity-30 filter blur-xl z-0"></span>
          {/* Icon Placement using absolute positioning */}
          <div className="absolute inset-0 pointer-events-none">
            {techIcons.map((icon, index) => (
              <motion.div
                key={index}
                className={`absolute ${icon.style} transform -translate-x-1/2 -translate-y-1/2 p-2 bg-gray/70 backdrop-blur-sm rounded-lg shadow-2xl hover:scale-110 transition-transform duration-300 z-20`}
                animate={{
                  y: [0, -25, 0], // float up and down
                }}
                transition={{
                  duration: 3, // speed of floating
                  repeat: Infinity, // keeps looping
                  ease: "easeInOut",
                  delay: index * 0.5, // staggered animation
                }}
              >
                {icon.component ? (
                  icon.component
                ) : (
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="w-10 h-10 object-contain"
                  />
                )}
              </motion.div>
            ))}
          </div>
          {/* Your image with sharp border */}
          <img
            src={Debosmita}
            alt="Debosmita"
            className="relative z-10 w-45 h-65 md:w-72 md:h-92 rounded-full object-cover border-4 border-white shadow-xl"
          />
        </div>

        {/* Right column with animated typewriter */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start px-4 text-center md:text-left">
          <h3 className="text-white text-2xl font-semibold mb-2 pb-4">Creative & Passionate</h3>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-2 font-serif">
            <Typewriter />
          </h1>
        </div>
      </div>
    </section>
  );
}
