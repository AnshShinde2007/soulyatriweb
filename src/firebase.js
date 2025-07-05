
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; 
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdGdXMMasltja6jHI637PaPdQZ5vGTRG4",
  authDomain: "soulyatri-community.firebaseapp.com",
  projectId: "soulyatri-community",
  storageBucket: "soulyatri-community.firebasestorage.app",
  messagingSenderId: "424383838538",
  appId: "1:424383838538:web:f01569da97123dc60c69b3"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and export it
export const db = getFirestore(app);

// Initialize Storage and export it
export const storage = getStorage(app);

export default app;