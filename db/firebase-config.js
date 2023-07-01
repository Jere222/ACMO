import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdSZAznDQB_1wGF7Bsf1vH0Co7tQvi1R0",
  authDomain: "jere-f3c0c.firebaseapp.com",
  projectId: "jere-f3c0c",
  storageBucket: "jere-f3c0c.appspot.com",
  messagingSenderId: "1086586182590",
  appId: "1:1086586182590:web:7437225fa36b1acc04f7ef"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;