import React from 'react';
import { Language } from '../types';
import { ArrowUpRight, BookOpen, FlaskConical, BrainCircuit, ShieldCheck, LibraryBig } from 'lucide-react';

interface ResearchPathwaysProps {
  lang: Language;
}

const pathways = [
  {
    id: 'evidence',
    icon: BookOpen,
    number: '01',
    title: 'Research & Evidence',
    titleAr: 'البحث والأدلة',
    description: 'Explore learning-science research, educational evidence, policy perspectives, and the ideas that inform responsible learning systems.',
    descriptionAr: 'استكشف أبحاث علوم التعلم والأدلة التربوية والسياسات والرؤى التي تؤسس لبناء نظم تعلم مسؤولة.',
    target: 'talks',
    action: 'Explore research',
    actionAr: 'استكشف الأبحاث',
  },
  {
    id: 'projects',
    icon: FlaskConical,
    number: '02',
    title: 'Projects & Labs',
    titleAr: 'المشاريع والمختبرات',
    description: 'Follow applied experiments, learning-system prototypes, design investigations, and the questions behind each project.',
    descriptionAr: 'تابع التجارب التطبيقية والنماذج الأولية لنظم التعلم ودراسات التصميم والأسئلة التي تقود كل مشروع.',
    target: 'projects',
    action: 'View projects',
    actionAr: 'استعرض المشاريع',
  },
  {
    id: 'agents',
    icon: BrainCircuit,
    number: '03',
    title: 'Skills & Agents',
    titleAr: 'المهارات والوكلاء',
    description: 'Discover reusable educational agent skills designed to support learner agency, productive struggle, and thoughtful feedback.',
    descriptionAr: 'اكتشف مهارات تعليمية قابلة لإعادة الاستخدام لدعم استقلالية المتعلم والكفاح المعرفي البنّاء والتغذية الراجعة الواعية.',
    target: 'cockpit',
    action: 'Explore agent skills',
    actionAr: 'استكشف مهارات الوكلاء',
  },
  {
    id: 'evaluation',
    icon: ShieldCheck,
    number: '04',
    title: 'Evaluation & Quality',
    titleAr: 'التقييم وضمان الجودة',
    description: 'Explore the principles and questions that should guide evidence-informed evaluation of AI-supported learning.',
    descriptionAr: 'استكشف المبادئ والأسئلة التي ينبغي أن توجه تقييم التعلم المدعوم بالذكاء الاصطناعي استناداً إلى الأدلة.',
    target: 'writing',
    action: 'Explore current writing',
    actionAr: 'استكشف الكتابات الحالية',
  },
  {
    id: 'resources',
    icon: LibraryBig,
    number: '05',
    title: 'Knowledge & Resources',
    titleAr: 'المعرفة والمصادر',
    description: 'Navigate selected research notes, publications, and reference material connected to the platform’s work.',
    descriptionAr: 'تصفح الملاحظات البحثية والمنشورات والمواد المرجعية المنتقاة والمرتبطة بعمل المنصة.',
    target: 'writing',
    action: 'Browse resources',
    actionAr: 'تصفح المصادر',
  },
];

export const ResearchPathways: React.FC<ResearchPathwaysProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <section id="research-pathways" className="py-16 md:py-24 border-b border-white/8 bg-[#08090b]/55">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-10 md:mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-white/45 mb-3">
            <span className="text-blue-400">00 // Explore the platform</span>
            <span aria-hidden="true">·</span>
            <span>{isAr ? 'مسارات الاستكشاف' : 'Research-led pathways'}</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] text-white">
            {isAr ? 'من الدليل إلى التطبيق والأثر.' : 'From evidence to practice and impact.'}
          </h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-white/60 max-w-2xl">
            {isAr
              ? 'منصة تستكشف كيف تلتقي علوم التعلم والبحث التربوي والذكاء الاصطناعي لبناء أدوات وتجارب تعليمية أكثر فاعلية ومسؤولية.'
              : 'A research and applied innovation platform exploring how learning science, educational research, and AI can shape more effective and responsible learning experiences.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
          {pathways.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.target}`}
                className="group min-h-[220px] flex flex-col p-5 md:p-6 rounded-2xl border border-white/10 bg-[#10131a]/75 hover:bg-[#151a25]/90 hover:border-blue-400/35 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-7">
                  <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-blue-300">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs tracking-widest text-white/30">{item.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {isAr ? item.titleAr : item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55 flex-1">
                  {isAr ? item.descriptionAr : item.description}
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs font-medium text-blue-300 group-hover:text-blue-200">
                  <span>{isAr ? item.actionAr : item.action}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 ${isAr ? 'rotate-[-90deg] group-hover:-translate-y-0.5' : ''}`} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
