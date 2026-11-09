import React from 'react';
import { Language } from '../types';
import { BrainCircuit, Terminal, Github } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenCockpit: () => void;
  onOpenThinkChallenge: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  onOpenCockpit,
  onOpenThinkChallenge
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
    <header className="sticky top-0 z-50 bg-[var(--logos-navy-deep)]/90 backdrop-blur-2xl border-b border-[var(--logos-gold)]/20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-[82px] flex items-center justify-between gap-4">
        <a href="#top" className="group flex items-center gap-3 text-white shrink-0 transition-opacity hover:opacity-90" aria-label="LOGOS — Intelligence Gateway">
          <span className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--logos-gold)]/20 to-[#54bce9]/10 border border-[var(--logos-gold)]/30 shadow-[0_0_24px_rgba(216,182,111,0.12)]">
            <img src="/logos-mark.svg" alt="" aria-hidden="true" className="w-10 h-10 object-contain" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[21px] font-bold tracking-[0.18em] text-[var(--logos-ivory)]">LOGOS</span>
            <span className="mt-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.19em] text-[var(--logos-cyan)]">Intelligence Gateway</span>
            <span className="mt-1.5 text-[10px] sm:text-[11px] text-white/55">{isAr ? 'غرفة عمليات الحكمة التربوية' : 'Educational Wisdom Operations'}</span>
          </span>
        </a>

        <nav aria-label={isAr ? 'التنقل الرئيسي' : 'Main navigation'} className="hidden xl:flex items-center gap-5 text-[11px] font-medium tracking-[0.04em] text-white/60">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-[var(--logos-ivory)] transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[var(--logos-gold)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
              {isAr ? item.ar : item.en}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <button onClick={onOpenThinkChallenge} title={isAr ? 'افتح تحدّي التفكير' : 'Open Think Challenge'}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs rounded-full transition-all border bg-white/[0.04] text-white/75 border-white/10 hover:border-[var(--logos-gold)]/40 hover:text-[var(--logos-ivory)]">
            <BrainCircuit className="w-3.5 h-3.5 text-[var(--logos-cyan)]" />
            <span className="hidden 2xl:inline">{isAr ? 'تحدّي التفكير' : 'Think Challenge'}</span>
          </button>
          <button onClick={onToggleLang} className="px-3 py-2 text-xs text-white/75 hover:text-white bg-white/[0.04] border border-white/10 hover:border-[var(--logos-gold)]/40 rounded-full transition-colors whitespace-nowrap">
            {isAr ? 'EN' : 'العربية'}
          </button>
          <a href="https://github.com/carismahousecontact-ops/ai-educational-research-template" target="_blank" rel="noreferrer" aria-label="GitHub repository" className="hidden sm:flex items-center justify-center w-9 h-9 text-white/70 hover:text-white bg-white/[0.04] border border-white/10 rounded-full hover:bg-white/10 transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <button onClick={onOpenCockpit} className="flex items-center gap-2 px-3 sm:px-4 py-2.5 text-xs font-semibold text-[var(--logos-navy-deep)] bg-gradient-to-r from-[#f1d99e] to-[#d5ad60] rounded-full hover:brightness-105 transition-all shadow-[0_0_22px_rgba(216,182,111,0.2)] whitespace-nowrap">
            <Terminal className="w-3.5 h-3.5" />
            <span>{isAr ? 'غرفة العمليات' : 'Enter cockpit'}</span>
          </button>
        </div>
      </div>
      <nav aria-label={isAr ? 'تنقل الأقسام' : 'Section navigation'} className="xl:hidden flex items-center gap-5 overflow-x-auto px-4 pb-3 text-[11px] text-white/55 whitespace-nowrap">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="hover:text-[var(--logos-ivory)] transition-colors">{isAr ? item.ar : item.en}</a>
        ))}
      </nav>
    </header>
  );
};
