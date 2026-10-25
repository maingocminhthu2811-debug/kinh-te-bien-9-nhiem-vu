import React from 'react';
import { SEA_TASKS, INFOGRAPHIC_META } from '../data/seaTasks';
import { TaskIcon } from './TaskIcon';
import { FileText } from 'lucide-react';

export const TaskContentPanel: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* 9 Tasks Grid: 3 columns x 3 rows on desktop, 2 columns on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {SEA_TASKS.map((task, index) => {
          // Staggered delay & natural ocean wave cadence for each card
          const col = index % 3;
          const row = Math.floor(index / 3);
          const delay = (col * 0.4 + row * 0.3).toFixed(2);
          const duration = (4.4 + ((index * 2) % 3) * 0.5).toFixed(1);

          return (
            <div
              key={task.id}
              className="group relative rounded-2xl p-5 bg-white/95 hover:bg-white border border-sky-200/90 hover:border-sky-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between animate-subtle-float"
              style={{
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            >
              {/* Top row: Icon & Number Badge */}
              <div className="flex items-start gap-4 mb-3">
                <div
                  className="w-12 h-12 rounded-2xl shrink-0 flex items-center justify-center text-white font-extrabold shadow-sm transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: task.colorScheme.primary }}
                >
                  <TaskIcon name={task.iconName} size={24} />
                </div>

                {/* Exact Verbatim Text (+1 font size) */}
                <p className="text-base sm:text-lg leading-relaxed text-slate-800 font-medium text-justify select-text pt-0.5">
                  {task.fullText}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Official Citation Footer (+1 font size) (100% exact text) */}
      <footer className="p-5 sm:p-6 rounded-2xl bg-white/95 border border-sky-300 text-sm sm:text-base md:text-lg text-sky-950 leading-relaxed shadow-md">
        <div className="flex items-start gap-3">
          <FileText size={22} className="text-sky-600 shrink-0 mt-0.5" />
          <p className="italic text-slate-700 text-justify">
            {INFOGRAPHIC_META.citation}
          </p>
        </div>
      </footer>
    </div>
  );
};
