import React, { useState } from 'react';
import { Language, EssayItem } from '../types';
import { garethEssays } from '../data/mockData';
import { ArrowUpRight, BookOpen, X, Clock, Calendar } from 'lucide-react';

interface WritingProps {
  lang: Language;
}

export const WritingReader: React.FC<WritingProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [selectedEssay, setSelectedEssay] = useState<EssayItem | null>(null);

  return (
    <section id="writing" className="py-20 md:py-28 border-b border-white/8 bg-[#0b1018]/34">
      <div className="max-w-7xl mx-auto px-6">
        {/* Antigravity Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-white/50 mb-2">
            <span className="text-blue-400">04 // ARCHITECTURAL ESSAYS</span>
            <span aria-hidden="true">·</span>
            <span>{isAr ? 'الأفكار والمقالات' : 'The Writing'}</span>
          </div>
          <h2 className="font-display text-[32px] md:text-[46px] font-bold tracking-[-0.03em] text-white">
            {isAr ? 'الكتابات والملاحظات الميدانية' : 'Essays, Arguments & Field Notes.'}
          </h2>
          <p className="mt-2 text-sm md:text-base text-white/65 font-normal">
            {isAr
              ? 'مقالات دورية معمقة تتناول هندسة النظم التعليمية، وعلوم الإدراك، والحكمة التربوية في مواجهة التوليد الآلي السطحي.'
              : 'Long-form writing on the future of schooling, cognitive science, and why pedagogical judgement is the scarce layer in the AI era.'}
          </p>
        </div>

        {/* Modular Essay Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {garethEssays.map((essay) => (
            <div
              key={essay.id}
              onClick={() => setSelectedEssay(essay)}
              className="group relative rounded-[2rem] border border-white/10 bg-[#111827]/62 p-8 hover:border-white/25 hover:bg-[#1b2638]/78 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between shadow-[0_16px_50px_rgba(0,0,0,0.5)]"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-white/40 mb-3">
                  <span>{isAr ? essay.seriesAr : essay.series}</span>
                  <span>{essay.readTime} · {essay.date}</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white tracking-[-0.02em] group-hover:text-blue-300 transition-colors">
                  {isAr ? essay.titleAr : essay.title}
                </h3>

                <p className="mt-4 text-xs sm:text-sm text-white/65 leading-relaxed">
                  {isAr ? essay.abstractAr : essay.abstract}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/8 flex items-center justify-between text-xs font-mono">
                <span className="text-white/40">Open Educational Architecture Series</span>
                <span className="text-blue-400 group-hover:text-white flex items-center gap-1">
                  <span>{isAr ? 'قراءة المقال كاملاً' : 'Read Full Essay'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Full Essay Modal */}
      {selectedEssay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-2xl w-full max-h-[85vh] bg-[#0e1018] border border-white/15 rounded-[2rem] shadow-2xl overflow-y-auto p-8 sm:p-10 chromatic-border">
            <button
              onClick={() => setSelectedEssay(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-white/40 mb-3">
              <span>{isAr ? selectedEssay.seriesAr : selectedEssay.series}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedEssay.readTime}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedEssay.date}</span>
            </div>

            <h2 className="font-display text-[26px] sm:text-[32px] font-bold text-white tracking-[-0.03em] leading-tight">
              {isAr ? selectedEssay.titleAr : selectedEssay.title}
            </h2>

            <div className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/8 italic text-xs sm:text-sm text-white/70 font-serif leading-relaxed">
              "{isAr ? selectedEssay.abstractAr : selectedEssay.abstract}"
            </div>

            <div className="mt-6 space-y-4 text-xs sm:text-sm font-sans leading-relaxed text-white/80">
              {(isAr ? selectedEssay.bodyParagraphsAr : selectedEssay.bodyParagraphs).map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/40">
              <span>Antigravity // Cognitive Learning Systems Monograph</span>
              <button
                onClick={() => setSelectedEssay(null)}
                className="px-4 py-2 text-black bg-white rounded-full hover:bg-white/90 font-medium transition-colors"
              >
                {isAr ? 'إغلاق المقال' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
