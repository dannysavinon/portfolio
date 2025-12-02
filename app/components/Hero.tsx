"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from "react-icons/fa";
import { useTypingAnimation } from "../hooks/useAnimations";

export default function Hero() {
  const typedText = useTypingAnimation(
    [
      "DevOps Engineer",
      "Cloud Architect",
      "Automation Expert",
      "Infrastructure Builder",
    ],
    80,
    40,
    2500
  );

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl" />

      <div className="section-container text-center relative z-10">
        <div className="animate-fade-in-up">
          <p className="text-primary font-medium mb-4 tracking-wider uppercase">
            Welcome to my portfolio
          </p>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
          Hi, I'm{" "}
          <span className="gradient-text">Danny Savinon</span>
        </h1>

        <div className="animate-fade-in-up animation-delay-400">
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto h-16 flex items-center justify-center">
            <span className="text-white font-semibold">
              {typedText}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Passionate about cloud infrastructure, automation, and building scalable systems
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-600">
          <a href="#contact" className="btn-primary text-white">
            Get In Touch
          </a>
          <a href="#experience" className="btn-outline">
            View My Work
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 animate-fade-in-up animation-delay-600">
          <a
            href="https://github.com/dannysavinon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-125 transform"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/dannysavinon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-125 transform"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="mailto:dsavinon3@gmail.com"
            className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-125 transform"
            aria-label="Email"
          >
            <FaEnvelope size={28} />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-500 hover:text-primary transition-colors">
            <FaChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
