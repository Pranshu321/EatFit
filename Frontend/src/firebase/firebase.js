// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
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
let app;

if (firebase.apps.length == 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const storage = app.storage();

export { db, auth, storage };
