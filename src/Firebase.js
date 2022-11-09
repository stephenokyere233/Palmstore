// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// import {}
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzkktylmj-8GC6T_ZKJzHi_4wmWbnlQ4g",
  authDomain: "palmstore-b5435.firebaseapp.com",
  projectId: "palmstore-b5435",
  storageBucket: "palmstore-b5435.appspot.com",
  messagingSenderId: "1040931305083",
  appId: "1:1040931305083:web:88a10af359c88ae09454de",
  measurementId: "G-PBY1NZNQ4M",

  ///
  // apiKey: process.env.VITE_API_KEY,
  // authDomain: process.env.VITE_AUTH_DOMAIN,
  // projectId: process.env.VITE_PROJECT_ID,
  // storageBucket: process.env.VITE_STORAGE_BUCKET,
  // messagingSenderId: process.env.VITE_MESSAGING_SENDER_ID,
  // appId: process.env.VITE_APP_ID,
  // measurementId: process.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
