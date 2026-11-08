import React, { useState } from 'react';
import { Language, ProjectItem } from '../types';
import { garethProjects } from '../data/mockData';
import { ArrowUpRight, Check, X, Layers, ExternalLink, Cpu, BookOpen, Sparkles } from 'lucide-react';

interface ProjectsProps {
  lang: Language;
}

export const ProjectsMatrix: React.FC<ProjectsProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [filter, setFilter] = useState<string>('all');
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectItem | null>(null);

  const filteredProjects =
    filter === 'all'
      ? garethProjects
      : garethProjects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-white/8 bg-[#08090b]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Antigravity Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-white/50 mb-2">
              <span className="text-blue-400">01 // ECOSYSTEM MATRIX</span>
              <span aria-hidden="true">·</span>
              <span>{isAr ? 'ثلاثة مسارات عمل' : 'Three Kinds of Work'}</span>
            </div>
            <h2 className="font-display text-[32px] md:text-[46px] font-bold tracking-[-0.03em] text-white">
              {isAr ? 'المشاريع والأنظمة التعليمية المختارة' : 'Selected Work & Systems.'}
            </h2>
            <p className="mt-2 text-sm md:text-base text-white/65 max-w-2xl font-normal">
              {isAr
                ? 'أدوات برمجية، أنظمة تصميم، وأفكار عامة — تعبيرات مختلفة لنفس المعضلة: تحويل الأفكار الجديرة بالاهتمام إلى ممارسة حية مستدامة.'
                : 'Tools, designed systems, and public ideas — different expressions of the same problem: turning worthwhile ideas into practice people can sustain.'}
            </p>
          </div>

          {/* Antigravity Filter Tabs (Functional segmented buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#12141c] border border-white/10 rounded-full self-start md:self-auto text-xs font-mono">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                filter === 'all' ? 'bg-white text-black font-medium' : 'text-white/60 hover:text-white'
              }`}
            >
              {isAr ? 'الكل' : 'All Systems'}
            </button>
            <button
              onClick={() => setFilter('Build tools')}
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                filter === 'Build tools' ? 'bg-white text-black font-medium' : 'text-white/60 hover:text-white'
              }`}
            >
              {isAr ? 'أدوات برمجية' : 'Build Tools'}
            </button>
            <button
              onClick={() => setFilter('Design systems')}
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                filter === 'Design systems' ? 'bg-white text-black font-medium' : 'text-white/60 hover:text-white'
              }`}
            >
              {isAr ? 'أنظمة التصميم' : 'Design Systems'}
            </button>
            <button
              onClick={() => setFilter('Ideas & public work')}
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                filter === 'Ideas & public work' ? 'bg-white text-black font-medium' : 'text-white/60 hover:text-white'
              }`}
            >
              {isAr ? 'أفكار وكتابات' : 'Ideas & Public'}
            </button>
          </div>
        </div>

        {/* Antigravity Modular Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                onClick={() => setActiveCaseStudy(project)}
                className="group relative flex flex-col justify-between rounded-[1.75rem] border border-white/10 bg-[#0e1017] p-7 hover:border-white/25 hover:bg-[#121520] transition-all duration-300 cursor-pointer overflow-hidden shadow-[0_16px_50px_rgba(0,0,0,0.5)]"
              >
                <div>
                  {/* Top Metadata & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">
                      {isAr ? project.categoryAr : project.category}
                    </span>
                    <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-blue-300">
                      {isAr ? project.badgeAr : project.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display text-[22px] font-bold text-white tracking-[-0.02em] group-hover:text-blue-300 transition-colors">
                    {isAr ? project.titleAr : project.title}
                  </h3>
                  <p className="font-serif italic text-sm text-white/50 mt-1">
                    {isAr ? project.taglineAr : project.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-xs leading-relaxed text-white/65 line-clamp-3">
                    {isAr ? project.descriptionAr : project.description}
                  </p>
                </div>

                {/* Footer Metric & Action */}
                <div className="mt-6 pt-4 border-t border-white/8 flex items-center justify-between text-xs font-mono">
                  <span className="text-white/45 truncate max-w-[180px]">
                    {project.metrics.value}
                  </span>
                  <span className="text-blue-400 group-hover:text-white flex items-center gap-1 transition-colors">
                    <span>{isAr ? 'دراسة الحالة' : 'Case study'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Antigravity Edge Accent on Hover */}
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Inspector Modal */}
      {activeCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-2xl w-full max-h-[85vh] bg-[#0f1118] border border-white/15 rounded-[2rem] shadow-2xl overflow-y-auto p-8 sm:p-10 chromatic-border">
            <button
              onClick={() => setActiveCaseStudy(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-white/40 mb-3">
              <span>{isAr ? activeCaseStudy.categoryAr : activeCaseStudy.category}</span>
              <span aria-hidden="true">·</span>
              <span className="text-blue-400">{isAr ? activeCaseStudy.badgeAr : activeCaseStudy.badge}</span>
            </div>

            <h2 className="font-display text-[28px] sm:text-[34px] font-bold text-white tracking-[-0.03em]">
              {isAr ? activeCaseStudy.titleAr : activeCaseStudy.title}
            </h2>
            <p className="font-serif italic text-base text-white/60 mt-1">
              {isAr ? activeCaseStudy.taglineAr : activeCaseStudy.tagline}
            </p>

            <div className="mt-8 space-y-6 text-xs sm:text-sm font-sans leading-relaxed text-white/80">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/8">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-red-400 mb-1.5">
                  {isAr ? 'المعضلة التعليمية (The Problem)' : 'The Problem Space'}
                </p>
                <p>{isAr ? activeCaseStudy.caseStudy.problemAr : activeCaseStudy.caseStudy.problem}</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/8">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-blue-400 mb-1.5">
                  {isAr ? 'البنية التقنية والمعرفية (Architecture)' : 'Architecture & Pedagogy'}
                </p>
                <p>{isAr ? activeCaseStudy.caseStudy.architectureAr : activeCaseStudy.caseStudy.architecture}</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/8">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-emerald-400 mb-1.5">
                  {isAr ? 'الأثر والمخرجات الميدانية (Outcome)' : 'Empirical Outcome'}
                </p>
                <p>{isAr ? activeCaseStudy.caseStudy.outcomeAr : activeCaseStudy.caseStudy.outcome}</p>
              </div>
            </div>

            {/* Links */}
            {activeCaseStudy.links && activeCaseStudy.links.length > 0 && (
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                {activeCaseStudy.links.map((lnk, lIdx) => (
                  <a
                    key={lIdx}
                    href={lnk.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase tracking-[0.1em] text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <span>{isAr ? lnk.titleAr : lnk.title}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
