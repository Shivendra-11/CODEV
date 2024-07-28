// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA36qfFJkLYd4hsxL-rrL1h12K8rQt80pE",
  authDomain: "codev-8e7b7.firebaseapp.com",
  projectId: "codev-8e7b7",
  storageBucket: "codev-8e7b7.appspot.com",
  messagingSenderId: "196878845373",
  appId: "1:196878845373:web:3c4826be4396e61f2e7ed4",
  measurementId: "G-MZ2T43TLDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;