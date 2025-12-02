import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaEnvelope size={24} />,
    label: "Email",
    value: "dsavinon3@gmail.com",
    href: "mailto:dsavinon3@gmail.com",
  },
  {
    icon: <FaPhone size={24} />,
    label: "Phone",
    value: "(954) 488-1785",
    href: "tel:+19544881785",
  },
  {
    icon: <FaMapMarkerAlt size={24} />,
    label: "Location",
    value: "Delray Beach, FL",
    href: null,
  },
  {
    icon: <FaLinkedin size={24} />,
    label: "LinkedIn",
    value: "linkedin.com/in/dannysavinon",
    href: "https://linkedin.com/in/dannysavinon",
  },
  {
    icon: <FaGithub size={24} />,
    label: "GitHub",
    value: "github.com/dannysavinon",
    href: "https://github.com/dannysavinon",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-red-400 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about cloud and DevOps
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className={`card card-hover p-6 ${
                  index === contactInfo.length - 1 && contactInfo.length % 2 !== 0
                    ? "md:col-span-2 md:max-w-md md:mx-auto"
                    : ""
                }`}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 rounded-lg bg-red-900/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <p className="text-white font-medium group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-red-900/20 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              Prefer email? Send me a message directly:
            </p>
            <a
              href="mailto:dsavinon3@gmail.com?subject=Hello%20Danny!"
              className="btn-primary text-white inline-block"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
