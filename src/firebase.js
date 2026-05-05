import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBWTkTtLcpFBlWqwjP5zF1tRLTg02P6PQs",
  authDomain: "tanavinto.firebaseapp.com",
  projectId: "tanavinto",
  storageBucket: "tanavinto.firebasestorage.app",
  messagingSenderId: "605325022400",
  appId: "1:605325022400:web:6c622947e1a883a55d0925"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
