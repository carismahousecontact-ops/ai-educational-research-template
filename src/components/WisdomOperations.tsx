import React, { useMemo, useState } from 'react';
import { BookOpen, Brain, ShieldCheck, Network, Library, Building2, ChevronDown, ArrowUpLeft, ExternalLink } from 'lucide-react';
import { Language } from '../types';

interface WisdomOperationsProps { lang: Language }

type Article = {
  id: number; section: string; title: string; question: string; summary: string;
  reference: string; interaction: string; keywords: string[]; siblings: number[];
};

const articles: Article[] = [
  { id: 1, section: 'concepts', title: 'الحكمة التربوية: ستة أبعاد قابلة للقياس', question: 'كيف نترجم الحكمة التربوية إلى أبعاد يمكن دراستها دون اختزالها في رقم؟', summary: 'يعرض المقال الأبعاد الستة للحكمة التربوية كما وردت في المقياس المحكّم المشار إليه: المعرفة الواسعة، والاستبصار، والضبط الوجداني، والتوازن، والالتزام الأخلاقي، والإدارة الرشيدة. ويميز بين القياس بوصفه أداة بحثية وبين الحكم على الإنسان أو اختزال خبرته في درجة واحدة. كما يوضح كيف يمكن استخدام الأبعاد الستة إطاراً لتصميم مواقف تعليمية وأسئلة تأملية، مع التنبيه إلى أن تفاصيل البنود وخصائص المقياس تحتاج إلى مراجعة نص الدراسة الأصلية قبل أي تطبيق.', reference: 'C', interaction: 'مصفوفة الأبعاد الستة: استكشف تعريف كل بُعد، ومؤشره السلوكي المقترح، وسؤالاً تأملياً مرتبطاً به.', keywords: ['الحكمة التربوية','القياس','علوم التعلم','الاستبصار','التوازن','الأخلاق'], siblings: [2,6,8] },
  { id: 2, section: 'concepts', title: 'لماذا لا يكفي أن يجيب الذكاء الاصطناعي؟', question: 'إذا حصل المتعلم على إجابة صحيحة، فهل يعني ذلك أنه تعلّم؟', summary: 'يناقش المقال الفرق بين إنتاج الإجابة وبناء القدرة على التفكير. وينطلق من أولوية حماية التفكير النقدي واستقلال المتعلم، ومن ضرورة أن يبقى التعليم مجالاً للتأهيل والتنشئة وتكوين الذات. ويشرح لماذا ينبغي أن يُصمم المساعد التعليمي بحيث يطلب من المتعلم تفسير خطواته وفحص الأدلة ومراجعة الناتج، بدلاً من الاكتفاء بتسليم الحل. أما نسبة 63% المتداولة فتظل غير مثبتة بالرابط المتاح، ولا تُعرض كحقيقة قبل العثور على مصدر مباشر يؤكدها.', reference: 'A', interaction: 'مؤشر 63%: لا يعرض رقماً مضللاً؛ يوضح حالة التوثيق ويتيح فتح المرجع المتاح وقراءة ما يثبته فعلياً.', keywords: ['التفكير النقدي','استقلال المتعلم','الذكاء الاصطناعي','التعلم','اليونسكو'], siblings: [1,3,5] },
  { id: 3, section: 'technology', title: 'RAG والسقراطية: تقييد النموذج بحدود المنهج', question: 'كيف نمنع المساعد من القفز إلى الحل، ونوجهه إلى بناء فهم المتعلم؟', summary: 'يقدم المقال تصوراً معمارياً يجمع استرجاع المعرفة من مصادر المنهج مع حوار سقراطي متدرج. تبدأ العملية بتحديد المفهوم والمصدر، ثم طرح سؤال تشخيصي، ثم تقديم تلميح عام فمحدد فدقيق عند الحاجة. ولا ينبغي أن يتحول التلميح الأخير إلى الإجابة نفسها؛ بل يظل على المتعلم إنجاز الاستدلال. أما حدود التشابه الدلالي وآلية منع التسريب إلى الحل فهي مواصفات تنفيذية تحتاج إلى اختبار وقياس، ولا تُنسب إلى دراسة بعينها إلا بعد التحقق من نصها.', reference: 'B', interaction: 'مخطط تدفق التلميحات: سؤال تشخيصي ← تلميح عام ← تلميح محدد ← تلميح دقيق ← إعادة المحاولة.', keywords: ['RAG','السقراطية','التلميحات','تصميم الوكلاء','التعلم النشط'], siblings: [1,2,6] },
  { id: 4, section: 'technology', title: 'حدود DIKW: المعرفة الصريحة مقابل الحكمة', question: 'ما الذي يمكن لنظام ذكي أن يسترجعه، وما الذي لا يختزل في نص أو بيانات؟', summary: 'يشرح المقال نموذج البيانات والمعلومات والمعرفة والحكمة، ثم يربطه بالتمييز بين المعرفة الصريحة التي يمكن تدوينها ونقلها، والمعرفة الضمنية التي تتشكل عبر الخبرة والممارسة والسياق والعلاقات. ويعرض الذكاء الاصطناعي أداة نافعة في تنظيم المعرفة الصريحة وإتاحتها، دون أن يجعل ذلك بديلاً عن الخبرة الإنسانية أو الحكم الأخلاقي. يستند العرض إلى دراسة EDUKASI المتاحة، مع تجنب تحويل الإطار المفاهيمي إلى ادعاء بأن كل معرفة ضمنية يستحيل دعمها تقنياً.', reference: 'B', interaction: 'جدول مقارنة: نوع المعرفة، طريقة اكتسابها، ما يستطيع النظام دعمه، وما يتطلب ممارسة بشرية.', keywords: ['DIKW','المعرفة الصريحة','المعرفة الضمنية','الحكمة','التعلم'], siblings: [1,3,5] },
  { id: 5, section: 'technology', title: 'الحكمة كتكامل: من القواعد إلى الأسئلة', question: 'كيف ندرّب على الحكم الرشيد دون تلقين المتعلم قواعد جاهزة؟', summary: 'يعالج المقال الحكمة بوصفها تكاملاً بين المعرفة والتأمل والسياق والقيم، لا قائمة تعليمات تحفظ وتستدعى آلياً. ويقترح أن تكون الممارسة التعليمية قائمة على أسئلة تكشف الافتراضات، وتطلب تبرير الاختيار، وتستخرج المبدأ من الحالة، ثم تختبر نقله إلى موقف جديد. وتبقى تفاصيل التدريب المنسوبة إلى سجلات Zenodo بحاجة إلى مراجعة النص الكامل قبل الجزم بمنهجيتها أو نتائجها؛ لذلك يميز المقال بين ما يقدمه بوصفه إطاراً تصميمياً وما يحتاج إلى توثيق إضافي.', reference: 'B', interaction: 'سيناريو تدريبي: اختر قراراً تربوياً، افحص السياق والأطراف والقيم، ثم صغ المبدأ الذي استخلصته.', keywords: ['الحكمة','التأمل','التعلم بالأسئلة','القيم','التفكير الأخلاقي'], siblings: [1,2,4] },
  { id: 6, section: 'operations', title: 'كيف تُترجم قاعدة تربوية إلى قيد برمجي؟', question: 'كيف تصبح قيمة مثل استقلال المتعلم سلوكاً قابلاً للاختبار داخل النظام؟', summary: 'ينقل المقال المبدأ التربوي من مستوى الشعار إلى مواصفة تشغيلية. يبدأ بتحديد السلوك المرغوب، ثم يصف القيد البرمجي، ثم يحدد اختبار القبول الذي يثبت أن النظام لم يقدم الحل مباشرة. ويعرض أمثلة على تدرج التلميحات، وطلب تفسير المحاولة، وإظهار المصدر، وتسجيل سبب الانتقال بين مستويات الدعم. كما يوضح أن القيود التقنية لا تقيس الحكمة الإنسانية بذاتها، وإنما تضبط سلوك النظام في مواقف محددة وتحتاج إلى مراجعة تربوية مستمرة.', reference: 'B+C', interaction: 'مصفوفة من ثلاثة أعمدة: المبدأ التربوي ← القيد البرمجي ← اختبار القبول؛ كل صف يرتبط بمقال شارح.', keywords: ['هندسة تربوية','قيود برمجية','اختبار القبول','السقراطية','حوكمة الذكاء الاصطناعي'], siblings: [1,3,5] },
  { id: 7, section: 'institutions', title: 'اليونسكو والإيسيسكو: الإطار المعياري', question: 'كيف نحافظ على مركزية الإنسان والمعلم عند إدخال الذكاء الاصطناعي إلى التعليم؟', summary: 'يجمع المقال المبادئ المؤسسية الواردة في الروابط المعتمدة: حماية التفكير النقدي، ودعم القرار البشري، وعدم اعتبار الذكاء الاصطناعي بديلاً عن المعلم. ويحولها إلى أسئلة حوكمة للمؤسسات: ما الغرض التعليمي؟ من يتحمل مسؤولية القرار؟ كيف تُشرح مخرجات النظام وتُراجع؟ وما الضمانات التي تمنع إضعاف دور المعلم؟ ويقتصر على ما يمكن إسناده إلى النصوص المتاحة، ويضع أي تفاصيل لا تظهر في المصدر تحت عبارة «يحتاج إلى توثيق إضافي».', reference: 'A', interaction: 'خط زمني مؤسسي: يفتح كل حدث المرجع المعتمد ويعرض المبدأ الذي يدعمه دون إضافة تواريخ أو مواقف غير متحققة.', keywords: ['اليونسكو','الإيسيسكو','الحوكمة','المعلم','الشفافية','التفكير النقدي'], siblings: [2,6,8] },
  { id: 8, section: 'library', title: 'دليل التحقق: 97 بنداً لا 165', question: 'كيف نمنع الخلط بين مقياس محكّم وتصنيف عملي موسّع؟', summary: 'يوضح المقال التصحيح المنهجي الأساسي: الرقم 97 هو عدد البنود في المقياس الأكاديمي المشار إليه، ولا يجوز استبداله برقم 165 بوصفه حقيقة موثقة. وإذا استُخدم 165 في سياق تطويري، فيجب وصفه بأنه تصنيف موسع مقترح أو مجموعة قواعد تربوية عملية، مع الفصل الصريح بينه وبين المقياس. ويقترح الدليل مراجعة اسم الأداة، ومصدرها، وعدد البنود، وطبيعة العينة، وحدود الاستخدام قبل نشر أي ادعاء أو تحويله إلى معيار تقني.', reference: 'D', interaction: 'قائمة تحقق: افحص المصدر، وعدد البنود، وطبيعة الأداة، وحدود الاستدلال، وصحة الإحالات قبل النشر.', keywords: ['97 بنداً','التحقق المنهجي','المقاييس','التوثيق','جودة البحث'], siblings: [1,6,7] },
];

const sections = [
  { id: 'concepts', label: 'الإطار المفاهيمي', en: 'Conceptual framework', icon: Brain },
  { id: 'technology', label: 'الآليات التقنية', en: 'Technical mechanisms', icon: Network },
  { id: 'operations', label: 'غرفة العمليات', en: 'Operations room', icon: ShieldCheck },
  { id: 'institutions', label: 'السياق المؤسسي', en: 'Institutional context', icon: Building2 },
  { id: 'library', label: 'مكتبة المصادر', en: 'Source library', icon: Library },
  { id: 'blog', label: 'المدونة والمقالات', en: 'Articles', icon: BookOpen },
];

const sources = [
  { id: 'IEEE', label: 'IEEE — RAG والسقراطية', url: 'https://ieeexplore.ieee.org/document/11652537' },
  { id: 'ZENODO1', label: 'Zenodo — الحكمة كتكامل', url: 'https://zenodo.org/records/17498573' },
  { id: 'ZENODO2', label: 'Zenodo — نسخة ثانية', url: 'https://zenodo.org/records/18071567' },
  { id: 'EDUKASI', label: 'EDUKASI — DIKW', url: 'https://jurnaledukasi.kemenag.go.id/edukasi/article/download/2407/712' },
  { id: 'JORDAN', label: 'جامعة الأردن — مقياس الحكمة', url: 'https://dsr.ju.edu.jo/djournals/index.php/Edu/article/download/2557/1529' },
  { id: 'UNESCO', label: 'اليونسكو — التعلم على التفكير', url: 'https://courier.unesco.org/en/articles/learning-think-ai-era' },
  { id: 'ICESCO1', label: 'الإيسيسكو — ورشة هندسة الأوامر', url: 'https://icesco.org/ar/2026/05/02/الإيسيسكو-تعقد-ورشة-إقليمية-حول-توظيف/' },
  { id: 'ICESCO2', label: 'الإيسيسكو — التربية أولاً', url: 'https://icesco.org/ar/2026/02/04/د-المالك-في-افتتاح-المؤتمر-الدولي-لمهنة/' },
  { id: 'UNESCO2', label: 'اليونسكو — جائزة حمد بن عيسى', url: 'https://unesdoc.unesco.org/ark:/48223/pf0000399386' },
];

const sectionFor = (article: Article) => sections.find(s => s.id === article.section)?.label ?? 'المدونة والمقالات';

export const WisdomOperations: React.FC<WisdomOperationsProps> = ({ lang }) => {
  const [activeSection, setActiveSection] = useState('concepts');
  const [expanded, setExpanded] = useState<number | null>(null);
  const isAr = lang === 'ar';
  const visibleArticles = useMemo(() => activeSection === 'blog' ? articles : articles.filter(a => a.section === activeSection), [activeSection]);

  return (
    <section id="wisdom-operations" dir={isAr ? 'rtl' : 'ltr'} className="relative py-20 md:py-28 border-y border-white/10 bg-[#07101b]/42">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mb-10">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.15em] text-cyan-300/80 mb-4">
            <span>WISDOM OPERATIONS ROOM</span><span className="text-white/30">/</span><span>{isAr ? 'من المبادئ إلى السلوك القابل للفحص' : 'From principles to inspectable behaviour'}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">{isAr ? 'غرفة عمليات الحكمة التربوية' : 'Educational Wisdom Operations Room'}</h2>
          <p className="mt-5 text-base md:text-lg leading-8 text-white/65 max-w-3xl">
            {isAr ? 'منصة بحثية وتطبيقية تدرس كيف تُصمم أنظمة الذكاء الاصطناعي لتدعم التفكير المستقل، وتقدم أسئلة وتلميحات متدرجة بدلاً من تسليم الإجابات الجاهزة. المعلم والمتعلم والحكم الإنساني يظلون في مركز العملية.' : 'A research and applied space for designing AI systems that support independent thinking through questions and graduated hints rather than ready-made answers. Teachers, learners, and human judgement remain central.'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2 mb-8">
          {sections.map(section => {
            const Icon = section.icon;
            return <button key={section.id} onClick={() => { setActiveSection(section.id); setExpanded(null); }} aria-pressed={activeSection === section.id} className={`min-h-24 p-3 rounded-xl border text-start transition-all ${activeSection === section.id ? 'border-cyan-300/50 bg-cyan-300/10 text-white' : 'border-white/10 bg-white/[0.025] text-white/60 hover:text-white hover:bg-white/[0.06]'}`}>
              <Icon className="w-5 h-5 mb-3 text-cyan-300" aria-hidden="true" />
              <span className="block text-xs md:text-sm font-semibold">{isAr ? section.label : section.en}</span>
            </button>;
          })}
        </div>

        {activeSection === 'operations' && (
          <div className="grid md:grid-cols-3 gap-3 mb-8">
            {[
              ['المبدأ التربوي','استقلال المتعلم: لا تسلّم الحل قبل أن يبذل محاولة.'],
              ['القيد البرمجي','تدرّج التلميحات، واطلب تفسير المحاولة، وامنع إظهار الناتج النهائي.'],
              ['اختبار القبول','قدّم سؤالاً له حل معروف؛ تحقق أن النظام يوجّه ولا يكشف الحل، ثم سجّل مستوى التلميح.'],
            ].map((cell, i) => {
              const targetId = [1, 3, 5][i];
              return <button key={cell[0]} onClick={() => { const target = articles.find(a => a.id === targetId); if (target) { setActiveSection(target.section); setExpanded(targetId); } }} className="text-start p-5 rounded-xl border border-cyan-300/15 bg-[#0d1a29]/65 hover:bg-cyan-300/[0.08] hover:border-cyan-300/35 transition-colors">
                <span className="text-xs text-cyan-300">{i + 1} / {cell[0]}</span>
                <p className="mt-3 text-sm leading-7 text-white/75">{cell[1]}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs text-cyan-200">افتح المقال #{targetId} <ArrowUpLeft className="w-3.5 h-3.5" /></span>
              </button>;
            })}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-3">
          {visibleArticles.map(article => (
            <article key={article.id} id={`wisdom-article-${article.id}`} className="rounded-2xl border border-white/10 bg-[#101b2a]/70 overflow-hidden">
              <button className="w-full text-start p-5 md:p-6" onClick={() => setExpanded(expanded === article.id ? null : article.id)} aria-expanded={expanded === article.id}>
                <div className="flex items-center justify-between gap-3"><span className="text-xs font-mono text-cyan-300">ARTICLE / {String(article.id).padStart(2, '0')}</span><ChevronDown className={`w-4 h-4 text-white/45 transition-transform ${expanded === article.id ? 'rotate-180' : ''}`} /></div>
                <h3 className="mt-3 text-lg md:text-xl font-semibold text-white">{article.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">{article.summary}</p>
                <p className="mt-4 text-sm leading-6 text-cyan-100/80"><strong>{isAr ? 'السؤال المحوري:' : 'Guiding question:'}</strong> {article.question}</p>
              </button>
              {expanded === article.id && <div className="px-5 md:px-6 pb-6 border-t border-white/8 pt-5">
                <div className="rounded-xl bg-white/[0.035] p-4"><p className="text-xs text-cyan-300 mb-2">{isAr ? 'العنصر التفاعلي' : 'Interactive element'}</p><p className="text-sm leading-7 text-white/75">{article.interaction}</p></div>
                <div className="mt-4 flex flex-wrap gap-2">{article.keywords.map(word => <span key={word} className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-white/55">{word}</span>)}</div>
                <div className="mt-5"><p className="text-xs text-white/45 mb-2">{isAr ? 'الإحالات الداخلية' : 'Related articles'}</p><div className="flex flex-wrap gap-2">{article.siblings.map(id => <button key={id} onClick={() => { const sibling = articles.find(a => a.id === id); if (sibling) { setActiveSection(sibling.section); setExpanded(id); document.getElementById('wisdom-operations')?.scrollIntoView({ behavior: 'smooth' }); } }} className="text-xs text-cyan-200 hover:text-white underline underline-offset-4">#{id} — {articles.find(a => a.id === id)?.title}</button>)}</div></div>
                <p className="mt-5 text-xs text-white/40">{isAr ? 'مرجع الإسناد:' : 'Reference key:'} [{article.reference}] · {sectionFor(article)}</p>
              </div>}
            </article>
          ))}
        </div>

        <div className="mt-12 p-5 md:p-7 rounded-2xl border border-white/10 bg-[#0c1725]/75">
          <div className="flex items-center gap-2 mb-4"><Library className="w-5 h-5 text-cyan-300" /><h3 className="text-lg font-semibold text-white">{isAr ? 'المصادر المباشرة المعتمدة' : 'Approved direct sources'}</h3></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {sources.map(source => <a key={source.id} href={source.url} target="_blank" rel="noreferrer" className="flex items-start justify-between gap-3 text-sm text-white/65 hover:text-cyan-200 transition-colors"><span>{source.label}</span><ExternalLink className="w-3.5 h-3.5 shrink-0 mt-1" /></a>)}
          </div>
          <p className="mt-5 text-xs leading-6 text-amber-100/65">تنبيه توثيقي: نسبة 63% لا يثبتها نص اليونسكو المتاح ضمن الروابط المعتمدة؛ لذلك لا تُعرض كإحصاء موثق. وأي تفاصيل لا يمكن ردّها إلى نص المصدر تُوسم بعبارة «يحتاج إلى توثيق إضافي».</p>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-white/40"><span>{isAr ? 'المحتوى العلمي التفصيلي قيد التحرير والتحقق المرجعي.' : 'Full scholarly article texts are being edited and source-checked.'}</span><a href="#top" className="inline-flex items-center gap-2 hover:text-white"><ArrowUpLeft className="w-4 h-4" />{isAr ? 'العودة إلى الأعلى' : 'Back to top'}</a></div>
      </div>
    </section>
  );
};
