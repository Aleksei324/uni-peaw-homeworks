// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY-qORhQpFKvdGXqoVfiejJUmFvY3FU6Q",
  authDomain: "test-18fa1.firebaseapp.com",
  projectId: "test-18fa1",
  storageBucket: "test-18fa1.appspot.com",
  messagingSenderId: "261196573158",
  appId: "1:261196573158:web:b82e34ea9e7236da288e27"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
