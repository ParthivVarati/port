import { useState } from 'react';
import swordImage from 'figma:asset/9e4a9b28fdb065c03923962408c3c7c77a49a03b.png';

export function HomeSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(2px 2px at 20% 30%, white, transparent),
                           radial-gradient(2px 2px at 60% 70%, white, transparent),
                           radial-gradient(1px 1px at 50% 50%, white, transparent),
                           radial-gradient(1px 1px at 80% 10%, white, transparent),
                           radial-gradient(2px 2px at 90% 60%, white, transparent),
                           radial-gradient(1px 1px at 33% 80%, white, transparent),
                           radial-gradient(1px 1px at 15% 60%, white, transparent)`,
          backgroundSize: '200% 200%',
          backgroundPosition: '0% 0%',
        }} />
      </div>

      {/* Mobile-only enhanced background elements */}
      <div className="md:hidden">
        {/* Dark overlay for dimming */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        
        {/* Tech grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(108, 92, 231, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108, 92, 231, 0.3) 1px, transparent 1px),
            linear-gradient(rgba(85, 239, 196, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(85, 239, 196, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px, 50px 50px, 20px 20px, 20px 20px',
          backgroundPosition: '0 0, 0 0, 0 0, 0 0',
        }} />

        {/* Animated gradient orbs - more vibrant and blurred */}
        <div className="absolute top-20 -left-10 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" 
             style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-20 -right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-[120px] animate-pulse" 
             style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/15 rounded-full blur-[100px] animate-pulse" 
             style={{ animationDuration: '5s', animationDelay: '1.5s' }} />
        
        {/* Hexagonal tech pattern */}
        <div className="absolute top-16 left-4 w-20 h-20 border-2 border-purple-500/25 rotate-45" 
             style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }} />
        <div className="absolute bottom-40 right-6 w-24 h-24 border-2 border-cyan-400/25 rotate-12 animate-spin" 
             style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)', animationDuration: '15s' }} />
        
        {/* Circuit-like connecting lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ mixBlendMode: 'screen' }}>
          <line x1="10%" y1="20%" x2="40%" y2="40%" stroke="url(#gradient1)" strokeWidth="1" />
          <line x1="60%" y1="30%" x2="90%" y2="50%" stroke="url(#gradient1)" strokeWidth="1" />
          <line x1="20%" y1="70%" x2="50%" y2="60%" stroke="url(#gradient2)" strokeWidth="1" />
          <line x1="70%" y1="80%" x2="85%" y2="65%" stroke="url(#gradient2)" strokeWidth="1" />
          <circle cx="40%" cy="40%" r="3" fill="#6C5CE7" className="animate-pulse" />
          <circle cx="90%" cy="50%" r="3" fill="#55EFC4" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="50%" cy="60%" r="3" fill="#60A5FA" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6C5CE7" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#55EFC4" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#6C5CE7" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Glowing particles/nodes */}
        <div className="absolute top-32 right-12 w-2 h-2 bg-purple-500 rounded-full shadow-lg shadow-purple-500/40 animate-ping" 
             style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/3 left-8 w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/40 animate-ping" 
             style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-16 w-2 h-2 bg-blue-500 rounded-full shadow-lg shadow-blue-500/40 animate-ping" 
             style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
        <div className="absolute bottom-48 left-12 w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/40 animate-ping" 
             style={{ animationDuration: '4.5s', animationDelay: '2s' }} />
        
        {/* Floating code-like boxes */}
        <div className="absolute top-28 left-6 w-16 h-3 bg-gradient-to-r from-purple-600/30 to-transparent rounded animate-pulse blur-sm" 
             style={{ animationDuration: '2.5s' }} />
        <div className="absolute top-36 left-8 w-12 h-3 bg-gradient-to-r from-cyan-500/30 to-transparent rounded animate-pulse blur-sm" 
             style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
        <div className="absolute bottom-40 right-8 w-20 h-3 bg-gradient-to-l from-blue-500/30 to-transparent rounded animate-pulse blur-sm" 
             style={{ animationDuration: '3.5s', animationDelay: '1s' }} />
        <div className="absolute bottom-48 right-6 w-14 h-3 bg-gradient-to-l from-purple-500/30 to-transparent rounded animate-pulse blur-sm" 
             style={{ animationDuration: '2.8s', animationDelay: '1.5s' }} />
        
        {/* Corner brackets (like code editor) */}
        <div className="absolute top-24 left-4 w-8 h-8 border-l-2 border-t-2 border-purple-500/30" />
        <div className="absolute top-24 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-400/30" />
        <div className="absolute bottom-32 left-4 w-8 h-8 border-l-2 border-b-2 border-blue-500/30" />
        <div className="absolute bottom-32 right-4 w-8 h-8 border-r-2 border-b-2 border-purple-400/30" />
        
        {/* Radial glow effect behind text - enhanced */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-gradient-radial from-purple-900/30 via-blue-900/15 to-transparent blur-xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center md:justify-between w-full h-screen px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 gap-4 md:gap-6 lg:gap-8">
        {/* Left side - Text */}
        <div className="flex-1 text-center md:text-left max-w-2xl md:max-w-none">
          <h1 className="text-white text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-3 sm:mb-4 leading-tight">
            Naga Parthiv Varma Varati
          </h1>
          <div className="relative inline-block">
            <h3
              className="text-gray-400 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl cursor-pointer transition-all duration-300"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered ? 'but, better than master of one' : 'Jack of all trades, master of none..'}
            </h3>
          </div>
          <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-white to-transparent mt-4 sm:mt-6 mx-auto md:mx-0" />
          <p className="text-gray-400 mt-4 sm:mt-6 text-sm sm:text-base mx-auto md:mx-0">
            Exploring all things tech and creativity
          </p>
        </div>

        {/* Right side - Sword Image (Hidden on mobile) */}
        <div className="hidden md:flex flex-shrink-0 items-center justify-end h-full py-20">
          <div className="relative w-[200px] h-[280px] lg:w-[280px] lg:h-[400px] xl:w-[350px] xl:h-[500px] 2xl:w-[450px] 2xl:h-[630px] opacity-30">
            <div className="absolute inset-0 blur-sm">
              <img
                src={swordImage}
                alt="Sword"
                className="w-full h-full object-contain mix-blend-lighten"
              />
            </div>
            <img
              src={swordImage}
              alt="Sword"
              className="absolute inset-0 w-full h-full object-contain mix-blend-lighten opacity-60 blur-[2px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}