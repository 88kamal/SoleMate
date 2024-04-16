// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYf9H9BmdUFV5AsjzQzjGntCstmmGO8bU",
  authDomain: "solemate-f90b5.firebaseapp.com",
  projectId: "solemate-f90b5",
  storageBucket: "solemate-f90b5.appspot.com",
  messagingSenderId: "626678953670",
  appId: "1:626678953670:web:10ac8b457cc45a42a389c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);

export { fireDB, auth, storage };