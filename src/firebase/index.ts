
'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'

// IMPORTANT: DO NOT MODIFY THIS FUNCTION
export function initializeFirebase() {
  if (getApps().length) {
    return getSdks(getApp());
  }

  // When deployed to Firebase App Hosting, GOOGLE_CLOUD_PROJECT is set.
  // We can use this to determine if we should try automatic initialization.
  // In other environments (like Netlify or local dev), we'll use the config.
  let firebaseApp;
  if (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || process.env.GCLOUD_PROJECT) {
      try {
        // Attempt to initialize via Firebase App Hosting environment variables
        firebaseApp = initializeApp();
      } catch (e) {
        // Fallback for safety, though it should work if env vars are set.
        if (process.env.NODE_ENV === "production") {
            console.warn('Automatic initialization failed despite env vars. Falling back to firebase config object.', e);
        }
        firebaseApp = initializeApp(firebaseConfig);
      }
  } else {
      // Initialize with config for local dev, Netlify, Vercel, etc.
      firebaseApp = initializeApp(firebaseConfig);
  }

  return getSdks(firebaseApp);
}


export function getSdks(firebaseApp: FirebaseApp) {
  const auth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp);

  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    if (!(globalThis as any).emulatorConnected) {
      try {
        connectAuthEmulator(auth, 'http://127.0.0.1:9099');
        connectFirestoreEmulator(firestore, '127.0.0.1', 8080);
        (globalThis as any).emulatorConnected = true;
      } catch (e) {
        // console.error(e)
      }
    }
  }


  return {
    firebaseApp,
    auth,
    firestore,
  };
}

export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';
