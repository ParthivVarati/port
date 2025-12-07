import { Mail, Linkedin, Twitter, FileText } from "lucide-react";

export function ContactSection() {
  return (
    <div className="relative w-full min-h-screen bg-black py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
      {/* Background design */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-purple-500/10 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />
        </div>

        {/* Contact cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {/* Email */}
          <a
            href="mailto:your.email@example.com"
            className="group relative p-4 sm:p-6 md:p-8 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-blue-500/20 rounded-lg flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              </div>
              <div className="min-w-0">
                <p className="text-gray-400 text-xs sm:text-sm">Email</p>
                <p className="text-white text-sm sm:text-base truncate">
                  parthivvarati@gmail.com
                </p>
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/naga-parthiv/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 sm:p-6 md:p-8 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-blue-600/20 rounded-lg flex-shrink-0">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
              </div>
              <div className="min-w-0">
                <p className="text-gray-400 text-xs sm:text-sm">LinkedIn</p>
                <p className="text-white text-sm sm:text-base truncate">
                  @parthivvarati
                </p>
              </div>
            </div>
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/ParthivVarati"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 sm:p-6 md:p-8 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-cyan-500/20 rounded-lg flex-shrink-0">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              </div>
              <div className="min-w-0">
                <p className="text-gray-400 text-xs sm:text-sm">Twitter</p>
                <p className="text-white text-sm sm:text-base truncate">
                  @ParthivVarati
                </p>
              </div>
            </div>
          </a>

          {/* Resume */}
          <a
            href="https://drive.google.com/file/d/12CbNPN-51JrVxMqvbXV7XUdwhEyP7w33/view?usp=sharing"
            download
            className="group relative p-4 sm:p-6 md:p-8 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-purple-500/20 rounded-lg flex-shrink-0">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
              </div>
              <div className="min-w-0">
                <p className="text-gray-400 text-xs sm:text-sm">Resume</p>
                <p className="text-white text-sm sm:text-base">Download CV</p>
              </div>
            </div>
          </a>
        </div>

        {/* Footer text */}
        <div className="text-center">
          <p className="text-gray-500 text-sm sm:text-base">
            Copyrights © 2024 Parthiv Varati. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
