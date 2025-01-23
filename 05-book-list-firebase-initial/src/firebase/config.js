import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlvijdLkGnKAu7J0B_E-rA11sj5BUFhjI",
  authDomain: "booklist-react-app.firebaseapp.com",
  projectId: "booklist-react-app",
  storageBucket: "booklist-react-app.firebasestorage.app",
  messagingSenderId: "592205378552",
  appId: "1:592205378552:web:07da82488bc2ae1213dc0d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
