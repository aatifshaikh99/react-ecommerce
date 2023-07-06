import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY || "mock_key",
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN || "authentication_key",
  projectId: process.env.REACT_APP_FB_PROJECT_ID || "project_id",
  storageBucket:
    process.env.REACT_APP_FB_STORAGE_BUCKET || "storage_bucket_key",
  messagingSenderId: process.env.REACT_APP_FB_API_MSG_SENDER_ID || "sender_id",
  appId: process.env.REACT_APP_FB_APP_ID || "firebase_app_id",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
