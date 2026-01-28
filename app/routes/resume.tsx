"use client";

import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaPrint } from "react-icons/fa";
import { useEffect } from "react";

// Import data directly from components to ensure consistency
// In a real app, this data should be extracted to a shared data file
// For now, we'll duplicate the improved content to ensure the resume is standalone

const contactInfo = {
    name: "Danny Savinon",
    title: "Senior DevOps Engineer",
    email: "dsavinon3@gmail.com",
    phone: "+1 954-488-1785",
    location: "South Florida",
    linkedin: "linkedin.com/in/dannysavinon",
    github: "github.com/dannysavinon",
};

const summary = "Results-driven DevOps Engineer with 5 years of experience architecting secure, scalable cloud infrastructure and automating delivery pipelines for enterprise applications. Specialized in AWS and Azure ecosystems, with proven success in reducing deployment times by over 80%, ensuring 99.99% system availability, and implementing robust security governance frameworks. Expert in translating complex operational challenges into reliable, automated Infrastructure as Code solutions.";

const experiences = [
    {
        title: "DevOps Engineer",
        company: "MyBambu",
        location: "West Palm Beach, FL",
        period: "May 2025 - Dec 2025",
        responsibilities: [
            "Architected and executed a zero-downtime migration of legacy EC2 infrastructure to Amazon ECS Fargate, reducing infrastructure costs by 30% while improving scalability.",
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
        responsibilities: [
            "Provided Tier-2 cloud infrastructure support, resolving 20+ complex tickets weekly related to EC2, VPC, and IAM configurations.",
            "Assisted senior architects in the implementation of CloudFormation templates, building a strong foundation in Infrastructure as Code principles.",
            "Monitored production health Using Datadog and CloudWatch, identifying and escalating performance bottlenecks before they impacted users.",
            "Automated routine maintenance tasks using Python (Boto3) scripts, saving approximately 10 hours of manual operational work per week.",
            "Collaborated with dev teams to troubleshoot CI/CD pipeline failures, ensuring rapid restoration of delivery capabilities.",
        ],
    },
];

const skills = {
    "Cloud & DevOps": ["AWS (Advanced)", "Azure (Intermediate)", "Docker", "Kubernetes/EKS", "Terraform", "CloudFormation/CDK", "GitHub Actions", "Azure DevOps"],
    "Languages": ["Python", "Bash", "Typescript", "SQL", "HCL", "YAML"],
    "Observability & Security": ["CloudWatch", "Datadog", "PagerDuty", "Splunk", "AWS Security Hub", "GuardDuty", "WAF"],
    "Databases & Networking": ["PostgreSQL", "DynamoDB", "Redis", "VPC", "Route53", "ALB/NLB", "Direct Connect"],
};

const certifications = [
    "AWS Certified Solutions Architect – Associate",
    "AWS Certified Developer – Associate",
    "Microsoft Certified: Azure Fundamentals",
    "Cisco Meraki Network Operator",
];

export default function Resume() {
    const handlePrint = () => {
        window.print();
    };

    useEffect(() => {
        // Add a class to body for print styling hooks if needed
        document.body.classList.add('resume-page');
        return () => {
            document.body.classList.remove('resume-page');
        };
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-10 print:bg-white print:py-0">
            {/* Floating Print Button */}
            <div className="fixed bottom-8 right-8 print:hidden z-50">
                <button
                    onClick={handlePrint}
                    className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-all hover:scale-110 flex items-center gap-2 font-bold"
                >
                    <FaPrint size={20} />
                    <span>Save as PDF</span>
                </button>
            </div>

            <div className="max-w-[210mm] mx-auto bg-white shadow-xl print:shadow-none p-8 md:p-12 print:p-0 min-h-[297mm]">
                {/* Header */}
                <header className="border-b-2 border-gray-800 pb-6 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 uppercase tracking-tight">{contactInfo.name}</h1>
                        <p className="text-xl text-primary font-bold mt-1 max-w-2xl">{contactInfo.title}</p>
                    </div>
                    <div className="text-sm text-gray-600 flex flex-col gap-1 items-start md:items-end">
                        <div className="flex items-center gap-2">
                            <span>{contactInfo.email}</span>
                            <FaEnvelope className="text-gray-400" />
                        </div>
                        <div className="flex items-center gap-2">
                            <span>{contactInfo.phone}</span>
                            <FaPhone className="text-gray-400" />
                        </div>
                        <div className="flex items-center gap-2">
                            <span>{contactInfo.location}</span>
                            <FaMapMarkerAlt className="text-gray-400" />
                        </div>
                        <div className="flex items-center gap-2">
                            <span>{contactInfo.linkedin}</span>
                            <FaLinkedin className="text-gray-400" />
                        </div>
                    </div>
                </header>

                {/* Summary */}
                <section className="mb-6">
                    <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Professional Profile</h2>
                    <p className="text-gray-800 leading-relaxed text-sm">{summary}</p>
                </section>

                {/* Skills */}
                <section className="mb-6">
                    <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Technical Expertise</h2>
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category}>
                                <span className="font-bold text-gray-900 text-sm block">{category}:</span>
                                <span className="text-gray-700 text-sm">{items.join(", ")}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience */}
                <section className="mb-6">
                    <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-200 pb-1">Professional Experience</h2>
                    <div className="space-y-5">
                        {experiences.map((exp, index) => (
                            <div key={index} className="break-inside-avoid">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="text-lg font-bold text-gray-900">{exp.title}</h3>
                                    <span className="text-sm text-gray-500 font-medium">{exp.period}</span>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-primary font-bold text-sm">{exp.company}</span>
                                    <span className="text-xs text-gray-400">{exp.location}</span>
                                </div>
                                <ul className="list-disc list-outside ml-4 space-y-1">
                                    {exp.responsibilities.map((resp, idx) => (
                                        <li key={idx} className="text-gray-700 text-sm leading-snug pl-1">
                                            {resp}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certifications */}
                <section>
                    <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">Certifications</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {certifications.map((cert, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                <span className="text-gray-800 text-sm font-medium">{cert}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Print Only Footer */}
                <div className="hidden print:block mt-8 text-center text-xs text-gray-400 border-t pt-4">
                    Resume generated from portfolio at https://dannysavinon.github.io/portfolio/
                </div>
            </div>
        </div>
    );
}
