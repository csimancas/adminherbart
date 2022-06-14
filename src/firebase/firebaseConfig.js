import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaakuvJK0g8y-OjUsLTLWmtFrZOKq7D1k",
  authDomain: "herbartclock.firebaseapp.com",
  projectId: "herbartclock",
  storageBucket: "herbartclock.appspot.com",
  messagingSenderId: "661896282400",
  appId: "1:661896282400:web:caadcc1b3744cb13a09745",
  measurementId: "G-XEBQK8GPTT",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
