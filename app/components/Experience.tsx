"use client";

import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    title: "DevOps Engineer",
    company: "MyBambu",
    location: "West Palm Beach, FL",
    period: "May 2025 - Dec 2025",
    current: false,
    responsibilities: [
      "Architected and executed a zero-downtime migration of legacy EC2 infrastructure to Amazon ECS Fargate, reducing successful infrastructure costs by 30% while improving scalability.",
      "Engineered a multi-account governance strategy using AWS Organizations and Control Tower, isolating production workloads and enforcing strict security compliance.",
      "Spearheaded the standardization of CI/CD utilizing Azure DevOps Pipelines, reducing deployment time by 60% and eliminating manual release errors.",
      "Designed and automated high-performance mobile build pipelines for Android (Kotlin) and iOS (Swift), increasing release cadence from monthly to weekly.",
      "Implemented enterprise-grade identity federation connecting AWS SSO and GitHub with Microsoft Entra ID, streamlining access management for 50+ engineers.",
      "Refactored legacy manual infrastructure into reusable Terraform modules, achieving 100% Infrastructure as Code coverage and drastically reducing drift.",
      "Optimized front-end delivery pipelines using AWS Amplify, creating ephemeral preview environments that accelerated QA velocity by 40%.",
      "Led technical initiatives for PCI-DSS and SOC 2 Type II compliance, implementing automated security controls that reduced audit preparation time by weeks.",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "Orangetheory Fitness Corporate",
    location: "Boca Raton, FL",
    period: "May 2023 - May 2025",
    current: false,
    responsibilities: [
      "Automated the end-to-end provisioning of AWS accounts using Landing Zone Accelerator, cutting new environment setup time from days to hours.",
      "Designed a least-privilege IAM architecture, creating granular permission boundaries that mitigated internal security risks across 20+ accounts.",
      "Managed mission-critical infrastructure supporting global franchise operations, ensuring 99.99% availability for booking and workout tracking systems.",
      "Developed advanced observability solutions using CloudWatch and Lambda, creating self-healing infrastructure that automatically remediated common faults.",
      "Implemented a comprehensive patch management strategy using Systems Manager (SSM), achieving 99% compliance across a fleet of 200+ EC2 instances.",
      "Modernized deployment workflows by introducing Blue/Green deployment strategies on ECS, enabling daytime releases with zero user impact.",
      "Championed the adoption of trunk-based development and automated testing within CI/CD pipelines, increasing deployment frequency by 3x.",
    ],
  },
  {
    title: "Cloud Operations Engineer",
    company: "Orangetheory Fitness Corporate",
    location: "Boca Raton, FL",
    period: "May 2022 - May 2023",
    current: false,
    responsibilities: [
      "Deployed and managed runtime security protection using Prisma Cloud (Twistlock), securing containerized workloads against zero-day vulnerabilities.",
      "Engineered automated incident response workflows integrating CloudWatch Alarms with PagerDuty, reducing Mean Time to Acknowledge (MTTA) to under 5 minutes.",
      "Led root cause analysis (RCA) investigations for critical outages, driving systemic improvements that prevented recurrence of high-severity incidents.",
      "Orchestrated cross-functional infrastructure upgrades, coordinating with development teams to migrate database versions with minimal maintenance windows.",
      "Authored comprehensive operational runbooks and disaster recovery procedures, reducing onboarding time for new engineers by 40%.",
    ],
  },
  {
    title: "Junior Cloud Engineer",
    company: "Orangetheory Fitness Corporate",
    location: "Boca Raton, FL",
    period: "Aug 2021 - May 2022",
    current: false,
    responsibilities: [
      "Provided Tier-2 cloud infrastructure support, resolving 20+ complex tickets weekly related to EC2, VPC, and IAM configurations.",
      "Assisted senior architects in the implementation of CloudFormation templates, building a strong foundation in Infrastructure as Code principles.",
      "Monitored production health Using Datadog and CloudWatch, identifying and escalating performance bottlenecks before they impacted users.",
      "Automated routine maintenance tasks using Python (Boto3) scripts, saving approximately 10 hours of manual operational work per week.",
      "Collaborated with dev teams to troubleshoot CI/CD pipeline failures, ensuring rapid restoration of delivery capabilities.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-red-400 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-red-600/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 150}
              >
                <div
                  className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Content */}
                  <div className="md:w-1/2">
                    <div
                      className={`card card-hover p-6 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                        }`}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <FaBriefcase className="text-primary" />
                            {exp.title}
                          </h3>
                          <p className="text-primary font-semibold mt-1">
                            {exp.company}
                          </p>
                        </div>
                        {exp.current && (
                          <span className="px-3 py-1 bg-red-900/30 text-primary text-sm rounded-full border border-red-800">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt className="text-red-400" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-red-400" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li
                            key={respIndex}
                            className="text-gray-300 text-sm flex items-start gap-2"
                          >
                            <span className="text-primary mt-1.5">-</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex md:w-0 items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full glow-red-sm" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
