import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAmDvELgAGpC-xusIoijDlZDP1gHMT5pCA",
  authDomain: "bookstore-361719.firebaseapp.com",
  projectId: "bookstore-361719",
  storageBucket: "bookstore-361719.appspot.com",
  messagingSenderId: "9356886945",
  appId: "1:9356886945:web:15e8020a927325a1e401e0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);