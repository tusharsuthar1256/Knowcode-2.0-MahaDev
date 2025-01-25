// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqWbCc_7oqPzDR8SALSubN8_dX2OBtM6M",
  authDomain: "newfolder-db6ac.firebaseapp.com",
  projectId: "newfolder-db6ac",
  storageBucket: "newfolder-db6ac.firebasestorage.app",
  messagingSenderId: "675601166599",
  appId: "1:675601166599:web:00e7fb3a1e64efe84295a2",
  measurementId: "G-3P2YZ8EX7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, googleProvider, signInWithPopup, signOut, db,storage};
