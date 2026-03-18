// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { ENV } from "../src/config/env"

// Opcional: Se você for usar Realtime Database
// import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  projectId: ENV.FIREBASE_PROJECT_ID,
  storageBucket: ENV.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: ENV.FIREBASE_MESSAGING_SENDER_ID,
  appId: ENV.FIREBASE_APP_ID,
  measurementId: ENV.FIREBASE_MEASUREMENT_ID
};
// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Obtém uma instância do Firestore
export const db = getFirestore(app);

// Opcional: Se você for usar Realtime Database
// export const rtdb = getDatabase(app);
