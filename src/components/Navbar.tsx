import React from 'react';
import { TabType } from '../types';
import { sounds } from '../utils/soundEffects';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  progressPercent: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  soundEnabled,
  onToggleSound,
  progressPercent
}) => {
  const handleTabClick = (tab: TabType) => {
    sounds.playPop();
    onSelectTab(tab);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark with cute detective motif */}
          <button
            onClick={() => handleTabClick('home')}
            className="flex items-center gap-2.5 text-left text-slate-900 hover:opacity-90 transition-opacity shrink-0 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white shadow-xs">
              <span className="text-xl" role="img" aria-label="detective">🕵️‍♂️</span>
            </div>
            <div>
              <span className="font-display font-extrabold text-lg text-slate-900 tracking-tight whitespace-nowrap block">
                THÁM TỬ WEBSITE
              </span>
              <span className="text-[11px] font-medium text-amber-700 tracking-wide uppercase block -mt-1">
                Tin học Lớp 5 · Chủ đề 2
              </span>
            </div>
          </button>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-600">
            <button
              onClick={() => handleTabClick('home')}
              className={`hover:text-amber-600 transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentTab === 'home' ? 'text-amber-600 font-bold border-b-2 border-amber-500' : ''
              }`}
            >
              Trang chủ
            </button>
            <button
              onClick={() => handleTabClick('warmup')}
              className={`hover:text-amber-600 transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentTab === 'warmup' ? 'text-amber-600 font-bold border-b-2 border-amber-500' : ''
              }`}
            >
              Khởi động & Video AI
            </button>
            <button
              onClick={() => handleTabClick('knowledge')}
              className={`hover:text-amber-600 transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentTab === 'knowledge' ? 'text-amber-600 font-bold border-b-2 border-amber-500' : ''
              }`}
            >
              Khám phá Website
            </button>
            <button
              onClick={() => handleTabClick('keywords')}
              className={`hover:text-amber-600 transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentTab === 'keywords' ? 'text-amber-600 font-bold border-b-2 border-amber-500' : ''
              }`}
            >
              Bí mật từ khóa
            </button>
            <button
              onClick={() => handleTabClick('detective')}
              className={`hover:text-amber-600 transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentTab === 'detective' ? 'text-amber-600 font-bold border-b-2 border-amber-500' : ''
              }`}
            >
              Phòng thực hành
            </button>
            <button
              onClick={() => handleTabClick('ai-literacy')}
              className={`hover:text-amber-600 transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentTab === 'ai-literacy' ? 'text-amber-600 font-bold border-b-2 border-amber-500' : ''
              }`}
            >
              Sử dụng AI
            </button>
            <button
              onClick={() => handleTabClick('group-sheet')}
              className={`hover:text-amber-600 transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentTab === 'group-sheet' ? 'text-amber-600 font-bold border-b-2 border-amber-500' : ''
              }`}
            >
              Phiếu nhóm
            </button>
            <button
              onClick={() => handleTabClick('playground')}
              className={`hover:text-amber-600 transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentTab === 'playground' ? 'text-amber-600 font-bold border-b-2 border-amber-500' : ''
              }`}
            >
              Sân chơi mini
            </button>
            <button
              onClick={() => handleTabClick('assessment')}
              className={`hover:text-amber-600 transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentTab === 'assessment' ? 'text-amber-600 font-bold border-b-2 border-amber-500' : ''
              }`}
            >
              Kiểm tra 10 câu
            </button>
            <button
              onClick={() => handleTabClick('profile')}
              className={`hover:text-amber-600 transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentTab === 'profile' ? 'text-amber-600 font-bold border-b-2 border-amber-500' : ''
              }`}
            >
              Hồ sơ & Huy hiệu
            </button>
          </nav>

          {/* Zone 3: 1 primary action + sound toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Sound toggle button */}
            <button
              onClick={onToggleSound}
              className={`p-2 rounded-xl border transition-colors cursor-pointer flex items-center justify-center ${
                soundEnabled
                  ? 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100'
                  : 'bg-slate-100 text-slate-400 border-slate-200 hover:bg-slate-200'
              }`}
              title={soundEnabled ? 'Đang bật âm thanh (Bấm để tắt)' : 'Đang tắt âm thanh (Bấm để bật)'}
              aria-label="Bật tắt âm thanh"
            >
              {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </button>

            {/* Quick Progress Indicator */}
            <button
              onClick={() => handleTabClick('profile')}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 hover:bg-amber-100 transition-colors text-xs font-semibold text-amber-900 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Tiến độ: <strong className="font-bold">{progressPercent}%</strong></span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => handleTabClick('warmup')}
              className="px-4 py-2 text-xs md:text-sm font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-xl shadow-xs transition-all active:scale-95 whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
            >
              <span>Vào bài học</span>
              <span className="text-xs">→</span>
            </button>
          </div>
        </div>

        {/* Mobile quick scrollable navigation strip */}
        <div className="lg:hidden flex items-center gap-2 overflow-x-auto py-2 border-t border-slate-100 no-scrollbar text-xs">
          {[
            { id: 'home', label: 'Trang chủ' },
            { id: 'warmup', label: 'Khởi động' },
            { id: 'knowledge', label: 'Khám phá' },
            { id: 'keywords', label: 'Bí mật từ khóa' },
            { id: 'detective', label: 'Phòng thực hành' },
            { id: 'ai-literacy', label: 'Sử dụng AI' },
            { id: 'group-sheet', label: 'Phiếu nhóm' },
            { id: 'playground', label: 'Sân chơi' },
            { id: 'assessment', label: 'Kiểm tra' },
            { id: 'profile', label: 'Hồ sơ' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id as TabType)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 font-medium ${
                currentTab === item.id
                  ? 'bg-amber-500 text-white font-bold'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
