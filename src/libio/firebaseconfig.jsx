// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX7uDWL93km6Ah0RUN8KudjshB0BuzcKs",
  authDomain: "libiofoodcourt-32862.firebaseapp.com",
  projectId: "libiofoodcourt-32862",
  storageBucket: "libiofoodcourt-32862.appspot.com",
  messagingSenderId: "1020831474383",
  appId: "1:1020831474383:web:e34f3bf24524d4ebc40dba",
  measurementId: "G-7DDSN08HN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
