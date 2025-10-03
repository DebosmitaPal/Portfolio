import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-600 text-gray-300 py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side - Name */}
        <div className="text-lg font-semibold text-white">
          © {new Date().getFullYear()} Debosmita Pal | All Rights Reserved
        </div>

        {/* Right Side - Social Links */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/DebosmitaPal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/debosmitapal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:debosmitapal429@gmail.com"
            className="hover:text-pink-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
