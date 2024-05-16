// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsU71gk8OyG9Y_uGj4lgm8cXxUjLaUKzE",
  authDomain: "twitter-clone-fes-fd045.firebaseapp.com",
  projectId: "twitter-clone-fes-fd045",
  storageBucket: "twitter-clone-fes-fd045.appspot.com",
  messagingSenderId: "660529552572",
  appId: "1:660529552572:web:19d1183c1ecd22da7004b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const auth = getAuth(app)