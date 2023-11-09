
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-tean2nlSO1bGMdBblMrL6MEVRt5uUTQ",
  authDomain: "distributors-list-c8d3f.firebaseapp.com",
  projectId: "distributors-list-c8d3f",
  storageBucket: "distributors-list-c8d3f.appspot.com",
  messagingSenderId: "726277814057",
  appId: "1:726277814057:web:0e36bbb6ba4e6a12722938"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)

console.log('db:', db)
