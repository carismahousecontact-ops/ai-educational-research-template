import React from 'react';
import { Language } from '../types';
import { invitedTalks } from '../data/mockData';
import { ExternalLink, Terminal, Video, Radio, Mic } from 'lucide-react';

interface TalksProps {
  lang: Language;
}

export const InvitedTalksTerminal: React.FC<TalksProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <section id="talks" className="py-20 md:py-28 border-b border-white/8 bg-[#08090b]/82">
      <div className="max-w-7xl mx-auto px-6">
        {/* Antigravity Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-white/50 mb-2">
            <span className="text-blue-400">03 // KEYNOTES & DIALOGUES</span>
            <span aria-hidden="true">·</span>
            <span>Policy & Global Panels</span>
          </div>
          <h2 className="font-display text-[32px] md:text-[46px] font-bold tracking-[-0.03em] text-white">
            {isAr ? 'المحاضرات والجلسات الحوارية الدولية' : 'Invited Talks & Keynotes.'}
          </h2>
          <p className="mt-2 text-sm md:text-base text-white/65 font-normal">
            {isAr
              ? 'مشاركات رئيسية بدعوة من منظمات دولية ومراكز بحثية كبرى مثل اليونسكو، مركز ستانفورد للمراهقة، والمعهد الهندي للتكنولوجيا.'
              : 'Invited presentations, UNESCO panel dialogues, and policy interventions on cognitive science, planetary purpose, and the future of schooling.'}
          </p>
        </div>

        {/* Antigravity Dispatch Table / Card Grid */}
        <div className="rounded-[2rem] border border-white/10 bg-[#0e1017] divide-y divide-white/8 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {invitedTalks.map((talk) => (
            <div
              key={talk.id}
              className="p-6 sm:p-8 hover:bg-[#121520] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-blue-400 uppercase tracking-[0.1em]">
                    {isAr ? talk.convenorAr : talk.convenor}
                  </span>
                  <span className="font-mono text-xs text-white/30" aria-hidden="true">·</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white/5 text-white/60">
                    {isAr ? talk.roleAr : talk.role}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-[-0.01em]">
                  {isAr ? talk.titleAr : talk.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-sans">
                  {isAr ? talk.summaryAr : talk.summary}
                </p>
              </div>

              {/* Action Link & Year Stamp */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between shrink-0 gap-3">
                <span className="font-mono text-xs text-white/40 tabular-nums">
                  {talk.year}
                </span>

                <a
                  href={talk.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase tracking-[0.08em] text-white bg-white/5 hover:bg-white/15 border border-white/10 rounded-full transition-colors whitespace-nowrap"
                >
                  <span>{isAr ? talk.linkTextAr : talk.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
