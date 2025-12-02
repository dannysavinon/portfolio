"use client";

import {
  FaAws,
  FaMicrosoft,
  FaDocker,
  FaGitAlt,
  FaPython,
  FaLinux,
  FaApple,
  FaWindows,
  FaCloud,
  FaTerminal,
  FaBell,
  FaReact,
  FaNodeJs,
  FaServer,
  FaJira,
  FaConfluence,
} from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import {
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiPagerduty,
  SiAnsible,
  SiCelery,
  SiDjango,
  SiKotlin,
  SiSwift,
  SiNewrelic,
  SiSnowflake,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiApachekafka,
  SiRabbitmq,
  SiPacker,
} from "react-icons/si";
import { VscAzureDevops, VscTerminalPowershell } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Cloud Platforms",
    skills: [
      { name: "AWS", icon: <FaAws size={32} /> },
      { name: "Azure", icon: <FaMicrosoft size={32} /> },
    ],
  },
  {
    title: "CI/CD & DevOps",
    skills: [
      { name: "Azure DevOps", icon: <VscAzureDevops size={32} /> },
      { name: "GitHub Actions", icon: <SiGithubactions size={32} /> },
      { name: "Git", icon: <FaGitAlt size={32} /> },
      { name: "Ansible", icon: <SiAnsible size={32} /> },
    ],
  },
  {
    title: "Infrastructure as Code",
    skills: [
      { name: "CloudFormation", icon: <FaAws size={32} /> },
      { name: "CDK", icon: <FaAws size={32} /> },
      { name: "Terraform", icon: <SiTerraform size={32} /> },
      { name: "Packer", icon: <SiPacker size={32} /> },
    ],
  },
  {
    title: "Containerization",
    skills: [
      { name: "Docker", icon: <FaDocker size={32} /> },
      { name: "ECS", icon: <FaCloud size={32} /> },
      { name: "EKS/Kubernetes", icon: <SiKubernetes size={32} /> },
    ],
  },
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "Python", icon: <FaPython size={32} /> },
      { name: "Django", icon: <SiDjango size={32} /> },
      { name: "Celery", icon: <SiCelery size={32} /> },
      { name: "Node.js", icon: <FaNodeJs size={32} /> },
      { name: "React", icon: <FaReact size={32} /> },
      { name: "Kotlin", icon: <SiKotlin size={32} /> },
      { name: "Swift", icon: <SiSwift size={32} /> },
    ],
  },
  {
    title: "Monitoring & Observability",
    skills: [
      { name: "CloudWatch", icon: <FaAws size={32} /> },
      { name: "New Relic", icon: <SiNewrelic size={32} /> },
      { name: "PagerDuty", icon: <SiPagerduty size={32} /> },
      { name: "Sumo Logic", icon: <FaBell size={32} /> },
      { name: "Sigma", icon: <FaBell size={32} /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql size={32} /> },
      { name: "MySQL", icon: <SiMysql size={32} /> },
      { name: "MongoDB", icon: <SiMongodb size={32} /> },
      { name: "Redis", icon: <SiRedis size={32} /> },
      { name: "RDS", icon: <FaAws size={32} /> },
      { name: "DynamoDB", icon: <FaAws size={32} /> },
    ],
  },
  {
    title: "Message Queues",
    skills: [
      { name: "SQS", icon: <FaAws size={32} /> },
      { name: "SNS", icon: <FaAws size={32} /> },
      { name: "Kafka", icon: <SiApachekafka size={32} /> },
      { name: "RabbitMQ", icon: <SiRabbitmq size={32} /> },
    ],
  },
  {
    title: "Data & Integration",
    skills: [
      { name: "Snowflake", icon: <SiSnowflake size={32} /> },
      { name: "SFTP", icon: <FaServer size={32} /> },
      { name: "Jira", icon: <FaJira size={32} /> },
      { name: "Confluence", icon: <FaConfluence size={32} /> },
    ],
  },
  {
    title: "Operating Systems",
    skills: [
      { name: "Linux", icon: <FaLinux size={32} /> },
      { name: "macOS", icon: <FaApple size={32} /> },
      { name: "Windows", icon: <FaWindows size={32} /> },
    ],
  },
  {
    title: "Scripting",
    skills: [
      { name: "Python", icon: <FaPython size={32} /> },
      { name: "PowerShell", icon: <VscTerminalPowershell size={32} /> },
      { name: "Bash", icon: <FaTerminal size={32} /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-red-400 mx-auto rounded-full" />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Technologies and tools I work with to build and maintain cloud infrastructure
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <TiltCard className="card card-hover p-6 min-h-[180px]">
                <h3 className="text-xl font-semibold text-primary mb-6">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="skill-badge flex items-center gap-3 group"
                    >
                      <span className="text-gray-400 group-hover:text-primary transition-all duration-300 group-hover:scale-110">
                        {skill.icon}
                      </span>
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
