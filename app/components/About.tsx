import { FaMapMarkerAlt, FaCloud, FaServer, FaCode } from "react-icons/fa";

export default function About() {
  const highlights = [
    {
      icon: <FaCloud className="text-primary" size={24} />,
      title: "Cloud Architecture",
      description: "Expert in AWS services and Azure cloud platforms",
    },
    {
      icon: <FaServer className="text-primary" size={24} />,
      title: "Infrastructure as Code",
      description: "CloudFormation, CDK, and automated deployments",
    },
    {
      icon: <FaCode className="text-primary" size={24} />,
      title: "CI/CD Pipelines",
      description: "Azure DevOps and GitHub Actions automation",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-red-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a <span className="text-white font-semibold">DevOps Engineer</span> based in{" "}
              <span className="text-primary inline-flex items-center gap-1">
                <FaMapMarkerAlt size={14} /> Delray Beach, Florida
              </span>
              , specializing in cloud infrastructure, automation, and building scalable systems.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              With expertise in <span className="text-white">AWS</span> and{" "}
              <span className="text-white">Azure</span>, I focus on designing and implementing
              robust CI/CD pipelines, containerized applications, and Infrastructure as Code
              solutions that improve deployment efficiency and system reliability.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              My experience spans from migrating legacy infrastructure to modern container
              orchestration platforms, to implementing enterprise-wide security and compliance
              initiatives including <span className="text-white">PCI</span> and{" "}
              <span className="text-white">SOC 2</span> compliance.
            </p>

            <div className="pt-4">
              <a
                href="/portfolio/DannySavinon.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-white inline-block"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card card-hover p-6 flex items-start gap-4"
              >
                <div className="p-3 rounded-lg bg-red-900/20 glow-red-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
