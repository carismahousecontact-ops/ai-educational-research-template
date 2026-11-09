import React from 'react';
import { Language } from '../types';
import { Compass, Terminal, Github } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenCockpit: () => void;
  zeroGActive: boolean;
  onToggleZeroG: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  onOpenCockpit,
  zeroGActive,
  onToggleZeroG
}) => {
  const isAr = lang === 'ar';

  return (
    <header className="sticky top-0 z-50 bg-[#08090b]/85 backdrop-blur-xl border-b border-white/8 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Platform Brand Wordmark (Google Antigravity Style) */}
        <a
          href="#"
          className="group flex items-center gap-3 text-lg font-semibold tracking-[-0.02em] text-white whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
        >
          {/* Chromatic Gravity Well Dot */}
          <div className="relative w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-blue-500 via-rose-500 to-amber-400 p-[1px] shadow-[0_0_12px_rgba(59,130,246,0.6)]">
            <div className="w-full h-full rounded-full bg-[#08090b]" />
          </div>
          <span className="font-sans font-bold text-white tracking-tight">Antigravity</span>
          <span className="hidden sm:inline font-mono text-[11px] text-white/45 uppercase tracking-[0.14em] border-l border-white/10 pl-3">
            {isAr ? 'نظم التعليم والوكلاء الأذكياء' : 'Learning Systems & Agentic Infrastructure'}
          </span>
        </a>

        {/* Zone 2: Navigation Links (Single-line, engineered typography) */}
        <nav className="hidden md:flex items-center gap-7 text-[13px] font-mono uppercase tracking-[0.1em] text-white/60">
          <a
            href="#projects"
            className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
          >
            {isAr ? 'الأنظمة' : 'Systems'}
          </a>
          <a
            href="#cockpit"
            className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
          >
            {isAr ? 'محرك المهارات' : 'Agent Cockpit'}
          </a>
          <a
            href="#talks"
            className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
          >
            {isAr ? 'الأبحاث والسياسات' : 'Global Panels'}
          </a>
          <a
            href="#writing"
            className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
          >
            {isAr ? 'الأوراق البحثية' : 'Monographs'}
          </a>
        </nav>

        {/* Zone 3: Actions & Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Zero-G Easter Egg Toggle */}
          <button
            onClick={onToggleZeroG}
            title={isAr ? 'تفعيل وضع انعدام الجاذبية' : 'Toggle Antigravity Zero-G Simulation'}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.1em] rounded-full transition-all border ${
              zeroGActive
                ? 'bg-blue-500/20 text-blue-400 border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                : 'bg-[#12141a] text-white/70 border-white/10 hover:border-white/25 hover:text-white'
            }`}
          >
            <Compass className={`w-3.5 h-3.5 ${zeroGActive ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">{isAr ? 'انعدام الجاذبية' : 'Zero-G'}</span>
          </button>

          {/* Language Toggle */}
          <button
            onClick={onToggleLang}
            className="px-2.5 py-1.5 text-xs font-mono uppercase tracking-[0.1em] text-white/70 hover:text-white bg-[#12141a] border border-white/10 hover:border-white/25 rounded-full transition-colors whitespace-nowrap"
          >
            {isAr ? 'EN' : 'العربية'}
          </button>

          {/* Open Source Spec */}
          <a
            href="https://github.com/GarethManning/education-agent-skills"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.1em] text-white/80 hover:text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Open Spec</span>
          </a>

          {/* Primary Action Button */}
          <button
            onClick={onOpenCockpit}
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-black bg-white rounded-full hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] whitespace-nowrap"
          >
            <Terminal className="w-3.5 h-3.5 text-blue-600" />
            <span>{isAr ? 'تشغيل بيئة المهارات' : 'Open Cockpit'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
