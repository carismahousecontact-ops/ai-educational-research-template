import React from 'react';
import { Language } from '../types';
import { ArrowUpRight, Github, ExternalLink, Globe } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenZeroG: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenZeroG }) => {
  const isAr = lang === 'ar';

  return (
    <footer className="border-t border-white/8 bg-[#060709]/88 py-16 transition-colors relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/8">
          {/* Column 1: Platform Brand (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-blue-500 via-rose-500 to-amber-400 p-[1px]">
                <div className="w-full h-full rounded-full bg-[#08090b]/82" />
              </div>
              <span className="font-display text-lg font-bold text-white">
                Antigravity
              </span>
              <span className="font-mono text-xs text-white/40">
                · {isAr ? 'عمارة النظم المعرفية' : 'Cognitive Systems Architecture'}
              </span>
            </div>

            <p className="text-sm leading-relaxed text-white/60 max-w-sm font-normal">
              {isAr
                ? 'منظومة معمارية وبيئة تشغيل مفتوحة المصدر لمهارات وكلاء الذكاء الاصطناعي التعليمية القائمة على الدليل، ونظم علوم الذاكرة، والنمذجة الطوبولوجية للمناهج.'
                : 'An open architectural platform and runtime for evidence-grounded AI education agent skills, memory science systems, and topological knowledge graph modeling.'}
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenZeroG}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>{isAr ? 'فتح محاكي انعدام الجاذبية' : 'Launch Zero-G Simulation'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 2: Open Tools & Systems (3 cols) */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <p className="uppercase tracking-[0.16em] text-white/80 font-semibold">
              {isAr ? 'الأدوات والأنظمة' : 'Tools & Systems'}
            </p>
            <ul className="space-y-2 text-white/60">
              <li>
                <a
                  href="https://github.com/GarethManning/education-agent-skills"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Education Agent Skills</span>
                  <ExternalLink className="w-3 h-3 text-white/30" />
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Hippo Memory Architecture
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Global Impact Credential
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Shape of Knowledge Engine
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Global Panels & Research (4 cols) */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <p className="uppercase tracking-[0.16em] text-white/80 font-semibold">
              {isAr ? 'الأبحاث والسياسات الدولية' : 'Research & Policy Panels'}
            </p>
            <ul className="space-y-2 text-white/60">
              <li>
                <a href="#talks" className="hover:text-white transition-colors">
                  The Purpose Hub · Stanford Adolescence
                </a>
              </li>
              <li>
                <a href="#talks" className="hover:text-white transition-colors">
                  UNESCO MGIEP · The Blue Dot (Issue 13)
                </a>
              </li>
              <li>
                <a href="#talks" className="hover:text-white transition-colors">
                  IIT Gandhinagar · Cognitive Science Lab
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Quiet Copyright & Technical specs */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <p>
            © {new Date().getFullYear()} Antigravity Learning Systems. Open Pedagogical Architecture.
          </p>
          <div className="flex items-center gap-4">
            <span>Open Source Protocol</span>
            <span aria-hidden="true">·</span>
            <span>165 Invariant Skills</span>
            <span aria-hidden="true">·</span>
            <span>Zero-Trust AST Evaluation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
