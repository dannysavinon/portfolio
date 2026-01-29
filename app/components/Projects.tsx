"use client";

import { FaCode, FaRocket, FaTools } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

const projects = [
    {
        title: "Kubernetes GitOps Platform",
        description: "End-to-end GitOps platform for Kubernetes managing multi-cluster deployments with ArgoCD.",
        tags: ["Kubernetes", "GitOps", "ArgoCD", "Terraform"],
        status: "Completed",
        link: "https://github.com/dannysavinon/k8s-gitops-platform"
    },
    {
        title: "Kubernetes Observability Stack",
        description: "Comprehensive monitoring and logging solution for Kubernetes clusters using Prometheus and Grafana.",
        tags: ["Kubernetes", "Prometheus", "Grafana", "Terraform"],
        status: "Completed",
        link: "https://github.com/dannysavinon/k8s-observability-stack"
    },
    {
        title: "Crypto Alert Serverless",
        description: "Serverless event-driven architecture for real-time cryptocurrency price tracking and alerts.",
        tags: ["AWS Lambda", "Serverless", "Terraform", "Python"],
        status: "Completed",
        link: "https://github.com/dannysavinon/crypto-alert-serverless"
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
                                        <span className={`px-3 py-1 text-xs font-medium rounded-full border ${project.status === "Completed"
                                            ? "bg-green-500/10 text-green-400 border-green-500/20"
                                            : project.status === "In Progress"
                                                ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                                                : "bg-purple-500/10 text-purple-400 border-purple-500/20"
                                            }`}>
                                            {project.status}
                                        </span>
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
                                </div>
                            </TiltCard>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
