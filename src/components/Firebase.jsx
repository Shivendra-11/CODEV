// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCULfD1EZ6wdE90dqweUm1WSlFU9djwF48",
  authDomain: "login-auth-db0ae.firebaseapp.com",
  projectId: "login-auth-db0ae",
  storageBucket: "login-auth-db0ae.appspot.com",
  messagingSenderId: "360585863459",
  appId: "1:360585863459:web:e6ae99b83deff395d32c96",
  measurementId: "G-ZZMLPV939C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db=getFirestore(app);
export default app;
