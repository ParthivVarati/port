import { useState, useEffect } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 150; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll(); // Check initial position
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80; // Approximate height of the navigation bar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6">
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 bg-black/30 border border-white/10 rounded-full px-4 sm:px-6 md:px-8 py-2.5 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base">
          <button
            onClick={() => scrollToSection("home")}
            className="text-white hover:text-gray-300 transition-colors whitespace-nowrap relative group"
          >
            Home
            <span
              className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-white to-transparent transition-all duration-300 ${
                activeSection === "home" ? "w-full" : "w-0"
              }`}
            />
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-white hover:text-gray-300 transition-colors whitespace-nowrap relative group"
          >
            About
            <span
              className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-white to-transparent transition-all duration-300 ${
                activeSection === "about" ? "w-full" : "w-0"
              }`}
            />
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-white hover:text-gray-300 transition-colors whitespace-nowrap relative group"
          >
            Skills
            <span
              className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-white to-transparent transition-all duration-300 ${
                activeSection === "skills" ? "w-full" : "w-0"
              }`}
            />
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-white hover:text-gray-300 transition-colors whitespace-nowrap relative group"
          >
            Projects
            <span
              className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-white to-transparent transition-all duration-300 ${
                activeSection === "projects" ? "w-full" : "w-0"
              }`}
            />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white hover:text-gray-300 transition-colors whitespace-nowrap relative group"
          >
            Contact
            <span
              className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-white to-transparent transition-all duration-300 ${
                activeSection === "contact" ? "w-full" : "w-0"
              }`}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
