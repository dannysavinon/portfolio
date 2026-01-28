"use client";

import { FaMapMarkerAlt, FaCloud, FaServer, FaCode } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import { useCountAnimation } from "../hooks/useAnimations";

function AnimatedStat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const { count, ref } = useCountAnimation(value, 1200);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-primary">
        {count}{suffix}
      </div>
      <div className="text-gray-400 text-sm mt-1">{label}</div>
    </div>
  );
}

export default function About() {
  const highlights = [
    {
      icon: <FaCloud className="text-primary" size={24} />,
      title: "Cloud Architecture",
      description: "Architected active-active multi-region AWS deployments using ECS Fargate, Terraform, and Global Tables",
    },
    {
      icon: <FaServer className="text-primary" size={24} />,
      title: "Infrastructure as Code",
      description: "Achieved 100% IaC coverage, reducing environment provisioning time by 95% with modular CloudFormation & CDK",
    },
    {
      icon: <FaCode className="text-primary" size={24} />,
      title: "CI/CD Orchestration",
      description: "Engineered self-service pipelines reducing deployment time by 82% and eliminating manual release errors",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-red-400 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        {/* Stats Row */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <AnimatedStat value={4} suffix="+" label="Years Experience" />
            <AnimatedStat value={75} suffix="%" label="Fewer Deploy Incidents" />
            <AnimatedStat value={82} suffix="%" label="Faster Deployments" />
            <AnimatedStat value={40} suffix="%" label="Faster Mobile Releases" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <ScrollReveal direction="left" delay={200}>
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a <span className="text-white font-semibold">DevOps Engineer</span> with{" "}
                <span className="text-white font-semibold">4+ years of experience</span>, based in{" "}
                <span className="text-primary inline-flex items-center gap-1">
                  <FaMapMarkerAlt size={14} /> South Florida
                </span>
                , specializing in cloud infrastructure, automation, and building scalable systems.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                With expertise in <span className="text-white">AWS</span> and{" "}
                <span className="text-white">Azure</span>, I focus on designing and implementing
                robust CI/CD pipelines, containerized applications, and Infrastructure as Code
                solutions that improve deployment efficiency and system reliability.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                My experience spans from migrating legacy infrastructure to modern container
                orchestration platforms, to implementing enterprise-wide security and compliance
                initiatives including <span className="text-white">PCI</span> and{" "}
                <span className="text-white">SOC 2</span> compliance.
              </p>

              <div className="pt-4">
                <a
                  href="/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-white inline-block"
                >
                  View Resume
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <ScrollReveal key={index} direction="right" delay={300 + index * 100}>
                <TiltCard className="card card-hover p-6 flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-red-900/20 glow-red-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
