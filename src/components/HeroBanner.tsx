import React from 'react';
import { INFOGRAPHIC_META } from '../data/seaTasks';

export const HeroBanner: React.FC = () => {
  return (
    <header className="relative w-full overflow-hidden border-b border-sky-300/40 shadow-lg bg-sky-600">
      {/* Background image: Ảnh 5.jpg */}
      <div className="absolute inset-0 z-0">
        <img
          src={INFOGRAPHIC_META.heroImage}
          alt="Toàn cảnh không gian biển nuôi trồng và phát triển kinh tế biển Việt Nam"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Bright ocean azure overlay for vibrant daylight atmosphere with crisp text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/85 via-blue-800/75 to-cyan-800/80 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-600/20 to-sky-900/60" />
      </div>

      {/* Decorative Sunlit Water Caustic Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-300/25 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-9 text-center sm:text-left">
        {/* Prominent Title: 4 distinct lines in striking radiant golden yellow */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] text-yellow-300 space-y-1">
          <span className="block text-yellow-300">9 nhiệm vụ quan trọng</span>
          <span className="block text-amber-200">hướng tới mục tiêu</span>
          <span className="block text-yellow-300">phát triển Việt Nam</span>
          <span className="block text-amber-300">thành quốc gia biển mạnh</span>
        </h1>

        {/* Subhead / Lead Directive: increased font size (+1 size) */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-sky-950 leading-relaxed font-semibold bg-white/95 p-4 sm:p-5 rounded-2xl border border-white shadow-lg text-justify sm:text-left">
          {INFOGRAPHIC_META.lead}
        </p>
      </div>
    </header>
  );
};
