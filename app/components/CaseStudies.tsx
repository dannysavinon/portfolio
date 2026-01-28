"use client";

import { useState } from "react";
import { FaBookOpen, FaFilter } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

type Category = "All" | "AWS" | "DevOps" | "Mobile" | "Security";

const categories: Category[] = ["All", "AWS", "DevOps", "Mobile", "Security"];

const caseStudies = [
  {
    title: "Global Fintech Multi-Region Architecture",
    category: "AWS",
    problem: "To support expansion into LATAM markets, the organization required a highly available, compliant infrastructure capable of handling localized payment processing with strict data residency requirements.",
    solution: "Architected a multi-region AWS landing zone using AWS Organizations and Control Tower. Deployed active-active containerized microservices on ECS Fargate, utilizing DynamoDB Global Tables for low-latency data replication and Route53 latency-based routing.",
    impact: "Achieved 99.99% system availability while meeting all regulatory data residency requirements for 3 new countries. Reduced cross-region latency by 45% for end-users.",
    technologies: ["AWS Organizations", "ECS Fargate", "DynamoDB Global Tables", "Terraform", "GitHub Actions", "Route53"],
  },
  {
    title: "Enterprise CI/CD Modernization",
    category: "DevOps",
    problem: "Legacy manual deployment processes for monolithic applications resulted in 45-minute release cycles, frequent drift between environments, and a high failure rate during production rollouts.",
    solution: "Led the re-platforming of workloads to Docker containers on ECS, implementing Blue/Green deployment strategies. Engineered standardized GitHub Actions pipelines with automated testing gates, vulnerability scanning, and environment promotion logic.",
    impact: "Slashed deployment time by 82% (45m to 8m) and reduced deployment-related incidents by 90%. Empowered developers to deploy on-demand, increasing release frequency from bi-weekly to daily.",
    technologies: ["ECS Fargate", "Docker", "GitHub Actions", "Blue-Green Deployments", "Trivy", "CloudFormation"],
  },
  {
    title: "Mobile Build Pipeline Automation",
    category: "Mobile",
    problem: "Fragmented build processes for Android and iOS apps consumed 20+ hours of developer time weekly, with inconsistent signing practices leading to rejected App Store submissions.",
    solution: "Designed comprehensive Azure DevOps pipelines for Kotlin and Swift applications. Automated the entire lifecycle including linting, unit testing, signing key management, and beta distribution via TestFlight and App Center.",
    impact: "Eliminated manual build interventions, saving 1,000+ developer hours annually. Achieved 100% success rate for automated signing and distinct release consistency across platforms.",
    technologies: ["Azure DevOps", "Kotlin", "Swift", "Fastlane", "Bash", "Jira"],
  },
  {
    title: "Automated Governance & Security Foundation",
    category: "Security",
    problem: "Rapid cloud adoption led to account sprawl and security drift, resulting in failed internal audits and a lack of visibility into compliance posture across the organization.",
    solution: "Implemented a centralized governance framework using AWS Control Tower and Landing Zone Accelerator. Enforced SCPs for guardrails and deployed Security Hub for continuous compliance monitoring. auto-remediation for common misconfigurations.",
    impact: "Established a secure, compliant baseline for 50+ accounts. Reduced mean time to remediate (MTTR) security findings from weeks to hours through automated event-driven responses.",
    technologies: ["AWS Control Tower", "Service Control Policies (SCPs)", "Security Hub", "Lambda", "EventBridge", "Python"],
  },
  {
    title: "Self-Healing Observability Ecosystem",
    category: "DevOps",
    problem: "Reactive monitoring left engineering teams blind to performance degradation until customer reports surfaced, leading to extended outages and frustrated users.",
    solution: "Developed a comprehensive observability strategy using CloudWatch, Prometheus, and PagerDuty. Implemented custom metrics for business KPIs and created self-healing Lambda functions triggered by specific alarm thresholds.",
    impact: "Reduced Mean Time to Detect (MTTD) by 80% and Mean Time to Recovery (MTTR) by 60%. Proactively resolved 40% of incidents without human intervention via auto-remediation.",
    technologies: ["CloudWatch", "PagerDuty", "Prometheus", "Lambda", "SNS", "Terraform"],
  },
  {
    title: "Infrastructure as Code Transformation",
    category: "AWS",
    problem: "Manual ClickOps infrastructure management caused massive configuration drift, making disaster recovery impossible and environment replication extremely slow.",
    solution: "Spearheaded the migration to 100% Infrastructure as Code using CloudFormation and AWS CDK. Created a focused library of reusable, secure infrastructure construct/modules for RDS, ECS, and VPC patterns.",
    impact: "Eliminated configuration drift across Dev, Staging, and Prod. Reduced environment provisioning time by 95% (from 2 days to 2 hours) and ensured identical environments for reliable testing.",
    technologies: ["CloudFormation", "AWS CDK", "Systems Manager", "RDS", "TypeScript", "Git"],
  },
];

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredStudies = activeCategory === "All"
    ? caseStudies
    : caseStudies.filter(study => study.category === activeCategory);

  return (
    <section id="case-studies" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              <FaBookOpen className="text-primary" />
              <span className="gradient-text">Case Studies</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full" />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              A selection of projects that show how I approach complex infrastructure, automation, and reliability challenges.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <div className="flex items-center gap-2 mr-2 text-gray-500">
              <FaFilter size={14} />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                  ? "bg-primary text-white shadow-lg shadow-red-900/30 scale-105"
                  : "bg-card border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredStudies.map((study, index) => (
            <ScrollReveal key={study.title} delay={index * 100}>
              <TiltCard className="card glass-hover p-8 h-full border-t border-t-gray-800 relative group overflow-hidden">
                {/* Decorative top border gradient */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
                    {study.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-primary transition-colors">{study.title}</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-gray-200 font-semibold mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                      Problem
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{study.problem}</p>
                  </div>

                  <div>
                    <h4 className="text-gray-200 font-semibold mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                      Solution
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-gray-200 font-semibold mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      Impact
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{study.impact}</p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-800/50">
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.slice(0, 5).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded-md text-gray-400 bg-gray-900 border border-gray-800 group-hover:border-primary/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 5 && (
                      <span className="px-2 py-1 text-xs rounded-md text-gray-500">+ {study.technologies.length - 5} more</span>
                    )}
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
