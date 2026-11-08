import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import {
  auth,
  googleAuthProvider,
  db,
  testConnection,
  handleFirestoreError,
  getUserFriendlyErrorMessage,
  OperationType,
  ConnectionTestResult,
} from '../lib/firebase';
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
  query,
  limit,
} from 'firebase/firestore';
import {
  Database,
  LogIn,
  LogOut,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

interface FirebaseManagerProps {
  lang: Language;
}

interface SavedSkill {
  id: string;
  name: string;
  domain: string;
  evidenceBase?: string;
  description: string;
  ruleCode: string;
  authorId: string;
  authorEmail?: string;
  createdAt?: string;
  updatedAt?: string;
}

export const FirebaseSkillsManager: React.FC<FirebaseManagerProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [connectionResult, setConnectionResult] = useState<ConnectionTestResult>({
    state: 'misconfigured',
    message: 'Checking Firestore connection...',
    messageAr: 'جارٍ التحقق من اتصال قاعدة البيانات...',
  });
  const [skills, setSkills] = useState<SavedSkill[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [formOpen, setFormOpen] = useState<boolean>(false);
  const [notification, setNotification] = useState<{ message: string; isError?: boolean } | null>(null);

  // Form states
  const [skillName, setSkillName] = useState('');
  const [skillDomain, setSkillDomain] = useState('Learning Science & Scaffolding');
  const [skillEvidence, setSkillEvidence] = useState('Sweller (1988); Paas et al. (2003)');
  const [skillDescription, setSkillDescription] = useState('');
  const [skillRuleCode, setSkillRuleCode] = useState('rule "cognitive_load_guard" {\n  assert max_active_concepts <= 3\n}');

  // Track auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Verify connection probe on boot (non-blocking)
  useEffect(() => {
    testConnection().then((res) => {
      setConnectionResult(res);
    });
  }, []);

  // Real-time listener for custom skills in Firestore
  useEffect(() => {
    const q = query(collection(db, 'custom_skills'), limit(20));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const fetched: SavedSkill[] = [];
        snapshot.forEach((docSnap) => {
          fetched.push({ id: docSnap.id, ...(docSnap.data() as Omit<SavedSkill, 'id'>) });
        });
        setSkills(fetched);
      },
      (error) => {
        const errInfo = handleFirestoreError(error, OperationType.LIST, 'custom_skills');
        console.warn('[Firestore listener notice]:', errInfo.error);
        setNotification({
          message: getUserFriendlyErrorMessage(errInfo, lang),
          isError: true,
        });
      }
    );

    return () => unsubscribe();
  }, []);

  const showNotice = (message: string, isError = false) => {
    setNotification({ message, isError });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      showNotice(isAr ? 'تم تسجيل الدخول بنجاح مع Google' : 'Authenticated with Google successfully');
    } catch (err) {
      console.error('Sign-in error:', err);
      showNotice(
        isAr ? 'تعذر إتمام تسجيل الدخول أو تم إلغاؤه' : 'Sign-in cancelled or failed',
        true
      );
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      showNotice(isAr ? 'تم تسجيل الخروج بنجاح' : 'Signed out successfully');
    } catch (err) {
      console.error('Sign-out error:', err);
      showNotice(isAr ? 'حدث خطأ أثناء تسجيل الخروج' : 'Error during sign out', true);
    }
  };

  const handleCreateSkill = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return; // Prevent duplicate concurrent commits

    if (!currentUser) {
      showNotice(isAr ? 'يرجى تسجيل الدخول بحساب Google أولاً لنشر المهارة' : 'Please sign in with Google to publish skills', true);
      return;
    }
    if (!skillName.trim() || !skillDescription.trim()) return;

    setLoading(true);
    const newId = `skill_${Date.now()}`;
    const payload = {
      id: newId,
      name: skillName.trim(),
      domain: skillDomain.trim(),
      evidenceBase: skillEvidence.trim(),
      description: skillDescription.trim(),
      ruleCode: skillRuleCode.trim(),
      authorId: currentUser.uid,
      authorEmail: currentUser.email || 'anonymous@antigravity.run',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    try {
      await setDoc(doc(db, 'custom_skills', newId), payload);
      setSkillName('');
      setSkillDescription('');
      setFormOpen(false);
      showNotice(isAr ? 'تم حفظ وتأكيد المهارة في Cloud Firestore بنجاح' : 'Skill verified and saved to Cloud Firestore (Spark Plan)');
    } catch (error) {
      const errInfo = handleFirestoreError(error, OperationType.CREATE, `custom_skills/${newId}`);
      showNotice(getUserFriendlyErrorMessage(errInfo, lang), true);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSkill = async (skillId: string, authorId: string) => {
    if (deletingId) return;

    if (!currentUser || currentUser.uid !== authorId) {
      showNotice(isAr ? 'يحق فقط لصاحب المهارة حذفها' : 'Only the author can delete this skill', true);
      return;
    }

    setDeletingId(skillId);
    try {
      await deleteDoc(doc(db, 'custom_skills', skillId));
      showNotice(isAr ? 'تم حذف المهارة من Firestore' : 'Skill removed from Firestore');
    } catch (error) {
      const errInfo = handleFirestoreError(error, OperationType.DELETE, `custom_skills/${skillId}`);
      showNotice(getUserFriendlyErrorMessage(errInfo, lang), true);
    } finally {
      setDeletingId(null);
    }
  };

  // Determine badge styling based on probe result
  const getStatusBadge = () => {
    switch (connectionResult.state) {
      case 'connected':
        return {
          dot: 'bg-emerald-400',
          text: isAr ? 'قاعدة البيانات متصلة ومزامنة' : 'FIRESTORE ONLINE & SYNCED',
          textColor: 'text-emerald-400',
          bg: 'bg-emerald-500/10',
        };
      case 'permission-denied':
        return {
          dot: 'bg-blue-400',
          text: isAr ? 'خادم متصل (قواعد Zero-Trust)' : 'REACHABLE (ZERO-TRUST ACTIVE)',
          textColor: 'text-blue-400',
          bg: 'bg-blue-500/10',
        };
      case 'offline':
        return {
          dot: 'bg-amber-400',
          text: isAr ? 'العميل غير متصل (تخزين محلي)' : 'CLIENT OFFLINE (CACHED)',
          textColor: 'text-amber-400',
          bg: 'bg-amber-500/10',
        };
      default:
        return {
          dot: 'bg-zinc-400',
          text: isAr ? 'تهيئة الاتصال' : 'CONFIG CHECK',
          textColor: 'text-zinc-400',
          bg: 'bg-zinc-500/10',
        };
    }
  };

  const statusBadge = getStatusBadge();

  return (
    <section id="firebase-registry" className="py-20 md:py-28 border-b border-white/8 bg-[#090b10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Antigravity Telemetry Status Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-[#0f121a] border border-white/10 mb-12 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${statusBadge.dot} animate-pulse`} />
              <span className="text-white font-medium">FIRESTORE CLOUD DATABASE</span>
            </div>
            <span className="text-white/30">|</span>
            <span className={`${statusBadge.textColor} font-semibold ${statusBadge.bg} px-2 py-0.5 rounded`}>
              {statusBadge.text}
            </span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">
              Firebase Spark Plan (100% Free Tier)
            </span>
            <span className="text-white/30 hidden md:inline">|</span>
            <span className="text-white/50 hidden md:inline truncate max-w-xs">
              europe-west2 · ai-studio-antigravitylearn
            </span>
          </div>

          {/* Auth Controls */}
          <div className="flex items-center gap-3">
            {currentUser ? (
              <div className="flex items-center gap-2">
                <span className="text-white/70 truncate max-w-[150px]">
                  {currentUser.displayName || currentUser.email}
                </span>
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-1 px-3 py-1 bg-white/5 hover:bg-white/10 text-white/80 rounded-full border border-white/10 transition-colors"
                >
                  <LogOut className="w-3 h-3" />
                  <span>{isAr ? 'خروج' : 'Sign Out'}</span>
                </button>
              </div>
            ) : (
              <button
                onClick={handleSignIn}
                className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-all shadow-sm font-medium"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>{isAr ? 'تسجيل الدخول مع Google' : 'Sign In with Google'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-blue-400 mb-2">
              <Database className="w-3.5 h-3.5 text-blue-400" />
              <span>{isAr ? 'سجل المهارات السحابي الحي' : 'Cloud Firestore Skills Registry'}</span>
              <span aria-hidden="true" className="text-white/20">/</span>
              <span className="text-white/50">Zero-Cost Spark Deployment</span>
            </div>
            <h2 className="font-display text-[30px] md:text-[42px] font-bold tracking-[-0.03em] text-white">
              {isAr ? 'حفظ واسترجاع المهارات المعرفية الحية' : 'Live Persistent Skills & Rule Storage.'}
            </h2>
            <p className="mt-2 text-sm md:text-base text-white/65 max-w-2xl font-normal">
              {isAr
                ? 'قاعدة بيانات Cloud Firestore السحابية المجانية تماماً. يمكنك حفظ وتعديل مهارات الذكاء الاصطناعي التربوية واسترجاعها في الزمن الحقيقي دون أي تكاليف.'
                : 'Direct synchronization with Cloud Firestore on the Spark Plan. Publish custom pedagogical invariant rules, inspect community contributions, and test in real time.'}
            </p>
          </div>

          <button
            onClick={() => setFormOpen(!formOpen)}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-[0.1em] text-black bg-white rounded-full hover:bg-white/90 transition-all shadow-sm self-start md:self-auto"
          >
            <Plus className="w-4 h-4 text-blue-600" />
            <span>{formOpen ? (isAr ? 'إلغاء' : 'Close Editor') : (isAr ? 'إضافة مهارة سحابية' : 'Publish New Skill')}</span>
          </button>
        </div>

        {/* Notification Toast */}
        {notification && (
          <div
            className={`mb-6 p-3 rounded-xl border text-xs font-mono flex items-center gap-2 animate-fade-in ${
              notification.isError
                ? 'bg-red-500/10 border-red-500/30 text-red-300'
                : 'bg-blue-500/10 border-blue-500/30 text-blue-300'
            }`}
          >
            {notification.isError ? (
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
            ) : (
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
            )}
            <span>{notification.message}</span>
          </div>
        )}

        {/* Skill Creation Form Modal/Card */}
        {formOpen && (
          <form onSubmit={handleCreateSkill} className="mb-10 p-6 sm:p-8 rounded-[2rem] bg-[#0e111a] border border-blue-500/30 chromatic-border space-y-4">
            <h3 className="font-display text-xl font-bold text-white mb-4">
              {isAr ? 'نشر مهارة تربوية جديدة في Firestore' : 'Publish Pedagogical Rule to Firestore'}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-white/60 mb-1">
                  {isAr ? 'اسم المهارة:' : 'Skill Name:'}
                </label>
                <input
                  type="text"
                  required
                  value={skillName}
                  onChange={(e) => setSkillName(e.target.value)}
                  placeholder="e.g. Cognitive Load Limiter"
                  className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs font-mono focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-white/60 mb-1">
                  {isAr ? 'المجال الإدراكي:' : 'Cognitive Domain:'}
                </label>
                <input
                  type="text"
                  required
                  value={skillDomain}
                  onChange={(e) => setSkillDomain(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs font-mono focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-white/60 mb-1">
                {isAr ? 'المرجعية العلمية (Research Citation):' : 'Empirical Research Base:'}
              </label>
              <input
                type="text"
                value={skillEvidence}
                onChange={(e) => setSkillEvidence(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs font-mono focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-white/60 mb-1">
                {isAr ? 'الوصف الوظيفي للمهارة:' : 'Operational Description:'}
              </label>
              <textarea
                required
                rows={2}
                value={skillDescription}
                onChange={(e) => setSkillDescription(e.target.value)}
                placeholder="Describe how the rule constrains the AI model..."
                className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs font-mono focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-white/60 mb-1">
                {isAr ? 'كود ثوابت القاعدة (Rule Invariant Snippet):' : 'Rule Invariant AST Code:'}
              </label>
              <textarea
                required
                rows={3}
                value={skillRuleCode}
                onChange={(e) => setSkillRuleCode(e.target.value)}
                className="w-full p-3 rounded-xl bg-black/80 border border-white/10 text-blue-300 text-xs font-mono focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] font-mono text-white/40">
                {isAr ? 'تُحفظ البيانات في مجموعة /custom_skills المأمونة' : 'Writes directly to secured /custom_skills collection'}
              </span>

              <button
                type="submit"
                disabled={loading}
                className="px-5 py-2 text-xs font-mono uppercase tracking-[0.1em] text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-colors disabled:opacity-50"
              >
                {loading ? (isAr ? 'جاري التحقق والحفظ...' : 'Validating & Persisting...') : isAr ? 'حفظ في Firestore' : 'Commit to Firestore'}
              </button>
            </div>
          </form>
        )}

        {/* Live Skills Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.length === 0 ? (
            <div className="col-span-full p-8 text-center rounded-[2rem] border border-white/8 bg-[#0d0f17] text-white/50 font-mono text-xs">
              <Database className="w-6 h-6 mx-auto mb-2 text-white/30" />
              <p>{isAr ? 'لم تتم إضافة مهارات مخصصة بعد. انقر على "إضافة مهارة سحابية" لحفظ أول مهارة في Firestore.' : 'No custom skills authored yet. Click "Publish New Skill" to test live Firestore writes.'}</p>
            </div>
          ) : (
            skills.map((skill) => (
              <div
                key={skill.id}
                className="rounded-[1.75rem] border border-white/10 bg-[#0e1017] p-6 flex flex-col justify-between shadow-[0_12px_40px_rgba(0,0,0,0.5)] hover:border-white/20 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-white/40 mb-2">
                    <span className="text-blue-400 uppercase tracking-[0.1em]">{skill.domain}</span>
                    <span className="text-emerald-400">FIRESTORE SYNCED</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-1">
                    {skill.name}
                  </h3>

                  {skill.evidenceBase && (
                    <p className="text-[11px] font-mono text-white/50 italic mb-2">
                      {skill.evidenceBase}
                    </p>
                  )}

                  <p className="text-xs text-white/65 leading-relaxed mb-4">
                    {skill.description}
                  </p>

                  <pre className="p-3 rounded-lg bg-black/60 border border-white/8 text-[10px] font-mono text-blue-300 overflow-x-auto mb-4">
                    {skill.ruleCode}
                  </pre>
                </div>

                <div className="pt-3 border-t border-white/8 flex items-center justify-between text-xs font-mono text-white/40">
                  <span className="truncate max-w-[140px]">{skill.authorEmail}</span>
                  {currentUser && currentUser.uid === skill.authorId && (
                    <button
                      onClick={() => handleDeleteSkill(skill.id, skill.authorId)}
                      disabled={deletingId === skill.id}
                      className="p-1 hover:text-red-400 transition-colors disabled:opacity-50"
                      title={isAr ? 'حذف من Firestore' : 'Delete from Firestore'}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
