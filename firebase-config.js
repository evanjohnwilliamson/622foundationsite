// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6nSNnM0Y7r-i-7Y11b6E04hE51fc2rSw",
  authDomain: "foundation-259ea.firebaseapp.com",
  projectId: "foundation-259ea",
  storageBucket: "foundation-259ea.firebasestorage.app",
  messagingSenderId: "359815211839",
  appId: "1:359815211839:web:73981cf6cdb258e380c18a",
  measurementId: "G-EKX2GYLBBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db, analytics };