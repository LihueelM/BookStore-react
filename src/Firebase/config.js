// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmDvELgAGpC-xusIoijDlZDP1gHMT5pCA",
  authDomain: "bookstore-361719.firebaseapp.com",
  projectId: "bookstore-361719",
  storageBucket: "bookstore-361719.appspot.com",
  messagingSenderId: "9356886945",
  appId: "1:9356886945:web:15e8020a927325a1e401e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);