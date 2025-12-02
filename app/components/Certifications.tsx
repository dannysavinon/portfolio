import { FaAws, FaCertificate, FaSpinner } from "react-icons/fa";

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    level: "Associate",
    icon: <FaAws size={40} />,
    status: "earned",
    color: "from-orange-500 to-yellow-500",
  },
  {
    name: "AWS Certified Developer",
    level: "Associate",
    icon: <FaAws size={40} />,
    status: "earned",
    color: "from-orange-500 to-yellow-500",
  },
  {
    name: "AWS Certified Solutions Architect",
    level: "Professional",
    icon: <FaAws size={40} />,
    status: "in-progress",
    color: "from-gray-500 to-gray-600",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-red-400 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Professional certifications validating my cloud expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`card card-hover p-6 text-center relative overflow-hidden ${
                cert.status === "in-progress" ? "opacity-80" : ""
              }`}
            >
              {/* Badge glow effect */}
              <div
                className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-b ${cert.color} opacity-10 blur-3xl`}
              />

              {/* Status badge */}
              {cert.status === "in-progress" && (
                <div className="absolute top-4 right-4 flex items-center gap-1 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-full">
                  <FaSpinner className="animate-spin" size={10} />
                  In Progress
                </div>
              )}

              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
                  cert.status === "earned"
                    ? "bg-gradient-to-br from-orange-500/20 to-yellow-500/20 text-orange-400"
                    : "bg-gray-800 text-gray-500"
                }`}
              >
                {cert.icon}
              </div>

              {/* Certification details */}
              <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
              <p
                className={`text-sm font-medium ${
                  cert.status === "earned" ? "text-primary" : "text-gray-500"
                }`}
              >
                {cert.level}
              </p>

              {/* Earned badge */}
              {cert.status === "earned" && (
                <div className="mt-4 flex items-center justify-center gap-2 text-green-400 text-sm">
                  <FaCertificate />
                  <span>Certified</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Achievements highlight */}
        <div className="mt-16 card p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Key <span className="gradient-text">Achievements</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Cut mobile release times by 40% through automated Azure DevOps pipelines",
              "Improved IaC consistency by 35% with reusable CloudFormation templates",
              "Reduced deployment time by 30% with enhanced CI/CD pipelines",
              "Reduced MTTR by 15% through proactive CloudWatch monitoring",
              "Achieved 95% compliance with automated patch management",
              "Supported PCI and SOC 2 compliance readiness initiatives",
            ].map((achievement, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <p className="text-gray-300">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
