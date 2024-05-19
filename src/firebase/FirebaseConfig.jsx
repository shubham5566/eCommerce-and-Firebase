// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8gxMt224r0rdBx6YnzCzYSBOpT5HXSxg",
  authDomain: "myfirstapp-54d65.firebaseapp.com",
  projectId: "myfirstapp-54d65",
  storageBucket: "myfirstapp-54d65.appspot.com",
  messagingSenderId: "58996068996",
  appId: "1:58996068996:web:2325f7b74995945886e8d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app)
const auth = getAuth(app)

export {fireDB,auth}