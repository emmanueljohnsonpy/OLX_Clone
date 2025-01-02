import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import "firebase/storage";

// Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyB2of5njU901-YLQXaTLWpdEtneRfQ-knA",
  authDomain: "olx-clone-aaf01.firebaseapp.com",
  projectId: "olx-clone-aaf01",
  storageBucket: "olx-clone-aaf01.firebasestorage.app",
  messagingSenderId: "518641743682",
  appId: "1:518641743682:web:22eaa7ad57007272fd7adb",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get the authentication instance
const auth = getAuth(app);

export default app;
