// lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCnZHpZZW42OW1brn0tw1butSGevMEjrE4",
  authDomain: "dnyx-d127b.firebaseapp.com",
  projectId: "dnyx-d127b",
  storageBucket: "dnyx-d127b.appspot.com",
  messagingSenderId: "695310494472",
  appId: "1:695310494472:web:2226b0c92285abc3ee1abd",
  measurementId: "G-2DYG3XSG55"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
