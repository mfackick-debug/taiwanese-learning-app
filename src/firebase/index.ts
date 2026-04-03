
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';
import { firebaseConfig } from './config';

export function initializeFirebase(): {
  firebaseApp: FirebaseApp;
  firestore: Firestore;
  auth: Auth;
} {
  // Check if config exists and looks valid before initializing
  // Invalid strings like "undefined" from misconfigured env vars are common causes
  const isConfigValid = firebaseConfig.apiKey && 
                        firebaseConfig.apiKey !== 'undefined' && 
                        firebaseConfig.apiKey.length > 10;
  
  if (!isConfigValid) {
    throw new Error('Firebase API Keyが無効または不足しています。.envファイルの設定を確認してください。');
  }

  const firebaseApp = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  return { firebaseApp, firestore, auth };
}

export * from './provider';
export * from './auth/use-user';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
