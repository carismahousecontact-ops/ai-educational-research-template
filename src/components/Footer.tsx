import React from 'react';
import { Language } from '../types';
import { ArrowUpLeft, ShieldCheck } from 'lucide-react';

interface FooterProps {
  lang: Language;
  // Kept optional for compatibility with the existing App.tsx call site.
  onOpenZeroG?: () => void;
}

const internalLinks = [
  { href: '#wisdom-article-1', ar: 'الإطار المفاهيمي', en: 'Conceptual framework' },
  { href: '#wisdom-article-3', ar: 'الآليات التقنية', en: 'Technical mechanisms' },
  { href: '#wisdom-article-6', ar: 'غرفة العمليات (تفاعلية)', en: 'Interactive operations room' },
  { href: '#wisdom-article-7', ar: 'السياق المؤسسي', en: 'Institutional context' },
  { href: '#wisdom-article-8', ar: 'مكتبة المصادر', en: 'Source library' },
];

const linkClass =
  'inline-flex items-start gap-2 text-sm leading-6 text-white/75 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1018] rounded-sm transition-colors';

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <footer
      dir={isAr ? 'rtl' : 'ltr'}
      aria-label={isAr ? 'تذييل الموقع' : 'Site footer'}
      className="relative z-10 border-t border-white/10 bg-[#08111d]/78 backdrop-blur-md py-7 sm:py-9"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Three responsive columns: institutional identity, core content navigation, and methodological/legal transparency. */}
        <div className="grid grid-cols-2 gap-x-5 gap-y-6 lg:grid-cols-3 lg:gap-10">
          {/* Column 1 — Institutional identity and the platform's educational mission. */}
          <section className="col-span-2 space-y-2.5 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              </span>
              <h3 className="text-base font-bold leading-6 text-white">
                {isAr ? 'غرفة عمليات الحكمة التربوية' : 'Educational Wisdom Operations Room'}
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-white/75">
              {isAr
                ? 'مبادرة تربوية أكاديمية تعرض كيف تُقيِّد قواعد الحكمة التربوية نماذج الذكاء الاصطناعي، فتمنعها من تقديم الإجابات الجاهزة، وتحوّلها إلى شريك يحفز التفكير الإنساني المستقل.'
                : 'An academic educational initiative showing how pedagogical wisdom rules constrain AI systems from giving ready-made answers and turn them into partners that stimulate independent human thought.'}
            </p>
            <p className="border-r-2 border-amber-300/70 pr-3 text-xs font-semibold leading-5 text-amber-100/90">
              {isAr
                ? 'التربية أولاً — والذكاء الاصطناعي مرشد، لا مُجيب.'
                : 'Education first — AI as a guide, not an answer machine.'}
            </p>
          </section>

          {/* Column 2 — Stable links into the platform's main content areas. */}
          <nav aria-label={isAr ? 'روابط المحتوى الأساسي' : 'Core content navigation'} className="space-y-2.5">
            <h3 className="text-sm font-bold text-white">
              {isAr ? 'استكشف المنصة' : 'Explore the platform'}
            </h3>
            <ul className="space-y-1">
              {internalLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} aria-label={isAr ? `الانتقال إلى ${item.ar}` : `Go to ${item.en}`} className={linkClass}>
                    <span>{isAr ? item.ar : item.en}</span>
                    <ArrowUpLeft className="mt-1 h-3.5 w-3.5 shrink-0 opacity-50" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3 — Methodological transparency, verification guidance, and contact/policy routes. */}
          <section className="space-y-2.5">
            <h3 className="text-sm font-bold text-white">
              {isAr ? 'الشفافية والالتزام المنهجي' : 'Transparency and methodology'}
            </h3>
            <p className="text-sm leading-6 text-white/75">
              {isAr
                ? 'يستند هذا الموقع إلى مقياس الحكمة التربوية المحكّم (97 بنداً)، وإلى إطار اليونسكو لحماية الفهم النقدي.'
                : 'This site draws on the peer-reviewed Educational Wisdom Scale (97 items) and UNESCO’s framework for protecting critical thinking.'}
            </p>
            <p className="rounded-lg border border-amber-200/15 bg-amber-200/[0.05] p-2.5 text-xs leading-5 text-amber-100/85">
              {isAr
                ? 'أي إشارة إلى 165 قاعدة هي تصنيف موسّع مقترح، لا مقياس أكاديمي معتمد.'
                : 'Any reference to 165 rules means a proposed expanded classification, not an academically validated scale.'}
            </p>
            <a href="#wisdom-article-8" aria-label={isAr ? 'اقرأ دليل التحقق المنهجي' : 'Read the methodological verification guide'} className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded-sm">
              {isAr ? 'اقرأ دليل التحقق' : 'Read the verification guide'}
              <ArrowUpLeft className="h-4 w-4" aria-hidden="true" />
            </a>
            <p className="text-xs leading-5 text-white/55">
              {isAr
                ? 'نميّز بين ما يسنده المصدر وما يحتاج إلى توثيق إضافي.'
                : 'We distinguish source-supported statements from claims requiring further verification.'}
            </p>
          </section>
        </div>

        {/* Bottom bar — copyright, year, policy/contact links, and the platform's closing principle. */}
        <div className="mt-6 border-t border-white/10 pt-4">
          <div className="flex flex-col gap-3 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 {isAr ? 'غرفة عمليات الحكمة التربوية — مبادرة تربوية أكاديمية.' : 'Educational Wisdom Operations Room — Academic educational initiative.'}</p>
            <nav aria-label={isAr ? 'السياسات والتواصل' : 'Policies and contact'} className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <a href="#wisdom-article-8" aria-label={isAr ? 'سياسة التوثيق' : 'Citation policy'} className="hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded-sm">{isAr ? 'سياسة التوثيق' : 'Citation policy'}</a>
              <span aria-hidden="true">·</span>
              <a href="#wisdom-article-8" aria-label={isAr ? 'منهجية التحقق' : 'Verification method'} className="hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded-sm">{isAr ? 'منهجية التحقق' : 'Verification method'}</a>
              <span aria-hidden="true">·</span>
              <a href="https://github.com/carismahousecontact-ops/ai-educational-research-template/issues/new" target="_blank" rel="noopener noreferrer" aria-label={isAr ? 'اتصل بنا عبر GitHub' : 'Contact us through GitHub'} className="hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded-sm">{isAr ? 'اتصل بنا' : 'Contact us'}</a>
            </nav>
          </div>
          <p className="mt-3 text-center text-xs font-semibold leading-5 text-amber-100/75">
            {isAr
              ? 'لا نمنع الإجابة لنمنع المعرفة، بل لنُبقي التفكير حياً.'
              : 'We do not withhold answers to withhold knowledge, but to keep thinking alive.'}
          </p>
        </div>
      </div>
    </footer>
  );
};
