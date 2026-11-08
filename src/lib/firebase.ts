import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, User } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase Client SDK (100% Spark Free Plan compliant)
export const app = initializeApp(firebaseConfig);

// CRITICAL: Pass firestoreDatabaseId for provisioned database
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

// Error Contextual Wrapper
export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
  };
}

export function handleFirestoreError(
  error: unknown,
  operationType: OperationType,
  path: string | null
): FirestoreErrorInfo {
  const errorMessage = error instanceof Error ? error.message : String(error);
  const errInfo: FirestoreErrorInfo = {
    error: errorMessage,
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
    },
    operationType,
    path,
  };
  // Detailed diagnostic info kept strictly in console
  console.error('[Firestore Diagnostic]:', JSON.stringify(errInfo));
  return errInfo;
}

// User-friendly error message generator (prevents leaking sensitive info to UI)
export function getUserFriendlyErrorMessage(errInfo: FirestoreErrorInfo, lang: 'ar' | 'en'): string {
  const err = errInfo.error.toLowerCase();
  const isAr = lang === 'ar';

  if (err.includes('permission-denied') || err.includes('insufficient permissions')) {
    if (errInfo.operationType === OperationType.DELETE) {
      return isAr
        ? 'لا تملك صلاحية حذف هذا العنصر. يحق فقط لصاحب المهارة حذفها.'
        : 'Permission denied: Only the author can delete this skill.';
    }
    return isAr
      ? 'ليس لديك الصلاحية لتنفيذ هذا الإجراء. يرجى تسجيل الدخول بحساب Google أولاً.'
      : 'Permission denied. Please sign in with Google to continue.';
  }

  if (err.includes('offline') || err.includes('unavailable') || err.includes('network')) {
    return isAr
      ? 'تعذر الاتصال بقاعدة البيانات. تحقق من اتصال الإنترنت.'
      : 'Network error: Database client is currently offline.';
  }

  return isAr
    ? 'حدث خطأ أثناء معالجة الطلب في قاعدة البيانات.'
    : 'A database error occurred while processing your request.';
}

export type ConnectionState = 'connected' | 'permission-denied' | 'offline' | 'misconfigured';

export interface ConnectionTestResult {
  state: ConnectionState;
  message: string;
  messageAr: string;
}

// Non-blocking connection verification on boot
export async function testConnection(): Promise<ConnectionTestResult> {
  if (!firebaseConfig || !firebaseConfig.projectId || !firebaseConfig.firestoreDatabaseId) {
    return {
      state: 'misconfigured',
      message: 'Firebase configuration is incomplete or missing.',
      messageAr: 'إعدادات Firebase غير مكتملة.',
    };
  }

  try {
    // Non-blocking probe against server
    await getDocFromServer(doc(db, '_connection_test', 'status'));
    return {
      state: 'connected',
      message: 'Cloud Firestore connected and synchronized.',
      messageAr: 'قاعدة بيانات Cloud Firestore متصلة ومزامنة بنجاح.',
    };
  } catch (error) {
    const errStr = error instanceof Error ? error.message.toLowerCase() : String(error).toLowerCase();

    if (errStr.includes('offline') || errStr.includes('unavailable')) {
      console.warn('[Firestore]: Network unreachable or client offline.');
      return {
        state: 'offline',
        message: 'Client is offline. Local caching active.',
        messageAr: 'العميل غير متصل بالإنترنت. التخزين المؤقت مفعل.',
      };
    }

    if (errStr.includes('permission-denied') || errStr.includes('insufficient permissions')) {
      // Permission denied proves active connection to Firestore server, but test document path is guarded
      return {
        state: 'permission-denied',
        message: 'Server reachable with zero-trust access rules active.',
        messageAr: 'الخادم متصل مع تفعيل قواعد الأمان المشددة (Zero-Trust).',
      };
    }

    console.warn('[Firestore testConnection]:', error);
    return {
      state: 'misconfigured',
      message: 'Firestore initialization error.',
      messageAr: 'خطأ في تهيئة الاتصال بقاعدة البيانات.',
    };
  }
}
