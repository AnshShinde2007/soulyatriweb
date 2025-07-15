// client/src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwHU5sr6DjbseBagvf01Ncz4bcJ-GEAUc",
  authDomain: "soul-yatri-chatbot.firebaseapp.com",
  projectId: "soul-yatri-chatbot",
  storageBucket: "soul-yatri-chatbot.firebasestorage.app",
  messagingSenderId: "871286686213",
  appId: "1:871286686213:web:83e4bba77b8672d24e126c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
