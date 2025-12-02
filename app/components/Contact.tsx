"use client";

import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const socialLinks = [
  {
    icon: <FaEnvelope size={28} />,
    label: "Email",
    href: "mailto:dsavinon3@gmail.com",
  },
  {
    icon: <FaPhone size={28} />,
    label: "Phone",
    href: "tel:+19544881785",
  },
  {
    icon: <FaLinkedin size={28} />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/dannysavinon",
  },
  {
    icon: <FaGithub size={28} />,
    label: "GitHub",
    href: "https://github.com/dannysavinon",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-red-400 mx-auto rounded-full" />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about cloud and DevOps
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex items-center justify-center gap-8">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-4 rounded-full bg-red-900/20 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 glow-red-sm"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
