import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZyY9SFes1_4p8rJE1Gsdw54S0NJ61f0I",
  authDomain: "ichat-new-44847.firebaseapp.com",
  projectId: "ichat-new-44847",
  storageBucket: "ichat-new-44847.appspot.com",
  messagingSenderId: "458387286064",
  appId: "1:458387286064:web:afc51563937f5a95a925f5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();