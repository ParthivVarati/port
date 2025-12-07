import { Circle } from "lucide-react";

const projects = [
  {
    title: "Emotional Companion Bot",
    status: "Online",
    description:
      "This bot isn’t just smart—it cares. Tom helps you fix things, Jerry helps you feel heard. Tap to meet your companion.",
    accentColor: "bg-blue-500",
    link: "https://myfeelingsbuddy.netlify.app/",
  },
  {
    title: "Electricity Forcast Detection",
    status: "Online",
    description:
      "Built an Electricity Price & Demand Forecasting model using Kaggle’s Victoria dataset with extensive EDA, data cleaning, and one-hot encoding. Implemented ML pipelines and compared Random Forest, CatBoost, HistGradientBoosting, and MultiOutputRegressor with K-Fold CV.",
    accentColor: "bg-purple-500",
    link: "https://github.com/ParthivVarati/Electricity-Forecast",
  },
  {
    title: "Snap Trip",
    status: "Online",
    description:
      "Developed a Flask web app with secure uploads, real-time form validation, and OpenCV-based image recognition using NumPy and Chi-Squared metrics to double search accuracy.",
    accentColor: "bg-pink-500",
    link: "https://github.com/ParthivVarati/SNAPTRIP",
  },
  {
    title: "Freelancer",
    status: "Online",
    description:
      "FREELANCER is a fully responsive web platform that connects clients with professionals, allowing users to post jobs, apply, and manage opportunities with ease.",
    accentColor: "bg-blue-500",
    link: "https://github.com/ParthivVarati/FREELANCER",
  },
];

export function ProjectsSection() {
  return (
    <div className="relative w-full min-h-screen bg-black py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Starfield background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(1px 1px at 30% 50%, white, transparent),
                           radial-gradient(1px 1px at 70% 30%, white, transparent),
                           radial-gradient(1px 1px at 50% 80%, white, transparent)`,
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl mb-10 sm:mb-16 md:mb-20 text-center">
          My Projects
        </h2>

        {/* Project Cards */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-12">
          {projects.map((project, index) => (
            <a
              key={index}
              className="relative group cursor-pointer block"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Card container */}
              <div className="flex gap-3 sm:gap-4 md:gap-6 p-4 sm:p-6 md:p-8 border border-white/10 rounded-lg backdrop-blur-sm bg-white/5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:-translate-y-1">
                {/* Left accent line */}
                <div
                  className={`w-1 ${project.accentColor} rounded-full transition-all duration-300 group-hover:w-2`}
                />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row items-start justify-between mb-3 sm:mb-4 gap-3 sm:gap-4">
                    {/* Title */}
                    <h3 className="text-white text-lg sm:text-xl md:text-2xl">
                      {project.title}
                    </h3>

                    {/* Status badge */}
                    <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-green-500/20 border border-green-500/30 rounded-full flex-shrink-0">
                      <Circle className="w-2 h-2 fill-green-500 text-green-500" />
                      <span className="text-green-400 text-xs sm:text-sm">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm sm:text-base">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
