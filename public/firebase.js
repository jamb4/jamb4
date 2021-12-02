// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBavBrqN1kQA0E_xvPvI5dqlM3mWeSpmGM",
  authDomain: "anima-ali.firebaseapp.com",
  projectId: "anima-ali",
  storageBucket: "anima-ali.appspot.com",
  messagingSenderId: "522799173577",
  appId: "1:522799173577:web:614fb545e7b96d85e9e218",
  measurementId: "G-Z1R7SKPFMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
