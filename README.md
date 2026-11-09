# Antigravity // Learning Systems & Agent Infrastructure

منصة معمارية مفتوحة المصدر ومنظومة تشغيل مصممة لإكساب وكلاء الذكاء الاصطناعي **حكمة تربوية** مستندة إلى علوم الإدراك والتعلم.

تهدف إلى منع التلقين وتسريب الإجابات الجاهزة، وتحفيز التفكير الإنساني المستقل من خلال:
- مهارات وكلاء مبنية على أدلة علمية (165 مهارة عبر 20 مجالًا)
- أنظمة علوم الذاكرة والاسترجاع المتباعد
- نمذجة طوبولوجية للمعرفة (Knowledge Graphs)
- واجهات تفاعلية لاستكشاف الأنظمة والمهارات

مبني بـ **React 19 + TypeScript + Vite + Tailwind CSS + Three.js**، ويدعم العربية والإنجليزية مع تبديل كامل للاتجاه (RTL/LTR).

---

## الميزات الرئيسية

- واجهة ثنائية اللغة (عربي / إنجليزي) مع تبديل فوري لـ RTL/LTR
- خلفية جزيئات تفاعلية بـ Three.js
- قسم **Learning Agent Cockpit** لتجربة مهارات الوكلاء التعليمية
- مصفوفة مشاريع وأنظمة (Projects Matrix)
- قسم المحاضرات المدعوة والكتابات البحثية
- بيانات وهمية منظمة (mock data) جاهزة للتخصيص
- تكامل جاهز مع Gemini API
- تصميم داكن أنيق ومتجاوب
- مكونات تفاعلية متقدمة (مثل Zero Gravity Playground)

---

## مكتبة الاستلهام البحثي والتقني

أُضيفت مكتبة مرجعية للمواقع والمؤسسات والمستودعات المفتوحة في علوم التعلم والبحث التربوي والذكاء الاصطناعي التعليمي، مع توضيح ما يمكن دراسته منها وضوابط الاستلهام وإعادة الاستخدام.

- [مكتبة المواقع والمستودعات المرجعية](docs/inspiration/README.md)

---

## التقنيات المستخدمة

| التقنية          | الاستخدام                          |
|------------------|------------------------------------|
| React 19         | واجهة المستخدم                     |
| TypeScript       | الكتابة الآمنة للأنواع             |
| Vite             | البناء والتطوير السريع             |
| Tailwind CSS v4  | التنسيق والتصميم                   |
| Three.js         | الخلفية التفاعلية بالجزيئات        |
| Motion           | الرسوم المتحركة                    |
| Lucide React     | الأيقونات                          |
| Google GenAI     | تكامل نماذج Gemini                 |

---

## البدء السريع

### المتطلبات
- Node.js 18+ أو Bun
- مفتاح Gemini API (اختياري للتفاعلات الذكية)

### التثبيت

```bash
# استنساخ المستودع
git clone https://github.com/carismahousecontact-ops/ai-educational-research-template.git
cd ai-educational-research-template

# تثبيت الاعتماديات
bun install
# أو
npm install

# نسخ ملف البيئة
cp .env.example .env
```

أضف مفتاح Gemini الخاص بك في ملف `.env`:

```env
GEMINI_API_KEY=your_api_key_here
```

### تشغيل المشروع

```bash
bun run dev
# أو
npm run dev
```

سيعمل الموقع على: [http://localhost:3000](http://localhost:3000)

---

## هيكل المشروع

```text
src/
├── components/          # المكونات الرئيسية
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── LearningAgentCockpit.tsx
│   ├── ProjectsMatrix.tsx
│   ├── InvitedTalksTerminal.tsx
│   ├── WritingReader.tsx
│   ├── Footer.tsx
│   ├── ParticleBackground.tsx
│   └── ZeroGravityPlayground.tsx
├── data/
│   └── mockData.ts      # البيانات الوهمية (مشاريع، مهارات، رحلات...)
├── assets/images/       # الصور
├── App.tsx              # المكون الرئيسي
├── main.tsx
├── index.css
└── types.ts             # تعريفات الأنواع
```

---

## التخصيص

- **اللغة الافتراضية**: يمكن تغييرها من `src/App.tsx` (الحالة الابتدائية لـ `lang`)
- **البيانات**: عدّل ملف `src/data/mockData.ts` لإضافة مشاريع أو مهارات خاصة بك
- **الألوان والخطوط**: قابلة للتخصيص عبر Tailwind وملف `src/index.css`
- **الخلفية التفاعلية**: يمكن تعطيلها من مكون `ParticleBackground`

---

## الترخيص

هذا المشروع مرخص تحت رخصة **Apache-2.0**.

---

صُمم لتطوير أنظمة تعلم ذاتية أكثر حكمة وإنسانية في عصر الذكاء الاصطناعي.
