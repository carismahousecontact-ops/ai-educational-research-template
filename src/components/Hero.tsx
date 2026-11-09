import React from 'react';
import { Language } from '../types';
import { ArrowRight, Terminal, Sparkles, BookOpen, Layers } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onExploreCockpit: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onExploreCockpit,
  onExploreProjects
}) => {
  const isAr = lang === 'ar';

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 border-b border-white/8 overflow-hidden gravity-glow">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Antigravity Kicker & Technical Coordinates */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.16em] text-white/50 mb-8">
          <span className="flex items-center gap-2 text-blue-400">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span>ANTIGRAVITY // RESEARCH & LEARNING</span>
          </span>
          <span aria-hidden="true" className="text-white/20">/</span>
          <span>{isAr ? 'البحث وعلوم التعلم والذكاء الاصطناعي' : 'Research · Learning Science · AI'}</span>
          <span aria-hidden="true" className="text-white/20">/</span>
          <span className="text-white/40">Evidence-informed practice</span>
        </div>

        {/* Oversized Antigravity Landing Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Headline & Architecture (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="font-display text-[42px] sm:text-[62px] lg:text-[74px] font-bold tracking-[-0.035em] leading-[1.02] text-white text-balance">
              {isAr ? (
                <>
                  من البحث إلى التطبيق <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                    والابتكار التربوي المسؤول.
                  </span>
                </>
              ) : (
                <>
                  Research, learning science, and <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                    responsible AI innovation.
                  </span>
                </>
              )}
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/65 max-w-2xl font-normal">
              {isAr
                ? 'منصة بحثية وتطبيقية تستكشف تقاطع علوم التعلم والبحث التربوي والذكاء الاصطناعي، وتحول الأدلة والأفكار إلى مشاريع ومهارات وتجارب تعليمية أكثر فاعلية ومسؤولية.'
                : 'A research and applied innovation platform connecting learning science, educational research, and AI through projects, reusable skills, and evidence-informed learning experiences.'}
            </p>

            {/* Antigravity Primary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreCockpit}
                className="group flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium text-black bg-white rounded-full hover:bg-white/90 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] whitespace-nowrap"
              >
                <Terminal className="w-4 h-4 text-blue-600" />
                <span>{isAr ? 'استكشف مهارات الوكلاء' : 'Explore agent skills'}</span>
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </button>

              <button
                onClick={onExploreProjects}
                className="flex items-center gap-2 px-5 py-3.5 text-sm font-mono uppercase tracking-[0.08em] text-white/80 hover:text-white bg-[#182235]/78 border border-white/12 hover:border-white/25 rounded-full transition-colors whitespace-nowrap"
              >
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span>{isAr ? 'استكشف المشاريع' : 'Explore projects'}</span>
              </button>
            </div>

            {/* Platform pillars — descriptive, not vanity metrics */}
            <div className="mt-10 pt-6 border-t border-white/8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div>
                <p className="text-white/40 uppercase tracking-[0.1em]">{isAr ? 'المرجعية' : 'Foundation'}</p>
                <p className="text-white font-semibold text-sm mt-0.5">{isAr ? 'علوم التعلم' : 'Learning science'}</p>
              </div>
              <div>
                <p className="text-white/40 uppercase tracking-[0.1em]">{isAr ? 'الممارسة' : 'Practice'}</p>
                <p className="text-white font-semibold text-sm mt-0.5">{isAr ? 'مشاريع ومختبرات' : 'Projects & labs'}</p>
              </div>
              <div>
                <p className="text-white/40 uppercase tracking-[0.1em]">{isAr ? 'القدرات' : 'Capabilities'}</p>
                <p className="text-white font-semibold text-sm mt-0.5">{isAr ? 'مهارات ووكلاء' : 'Skills & agents'}</p>
              </div>
              <div>
                <p className="text-white/40 uppercase tracking-[0.1em]">{isAr ? 'المساءلة' : 'Quality'}</p>
                <p className="text-blue-400 font-semibold text-sm mt-0.5">{isAr ? 'تقييم قائم على الأدلة' : 'Evidence-led evaluation'}</p>
              </div>
            </div>
          </div>

          {/* Column 2: Antigravity Console Visual (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[2rem] border border-white/12 bg-[#111827]/62 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.6)] chromatic-border group overflow-hidden">
              <div className="relative aspect-[16/10] rounded-[1.4rem] overflow-hidden bg-black">
                <img
                  src="/src/assets/images/antigravity_manning_hero_1794169806515.jpg"
                  alt="Antigravity learning systems and cognitive architecture console"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-transparent to-transparent pointer-events-none" />

                {/* Live Console HUD Card */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#12141c]/90 backdrop-blur-md border border-white/10 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-white font-medium">RESEARCH & LEARNING SYSTEMS</span>
                    </div>
                    <span className="text-blue-400 tabular-nums">EVIDENCE-LED</span>
                  </div>
                  <p className="text-[11px] text-white/50 mt-1 truncate">
                    {isAr ? 'بحث تربوي · تصميم تعليمي · تقييم مسؤول' : 'Research · Learning Design · Responsible Evaluation'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
