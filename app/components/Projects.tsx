"use client";

import { FaCode, FaRocket, FaTools, FaGithub } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

const projects = [
    {
        title: "Kubernetes GitOps Platform",
        description: "End-to-end GitOps platform for Kubernetes managing multi-cluster deployments with ArgoCD.",
        tags: ["Kubernetes", "GitOps", "ArgoCD", "Terraform"],
        link: "https://github.com/dannysavinon/k8s-gitops-platform"
    },
    {
        title: "Kubernetes Observability Stack",
        description: "Comprehensive monitoring and logging solution for Kubernetes clusters using Prometheus and Grafana.",
        tags: ["Kubernetes", "Prometheus", "Grafana", "Terraform"],
        link: "https://github.com/dannysavinon/k8s-observability-stack"
    },
    {
        title: "Crypto Alert Serverless",
        description: "Serverless event-driven architecture for real-time cryptocurrency price tracking and alerts.",
        tags: ["AWS Lambda", "Serverless", "Terraform", "Python"],
        link: "https://github.com/dannysavinon/crypto-alert-serverless"
    },
    {
        title: "InfraGraph",
        description: "Visual, drag-and-drop tool that generates Terraform code for cloud infrastructure.",
        tags: ["React", "Terraform", "Cloud Infrastructure"],
        link: "https://github.com/dannysavinon/infragraph"
    }
];

export default function Projects() {
    return (
        <section className="py-20 relative min-h-screen">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent pointer-events-none" />

            <div className="section-container relative z-10 pt-20">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Future <span className="gradient-text">Projects</span>
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mb-6" />
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Exciting initiatives we can build together. These projects showcase advanced cloud patterns and modern DevOps practices.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ScrollReveal key={index} delay={index * 100}>
                            <TiltCard className="card card-hover p-8 h-full flex flex-col justify-between group">
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                            <FaCode size={24} />
                                        </div>

                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 mb-6 line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="px-2 py-1 text-xs rounded bg-white/5 text-gray-300 border border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group/link"
                                    >
                                        <FaGithub className="text-lg group-hover/link:text-white transition-colors" />
                                        <span>View Code</span>
                                    </a>
                                </div>
                            </TiltCard>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
