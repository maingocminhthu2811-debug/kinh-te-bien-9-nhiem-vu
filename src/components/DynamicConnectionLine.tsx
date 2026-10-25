import React from 'react';

interface Point {
  x: number;
  y: number;
}

interface DynamicConnectionLineProps {
  start: Point | null;
  end: Point | null;
  color?: string;
  glowColor?: string;
}

export const DynamicConnectionLine: React.FC<DynamicConnectionLineProps> = ({
  start,
  end,
  color = '#0284c7',
  glowColor = 'rgba(2, 132, 199, 0.4)',
}) => {
  if (!start || !end) return null;

  // Calculate bezier control points for an organic flowing wave line
  const dx = end.x - start.x;
  const controlOffset = Math.max(Math.abs(dx) * 0.45, 60);

  const cp1x = start.x + controlOffset;
  const cp1y = start.y;
  const cp2x = end.x - controlOffset;
  const cp2y = end.y;

  const pathData = `M ${start.x} ${start.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${end.x} ${end.y}`;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible transition-all duration-300"
      aria-hidden="true"
    >
      <defs>
        <filter id="lineGlowBright" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="beamGradBright" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="50%" stopColor="#0284c7" stopOpacity="1" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Broad blurred ambient glow */}
      <path
        d={pathData}
        fill="none"
        stroke={glowColor}
        strokeWidth="9"
        strokeLinecap="round"
        opacity="0.5"
        style={{ transition: 'd 0.35s ease-out' }}
      />

      {/* Solid background line */}
      <path
        d={pathData}
        fill="none"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.9"
        style={{ transition: 'd 0.35s ease-out' }}
      />

      {/* Flowing animated dash beam line */}
      <path
        d={pathData}
        fill="none"
        stroke="#ffffff"
        strokeWidth="3"
        strokeDasharray="8 8"
        strokeLinecap="round"
        className="animate-dash-flow"
        style={{ transition: 'd 0.35s ease-out' }}
      />

      {/* Start anchor pulse dot */}
      <circle
        cx={start.x}
        cy={start.y}
        r="5.5"
        fill="#ffffff"
        stroke={color}
        strokeWidth="2.5"
        style={{ transition: 'cx 0.35s ease-out, cy 0.35s ease-out' }}
      />

      {/* End anchor target dot */}
      <circle
        cx={end.x}
        cy={end.y}
        r="6.5"
        fill={color}
        stroke="#ffffff"
        strokeWidth="2.5"
        style={{ transition: 'cx 0.35s ease-out, cy 0.35s ease-out' }}
      />
    </svg>
  );
};
