import React from 'react';
import { Language } from '../types';
import { ArrowRight, Terminal, BookOpen, BrainCircuit, ShieldCheck, Lightbulb } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onExploreCockpit: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onExploreCockpit, onExploreProjects }) => {
  const isAr = lang === 'ar';

  return (
    <section className="relative pt-14 pb-20 md:pt-20 md:pb-28 border-b border-[var(--logos-gold)]/15 overflow-hidden logos-hero">
      <div className="absolute inset-0 pointer-events-none logos-hero-grid opacity-40" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.18em] text-white/45 mb-9">
          <span className="flex items-center gap-2 text-[var(--logos-gold)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--logos-gold)] animate-pulse" />
            LOGOS <span className="text-white/25">/</span> INTELLIGENCE GATEWAY
          </span>
          <span aria-hidden="true" className="text-white/20">/</span>
          <span>{isAr ? 'منظومة الحكمة التربوية والذكاء الاصطناعي' : 'Educational wisdom & responsible AI'}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex self-start items-center gap-2 rounded-full border border-[var(--logos-gold)]/25 bg-[var(--logos-gold)]/[0.07] px-3 py-1.5 text-[10px] sm:text-xs text-[var(--logos-ivory)] mb-6">
              <BrainCircuit className="w-3.5 h-3.5" />
              {isAr ? 'غرفة عمليات الحكمة التربوية' : 'Educational Wisdom Operations'}
            </div>
            <h1 className="font-display text-[clamp(2.5rem,4.8vw,4.5rem)] font-bold tracking-[-0.03em] leading-[1.18] text-white text-balance">
              {isAr ? (
                <>حين تقود <span className="logos-gold-text">الحكمةُ</span> الذكاء الاصطناعي، يصبح التفكير الإنساني هو الغاية.</>
              ) : (
                <>When <span className="logos-gold-text">wisdom</span> guides AI, human thinking remains the purpose.</>
              )}
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-[1.95] text-white/65 max-w-2xl">
              {isAr
                ? 'منظومة تربوية بحثية تحوّل المبادئ إلى آليات عملية تضبط سلوك الذكاء الاصطناعي: أسئلة سقراطية، وتلميحات متدرجة، واستدلال موثّق؛ كي تدعم المتعلم في بناء فهمه بدلاً من أن تفكر نيابةً عنه.'
                : 'A research-led educational framework translating pedagogical principles into practical AI behavior: Socratic questioning, graduated hints, and grounded reasoning that help learners build understanding rather than outsource their thinking.'}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button onClick={onExploreCockpit} className="group flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[var(--logos-navy-deep)] bg-gradient-to-r from-[var(--logos-ivory)] to-[var(--logos-gold)] rounded-full hover:brightness-105 transition-all shadow-[0_0_28px_rgba(216,182,111,0.18)] whitespace-nowrap">
                <Terminal className="w-4 h-4" />
                <span>{isAr ? 'ادخل غرفة العمليات' : 'Enter the operations room'}</span>
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </button>
              <button onClick={onExploreProjects} className="flex items-center gap-2 px-5 py-3.5 text-sm text-white/85 hover:text-white bg-white/[0.04] border border-white/15 hover:border-[var(--logos-gold)]/45 rounded-full transition-colors whitespace-nowrap">
                <BookOpen className="w-4 h-4 text-[var(--logos-cyan)]" />
                <span>{isAr ? 'استكشف الإطار والمشاريع' : 'Explore the framework'}</span>
              </button>
            </div>

            <div className="mt-11 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-5 text-sm">
              <div className="flex items-start gap-3"><Lightbulb className="w-5 h-5 text-[var(--logos-gold)] shrink-0 mt-0.5" /><div><p className="text-white font-semibold">{isAr ? 'تعزيز التفكير' : 'Thinking first'}</p><p className="text-xs text-white/45 mt-1">{isAr ? 'لا إجابات جاهزة تحل محل المتعلم' : 'No shortcuts that replace the learner'}</p></div></div>
              <div className="flex items-start gap-3"><BrainCircuit className="w-5 h-5 text-[var(--logos-cyan)] shrink-0 mt-0.5" /><div><p className="text-white font-semibold">{isAr ? 'سقراطية متدرجة' : 'Guided inquiry'}</p><p className="text-xs text-white/45 mt-1">{isAr ? 'أسئلة وتلميحات بحسب الحاجة' : 'Questions and graduated hints'}</p></div></div>
              <div className="flex items-start gap-3"><ShieldCheck className="w-5 h-5 text-[var(--logos-gold)] shrink-0 mt-0.5" /><div><p className="text-white font-semibold">{isAr ? 'مسؤولية موثّقة' : 'Accountable AI'}</p><p className="text-xs text-white/45 mt-1">{isAr ? 'أدلة وحدود ومساءلة منهجية' : 'Evidence, boundaries, and review'}</p></div></div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="logos-emblem-card logos-spotlight-card relative rounded-[2rem] border border-[var(--logos-gold)]/25 bg-gradient-to-br from-[#112238]/95 via-[#0b1727]/95 to-[#0a111d] p-5 sm:p-7 shadow-[0_28px_80px_rgba(0,0,0,0.48)] overflow-hidden">
              <div className="absolute -top-24 -right-20 w-64 h-64 rounded-full bg-[var(--logos-gold)]/[0.09] blur-3xl" />
              <div className="absolute -bottom-24 -left-20 w-64 h-64 rounded-full bg-sky-400/[0.10] blur-3xl" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-full flex items-center justify-between text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/35">
                  <span>LOGOS / 01</span><span>INTELLIGENCE GATEWAY</span>
                </div>
                <div className="logos-emblem-orbit my-5 w-full max-w-[310px] aspect-square flex items-center justify-center">
                  <img src="/logos-mark.svg" alt={isAr ? 'رمز LOGOS لشبكة معرفية متفرعة' : 'LOGOS branching intelligence emblem'} className="w-[88%] h-[88%] object-contain drop-shadow-[0_0_30px_rgba(214,180,110,0.18)]" />
                </div>
                <div className="text-[#f0d79e] font-display text-3xl sm:text-4xl font-bold tracking-[0.24em]">LOGOS</div>
                <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.23em] text-sky-200/75">Intelligence Gateway</div>
                <div className="mt-5 w-full border-t border-white/10 pt-4 flex items-center justify-between gap-3 text-[10px] sm:text-xs text-white/50">
                  <span>{isAr ? 'الحكمة تقود التقنية' : 'Wisdom guides technology'}</span>
                  <span className="text-[var(--logos-gold)]">{isAr ? 'الإنسان أولاً' : 'Human first'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
