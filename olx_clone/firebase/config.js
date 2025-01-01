/* import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB2of5njU901-YLQXaTLWpdEtneRfQ-knA",
  authDomain: "olx-clone-aaf01.firebaseapp.com",
  projectId: "olx-clone-aaf01",
  storageBucket: "olx-clone-aaf01.firebasestorage.app",
  messagingSenderId: "518641743682",
  appId: "1:518641743682:web:22eaa7ad57007272fd7adb",
};

export default firebase.initializeApp(firebaseConfig);
 */


import { initializeApp } from "firebase/app";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB2of5njU901-YLQXaTLWpdEtneRfQ-knA",
  authDomain: "olx-clone-aaf01.firebaseapp.com",
  projectId: "olx-clone-aaf01",
  storageBucket: "olx-clone-aaf01.firebasestorage.app",
  messagingSenderId: "518641743682",
  appId: "1:518641743682:web:22eaa7ad57007272fd7adb",
};


const app = initializeApp(firebaseConfig);

export default app;
