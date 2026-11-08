import React, { useState } from 'react';
import { Language, EducationSkill } from '../types';
import { garethSkills } from '../data/mockData';
import { Play, RotateCcw, ShieldCheck, Terminal, Sparkles, Check, ArrowRight, Code, Cpu } from 'lucide-react';

interface CockpitProps {
  lang: Language;
}

export const LearningAgentCockpit: React.FC<CockpitProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [selectedSkillId, setSelectedSkillId] = useState<string>(garethSkills[0].id);
  const [activeMode, setActiveMode] = useState<'guarded' | 'unconstrained'>('guarded');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [customPrompt, setCustomPrompt] = useState<string>('');

  const activeSkill = garethSkills.find((s) => s.id === selectedSkillId) || garethSkills[0];

  const handleRunEvaluation = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 1200);
  };

  return (
    <section id="cockpit" className="py-20 md:py-28 border-b border-white/8 bg-[#090b0e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Antigravity Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-blue-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              <span>{isAr ? 'محاكي مهارات وكلاء التعليم' : 'Antigravity Agent Runtime'}</span>
              <span aria-hidden="true" className="text-white/20">/</span>
              <span className="text-white/60">Education Agent Skills IDE</span>
            </div>
            <h2 className="font-display text-[32px] md:text-[46px] font-bold tracking-[-0.03em] text-white">
              {isAr ? 'غرفة عمليات الحكمة التربوية' : 'Pedagogical Judgement Cockpit.'}
            </h2>
            <p className="mt-2 text-sm md:text-base text-white/65 max-w-2xl font-normal">
              {isAr
                ? 'اختبر كيف تمنع قواعد الحكمة التربوية الـ 165 نماذج الذكاء الاصطناعي من تقديم الإجابات الجاهزة، وتحولها إلى شريك يحفز التفكير الإنساني المستقل.'
                : 'Experience how 165 open-source pedagogical skills constrain AI models to scaffold learning, uphold cognitive load theory, and preserve learner agency.'}
            </p>
          </div>

          {/* Model status pill */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12141c] border border-white/10 text-xs font-mono text-white/70 self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>GEMINI 2.5 + EDUCATION SKILLS SDK</span>
          </div>
        </div>

        {/* Antigravity IDE Workbench Card */}
        <div className="rounded-[2rem] border border-white/12 bg-[#0d0f15] shadow-[0_24px_70px_rgba(0,0,0,0.7)] chromatic-border overflow-hidden">
          {/* Top IDE Toolbar */}
          <div className="px-6 py-4 border-b border-white/8 bg-[#11141c] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <span className="font-mono text-xs text-white/40">|</span>
              <span className="font-mono text-xs text-white/80 font-medium">
                skills/{activeSkill.id}.eval.ts
              </span>
            </div>

            {/* Guard Mode Toggle */}
            <div className="flex items-center gap-1 p-1 bg-black/40 border border-white/10 rounded-full text-xs font-mono">
              <button
                onClick={() => setActiveMode('guarded')}
                className={`px-3 py-1 rounded-full transition-all ${
                  activeMode === 'guarded'
                    ? 'bg-blue-600 text-white shadow-xs font-medium'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {isAr ? 'الحكمة التربوية مفعلة' : 'Pedagogy Guard: ON'}
              </button>
              <button
                onClick={() => setActiveMode('unconstrained')}
                className={`px-3 py-1 rounded-full transition-all ${
                  activeMode === 'unconstrained'
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {isAr ? 'نموذج خام غير مقيد' : 'Unconstrained AI'}
              </button>
            </div>
          </div>

          {/* IDE Main Split Layout (3 Columns / Panes) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
            {/* Left Pane: Skill Directory (3.5 cols) */}
            <div className="lg:col-span-4 p-5 border-b lg:border-b-0 lg:border-r border-white/8 bg-[#0b0c10] space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40 mb-3">
                {isAr ? 'حزم مهارات علوم التعلم' : 'Curated Skill Rules (165)'}
              </p>

              {garethSkills.map((skill) => {
                const isSelected = skill.id === activeSkill.id;
                return (
                  <div
                    key={skill.id}
                    onClick={() => setSelectedSkillId(skill.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-blue-500/50 bg-[#141824] shadow-[0_0_20px_rgba(59,130,246,0.15)] ring-1 ring-blue-500/30'
                        : 'border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono text-white/40 mb-1">
                      <span>{isAr ? skill.domainAr : skill.domain}</span>
                      <span className="text-emerald-400">{skill.invariantStatus}</span>
                    </div>
                    <p className="font-sans text-sm font-semibold text-white leading-snug">
                      {isAr ? skill.nameAr : skill.name}
                    </p>
                    <p className="mt-1 text-xs text-white/50 line-clamp-2">
                      {isAr ? skill.evidenceAr : skill.evidence}
                    </p>
                  </div>
                );
              })}

              <div className="pt-4 border-t border-white/8 text-[11px] font-mono text-white/40 flex items-center justify-between">
                <span>Total Domain Skills: 165</span>
                <span className="text-blue-400">v2.4 LTS</span>
              </div>
            </div>

            {/* Center Pane: Live Simulation & Prompt Execution (5 cols) */}
            <div className="lg:col-span-5 p-6 border-b lg:border-b-0 lg:border-r border-white/8 bg-[#0d0f14] flex flex-col justify-between space-y-5">
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-white/50">
                  <span>{isAr ? 'مدخلات الطالب / الفصل' : 'Student / Learner Prompt'}</span>
                  <span>Interactive Test</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#14161f] border border-white/10 text-xs font-mono text-white/90">
                  <p className="text-white/60 text-[10px] uppercase mb-1">PROMPT:</p>
                  <p className="italic">"{isAr ? activeSkill.testPromptAr : activeSkill.testPrompt}"</p>
                </div>

                {/* Model Execution Output */}
                <div className="mt-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-white/50">
                      {activeMode === 'guarded'
                        ? isAr
                          ? 'استجابة الوكيل بالحكمة التربوية المقيدة:'
                          : 'Agent Response (Pedagogical Guard Active):'
                        : isAr
                        ? 'استجابة نموذج خام غير مقيد (تسريب الحل):'
                        : 'Agent Response (Unconstrained Model):'}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        activeMode === 'guarded'
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : 'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}
                    >
                      {activeMode === 'guarded' ? 'Pedagogy Active' : 'Cognitive Theft Risk'}
                    </span>
                  </div>

                  <div
                    className={`p-4 rounded-xl text-xs font-sans leading-relaxed border transition-all ${
                      isRunning
                        ? 'opacity-50 animate-pulse'
                        : activeMode === 'guarded'
                        ? 'bg-[#121622] border-blue-500/30 text-white shadow-sm'
                        : 'bg-red-950/20 border-red-500/20 text-red-200'
                    }`}
                  >
                    {activeMode === 'guarded' ? (
                      <p>{isAr ? activeSkill.agentResponseAr : activeSkill.agentResponse}</p>
                    ) : (
                      <p>
                        {isAr
                          ? 'الإجابة هي الخيار (B): يرتفع الهواء الساخن بسبب انخفاض كثافته ووجود قوة دفع للأعلى.'
                          : 'The answer is B. Heat rises because warmer air expands and becomes less dense than the surrounding cooler air, causing buoyancy.'}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-white/8 flex items-center justify-between">
                <span className="font-mono text-xs text-white/40">
                  {isAr ? 'التحقق من ثوابت المعرفة' : 'AST Semantic Verification'}
                </span>

                <button
                  onClick={handleRunEvaluation}
                  disabled={isRunning}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-[0.1em] text-black bg-white rounded-full hover:bg-white/90 transition-all shadow-sm disabled:opacity-50"
                >
                  <Play className="w-3.5 h-3.5 fill-black" />
                  <span>{isRunning ? (isAr ? 'جاري الفحص...' : 'Evaluating...') : isAr ? 'إعادة التقييم' : 'Re-Run Evaluation'}</span>
                </button>
              </div>
            </div>

            {/* Right Pane: AST Invariant Assertion & Terminal (3.5 cols) */}
            <div className="lg:col-span-3 p-5 bg-[#090a0d] flex flex-col justify-between font-mono text-xs">
              <div className="space-y-4">
                <p className="text-[11px] uppercase tracking-[0.14em] text-white/40">
                  {isAr ? 'فاحص ثوابت علوم التعلم' : 'Cognitive Load Calipers'}
                </p>

                {/* Metrics boxes */}
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-white/[0.03] border border-white/8 flex items-center justify-between">
                    <span className="text-white/60">Solution Leakage</span>
                    <span className={`font-semibold ${activeMode === 'guarded' ? 'text-emerald-400' : 'text-red-400'}`}>
                      {activeMode === 'guarded' ? '0.0% (PASS)' : '100% (FAIL)'}
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-white/[0.03] border border-white/8 flex items-center justify-between">
                    <span className="text-white/60">Socratic Friction</span>
                    <span className="text-blue-400 font-semibold">
                      {activeMode === 'guarded' ? '0.92 (HIGH)' : '0.00 (NONE)'}
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-white/[0.03] border border-white/8 flex items-center justify-between">
                    <span className="text-white/60">Agency Invariant</span>
                    <span className={`font-semibold ${activeMode === 'guarded' ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {activeMode === 'guarded' ? 'PRESERVED' : 'BYPASSED'}
                    </span>
                  </div>
                </div>

                {/* Declarative Rule AST */}
                <div className="pt-2">
                  <p className="text-[10px] text-white/40 uppercase mb-1.5">Rule Invariant AST:</p>
                  <pre className="p-3 rounded-lg bg-black border border-white/8 text-[10px] text-blue-300 overflow-x-auto leading-relaxed">
                    {activeSkill.ruleCode}
                  </pre>
                </div>
              </div>

              {/* Terminal Footer */}
              <div className="mt-4 pt-3 border-t border-white/8 text-[10px] text-white/40">
                <span>VM: #sandbox-pedagogy-skills</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
