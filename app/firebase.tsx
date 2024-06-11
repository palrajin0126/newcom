// firebase.tsx

import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { getStorage } from 'firebase/storage';
import * as dotenv from 'dotenv';

dotenv.config();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

let messaging: ReturnType<typeof getMessaging> | undefined;

if (typeof window !== 'undefined') {
  messaging = getMessaging(app);
  navigator.serviceWorker
    .register('/firebase-messaging-sw.js')
    .then((registration) => {
      // Get token
      getToken(messaging!, { vapidKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_VAPID_KEY!, serviceWorkerRegistration: registration })
        .then((currentToken) => {
          if (currentToken) {
            console.log('Current token for client: ', currentToken);
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        })
        .catch((err) => {
          console.error('An error occurred while retrieving token. ', err);
        });

      // Handle incoming messages
      onMessage(messaging!, (payload) => {
        console.log('Message received. ', payload);
      });
    })
    .catch((err) => {
      console.error('Service worker registration failed, error:', err);
    });
}

export { app, db, auth, messaging, storage, getToken };
