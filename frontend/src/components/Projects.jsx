import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import DNA from "../assets/dnaimage.png";
import Ballistic from "../assets/ballisticimage.png";
import Bengal from "../assets/bengalimage.png";
import Appointment from "../assets/appointmentimage.png";

const projects = [
  {
    title: "DNA Vision",
    description:
      "DNA sequence analyzer that matches patterns and provides detailed analysis.",
    github: "https://github.com/DebosmitaPal/dna-sequence-analyzer-project-dsa-",
    demo: "https://dna-sequence-analyzer-project-dsa.vercel.app/",
    image: DNA,
    glow: "shadow-blue-500",
  },
  {
    title: "Appointment booking Website",
    description:
      "This website allows users to book appointments for a variety of services, including medical, beauty, and home repair.",
    github: "https://github.com/DebosmitaPal/appointment-booking-website",
    demo: "https://appointment-booking-website-seven.vercel.app/",
    image: Appointment,
    glow: "shadow-yellow-500",
  },
  {
    title: "Bengal Fusion",
    description:
      "Showcasing the culture of West Bengal - food, festivals, places, and heritage.",
    github: "https://github.com/DebosmitaPal/BengalFusion",
    demo: "https://bengalfusion.vercel.app/",
    image: Bengal,
    glow: "shadow-white",
  },
   {
    title: "Ballistic Recognition Tool",
    description:
      "A MERN-based website that matches and analyzes uploaded ballistic images for recognition and helps in criminal investigations.",
    github: "https://github.com/DebosmitaPal/Ballistic-Project",
    demo: "https://ballistic-project.vercel.app/",
    image: Ballistic,
    glow: "shadow-cyan-500",
  },
];

function Projects() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="px-6 py-16 bg-black text-white">
      <h2 className="text-5xl font-bold text-center mb-10 font-serif">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects
          .slice(0, showAll ? projects.length : 3)
          .map((project, index) => (
            <div
              key={index}
              className={`bg-[#1a2238] rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300 shadow-lg ${project.glow}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-50 object-cover"
              />
              <div>
                <h3 className={`p-8 text-xl font-semibold mb-2 underline decoration-2 underline-offset-4`}>
                 {project.title}
                 </h3>
                <p className="text-sm text-gray-300 flex-grow pl-8">
                  {project.description}
                </p>
                <div className="flex gap-4 mt-4 pl-8 pb-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Show More / Show Less button */}
      <div className="text-center mt-10">
        {projects.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:opacity-90 transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </section>
  );
}

export default Projects;
