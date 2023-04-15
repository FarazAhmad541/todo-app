// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBubPWFQu2Rz3Iew-ZyDuxz2kd53NnwhYA",
  authDomain: "todo-app-8692c.firebaseapp.com",
  projectId: "todo-app-8692c",
  storageBucket: "todo-app-8692c.appspot.com",
  messagingSenderId: "255543805908",
  appId: "1:255543805908:web:33c3bfb31030ea0a927841",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
