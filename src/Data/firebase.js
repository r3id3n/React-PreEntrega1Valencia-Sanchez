import { initializeApp } from "firebase/app";

// console.log(import.meta.env.VITE_apikey)

const firebaseConfig = {
  apiKey: "AIzaSyAvhbhfAmpHR7lcLj0HdvA5e5AVtl2cV1M",
  authDomain: "react-proyect-64aa4.firebaseapp.com",
  projectId: "react-proyect-64aa4",
  storageBucket: "react-proyect-64aa4.appspot.com",
  messagingSenderId: "838783413902",
  appId: "1:838783413902:web:18398ae6c486eeef7fe3df"
};

export const app = initializeApp(firebaseConfig);