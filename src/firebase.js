// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6pfYbyIHAWf3i4bItqv_ewZK-Atg1Yj0",
  authDomain: "p-11-84b59.firebaseapp.com",
  projectId: "p-11-84b59",
  storageBucket: "p-11-84b59.appspot.com",
  messagingSenderId: "701033031600",
  appId: "1:701033031600:web:176e28140348fbb68c5875",
  measurementId: "G-9C01QNEZQ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
