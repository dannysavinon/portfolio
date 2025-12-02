import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    title: "DevOps Engineer",
    company: "MyBambu",
    location: "West Palm Beach, FL",
    period: "May 2025 - Present",
    current: true,
    responsibilities: [
      "Led the migration of legacy EC2 infrastructure to Amazon ECS, improving scalability and reducing infrastructure costs",
      "Implemented AWS Organizations to centralize account governance and strengthen security boundaries",
      "Transitioned from manual deployments to automated Azure DevOps Pipelines, standardizing CI/CD workflows",
      "Built and optimized Android and iOS pipelines in Azure DevOps, improving build reliability and release cadence",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "Orangetheory Fitness Corporate",
    location: "Boca Raton, FL",
    period: "May 2023 - May 2025",
    current: false,
    responsibilities: [
      "Provisioned and automated new AWS accounts using AWS Control Tower, Landing Zone Accelerator, and CodePipeline",
      "Designed and managed AWS IAM policies, roles, and groups to enforce least privilege access",
      "Managed cloud infrastructure on AWS ensuring high availability, scalability, and optimal performance",
      "Developed CloudWatch dashboards and alarms, reducing mean time to recovery (MTTR) by 15%",
      "Automated infrastructure patch management using AWS Systems Manager, reducing operational overhead by 25%",
      "Enhanced CI/CD pipelines with Azure DevOps and GitHub Actions, reducing deployment time by 30%",
    ],
  },
  {
    title: "Cloud Operations Engineer",
    company: "Orangetheory Fitness Corporate",
    location: "Boca Raton, FL",
    period: "May 2022 - May 2023",
    current: false,
    responsibilities: [
      "Deployed and managed Prisma Defender agents, securing workloads and maintaining compliance",
      "Configured monitoring and alerting systems using PagerDuty and AWS CloudWatch, reducing incident response time by 10%",
      "Conducted root cause analysis for critical incidents, implementing preventative measures",
      "Assisted in infrastructure upgrades and migration projects, reducing downtime by 10%",
      "Documented operational procedures and created runbooks to streamline incident resolution",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-red-400 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-red-600/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="md:w-1/2">
                  <div
                    className={`card card-hover p-6 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
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
                          <span className="text-primary mt-1.5">•</span>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
