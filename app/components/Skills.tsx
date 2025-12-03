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
  SiSumologic,
} from "react-icons/si";
import { VscAzureDevops, VscTerminalPowershell } from "react-icons/vsc";

const ICON_SIZE = 28;

const skillCategories = [
  {
    title: "Cloud Platforms",
    skills: [
      { name: "AWS", icon: <FaAws size={ICON_SIZE} /> },
      { name: "Azure", icon: <FaMicrosoft size={ICON_SIZE} /> },
    ],
  },
  {
    title: "CI/CD & DevOps",
    skills: [
      { name: "Azure DevOps", icon: <VscAzureDevops size={ICON_SIZE} /> },
      { name: "GitHub Actions", icon: <SiGithubactions size={ICON_SIZE} /> },
      { name: "Git", icon: <FaGitAlt size={ICON_SIZE} /> },
      { name: "Ansible", icon: <SiAnsible size={ICON_SIZE} /> },
    ],
  },
  {
    title: "Infrastructure as Code",
    skills: [
      { name: "CloudFormation", icon: <FaAws size={ICON_SIZE} /> },
      { name: "CDK", icon: <FaAws size={ICON_SIZE} /> },
      { name: "Terraform", icon: <SiTerraform size={ICON_SIZE} /> },
      { name: "Packer", icon: <SiPacker size={ICON_SIZE} /> },
    ],
  },
  {
    title: "Containerization",
    skills: [
      { name: "Docker", icon: <FaDocker size={ICON_SIZE} /> },
      { name: "ECS", icon: <FaAws size={ICON_SIZE} /> },
      { name: "EKS/Kubernetes", icon: <SiKubernetes size={ICON_SIZE} /> },
    ],
  },
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "Python", icon: <FaPython size={ICON_SIZE} /> },
      { name: "Django", icon: <SiDjango size={ICON_SIZE} /> },
      { name: "Celery", icon: <SiCelery size={ICON_SIZE} /> },
      { name: "Node.js", icon: <FaNodeJs size={ICON_SIZE} /> },
      { name: "React", icon: <FaReact size={ICON_SIZE} /> },
      { name: "Kotlin", icon: <SiKotlin size={ICON_SIZE} /> },
      { name: "Swift", icon: <SiSwift size={ICON_SIZE} /> },
    ],
  },
  {
    title: "Monitoring & Observability",
    skills: [
      { name: "CloudWatch", icon: <FaAws size={ICON_SIZE} /> },
      { name: "New Relic", icon: <SiNewrelic size={ICON_SIZE} /> },
      { name: "PagerDuty", icon: <SiPagerduty size={ICON_SIZE} /> },
      { name: "Sumo Logic", icon: <SiSumologic size={ICON_SIZE} /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql size={ICON_SIZE} /> },
      { name: "MySQL", icon: <SiMysql size={ICON_SIZE} /> },
      { name: "MongoDB", icon: <SiMongodb size={ICON_SIZE} /> },
      { name: "Redis", icon: <SiRedis size={ICON_SIZE} /> },
      { name: "RDS", icon: <FaAws size={ICON_SIZE} /> },
      { name: "DynamoDB", icon: <FaAws size={ICON_SIZE} /> },
    ],
  },
  {
    title: "Message Queues",
    skills: [
      { name: "SQS", icon: <FaAws size={ICON_SIZE} /> },
      { name: "SNS", icon: <FaAws size={ICON_SIZE} /> },
      { name: "Kafka", icon: <SiApachekafka size={ICON_SIZE} /> },
      { name: "RabbitMQ", icon: <SiRabbitmq size={ICON_SIZE} /> },
    ],
  },
  {
    title: "Data & Integration",
    skills: [
      { name: "Snowflake", icon: <SiSnowflake size={ICON_SIZE} /> },
      { name: "SFTP", icon: <FaServer size={ICON_SIZE} /> },
      { name: "Jira", icon: <FaJira size={ICON_SIZE} /> },
      { name: "Confluence", icon: <FaConfluence size={ICON_SIZE} /> },
    ],
  },
  {
    title: "Operating Systems",
    skills: [
      { name: "Linux", icon: <FaLinux size={ICON_SIZE} /> },
      { name: "macOS", icon: <FaApple size={ICON_SIZE} /> },
      { name: "Windows", icon: <FaWindows size={ICON_SIZE} /> },
    ],
  },
  {
    title: "Scripting",
    skills: [
      { name: "Python", icon: <FaPython size={ICON_SIZE} /> },
      { name: "PowerShell", icon: <VscTerminalPowershell size={ICON_SIZE} /> },
      { name: "Bash", icon: <FaTerminal size={ICON_SIZE} /> },
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
                <div className="flex flex-col gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="skill-badge flex items-center gap-3 group w-full"
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
