// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyBKUA7bJRb6TxoNQNaFAOlcETNaVstsg",
  authDomain: "clone-c5efd.firebaseapp.com",
  projectId: "clone-c5efd",
  storageBucket: "clone-c5efd.firebasestorage.app",
  messagingSenderId: "757402157676",
  appId: "1:757402157676:web:be260a1f8d86c47d514e49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

