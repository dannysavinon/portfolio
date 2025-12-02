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
} from "react-icons/fa";
import {
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiPowershell,
  SiPagerduty,
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";

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
    ],
  },
  {
    title: "Infrastructure as Code",
    skills: [
      { name: "CloudFormation", icon: <FaAws size={32} /> },
      { name: "CDK", icon: <FaAws size={32} /> },
      { name: "Terraform", icon: <SiTerraform size={32} /> },
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
    title: "Scripting",
    skills: [
      { name: "Python", icon: <FaPython size={32} /> },
      { name: "PowerShell", icon: <SiPowershell size={32} /> },
      { name: "Bash", icon: <FaTerminal size={32} /> },
    ],
  },
  {
    title: "Monitoring & Alerting",
    skills: [
      { name: "CloudWatch", icon: <FaAws size={32} /> },
      { name: "Sumo Logic", icon: <FaBell size={32} /> },
      { name: "PagerDuty", icon: <SiPagerduty size={32} /> },
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
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-red-400 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Technologies and tools I work with to build and maintain cloud infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card card-hover p-6"
            >
              <h3 className="text-xl font-semibold text-primary mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-badge flex items-center gap-3 group"
                  >
                    <span className="text-gray-400 group-hover:text-primary transition-colors">
                      {skill.icon}
                    </span>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
