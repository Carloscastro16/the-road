// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrtXVclBpiiejuIRd_GUC1M1iS3IIQvfY",
  authDomain: "the-road-coding.firebaseapp.com",
  projectId: "the-road-coding",
  storageBucket: "the-road-coding.appspot.com",
  messagingSenderId: "880847463846",
  appId: "1:880847463846:web:5f7827a55e93224a0f1b67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;