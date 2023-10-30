
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC_RapP1DjQPGOQBogaWHnANidz3U6JJkc",
    authDomain: "bookster-fa811.firebaseapp.com",
    projectId: "bookster-fa811",
    storageBucket: "bookster-fa811.appspot.com",
    messagingSenderId: "811670033167",
    appId: "1:811670033167:web:1d0db26695132eb9eb647a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();