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
  const navItems = [
    { href: '#research-pathways', en: 'Explore', ar: 'استكشف' },
    { href: '#wisdom-operations', en: 'Wisdom Room', ar: 'غرفة الحكمة' },
    { href: '#projects', en: 'Projects', ar: 'المشاريع' },
    { href: '#cockpit', en: 'Agent Skills', ar: 'مهارات الوكلاء' },
    { href: '#talks', en: 'Research', ar: 'الأبحاث' },
    { href: '#writing', en: 'Knowledge', ar: 'المعرفة' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#08090b]/85 backdrop-blur-xl border-b border-white/8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-[72px] flex items-center justify-between gap-4">
        <a href="#top" className="group flex items-center gap-3 text-lg font-semibold tracking-[-0.02em] text-white whitespace-nowrap shrink-0 transition-opacity hover:opacity-90" aria-label="Antigravity home">
          <div className="relative w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-blue-500 via-rose-500 to-amber-400 p-[1px] shadow-[0_0_12px_rgba(59,130,246,0.6)]">
            <div className="w-full h-full rounded-full bg-[#08090b]" />
          </div>
          <span className="font-sans font-bold text-white tracking-tight">Antigravity</span>
          <span className="hidden xl:inline font-mono text-[10px] text-white/40 uppercase tracking-[0.12em] border-l border-white/10 pl-3">
            {isAr ? 'البحث ونظم التعلم والذكاء الاصطناعي' : 'Research · Learning Systems · AI'}
          </span>
        </a>

        <nav aria-label={isAr ? 'التنقل الرئيسي' : 'Main navigation'} className="hidden lg:flex items-center gap-5 text-[12px] font-mono uppercase tracking-[0.08em] text-white/60">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
              {isAr ? item.ar : item.en}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onToggleZeroG}
            title={isAr ? 'تفعيل وضع انعدام الجاذبية' : 'Toggle Antigravity Zero-G Simulation'}
            aria-pressed={zeroGActive}
            className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-full transition-all border ${zeroGActive ? 'bg-blue-500/20 text-blue-400 border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'bg-[#12141a] text-white/70 border-white/10 hover:border-white/25 hover:text-white'}`}
          >
            <Compass className={`w-3.5 h-3.5 ${zeroGActive ? 'animate-spin' : ''}`} />
            <span className="hidden xl:inline">{isAr ? 'انعدام الجاذبية' : 'Zero-G'}</span>
          </button>

          <button onClick={onToggleLang} className="px-2.5 py-1.5 text-xs font-mono text-white/70 hover:text-white bg-[#12141a] border border-white/10 hover:border-white/25 rounded-full transition-colors whitespace-nowrap">
            {isAr ? 'EN' : 'العربية'}
          </button>

          <a href="https://github.com/carismahousecontact-ops/ai-educational-research-template" target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-white/80 hover:text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors">
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <button onClick={onOpenCockpit} className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-medium text-black bg-white rounded-full hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] whitespace-nowrap">
            <Terminal className="w-3.5 h-3.5 text-blue-600" />
            <span>{isAr ? 'جرّب المهارات' : 'Try agent skills'}</span>
          </button>
        </div>
      </div>
      <nav aria-label={isAr ? 'تنقل الأقسام' : 'Section navigation'} className="lg:hidden flex items-center gap-5 overflow-x-auto px-4 pb-3 text-[11px] font-mono text-white/55 whitespace-nowrap">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="hover:text-white transition-colors">{isAr ? item.ar : item.en}</a>
        ))}
      </nav>
    </header>
  );
};
