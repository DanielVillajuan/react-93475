// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0OdzqijbSveEvfC6Q5yOsPTph5ld99ZM",
  authDomain: "ecomouse-e943d.firebaseapp.com",
  projectId: "ecomouse-e943d",
  storageBucket: "ecomouse-e943d.firebasestorage.app",
  messagingSenderId: "9377638661",
  appId: "1:9377638661:web:90aa9e4a2a91f0311daf6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // con esto manejamos el servicio de autenticacion
export const db = getFirestore(app) // manejamos servicio de bases de datos