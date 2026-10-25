import React from 'react';

export const OceanMotionBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* 1. Ambient Sunbeam Caustic Rays */}
      <div className="absolute -top-32 -left-20 w-[600px] h-[600px] rounded-full bg-cyan-300/30 blur-[130px] animate-pulse" style={{ animationDuration: '7s' }} />
      <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] rounded-full bg-sky-300/25 blur-[140px] animate-pulse" style={{ animationDuration: '9s', animationDelay: '2s' }} />
      <div className="absolute -bottom-20 left-1/4 w-[700px] h-[700px] rounded-full bg-teal-300/20 blur-[150px] animate-pulse" style={{ animationDuration: '11s', animationDelay: '4s' }} />

      {/* 2. Floating Luminous Ocean Bubbles / Light Orbs */}
      <div className="ocean-bubble bubble-1" />
      <div className="ocean-bubble bubble-2" />
      <div className="ocean-bubble bubble-3" />
      <div className="ocean-bubble bubble-4" />
      <div className="ocean-bubble bubble-5" />
      <div className="ocean-bubble bubble-6" />
      <div className="ocean-bubble bubble-7" />
      <div className="ocean-bubble bubble-8" />

      {/* 3. Layered Flowing Animated SVG Ocean Waves */}
      <div className="absolute bottom-0 left-0 right-0 h-72 opacity-35 overflow-hidden">
        {/* Wave Layer 1 */}
        <svg
          className="absolute bottom-0 w-[200%] h-full animate-wave-drift-slow"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#waveGrad1)"
            fillOpacity="1"
            d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,165.3C672,160,768,192,864,202.7C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <defs>
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Wave Layer 2 */}
        <svg
          className="absolute bottom-0 w-[200%] h-full animate-wave-drift-medium"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#waveGrad2)"
            fillOpacity="1"
            d="M0,96L60,122.7C120,149,240,203,360,208C480,213,600,171,720,165.3C840,160,960,192,1080,186.7C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
          <defs>
            <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#34d399" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>

        {/* Wave Layer 3 (Fast foreground swell) */}
        <svg
          className="absolute bottom-0 w-[200%] h-full animate-wave-drift-fast"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#waveGrad3)"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,229.3C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <defs>
            <linearGradient id="waveGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#e0f2fe" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.25" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 4. Top subtle undulating wave line across background */}
      <div className="absolute top-0 left-0 right-0 h-44 opacity-25 overflow-hidden">
        <svg
          className="w-[200%] h-full animate-wave-drift-slow"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
        >
          <path
            fill="none"
            stroke="url(#topWaveStroke)"
            strokeWidth="2.5"
            strokeDasharray="6 8"
            d="M0,60 C320,140 420,-20 720,60 C1020,140 1120,-20 1440,60 C1760,140 1860,-20 2160,60"
          />
          <defs>
            <linearGradient id="topWaveStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
