import React, { useRef, useEffect } from 'react';
import { SEA_TASKS } from '../data/seaTasks';
import { TaskIcon } from './TaskIcon';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CircularDialProps {
  activeIndex: number;
  onSelectTask: (index: number) => void;
  onActiveNodePosChange?: (pos: { x: number; y: number } | null) => void;
}

export const CircularDial: React.FC<CircularDialProps> = ({
  activeIndex,
  onSelectTask,
  onActiveNodePosChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeNodeRef = useRef<HTMLButtonElement | null>(null);

  const radius = 150; // Distance of icon centers from circle center
  const center = 210; // Center coordinate of SVG/box (width = height = 420px)

  // Report active node position relative to container
  useEffect(() => {
    const updatePos = () => {
      if (activeNodeRef.current && containerRef.current && onActiveNodePosChange) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const nodeRect = activeNodeRef.current.getBoundingClientRect();
        const x = nodeRect.left + nodeRect.width / 2 - containerRect.left;
        const y = nodeRect.top + nodeRect.height / 2 - containerRect.top;
        onActiveNodePosChange({ x, y });
      }
    };

    updatePos();
    window.addEventListener('resize', updatePos);
    return () => window.removeEventListener('resize', updatePos);
  }, [activeIndex, onActiveNodePosChange]);

  const activeTask = SEA_TASKS[activeIndex] || SEA_TASKS[0];

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center p-3 sm:p-5 select-none"
    >
      {/* Background Decorative Rings & Oceanic Radar Lines */}
      <div className="relative w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] flex items-center justify-center">
        {/* Subtle Radial Glow Backing */}
        <div
          className="absolute inset-0 rounded-full blur-3xl pointer-events-none transition-colors duration-700 opacity-50"
          style={{ backgroundColor: activeTask.colorScheme.primary }}
        />

        {/* Outer Orbit Line SVG with Compass Markers */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 420 420"
        >
          <defs>
            <linearGradient id="orbitGradBright" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
            </linearGradient>
            <radialGradient id="centerGlowBright">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.2" />
            </radialGradient>
          </defs>

          {/* Outer circle */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="url(#orbitGradBright)"
            strokeWidth="2"
            strokeDasharray="5 7"
            className="animate-spin"
            style={{ animationDuration: '60s' }}
          />

          {/* Inner ring */}
          <circle
            cx={center}
            cy={center}
            r={radius - 45}
            fill="url(#centerGlowBright)"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth="1.5"
          />

          {/* Connectors from center to each node */}
          {SEA_TASKS.map((_, i) => {
            const angleDeg = (i * 360) / 9 - 90;
            const angleRad = (angleDeg * Math.PI) / 180;
            const x = center + radius * Math.cos(angleRad);
            const y = center + radius * Math.sin(angleRad);
            const isActive = i === activeIndex;

            return (
              <line
                key={`spoke-${i}`}
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke={isActive ? activeTask.colorScheme.primary : 'rgba(255, 255, 255, 0.45)'}
                strokeWidth={isActive ? '3' : '1.5'}
                strokeDasharray={isActive ? 'none' : '3 4'}
                className="transition-colors duration-500"
              />
            );
          })}
        </svg>

        {/* Center Navigation Hub - Clean and focused */}
        <div className="absolute z-10 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white/95 border-2 border-sky-300 shadow-xl flex flex-col items-center justify-center p-3 text-center transition-all duration-500">
          <div className="text-3xl sm:text-4xl font-extrabold text-sky-950 tracking-tight">
            0{activeTask.id}
            <span className="text-xs text-sky-500 font-bold"> / 09</span>
          </div>

          {/* Hub Prev / Next Quick Arrows */}
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={() => onSelectTask((activeIndex - 1 + SEA_TASKS.length) % SEA_TASKS.length)}
              className="p-1.5 rounded-full bg-sky-100 hover:bg-sky-200 text-sky-800 transition-colors border border-sky-300 cursor-pointer shadow-sm"
              title="Nhiệm vụ trước"
              aria-label="Nhiệm vụ trước"
            >
              <ChevronLeft size={15} />
            </button>
            <button
              onClick={() => onSelectTask((activeIndex + 1) % SEA_TASKS.length)}
              className="p-1.5 rounded-full bg-sky-100 hover:bg-sky-200 text-sky-800 transition-colors border border-sky-300 cursor-pointer shadow-sm"
              title="Nhiệm vụ tiếp theo"
              aria-label="Nhiệm vụ tiếp theo"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>

        {/* 9 Interactive Icon Nodes Around the Circle */}
        {SEA_TASKS.map((task, i) => {
          const angleDeg = (i * 360) / 9 - 90;
          const angleRad = (angleDeg * Math.PI) / 180;
          const xPercent = 50 + ((radius * Math.cos(angleRad)) / 210) * 50;
          const yPercent = 50 + ((radius * Math.sin(angleRad)) / 210) * 50;
          const isActive = i === activeIndex;

          return (
            <div
              key={task.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-20"
              style={{
                left: `${xPercent}%`,
                top: `${yPercent}%`,
              }}
            >
              <button
                ref={isActive ? activeNodeRef : undefined}
                onClick={() => onSelectTask(i)}
                className={`group relative flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer shadow-lg ${
                  isActive
                    ? 'w-14 h-14 sm:w-16 sm:h-16 scale-110 z-30'
                    : 'w-10 h-10 sm:w-12 sm:h-12 bg-white/95 hover:bg-white border-2 border-sky-300 text-sky-800 hover:text-sky-950 hover:scale-105 hover:border-sky-500'
                }`}
                style={{
                  backgroundColor: isActive ? task.colorScheme.primary : undefined,
                  borderColor: isActive ? '#ffffff' : undefined,
                  boxShadow: isActive
                    ? `0 0 25px ${task.colorScheme.glow}, 0 4px 15px rgba(0, 0, 0, 0.15)`
                    : '0 2px 8px rgba(0, 0, 0, 0.08)',
                }}
                title={`Nhiệm vụ ${task.id}`}
                aria-label={`Chọn nhiệm vụ ${task.id}`}
              >
                {/* Active Outer Pulsing Ripple Rings */}
                {isActive && (
                  <>
                    <span
                      className="absolute inset-0 rounded-full animate-ping opacity-45"
                      style={{ backgroundColor: task.colorScheme.primary }}
                    />
                    <span
                      className="absolute -inset-1.5 rounded-full border-2 border-white animate-pulse"
                    />
                  </>
                )}

                {/* Badge Number (1-9) */}
                <span
                  className={`absolute -top-1.5 -right-1.5 rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-extrabold border shadow-sm ${
                    isActive
                      ? 'bg-white text-sky-950 border-sky-200'
                      : 'bg-sky-600 text-white border-white group-hover:bg-sky-700'
                  }`}
                >
                  {task.id}
                </span>

                {/* Task Icon */}
                <div
                  className={`transition-colors duration-300 ${
                    isActive ? 'text-white drop-shadow' : 'text-sky-700 group-hover:text-sky-950'
                  }`}
                >
                  <TaskIcon
                    name={task.iconName}
                    size={isActive ? 24 : 18}
                    className="transition-transform group-hover:scale-110"
                  />
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
