import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYP_NUEr_Yh8YF1_Ge2q71rWFdEAfywbA",
  authDomain: "book-list-with-fb.firebaseapp.com",
  projectId: "book-list-with-fb",
  storageBucket: "book-list-with-fb.firebasestorage.app",
  messagingSenderId: "120521283820",
  appId: "1:120521283820:web:939c1ccbaa2ec87a6c2dc9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
