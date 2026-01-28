import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router";
import CircuitLogo from "./CircuitLogo";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Certifications", href: "#certifications" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section based on scroll position (only on home page)
      if (isHome) {
        const sections = navLinks
          .filter(link => link.href.startsWith("#"))
          .map((link) => link.href.replace("#", ""));

        const scrollPosition = window.scrollY + 100;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHome
        ? "glass shadow-lg shadow-red-900/10"
        : "bg-transparent"
        }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-red-400 transition-colors">
            <CircuitLogo className="w-10 h-10" />
            <span className="text-xl font-bold gradient-text">DS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isProjectLink = link.href === "/projects";
              const isHashLink = link.href.startsWith("#");

              // Active state logic
              let isActive = false;
              if (isProjectLink) {
                isActive = location.pathname === "/projects";
              } else if (isHashLink && isHome) {
                isActive = activeSection === link.href.replace("#", "");
              }

              // Href logic
              const to = isHashLink && !isHome ? `/${link.href}` : link.href;

              return (
                <Link
                  key={link.name}
                  to={to}
                  className={`nav-link transition-colors duration-300 ${isActive
                    ? "text-primary font-medium"
                    : "text-gray-300 hover:text-white"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md rounded-lg mt-2 p-4 border border-gray-800">
            {navLinks.map((link) => {
              const isProjectLink = link.href === "/projects";
              const isHashLink = link.href.startsWith("#");

              // Active state logic
              let isActive = false;
              if (isProjectLink) {
                isActive = location.pathname === "/projects";
              } else if (isHashLink && isHome) {
                isActive = activeSection === link.href.replace("#", "");
              }

              // Href logic
              const to = isHashLink && !isHome ? `/${link.href}` : link.href;

              return (
                <Link
                  key={link.name}
                  to={to}
                  className={`block py-3 transition-colors duration-300 ${isActive
                    ? "text-primary font-medium"
                    : "text-gray-300 hover:text-primary"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
