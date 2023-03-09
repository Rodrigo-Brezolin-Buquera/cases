import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  apiKey: "AIzaSyCIw2udXBXrdh59s0TJtpnb6rIxY-ed3no",
  authDomain: "eventmanager-fa7b6.firebaseapp.com",
  projectId: "eventmanager-fa7b6",
  storageBucket: "eventmanager-fa7b6.appspot.com",
  messagingSenderId: "1058564442124",
  appId: "1:1058564442124:web:f63a0454db8e79895a8629"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const eventsCollection = collection(db, "events")
export const auth = getAuth(app)


