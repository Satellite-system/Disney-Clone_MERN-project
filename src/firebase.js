// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3B18b091BD5kSdPoa-J3JBcCtC0Ghta8",
  authDomain: "disneyplus-clone-eac5f.firebaseapp.com",
  projectId: "disneyplus-clone-eac5f",
  storageBucket: "disneyplus-clone-eac5f.appspot.com",
  messagingSenderId: "56547845043",
  appId: "1:56547845043:web:13d00048042774162361c6",
  measurementId: "G-37CD34P3T7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();;
const analytics = getAnalytics(firebaseApp);
const storage = getStorage(firebaseApp);


export {auth, provider,analytics, storage};
export default db;