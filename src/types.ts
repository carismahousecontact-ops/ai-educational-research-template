export type Language = 'en' | 'ar';

export interface ProjectItem {
  id: string;
  title: string;
  titleAr: string;
  category: 'Build tools' | 'Design systems' | 'Ideas & public work';
  categoryAr: 'أدوات برمجية' | 'أنظمة تصميم المناهج' | 'أفكار وكتابات عامة';
  badge: 'Open source' | 'Live' | 'Live pilot' | 'Core design team' | 'Experiment' | 'Ongoing' | 'Archive';
  badgeAr: 'مفتوح المصدر' | 'منصة حية' | 'تجربة أولية' | 'فريق التصميم الأساسي' | 'مشروع تجريبي' | 'مستمر' | 'أرشيف' | 'نظام معتمد' | 'أرشيف مفتوح';
  tagline: string;
  taglineAr: string;
  description: string;
  descriptionAr: string;
  metrics: { label: string; labelAr: string; value: string };
  links?: { title: string; titleAr: string; url: string }[];
  caseStudy: {
    problem: string;
    problemAr: string;
    architecture: string;
    architectureAr: string;
    outcome: string;
    outcomeAr: string;
  };
}

export interface EducationSkill {
  id: string;
  domain: string;
  domainAr: string;
  name: string;
  nameAr: string;
  evidence: string;
  evidenceAr: string;
  description: string;
  descriptionAr: string;
  ruleCode: string;
  testPrompt: string;
  testPromptAr: string;
  agentResponse: string;
  agentResponseAr: string;
  invariantStatus: 'VERIFIED' | 'PASS' | 'GUARDED';
}

export interface InvitedTalk {
  id: string;
  convenor: string;
  convenorAr: string;
  title: string;
  titleAr: string;
  year: string;
  role: string;
  roleAr: string;
  summary: string;
  summaryAr: string;
  linkText: string;
  linkTextAr: string;
  url: string;
}

export interface EssayItem {
  id: string;
  title: string;
  titleAr: string;
  series: string;
  seriesAr: string;
  date: string;
  readTime: string;
  abstract: string;
  abstractAr: string;
  bodyParagraphs: string[];
  bodyParagraphsAr: string[];
}
