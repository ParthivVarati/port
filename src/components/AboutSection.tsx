export function AboutSection() {
  return (
    <div className="relative w-full min-h-screen bg-black py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Starfield background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(1px 1px at 25% 40%, white, transparent),
                           radial-gradient(1px 1px at 75% 60%, white, transparent),
                           radial-gradient(1px 1px at 50% 20%, white, transparent)`,
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-12 md:mb-16 text-center">
          About Me
        </h2>

        {/* Main container box */}
        <div className="relative p-4 sm:p-6 md:p-8 lg:p-12 border border-white/10 rounded-2xl backdrop-blur-sm bg-white/5 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
          {/* Floating effect glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />

          <div className="relative space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Left box */}
              <div className="relative p-4 sm:p-6 md:p-8 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5 shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl blur-lg" />
                <div className="relative">
                  <h3 className="text-white text-xl sm:text-2xl mb-3 sm:mb-4">
                    Experience
                  </h3>
                  <h4 className="text-gray-400 text-sm sm:text-base">
                    <b>Exponential AI:</b> Intern| 2 month
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {" "}
                    Ensured high data quality by testing software, annotating
                    data, and identifying bugs. Worked with developers to
                    resolve issues and gained practical experience in SDLC and
                    Agile sprints.
                  </p>
                  <br></br>
                  <h4 className="text-gray-400 text-sm sm:text-base">
                    <b>Nimoy AI:</b> Intern| On Going
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {" "}
                    At Nimoy, I refreshed ML concepts and built an
                    electricity-forecast detection model during my first-month
                    training. I improved their document agent using RAG and
                    Letta memory, and automated email fetching with RabbitMQ and
                    Celery. I also built an API agent using LangGraph/LangChain
                    for multi-API handling and enhanced the platform UI with
                    React and Tailwind CSS.
                  </p>
                </div>
              </div>

              {/* Right box */}
              <div className="relative p-4 sm:p-6 md:p-8 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5 shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-lg" />
                <div className="relative">
                  <h3 className="text-white text-xl sm:text-2xl mb-3 sm:mb-4">
                    Education
                  </h3>
                  <h4 className="text-gray-400 text-sm sm:text-base">
                    <b>UG @Gitam University - </b> 8.57 | 2021 - 2025
                  </h4>
                  <h4 className="text-gray-400 text-sm sm:text-base">
                    <b> INTERMEDIATE @Career Point - </b> 92.9% | 2021 - 2025
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
