import React, { useState } from 'react';
import { Language } from '../types';
import { BrainCircuit, Lightbulb, RotateCcw, X, ArrowLeft, ArrowRight, Eye } from 'lucide-react';

interface ThinkChallengeProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

const challenges = [
  {
    id: 'learning',
    category: 'التعلم والتقويم',
    categoryEn: 'Learning & assessment',
    question: 'إذا قدّم الذكاء الاصطناعي إجابة صحيحة للمتعلم، فهل يعني ذلك أنه تعلّم؟',
    questionEn: 'If AI gives a learner the correct answer, does that mean learning has happened?',
    context: 'ميّز بين امتلاك الإجابة والقدرة على تفسيرها وتطبيقها في موقف جديد.',
    contextEn: 'Distinguish possessing an answer from being able to explain and apply it in a new situation.',
    hints: [
      'ما الدليل الذي تراه أنت، بوصفك معلماً، على أن الفهم قد حدث؟',
      'تخيّل أن المتعلم أغلق الأداة الآن. ما الذي يستطيع فعله بمفرده؟',
    ],
    hintsEn: [
      'What evidence would convince you, as an educator, that understanding has occurred?',
      'Imagine the learner closes the tool now. What can they still do independently?',
    ],
    reflection: 'صمّم مهمة قصيرة تكشف انتقال المتعلم من تكرار الإجابة إلى توظيف الفكرة.',
    reflectionEn: 'Design a short task that reveals whether the learner can move from repeating an answer to using the underlying idea.',
  },
  {
    id: 'bias',
    category: 'التفكير النقدي',
    categoryEn: 'Critical thinking',
    question: 'قدّم نظام ذكي تفسيراً مقنعاً، لكنه استند إلى مصدر واحد. هل تقبل النتيجة؟',
    questionEn: 'An AI system gives a persuasive explanation based on a single source. Would you accept its conclusion?',
    context: 'افصل بين قوة الصياغة وقوة الدليل، وفكّر في البدائل الممكنة.',
    contextEn: 'Separate persuasive wording from evidential strength, and consider plausible alternatives.',
    hints: [
      'ما المعلومات التي تحتاجها قبل الحكم على موثوقية التفسير؟',
      'كيف يمكن لمصدر مستقل أو تفسير منافس أن يغيّر استنتاجك؟',
    ],
    hintsEn: [
      'What information would you need before judging the explanation’s reliability?',
      'How might an independent source or competing explanation change your conclusion?',
    ],
    reflection: 'اكتب معيارين للتحقق من ادعاء قبل استخدامه في قرار تربوي.',
    reflectionEn: 'Write two criteria for checking a claim before using it in an educational decision.',
  },
  {
    id: 'agency',
    category: 'استقلالية المتعلم',
    categoryEn: 'Learner agency',
    question: 'كيف تساعد متعلماً متعثراً دون أن تسلبه فرصة اكتشاف الحل بنفسه؟',
    questionEn: 'How do you help a struggling learner without taking away the chance to discover a solution?',
    context: 'وازن بين تقديم الدعم والمحافظة على مسؤولية المتعلم عن مسار تفكيره.',
    contextEn: 'Balance useful support with the learner’s ownership of their thinking process.',
    hints: [
      'ما أصغر مساعدة يمكن أن تحرّك التفكير دون أن تكشف الحل؟',
      'ما العلامة التي تخبرك أن الوقت قد حان لتقليل الدعم؟',
    ],
    hintsEn: [
      'What is the smallest hint that could move thinking forward without revealing the answer?',
      'What signal tells you it is time to reduce the support?',
    ],
    reflection: 'حوّل إجابة مباشرة إلى ثلاثة أسئلة متدرجة تقود المتعلم نحو الحل.',
    reflectionEn: 'Turn a direct answer into three graduated questions that guide the learner toward a solution.',
  },
];

export const ThinkChallenge: React.FC<ThinkChallengeProps> = ({ lang, isOpen, onClose }) => {
  const isAr = lang === 'ar';
  const [index, setIndex] = useState(0);
  const [hintLevel, setHintLevel] = useState(0);
  const [response, setResponse] = useState('');
  const [showReflection, setShowReflection] = useState(false);
  const challenge = challenges[index];

  const reset = () => {
    setHintLevel(0);
    setResponse('');
    setShowReflection(false);
  };
  const changeChallenge = (next: number) => {
    setIndex((next + challenges.length) % challenges.length);
    reset();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#020812]/85 p-3 backdrop-blur-md sm:p-6" role="dialog" aria-modal="true" aria-labelledby="think-challenge-title" dir={isAr ? 'rtl' : 'ltr'}>
      <section className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-[#d6b46e]/25 bg-[#0b1725] shadow-[0_25px_100px_rgba(0,0,0,.6)]">
        <header className="flex items-center justify-between border-b border-white/10 bg-white/[0.025] px-5 py-4 sm:px-7">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200"><BrainCircuit className="h-5 w-5" /></span>
            <div>
              <h2 id="think-challenge-title" className="font-display text-lg font-bold text-[#f3d99e]">{isAr ? 'تحدّي التفكير' : 'Think Challenge'}</h2>
              <p className="text-[11px] text-white/50">LOGOS · {isAr ? 'فكّر قبل أن تطلب الإجابة' : 'Think before asking for the answer'}</p>
            </div>
          </div>
          <button onClick={onClose} aria-label={isAr ? 'إغلاق' : 'Close'} className="rounded-full p-2 text-white/55 transition hover:bg-white/10 hover:text-white"><X className="h-5 w-5" /></button>
        </header>

        <div className="overflow-y-auto p-5 sm:p-7">
          <div className="mb-5 flex items-center justify-between gap-3">
            <span className="rounded-full border border-amber-200/20 bg-amber-200/[0.06] px-3 py-1.5 text-xs text-amber-100/85">{isAr ? challenge.category : challenge.categoryEn}</span>
            <span className="text-xs tabular-nums text-white/45">{index + 1} / {challenges.length}</span>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#101f30] p-5 sm:p-6">
            <p className="mb-3 text-[10px] font-semibold tracking-[.16em] text-cyan-200/75">{isAr ? 'السؤال المحفّز' : 'THE THINKING PROMPT'}</p>
            <h3 className="text-xl font-bold leading-relaxed text-white sm:text-2xl">{isAr ? challenge.question : challenge.questionEn}</h3>
            <p className="mt-3 text-sm leading-7 text-white/60">{isAr ? challenge.context : challenge.contextEn}</p>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <button onClick={() => setHintLevel((v) => Math.min(2, v + 1))} disabled={hintLevel >= 2} className="inline-flex items-center gap-2 rounded-full border border-cyan-200/25 bg-cyan-200/[0.07] px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-200/15 disabled:cursor-not-allowed disabled:opacity-40">
              <Lightbulb className="h-4 w-4" />{isAr ? (hintLevel === 0 ? 'أعطني تلميحاً' : hintLevel === 1 ? 'التلميح التالي' : 'اكتملت التلميحات') : (hintLevel === 0 ? 'Give me a hint' : hintLevel === 1 ? 'Next hint' : 'All hints shown')}
            </button>
            <span className="text-xs text-white/40">{isAr ? 'تلميحات متدرجة دون كشف الحل' : 'Graduated hints, not ready-made answers'}</span>
          </div>
          {hintLevel > 0 && <div className="mt-3 space-y-2">{challenge.hints.slice(0, hintLevel).map((hint, i) => <div key={i} className="flex gap-3 rounded-xl border border-cyan-200/10 bg-cyan-200/[0.045] p-3 text-sm leading-6 text-cyan-50/90"><span className="font-mono text-cyan-300/70">{i + 1}</span><p>{isAr ? hint : challenge.hintsEn[i]}</p></div>)}</div>}

          <label className="mt-6 block text-sm font-semibold text-white/85" htmlFor="think-response">{isAr ? 'مساحة تفكيرك' : 'Your thinking space'}</label>
          <textarea id="think-response" value={response} onChange={(e) => setResponse(e.target.value)} rows={4} placeholder={isAr ? 'دوّن فرضيتك أو حجتك أو السؤال الذي تريد استكشافه...' : 'Write your hypothesis, reasoning, or the question you want to explore...'} className="mt-2 w-full resize-y rounded-xl border border-white/15 bg-[#07111d] p-4 text-sm leading-7 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-200/50 focus:ring-2 focus:ring-cyan-200/10" />
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <button onClick={() => setShowReflection((v) => !v)} className="inline-flex items-center gap-2 text-sm font-semibold text-amber-100/85 transition hover:text-amber-100"><Eye className="h-4 w-4" />{isAr ? (showReflection ? 'إخفاء خطوة التأمل' : 'خطوة التأمل التالية') : (showReflection ? 'Hide reflection step' : 'Next reflection step')}</button>
            <span className="text-xs text-white/35">{isAr ? 'إجابتك تبقى في هذه الجلسة ولا تُرسل إلى خادم.' : 'Your response stays in this session and is not sent to a server.'}</span>
          </div>
          {showReflection && <div className="mt-3 rounded-xl border border-amber-200/15 bg-amber-200/[0.05] p-4"><p className="mb-1 text-[10px] font-bold tracking-wider text-amber-200/75">{isAr ? 'انقل التفكير إلى الممارسة' : 'APPLY YOUR THINKING'}</p><p className="text-sm leading-7 text-white/85">{isAr ? challenge.reflection : challenge.reflectionEn}</p></div>}
        </div>

        <footer className="flex items-center justify-between border-t border-white/10 bg-black/10 px-5 py-4 sm:px-7">
          <button onClick={reset} className="inline-flex items-center gap-2 text-xs text-white/55 transition hover:text-white"><RotateCcw className="h-3.5 w-3.5" />{isAr ? 'إعادة التحدي' : 'Reset challenge'}</button>
          <button onClick={() => changeChallenge(index + 1)} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f1d99e] to-[#d5ad60] px-4 py-2.5 text-xs font-bold text-[#101722] transition hover:brightness-110">{isAr ? 'تحدٍّ آخر' : 'Another challenge'}{isAr ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}</button>
        </footer>
      </section>
    </div>
  );
};
