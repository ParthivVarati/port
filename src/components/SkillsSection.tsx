import { useState } from "react";
import { SkillsGlobe } from "./SkillsGlobe";

const skillsByCategory = {
  tech: [
    "Python",
    "SQL",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "React",
    "MYSQL",
    "JavaScript",
    "Machine Learning",
    "RAG",
    "LangChain",
    "LangGraph",
    "Flask",
    "Git",
  ],
  soft: ["Communication", "Leadership", "Problem Solving"],
  creative: ["Video Editing", "UI/UX Design", "Photography"],
};

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<
    "tech" | "soft" | "creative" | null
  >(null);

  return (
    <div className="relative w-full min-h-screen bg-black py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Starfield background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(2px 2px at 20% 30%, white, transparent),
                           radial-gradient(2px 2px at 60% 70%, white, transparent),
                           radial-gradient(1px 1px at 50% 50%, white, transparent),
                           radial-gradient(1px 1px at 80% 10%, white, transparent)`,
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-12 md:mb-16 text-center">
          Skills
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
          {/* Legend */}
          <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start lg:ml-16 relative z-0 lg:min-h-[200px]">
            <div className="flex flex-row lg:flex-col justify-center lg:justify-start gap-4 sm:gap-6 mb-4">
              <button
                className="flex items-center gap-2 sm:gap-3 cursor-pointer hover:scale-110 transition-transform"
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === "tech" ? null : "tech"
                  )
                }
                onMouseEnter={() => setSelectedCategory("tech")}
                onMouseLeave={() => setSelectedCategory(null)}
              >
                <div
                  className="w-3 h-3 sm:w-4 sm:h-4 rounded-full shadow-lg shadow-[#6C5CE7]/50"
                  style={{ backgroundColor: "#6C5CE7" }}
                />
                <span className="text-white text-sm sm:text-base">Tech</span>
              </button>
              <button
                className="flex items-center gap-2 sm:gap-3 cursor-pointer hover:scale-110 transition-transform"
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === "soft" ? null : "soft"
                  )
                }
                onMouseEnter={() => setSelectedCategory("soft")}
                onMouseLeave={() => setSelectedCategory(null)}
              >
                <div
                  className="w-3 h-3 sm:w-4 sm:h-4 rounded-full shadow-lg shadow-[#55EFC4]/50"
                  style={{ backgroundColor: "#55EFC4" }}
                />
                <span className="text-white text-sm sm:text-base">Soft</span>
              </button>
              <button
                className="flex items-center gap-2 sm:gap-3 cursor-pointer hover:scale-110 transition-transform"
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === "creative" ? null : "creative"
                  )
                }
                onMouseEnter={() => setSelectedCategory("creative")}
                onMouseLeave={() => setSelectedCategory(null)}
              >
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white shadow-lg shadow-white/50" />
                <span className="text-white text-sm sm:text-base">
                  Creative
                </span>
              </button>
            </div>

            {/* Skills list display */}
            {selectedCategory && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 mt-4 mb-6 min-w-[200px] shadow-xl lg:absolute lg:top-0 lg:left-auto lg:right-0 lg:translate-x-[calc(100%+1rem)] lg:mt-0 lg:mb-0 z-10">
                <h3
                  className="text-white mb-3 capitalize"
                  style={{
                    color:
                      selectedCategory === "tech"
                        ? "#6C5CE7"
                        : selectedCategory === "soft"
                        ? "#55EFC4"
                        : "#ffffff",
                  }}
                >
                  {selectedCategory} Skills
                </h3>
                <ul className="space-y-2">
                  {skillsByCategory[selectedCategory].map((skill, index) => (
                    <li
                      key={index}
                      className="text-gray-300 text-sm flex items-center gap-2"
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor:
                            selectedCategory === "tech"
                              ? "#6C5CE7"
                              : selectedCategory === "soft"
                              ? "#55EFC4"
                              : "#ffffff",
                        }}
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Globe */}
          <div className="w-full lg:w-3/4 flex items-center justify-center relative z-0 transition-all duration-300">
            <SkillsGlobe />
          </div>
        </div>
      </div>
    </div>
  );
}
