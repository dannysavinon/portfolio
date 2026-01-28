"use client";

import { FaLinkedin, FaGithub, FaEnvelope, FaChevronDown } from "react-icons/fa";
import { useTypingAnimation } from "../hooks/useAnimations";

export default function Hero() {
  const typedText = useTypingAnimation(
    [
      "DevOps Engineer",
      "Cloud Architect",
      "Automation Expert",
      "Infrastructure Builder",
    ],
    50,
    30,
    2000
  );

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient effects - Refined */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-darker pointer-events-none" />

      <div className="section-container relative z-10 w-full">
        {/* Glass container for better readability */}
        <div className="max-w-4xl mx-auto glass rounded-2xl p-8 md:p-12 md:bg-opacity-40 animate-fade-in-up">
          <div className="text-center">
            <p className="text-primary font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
              Building Robust Cloud Infrastructure
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight">
              Danny <span className="gradient-text">Savinon</span>
            </h1>

            <div className="h-20 flex items-center justify-center mb-6">
              <p className="text-xl md:text-3xl text-gray-300 font-light">
                I am a{" "}
                <span className="font-semibold text-white relative">
                  {typedText}
                  <span className="absolute -right-1 top-0 bottom-0 w-0.5 bg-primary animate-pulse"></span>
                </span>
              </p>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
              Architecting secure, scalable cloud infrastructure and automating
              delivery pipelines for mission-critical enterprise applications.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
              <a href="#contact" className="btn-primary w-full sm:w-auto text-white">
                Get In Touch
              </a>
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full sm:w-auto"
              >
                View Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6">
              <SocialLink href="https://linkedin.com/in/dannysavinon" icon={<FaLinkedin size={24} />} label="LinkedIn" />
              <SocialLink href="https://github.com/dannysavinon" icon={<FaGithub size={24} />} label="GitHub" />
              <SocialLink href="mailto:dsavinon3@gmail.com" icon={<FaEnvelope size={24} />} label="Email" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-500 hover:text-primary transition-colors p-2">
          <FaChevronDown size={24} />
        </a>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white hover:bg-white/10 p-3 rounded-full transition-all duration-300 hover:scale-110 border border-transparent hover:border-white/10"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
