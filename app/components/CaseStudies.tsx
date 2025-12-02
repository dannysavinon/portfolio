import { FaBookOpen } from "react-icons/fa";

const caseStudies = [
  {
    title: "Multi-Region Fintech Platform on AWS",
    problem: "Company needed a secure, compliant, and highly available multi-region architecture to support payments across U.S. and LATAM without increasing operational overhead.",
    solution: "Designed and implemented a multi-account AWS landing zone using AWS Organizations, IAM Identity Center, GuardDuty, Config, and centralized logging. Deployed containerized Django/Celery applications on ECS Fargate with PostgreSQL on RDS and Redis for caching. Automated infrastructure provisioning with Terraform and CI/CD through GitHub Actions.",
    impact: "Enabled expansion into new markets with 99.9%+ uptime, strong security posture, and clear separation of regulatory domains while keeping deployment velocity high.",
    technologies: ["AWS Organizations", "ECS Fargate", "Docker", "Terraform", "GitHub Actions", "PostgreSQL", "Redis"],
  },
  {
    title: "Deployment Optimization & CI/CD Standardization",
    problem: "Engineering teams were deploying via manual EC2 changes, leading to 45-minute releases, inconsistent environments, and frequent deployment failures.",
    solution: "Re-platformed workloads onto ECS Fargate with Docker containers and blue-green deployments. Standardized GitHub Actions pipelines with branching strategy, environment promotion, and automated testing gates. Implemented SQS for async job processing and SNS for deployment notifications.",
    impact: "Cut deployment time from 45 minutes to 8 minutes and reduced deployment-related incidents by ~75%, freeing engineers to ship features instead of fighting the pipeline.",
    technologies: ["ECS Fargate", "Docker", "GitHub Actions", "Blue-Green Deployments", "SQS", "CloudFormation"],
  },
  {
    title: "Mobile Release Pipeline Automation",
    problem: "Android and iOS releases were manual, error-prone processes taking significant developer time and causing inconsistent release cadences across platforms.",
    solution: "Built comprehensive Azure DevOps pipelines for both Kotlin (Android) and Swift (iOS) applications, automating build, test, signing, and deployment workflows. Integrated with Jira for release tracking and Confluence for documentation. Used PowerShell and Bash scripts for build automation.",
    impact: "Cut mobile release times by 40%, significantly improved build reliability, and enabled consistent release cadence across both platforms while reducing manual intervention.",
    technologies: ["Azure DevOps", "Kotlin", "Swift", "PowerShell", "Bash", "Jira"],
  },
  {
    title: "AWS Account Governance & Security",
    problem: "Rapid cloud adoption led to sprawling AWS accounts with inconsistent security policies, making compliance audits difficult and increasing security risk.",
    solution: "Implemented AWS Control Tower with Landing Zone Accelerator, establishing guardrails, centralized logging, and automated account provisioning. Used Ansible for configuration management across Linux instances. Integrated with Sumo Logic for security log aggregation and analysis.",
    impact: "Streamlined account governance enterprise-wide, enforced consistent security policies, and supported PCI and SOC 2 compliance readiness initiatives.",
    technologies: ["AWS Control Tower", "Landing Zone Accelerator", "AWS Organizations", "IAM Identity Center", "Ansible", "Sumo Logic"],
  },
  {
    title: "Infrastructure Monitoring & Observability",
    problem: "Lack of visibility into system health led to reactive incident response, extended outages, and difficulty identifying performance bottlenecks.",
    solution: "Developed comprehensive CloudWatch dashboards and alarms with PagerDuty integration. Implemented New Relic APM for application performance monitoring and Sumo Logic for centralized logging. Created Python scripts for custom metric collection and automated incident response workflows.",
    impact: "Reduced mean time to recovery (MTTR) by 15% through proactive incident detection and resolution, with 10% faster incident response times.",
    technologies: ["CloudWatch", "PagerDuty", "New Relic", "Sumo Logic", "SNS", "Lambda"],
  },
  {
    title: "Infrastructure as Code Standardization",
    problem: "Manual infrastructure provisioning caused configuration drift, inconsistent environments, and deployment errors across development, staging, and production.",
    solution: "Expanded CloudFormation and CDK utilization with modular, reusable templates. Provisioned RDS databases (PostgreSQL, MySQL), DynamoDB tables, and SQS/SNS messaging infrastructure. Used Systems Manager for patch management and Parameter Store for secrets management.",
    impact: "Improved IaC consistency by 35%, cut manual configuration errors by 30%, and achieved 95% compliance with automated patch management.",
    technologies: ["CloudFormation", "AWS CDK", "Systems Manager", "RDS", "DynamoDB", "SQS"],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <FaBookOpen className="text-primary" />
            <span className="gradient-text">Case Studies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-red-400 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A selection of projects that show how I approach complex infrastructure, automation, and reliability challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="card card-hover p-6 border-l-4 border-l-primary"
            >
              <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-primary font-semibold mb-1">Problem</h4>
                  <p className="text-gray-400 text-sm">{study.problem}</p>
                </div>

                <div>
                  <h4 className="text-primary font-semibold mb-1">Solution</h4>
                  <p className="text-gray-400 text-sm">{study.solution}</p>
                </div>

                <div>
                  <h4 className="text-primary font-semibold mb-1">Impact</h4>
                  <p className="text-gray-400 text-sm">{study.impact}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {study.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs rounded-full border border-primary/30 text-primary bg-primary/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
