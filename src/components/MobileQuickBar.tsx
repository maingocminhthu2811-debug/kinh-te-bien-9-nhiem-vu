import React from 'react';
import { SEA_TASKS } from '../data/seaTasks';
import { TaskIcon } from './TaskIcon';

interface MobileQuickBarProps {
  activeIndex: number;
  onSelectTask: (index: number) => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  activeIndex,
  onSelectTask,
}) => {
  return (
    <div className="lg:hidden w-full px-3 py-2 bg-white/95 border-b border-sky-300 backdrop-blur-md sticky top-0 z-30 shadow-md">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
        {SEA_TASKS.map((task, i) => {
          const isActive = i === activeIndex;

          return (
            <button
              key={task.id}
              onClick={() => onSelectTask(i)}
              className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-xs ${
                isActive
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-500/30 scale-105'
                  : 'bg-sky-100 text-sky-900 border border-sky-300 hover:bg-sky-200'
              }`}
            >
              <TaskIcon name={task.iconName} size={14} />
              <span>Nhiệm vụ {task.id}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
