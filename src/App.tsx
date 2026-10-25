/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HeroBanner } from './components/HeroBanner';
import { TaskContentPanel } from './components/TaskContentPanel';
import { OceanMotionBackground } from './components/OceanMotionBackground';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0284c7] via-[#0ea5e9] to-[#38bdf8] text-slate-800 flex flex-col items-center selection:bg-sky-200 selection:text-sky-900 font-sans p-0 sm:p-2 lg:p-4">
      {/* 16:9 Framing Container */}
      <div className="w-full max-w-[1600px] flex flex-col shadow-2xl rounded-2xl overflow-hidden border border-white/40 ring-1 ring-sky-300/50 my-auto bg-gradient-to-br from-[#0369a1] via-[#0284c7] to-[#0ea5e9]">
        {/* Hero Banner with Title on Ảnh 5.jpg */}
        <HeroBanner />

        {/* Main Content Stage with 9 Tasks and animated ocean motion graphics background */}
        <main className="relative flex-1 w-full overflow-hidden bg-sky-100/30 backdrop-blur-xs">
          {/* Animated Motion Graphics: Layered Waves, Rising Light Bubbles, Sunbeams */}
          <OceanMotionBackground />

          <div className="relative z-10">
            <TaskContentPanel />
          </div>
        </main>
      </div>
    </div>
  );
}
