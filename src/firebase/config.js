// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTG7S3VYO7xIgEEpmBxHKJXW7ntmUrQ-4",
  authDomain: "humocontemporaneo.firebaseapp.com",
  projectId: "humocontemporaneo",
  storageBucket: "humocontemporaneo.appspot.com",
  messagingSenderId: "775899607558",
  appId: "1:775899607558:web:8024f494489c339e214987"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);