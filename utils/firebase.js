// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-662f0.firebaseapp.com",
  projectId: "blog-662f0",
  storageBucket: "blog-662f0.appspot.com",
  messagingSenderId: "92158894615",
  appId: "1:92158894615:web:933ffd48763abc0fcaf252"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);