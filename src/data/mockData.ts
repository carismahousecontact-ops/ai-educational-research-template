import { ProjectItem, EducationSkill, InvitedTalk, EssayItem } from '../types';

export const garethProjects: ProjectItem[] = [
  {
    id: 'education-agent-skills',
    title: 'Education Agent Skills',
    titleAr: 'مهارات وكلاء الذكاء الاصطناعي للتعليم',
    category: 'Build tools',
    categoryAr: 'أدوات برمجية',
    badge: 'Open source',
    badgeAr: 'مفتوح المصدر',
    tagline: 'Pedagogical judgement for autonomous AI agents',
    taglineAr: 'الحكمة التربوية المعرفية لوكلاء الذكاء الاصطناعي',
    description: 'An open-source specification and runtime of 165 evidence-grounded AI skills across 20 domains. Equips models with pedagogical judgement—scaffolding, questioning, and formative feedback without premature answer leakage.',
    descriptionAr: 'معيار ومكتبة برمجية مفتوحة المصدر تضم 165 مهارة وقاعدة حكمة قائمة على أبحاث علوم التعلم عبر 20 مجالاً، تمنح النماذج القدرة على التدرج المعرفي وتقديم التغذية الراجعة دون تسريب الحلول الجاهزة.',
    metrics: { label: 'Specification', labelAr: 'المواصفة البرمجية', value: '165 Skills · 20 Domains' },
    links: [
      { title: 'Open Source Spec', titleAr: 'المواصفة المفتوحة', url: 'https://github.com/GarethManning/education-agent-skills' },
      { title: 'Skills Hub Registry', titleAr: 'سجل المهارات', url: 'https://skills-hub.ai' }
    ],
    caseStudy: {
      problem: 'Unconstrained language models default to immediate answers and superficial summaries, displacing student cognitive wrestling and short-circuiting generative learning.',
      problemAr: 'تميل النماذج اللغوية غير المقيدة لتقديم الإجابات المباشرة والملخصات السريعة، مما يحرم المتعلم من الكفاح الذهني البناء ويعيق التعلم العميق.',
      architecture: 'A declarative YAML and TypeScript rule engine evaluated against invariant AST constraints. Interoperable across Gemini 2.5, Claude 3.7, and student-facing client applications.',
      architectureAr: 'محرك قواعد تركيبي بصيغة YAML وTypeScript يخضع لفحص الثوابت البرمجية الصارمة، متوافق مع النماذج الرائدة والواجهات الموجهة للطلاب.',
      outcome: 'Establishes a verifiable pedagogical contract that ensures synthetic agents promote independent human synthesis and critical problem-solving.',
      outcomeAr: 'تأسيس ميثاق تربوي برمجي ملزم يضمن تحفيز التحليل المستقل والحل الذاتي للمشكلات بدلاً من التلقين السلبي.'
    }
  },
  {
    id: 'hippo',
    title: 'Hippo Memory Architecture',
    titleAr: 'منظومة هيبو لعلوم الذاكرة والاسترجاع',
    category: 'Build tools',
    categoryAr: 'أدوات برمجية',
    badge: 'Live',
    badgeAr: 'منصة حية',
    tagline: 'Memory science & spaced retrieval for classrooms',
    taglineAr: 'علوم الذاكرة والاسترجاع المتباعد للفصول الدراسية',
    description: 'An intelligent retrieval practice system that converts raw curricular lesson materials into reviewed spaced practice decks and formative next steps with complete educator oversight.',
    descriptionAr: 'نظام ذكي لممارسة الاسترجاع يحول مواد الدروس إلى بطاقات استرجاع متباعد وتقييم تكويني مستمر تحت إشراف تعليمي كامل.',
    metrics: { label: 'Methodology', labelAr: 'المنهجية', value: 'Spaced Retrieval Science' },
    links: [
      { title: 'Platform Spec', titleAr: 'مواصفات المنصة', url: 'https://hippo.education' }
    ],
    caseStudy: {
      problem: 'Applying empirical spacing and testing effects across diverse classrooms requires continuous authoring overhead that manual teaching schedules cannot sustain.',
      problemAr: 'تطبيق أثر التباعد والاسترجاع العلمي في الفصول المتنوعة يتطلب جهداً مستمراً في إعداد الأسئلة يصعب استدامته يدوياً.',
      architecture: 'Extracts ontological knowledge milestones from lesson artifacts, structures spaced repetition intervals, and models diagnostic distractors targeting systematic misconceptions.',
      architectureAr: 'استخلاص المفاهيم العتبية من محتوى الدروس وجدولتها وفق فترات زمنية متباعدة مع توليد خيارات تشخيصية للأخطاء الشائعة.',
      outcome: 'Enables 2-minute active retrieval cycles at the beginning of learning modules, systematically reinforcing long-term consolidation.',
      outcomeAr: 'تفعيل دورات استرجاع سريعة في مستهل كل حصة لتعزيز ثبات المعرفة في الذاكرة طويلة الأمد.'
    }
  },
  {
    id: 'strive',
    title: 'Strive Agency Engine',
    titleAr: 'محرك سترايف لتنمية الفاعلية الذاتية',
    category: 'Build tools',
    categoryAr: 'أدوات برمجية',
    badge: 'Live pilot',
    badgeAr: 'تجربة أولية',
    tagline: 'Self-regulation, metacognition & agency',
    taglineAr: 'التنظيم الذاتي، ما وراء المعرفة، والفاعلية',
    description: 'A learner-centered system designed to cultivate longitudinal intentionality, goal calibration, and daily metacognitive self-regulation loops.',
    descriptionAr: 'نظام موجه للمتعلمين لتنمية النية الواعية، ومعايرة الأهداف، وممارسة حلقات التنظيم الذاتي اليومية.',
    metrics: { label: 'Framework', labelAr: 'الإطار المرجعي', value: 'Zimmerman Self-Regulation' },
    caseStudy: {
      problem: 'Conventional compliance metrics measure passive assignment completion rather than intrinsic motivation, persistence, and metacognitive monitoring.',
      problemAr: 'مقاييس الامتثال التقليدية تقيس إتمام الواجبات روتينياً بدلاً من قياس الدافعية الذاتية والوعي الإدراكي.',
      architecture: 'A structured three-phase self-regulation loop connecting learner intentions with daily micro-evidence and qualitative reflection prompts.',
      architectureAr: 'حلقة تنظيم ذاتي ثلاثية المراحل تربط أهداف المتعلم بأدلة يومية صغيرة وأسئلة تأملية نوعية.',
      outcome: 'Demonstrated measurable increases in learner academic tenacity, internal locus of control, and reflective autonomy.',
      outcomeAr: 'إثبات تحسن ملموس في الإصرار الأكاديمي والاستقلالية التأملية لدى المتعلمين.'
    }
  },
  {
    id: 'global-impact-diploma',
    title: 'Global Impact Credential',
    titleAr: 'إطار دبلوم الأثر العالمي',
    category: 'Design systems',
    categoryAr: 'أنظمة تصميم المناهج',
    badge: 'Core design team',
    badgeAr: 'نظام معتمد',
    tagline: 'Competency-based graduation credential',
    taglineAr: 'شهادة تخرج دولية مبنية على الكفاءات والأثر الواقعي',
    description: 'An architectural overhaul of secondary graduating credentials, replacing fragmented terminal exam scores with evidence-backed ecological, social, and technological impact competencies.',
    descriptionAr: 'إعادة تصميم جذرية لشهادات التخرج الثانوية، باستبدال درجات الامتحانات المنعزلة بملفات إنجاز تثبت الكفاءة والأثر البيئي والاجتماعي والتقني.',
    metrics: { label: 'Assessment Mode', labelAr: 'نمط التقييم', value: 'Competency Portfolio Architecture' },
    caseStudy: {
      problem: 'Standardized paper examinations fail to assess systemic problem solving, collaborative agency, and practical capabilities required in modern complex systems.',
      problemAr: 'تفشل الامتحانات الورقية الموحدة في قياس التفكير المنظومي وحل المشكلات المعقدة والقدرة على إحداث أثر مجتمعي ملموس.',
      architecture: 'A multi-tiered competency portfolio evaluated through external moderation, longitudinal artifacts, and community-anchored projects.',
      architectureAr: 'ملف كفاءات متعدد المستويات يخضع للتحكيم الخارجي المستقل والمشاريع الحية المرتبطة بالمجتمع.',
      outcome: 'Operationalized across forward-thinking international schools as an accredited pathway to higher education and creative industries.',
      outcomeAr: 'طُبق في مدارس دولية رائدة كمسار تخرج معتمد ومؤهل للتعليم الجامعي ومجالات الابتكار.'
    }
  },
  {
    id: 'shape-of-knowledge',
    title: 'Shape of Knowledge Engine',
    titleAr: 'محرك شكل المعرفة الطوبولوجي',
    category: 'Design systems',
    categoryAr: 'أنظمة تصميم المناهج',
    badge: 'Experiment',
    badgeAr: 'مشروع تجريبي',
    tagline: 'Topological mapping of domain knowledge structures',
    taglineAr: 'التخطيط الطوبولوجي للبنى المفاهيمية الحقيقية للمعرفة',
    description: 'An architectural investigation into non-linear, multi-dimensional representations of curriculum, moving beyond arbitrary chronological textbook silos.',
    descriptionAr: 'بحث معماري في النمذجة اللاخطية والمتعددة الأبعاد للمناهج الدراسية، متجاوزاً التقسيم الزمني التقليدي لفصول الكتب.',
    metrics: { label: 'Graph Model', labelAr: 'النموذج البياني', value: 'Directed Acyclic Knowledge Graphs' },
    caseStudy: {
      problem: 'Curriculum sequences are flattened into linear chapters, concealing prerequisite dependencies and cross-disciplinary transfer thresholds.',
      problemAr: 'تُسطح المناهج في فصول متعاقبة، مما يخفي المتطلبات المعرفية المسبقة وفرص انتقال أثر التعلم بين العلوم.',
      architecture: 'Topological graph databases mapping threshold concepts, conceptual dependency gates, and interdisciplinary intersections.',
      architectureAr: 'قواعد بيانات بيانية طوبولوجية ترسم المفاهيم المفتاحية، وبوابات الاعتماد المفاهيمي، ونقاط التقاطع بين التخصصات.',
      outcome: 'Provides learners and instructional designers with visual navigation maps to identify learning bottlenecks and conceptual prerequisites.',
      outcomeAr: 'تزويد المتعلمين ومصممي المناهج بخرائط بصرية تفاعلية لكشف العقبات المعرفية ومسارات الفهم المتدرج.'
    }
  },
  {
    id: 'emergency-continuity',
    title: 'Emergency Learning Continuity Archive',
    titleAr: 'أرشيف استمرارية التعلم في الأزمات',
    category: 'Ideas & public work',
    categoryAr: 'أفكار وكتابات عامة',
    badge: 'Archive',
    badgeAr: 'أرشيف مفتوح',
    tagline: 'Research documentary on resilient educational infrastructure',
    taglineAr: 'بحث وثائقي حول مرونة البنى التحتية التعليمية أثناء الاضطرابات',
    description: 'A global research documentary and audio archive examining how educational systems adapt, innovate, and maintain pedagogical continuity during major planetary disruptions.',
    descriptionAr: 'أرشيف بحثي وثائقي عالمي يدرس كيفية تكيف النظم التعليمية وابتكار حلول لاستمرارية التعلم خلال الأزمات الكبرى.',
    metrics: { label: 'Research Scope', labelAr: 'نطاق البحث', value: '15+ Countries Comparative Study' },
    caseStudy: {
      problem: 'Sudden educational disruptions expose infrastructural fragility and risk deepening epistemic divides without documented adaptive models.',
      problemAr: 'تكشف الأزمات المفاجئة هشاشة البنى المدرسية وتهدد باتساع الفجوة المعرفية في غياب نماذج تكيف موثقة.',
      architecture: 'Comprehensive field interviews and system analysis capturing operational triage, distributed schooling, and community resilience.',
      architectureAr: 'مقابلات ميدانية مكثفة وتحليل نظمي لخطط الطوارئ والتعليم الموزع ومرونة المجتمعات المحلية.',
      outcome: 'A permanent open-access knowledge repository referenced by institutional policy makers for school emergency preparedness.',
      outcomeAr: 'مرجع معرفي دائم مفتوح المصدر يستند إليه صناع السياسات لتطوير خطط الجاهزية المدرسية.'
    }
  }
];

export const garethSkills: EducationSkill[] = [
  {
    id: 'skill-zpd',
    domain: 'Learning Science & Scaffolding',
    domainAr: 'علوم التعلم والدعامات التربوية',
    name: 'Zone of Proximal Development Guard',
    nameAr: 'حارس نطاق التطور الوشيك (ZPD)',
    evidence: 'Vygotsky (1978); Wood, Bruner & Ross (1976)',
    evidenceAr: 'فيغوتسكي (1978)؛ برونر وزملاؤه (1976)',
    description: 'Calibrates hint density strictly to learner prerequisite mastery. Prevents models from solving the final intellectual threshold.',
    descriptionAr: 'يضبط كثافة التلميحات وفق مستوى تمكن المتعلم، ويمنع النموذج من القفز مباشرة للحل النهائي.',
    ruleCode: `rule "zpd_withhold_solution" {
  when student_struggling == true:
    emit_subtle_analogy()
    ask_probing_question()
    assert_solution_hidden()
}`,
    testPrompt: 'I do not get why heat rises in a convection current. Just tell me the answer for question 4.',
    testPromptAr: 'لا أفهم لماذا يرتفع الهواء الساخن في تيارات الحمل. أعطني الإجابة المباشرة للسؤال الرابع فقط.',
    agentResponse: 'Picture two groups of runners: one crowded and moving fast, the other calm and spaced out. When fluid molecules absorb thermal energy, they spread out. What happens to their density compared to the colder fluid above them?',
    agentResponseAr: 'تخيل مجموعتين: الأولى تتحرك بسرعة وتتباعد، والثانية هادئة ومتقاربة. حين تكتسب الجزيئات حرارة، تتباعد. ماذا يحدث لكثافتها مقارنة بالسائل الأبرد فوقها؟',
    invariantStatus: 'VERIFIED'
  },
  {
    id: 'skill-retrieval',
    domain: 'Cognitive Science & Memory',
    domainAr: 'علوم الإدراك واسترجاع الذاكرة',
    name: 'Desirable Difficulty & Retrieval Practice',
    nameAr: 'الصعوبة المرغوبة وممارسة الاسترجاع',
    evidence: 'Bjork & Bjork (2011); Roediger & Karpicke (2006)',
    evidenceAr: 'بيورك وبيورك (2011)؛ روديجر وكاربيك (2006)',
    description: 'Instructs the agent to introduce productive friction (active recall prompts) rather than passive reading summaries.',
    descriptionAr: 'يوجه الوكيل لفرض استرجاع ذهني نشط بدلاً من تقديم ملخصات جاهزة تُقرأ بسلبية.',
    ruleCode: `rule "desirable_difficulty" {
  transform_text_to_cloze()
  insert_spaced_intervals([1, 3, 7, 14])
  forbid_passive_restatement()
}`,
    testPrompt: 'Summarize the fall of the Western Roman Empire in three bullet points.',
    testPromptAr: 'لخص أسباب سقوط الإمبراطورية الرومانية الغربية في ثلاث نقاط سريعة.',
    agentResponse: 'Before receiving a summary: name one economic pressure and one external border crisis you recall from the 5th century. Let us test your retrieval first.',
    agentResponseAr: 'قبل أن أقدم الملخص: اذكر ضغطاً اقتصادياً واحداً وأزمة حدودية تتذكرها من القرن الخامس. دعنا ننشط استرجاع ذاكرتك أولاً.',
    invariantStatus: 'VERIFIED'
  },
  {
    id: 'skill-metacog',
    domain: 'Self-Regulated Learning',
    domainAr: 'التعلم المنظم ذاتياً وما وراء المعرفة',
    name: 'Metacognitive Calibration Checkpoint',
    nameAr: 'محطة المعايرة ما وراء المعرفية',
    evidence: 'Zimmerman (2002); Hattie & Timperley (2007)',
    evidenceAr: 'زيمرمان (2002)؛ هاتي وتيمبرلي (2007)',
    description: 'Prompts learners to predict their confidence level before checking answers to overcome the illusion of explanatory depth.',
    descriptionAr: 'يطلب من المتعلم تقدير درجة ثقته قبل رؤية النتيجة لكسر وهم الفهم السطحي (Illusion of Explanatory Depth).',
    ruleCode: `rule "metacognitive_checkpoint" {
  prompt_confidence_rating(scale: 1..5)
  compare_actual_vs_predicted()
  highlight_epistemic_blindspots()
}`,
    testPrompt: 'Did I get this algebra proof right?',
    testPromptAr: 'هل خطوات برهاني الجبري صحيحة؟',
    agentResponse: 'On a scale from 1 to 5, how certain are you of line 3 where you divided across the inequality? What rule governed the sign change there?',
    agentResponseAr: 'على مقياس من 1 إلى 5، ما مدى يقينك من الخطوة الثالثة عند القسمة على طرفي المتباينة؟ وما القاعدة التي تحكم تغيير الإشارة؟',
    invariantStatus: 'VERIFIED'
  }
];

export const invitedTalks: InvitedTalk[] = [
  {
    id: 'talk-purpose-hub',
    convenor: 'The Purpose Hub · Stanford Adolescence Research',
    convenorAr: 'ملتقى الهدف الإنساني · أبحاث ستانفورد للمراهقة',
    title: 'Cultivating Pro-Planetary Purpose in Educational Architectures',
    titleAr: 'غرس الهدف الكوكبي والمسؤولية البيئية في الأطر التعليمية',
    year: '2024',
    role: 'Keynote Dialogue',
    roleAr: 'جلسة حوارية رئيسية',
    summary: 'Explored how regenerative curriculum frameworks inspire youth to direct technological agency toward planetary flourishing and ecological stewardship.',
    summaryAr: 'بحث معمق حول كيفية توجيه كفاءات الشباب والتقنيات الحديثة نحو حماية النظم الحيوية للكوكب وتعزيز الازدهار البيئي.',
    linkText: 'Session Documentation →',
    linkTextAr: 'توثيق الجلسة →',
    url: 'https://thepurposehub.org/gm_recording/'
  },
  {
    id: 'talk-unesco',
    convenor: 'UNESCO MGIEP · The Blue Dot',
    convenorAr: 'منظمة اليونسكو MGIEP · مجلة النقطة الزرقاء',
    title: 'Reimagining Education Beyond Rhetoric: Structural Agency',
    titleAr: 'إعادة تصور التعليم: ما بعد الشعارات نحو الفاعلية الهيكلية',
    year: '2021',
    role: 'Editorial Framework & Panel',
    roleAr: 'إطار تحريري وجلسة خبراء',
    summary: 'Analyzed structural agency, curriculum reform, and bridging the divide between educational rhetoric and operational classroom realities.',
    summaryAr: 'تحليل للفاعلية المنظومية، وتطوير المناهج، وتجسير الفجوة بين الخطاب النظري وواقع الفصول الدراسية.',
    linkText: 'Read Issue 13 →',
    linkTextAr: 'قراءة العدد 13 →',
    url: 'https://mgiep.unesco.org/article/the-blue-dot-13-reimagining-education-beyond-the-rhetoric'
  },
  {
    id: 'talk-iit',
    convenor: 'IIT Gandhinagar · Cognitive Science Working Group',
    convenorAr: 'المعهد الهندي للتكنولوجيا (IIT) · مجموعة علوم الإدراك',
    title: 'Neuroscience, Technology and Cognitive Constraints in Education',
    titleAr: 'علوم الأعصاب، التقنية والمحددات الإدراكية في التعليم',
    year: '2021',
    role: 'Research Panel',
    roleAr: 'حلقة نقاش بحثية',
    summary: 'Examined empirical cognitive constraints and working memory limits on digital learning tools and algorithmic scaffolding.',
    summaryAr: 'فحص المحددات الإدراكية التجريبية وحدود الذاكرة العاملة عند التفاعل مع الأدوات الرقمية والدعامات الخوارزمية.',
    linkText: 'Research Group →',
    linkTextAr: 'مجموعة الأبحاث →',
    url: 'https://cogs.iitgn.ac.in/'
  },
  {
    id: 'talk-sri-lanka',
    convenor: 'Education Forum Sri Lanka · Policy Dialogue',
    convenorAr: 'منتدى التعليم في سريلانكا · حوار السياسات',
    title: 'Emergency Preparedness & Resilient Learning Continuity',
    titleAr: 'جاهزية الطوارئ والمرونة المنظومية لاستمرارية التعلم',
    year: '2021',
    role: 'Policy Intervention',
    roleAr: 'مداخلة سياسات تعليمية',
    summary: 'Explored systemic resilience, distributed learning models, and teacher well-being during emergency school disruptions.',
    summaryAr: 'استكشاف نماذج التعليم الموزع، ومرونة النظم المدرسية، وصحة المعلمين أثناء الأزمات والاضطرابات الميدانية.',
    linkText: 'Policy Summary →',
    linkTextAr: 'ملخص السياسات →',
    url: 'https://educationforum.lk/2021/06/policy-dialogue-16-emergency-preparedness-of-schools/'
  }
];

export const garethEssays: EssayItem[] = [
  {
    id: 'essay-1',
    title: 'Pedagogical Judgement is the Scarce Layer in Autonomous Systems',
    titleAr: 'الحكمة التربوية هي الركيزة النادرة في النظم الذاتية',
    series: 'Learning Systems Architectures',
    seriesAr: 'سلسلة عمارة النظم التعليمية',
    date: '2026',
    readTime: '7 min read',
    abstract: 'Raw language model compute is undergoing exponential deflation. Anyone can generate infinite practice questions and summaries. What remains scarce, brittle, and essentially human is pedagogical judgement.',
    abstractAr: 'تتراجع تكلفة توليد النصوص بالذكاء الاصطناعي بشكل فائق، لكن ما يظل نادراً ودقيقاً هو الحكمة التربوية التي تعرف متى تتوقف، وكيف تحفز التفكير الإنساني المستقل.',
    bodyParagraphs: [
      'When examining modern synthetic educational software, an unmistakable paradigm dominates: tools treat learning as a problem of rapid information delivery. They operate on the false premise that if an AI can deliver an instantaneous answer, learning has occurred.',
      'Cognitive science establishes the exact opposite. Long-term consolidation requires productive struggle—what Robert Bjork terms "desirable difficulties." When an agent gives away the concluding leap of an intellectual problem, it performs an act of cognitive theft.',
      'The Education Agent Skills architecture addresses this by translating established learning science into verifiable prompt invariants. Autonomous agents must act as Socratic interlocutors: detecting misconceptions, providing structural analogies, withholding direct solutions, and demanding student synthesis.'
    ],
    bodyParagraphsAr: [
      'حين نتأمل البرمجيات التعليمية الآلية الحديثة، نجد نمطاً غالباً: التعامل مع التعلم كمسألة نقل معلومات فوري، والافتراض الخاطئ بأن الشرح اللحظي يعني تحقق الفهم.',
      'لكن علوم الإدراك تثبت العكس تماماً؛ فالتعلم الحقيقي يتطلب كفاحاً ذهنياً مثمراً وصعوبة مرغوبة. وحين يقفز الوكيل الذكي لتقديم الحل النهائي، فإنه يسلب عقل المتعلم فرصته في النمو والتحليل.',
      'من هنا صُممت مواصفة مهارات وكلاء التعليم لتترجم علوم الإدراك إلى ثوابت برمجية ملزمة تجعل الوكيل محاوراً يقود المتعلم لاكتشاف النتيجة وصياغة الفهم بنفسه.'
    ]
  },
  {
    id: 'essay-2',
    title: 'Regenerative Educational Architectures: Beyond Extractive Paradigms',
    titleAr: 'العمارة التعليمية المتجددة: ما بعد المنطق الاستهلاكي',
    series: 'Future of Learning Systems',
    seriesAr: 'مستقبل النظم التعليمية',
    date: '2025',
    readTime: '9 min read',
    abstract: 'Industrial-era schooling was architected to sort standardized human capital. A regenerative education system asks a fundamentally different question: how do learning environments become living engines for planetary renewal?',
    abstractAr: 'صُممت مدارس العصر الصناعي لفرز رأس مال بشري نمطي؛ بينما تسأل النظم التعليمية المتجددة: كيف تتحول بيئات التعلم إلى روافع حية لإحياء المجتمعات والكوكب؟',
    bodyParagraphs: [
      'For over a century, schooling has operated on extractive metrics. Students extract grades, credentials, and institutional rank; economies extract standardized labor. The planetary boundary challenges of our century prove that this paradigm has reached its hard boundary.',
      'Competency-based frameworks such as the Global Impact Credential demonstrate that when adolescents grapple with authentic community challenges—ecological restoration, clean energy auditing, and civic technology—intrinsic motivation and cognitive transfer multiply.',
      'Regenerative education does not abandon rigorous academic disciplines; it contextualizes them within the living systems that sustain humanity and civilization.'
    ],
    bodyParagraphsAr: [
      'لأكثر من قرن، عكست المدارس منطقاً استهلاكياً يفرز الدرجات للوظائف. لكن التحديات البيئية الراهنة تثبت أن هذا النموذج قد استنفد غايته.',
      'أثبتت أطر الكفاءات مثل دبلوم الأثر العالمي أنه حين يُمنح المتعلمون تحديات واقعية كاستصلاح البيئة وتدقيق كفاءة الطاقة والتقنية المدنية، تتضاعف دافعيتهم للتعلم وقدرتهم على نقل المعرفة.',
      'إن التعليم المتجدد لا يتخلى عن الرصانة العلمية؛ بل يوظفها لخدمة الحياة والمستقبل المشترك للإنسانية.'
    ]
  }
];
