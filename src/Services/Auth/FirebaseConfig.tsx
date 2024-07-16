// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDrtXVclBpiiejuIRd_GUC1M1iS3IIQvfY",
    authDomain: "the-road-coding.firebaseapp.com",
    projectId: "the-road-coding",
    storageBucket: "the-road-coding.appspot.com",
    messagingSenderId: "880847463846",
    appId: "1:880847463846:web:5f7827a55e93224a0f1b67"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
