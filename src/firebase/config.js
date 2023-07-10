import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY ,
  authDomain: "eshop-e0f70.firebaseapp.com",
  projectId: "eshop-e0f70",
  storageBucket: "eshop-e0f70.appspot.com",
  messagingSenderId: "923924744907",
  appId: "1:923924744907:web:c839e10f52eee10e73294e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
