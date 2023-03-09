import {  getFirestore } from 'firebase/firestore/lite';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFS6ZCN-LL94tP3DAcbJE2cAX66hHzwsM",
  authDomain: "task-manager-edb5b.firebaseapp.com",
  projectId: "task-manager-edb5b",
  storageBucket: "task-manager-edb5b.appspot.com",
  messagingSenderId: "483655130727",
  appId: "1:483655130727:web:57430f5068e448b37a3ec2"
};


const app = initializeApp(firebaseConfig);


export const database = getFirestore(app);
export const auth = getAuth(app)