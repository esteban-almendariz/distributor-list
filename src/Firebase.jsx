
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-tean2nlSO1bGMdBblMrL6MEVRt5uUTQ",
  authDomain: "distributors-list-c8d3f.firebaseapp.com",
  projectId: "distributors-list-c8d3f",
  storageBucket: "distributors-list-c8d3f.appspot.com",
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

console.log(auth)