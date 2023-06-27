// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByO6okg0vlOrTAVoU_K_nNAiK9PRF7IYg",
  authDomain: "summer-camp-65b9c.firebaseapp.com",
  projectId: "summer-camp-65b9c",
  storageBucket: "summer-camp-65b9c.appspot.com",
  messagingSenderId: "426145224608",
  appId: "1:426145224608:web:b59cba9c06a96cade336c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app