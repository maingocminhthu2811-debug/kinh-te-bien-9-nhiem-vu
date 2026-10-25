import React from 'react';
import { SEA_TASKS, SeaTask, INFOGRAPHIC_META } from '../data/seaTasks';
import { TaskIcon } from './TaskIcon';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';

interface GridViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeIndex: number;
  onSelectTask: (index: number) => void;
}

export const GridViewModal: React.FC<GridViewModalProps> = ({
  isOpen,
  onClose,
  activeIndex,
  onSelectTask,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-sky-950/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-white border-2 border-sky-300 rounded-3xl shadow-2xl overflow-hidden flex flex-col text-slate-900">
        {/* Header */}
        <div className="px-6 py-4 border-b border-sky-200 flex items-center justify-between bg-sky-600 text-white">
          <div className="flex items-center gap-2.5">
            <Sparkles size={20} className="text-cyan-200" />
            <h2 className="text-lg sm:text-xl font-bold">
              Toàn Cảnh 9 Nhiệm Vụ Phát Triển Việt Nam Thành Quốc Gia Biển Mạnh
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-sky-700 hover:bg-sky-800 text-white transition-colors cursor-pointer"
            aria-label="Đóng cửa sổ"
          >
            <X size={18} />
          </button>
        </div>

        {/* Lead text */}
        <div className="px-6 py-3 bg-sky-50 border-b border-sky-200 text-xs sm:text-sm text-sky-950 font-medium">
          <p>{INFOGRAPHIC_META.lead}</p>
        </div>

        {/* 3x3 Grid of 9 Tasks */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-slate-50/50">
          {SEA_TASKS.map((task, i) => {
            const isCurrent = i === activeIndex;

            return (
              <div
                key={task.id}
                onClick={() => {
                  onSelectTask(i);
                  onClose();
                }}
                className={`relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-sky-50 border-2 border-sky-500 shadow-lg shadow-sky-200/80 ring-2 ring-sky-300'
                    : 'bg-white hover:bg-sky-50/50 border-slate-200 hover:border-sky-300 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-sky-600 text-white font-extrabold flex items-center justify-center text-sm shadow-xs">
                        0{task.id}
                      </span>
                      <span className="text-xs font-bold text-sky-800 truncate max-w-[160px]">
                        {task.category}
                      </span>
                    </div>

                    <div className="p-2 rounded-full bg-sky-100 text-sky-700">
                      <TaskIcon name={task.iconName} size={16} />
                    </div>
                  </div>

                  <p className="text-sm font-medium text-slate-800 leading-relaxed text-justify">
                    {task.fullText}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-sky-700 font-semibold">
                  <span className="hover:text-sky-900 transition-colors">
                    {isCurrent ? 'Đang chọn' : 'Nhấn để xem'}
                  </span>
                  {isCurrent && <CheckCircle2 size={16} className="text-sky-600" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-sky-50 border-t border-sky-200 text-xs text-slate-600 flex items-center justify-between">
          <p className="italic line-clamp-1">{INFOGRAPHIC_META.citation}</p>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition-colors shrink-0 cursor-pointer ml-3 shadow-sm"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
