import React, { useState } from 'react';
import { Language, JourneyChapter } from '../types';
import { journeyChapters } from '../data/mockData';
import { Globe, Compass, Check, ArrowRight, MapPin } from 'lucide-react';

interface JourneyProps {
  lang: Language;
}

export const JourneyRadar: React.FC<JourneyProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [selectedChapterId, setSelectedChapterId] = useState<number>(4);

  const activeChapter =
    journeyChapters.find((c) => c.id === selectedChapterId) || journeyChapters[3];

  return (
    <section id="journey" className="py-20 md:py-28 border-b border-white/8 bg-[#090b0f]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-white/50 mb-2">
            <span className="text-blue-400">02 // GLOBAL TRAJECTORY</span>
            <span aria-hidden="true">·</span>
            <span>2003 – 2026</span>
          </div>
          <h2 className="font-display text-[32px] md:text-[46px] font-bold tracking-[-0.03em] text-white">
            {isAr ? 'المسار الميداني عبر 27 دولة' : 'The Journey: 27 Countries.'}
          </h2>
          <p className="mt-2 text-sm md:text-base text-white/65 font-normal">
            {isAr
              ? 'ثمانية فصول وثلاث وعشرون سنة من التدريس، القيادة المدرسية، وهندسة المناهج عبر بيئات تعليمية شديدة التنوع في أوروبا، الشرق الأوسط، آسيا، والأمريكتين.'
              : 'Eight chapters across twenty-seven countries — from direct secondary classroom teaching to international school leadership and autonomous learning systems.'}
          </p>
        </div>

        {/* Antigravity Timeline / Radar Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Chapter Selector Timeline (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {journeyChapters.map((chapter) => {
              const isSelected = chapter.id === activeChapter.id;
              return (
                <div
                  key={chapter.id}
                  onClick={() => setSelectedChapterId(chapter.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-blue-500/50 bg-[#121622] shadow-[0_0_25px_rgba(59,130,246,0.15)] ring-1 ring-blue-500/30'
                      : 'border-white/8 bg-[#0e1017] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-blue-400 font-semibold">{chapter.period}</span>
                    <span className="text-white/40">{chapter.countriesCount} {isAr ? 'دول' : 'countries'}</span>
                  </div>

                  <h3 className="font-display text-base font-bold text-white">
                    {isAr ? chapter.titleAr : chapter.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-white/50 mt-1 font-mono">
                    <MapPin className="w-3 h-3 text-red-400 shrink-0" />
                    <span>{isAr ? chapter.locationAr : chapter.location}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Chapter Radar HUD Card (7 cols) */}
          <div className="lg:col-span-7 rounded-[2rem] border border-white/12 bg-[#0e1017] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] chromatic-border space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/8">
              <div>
                <span className="font-mono text-xs text-blue-400 uppercase tracking-[0.12em]">
                  CHAPTER 0{activeChapter.id} // {activeChapter.period}
                </span>
                <h3 className="font-display text-[26px] font-bold text-white mt-1">
                  {isAr ? activeChapter.titleAr : activeChapter.title}
                </h3>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-blue-400">
                <Globe className="w-6 h-6" />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/8">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/40 mb-1">
                {isAr ? 'التركيز الأساسي والنطاق المعماري' : 'Strategic Focus & Fieldwork'}
              </p>
              <p className="text-sm text-white/80 leading-relaxed font-sans">
                {isAr ? activeChapter.focusAr : activeChapter.focus}
              </p>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/40 mb-3">
                {isAr ? 'أبرز الإنجازات والأنظمة المنفذة' : 'Core Systems & Milestone Highlights'}
              </p>
              <div className="space-y-2.5">
                {(isAr ? activeChapter.highlightsAr : activeChapter.highlights).map((hl, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/75">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/8 flex items-center justify-between text-xs font-mono text-white/40">
              <span>{isAr ? 'الانتشار: أوروبا، آسيا، الشرق الأوسط' : 'Coverage: UK, Europe, ME, Asia, Americas'}</span>
              <span className="text-blue-400">Total: 27 Countries</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
