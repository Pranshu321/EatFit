// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv92ZOcodtpf-6b7EC7PrFrqsuxCRiBpg",
  authDomain: "feedindia-898c3.firebaseapp.com",
  projectId: "feedindia-898c3",
  storageBucket: "feedindia-898c3.appspot.com",
  messagingSenderId: "880212494519",
  appId: "1:880212494519:web:64e945791079dd422be532",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
export default app;
export { auth, db };
