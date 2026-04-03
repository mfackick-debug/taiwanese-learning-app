
'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { initializeFirebase } from './index';
import { FirebaseProvider } from './provider';
import { FirebaseApp } from 'firebase/app';
import { Firestore } from 'firebase/firestore';
import { Auth } from 'firebase/auth';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { ShieldAlert } from 'lucide-react';

export const FirebaseClientProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [services, setServices] = useState<{
    firebaseApp: FirebaseApp;
    firestore: Firestore;
    auth: Auth;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const { firebaseApp, firestore, auth } = initializeFirebase();
      setServices({ firebaseApp, firestore, auth });
    } catch (e: any) {
      console.error('Failed to initialize Firebase:', e);
      setError(e.message || 'Firebaseの初期化に失敗しました。');
    }
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-background">
        <Alert variant="destructive" className="max-w-md border-2">
          <ShieldAlert className="h-5 w-5" />
          <AlertTitle className="text-lg font-headline font-bold">Firebase 設定エラー</AlertTitle>
          <AlertDescription className="mt-4 font-body">
            <p className="mb-4">{error}</p>
            <div className="space-y-2 text-sm opacity-90">
              <p className="font-bold">解決のためのステップ:</p>
              <ol className="list-decimal ml-5 space-y-1">
                <li>Firebase Consoleでプロジェクト設定を開く</li>
                <li>「マイアプリ」からWebアプリのSDK設定を確認する</li>
                <li>APIキー等の値をローカルの <code>.env</code> ファイルにコピーする</li>
                <li>開発サーバーを再起動する</li>
              </ol>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  if (!services) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="font-headline font-bold text-primary animate-pulse">Initializing Services...</p>
        </div>
      </div>
    );
  }

  return (
    <FirebaseProvider
      firebaseApp={services.firebaseApp}
      firestore={services.firestore}
      auth={services.auth}
    >
      {children}
    </FirebaseProvider>
  );
};
