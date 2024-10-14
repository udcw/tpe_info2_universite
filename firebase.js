// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// Configuration de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDyxEF7XseIfR7xdU0c2PiR0DP_nSJjqt4",
    authDomain: "panier-56134.firebaseapp.com",
    projectId: "panier-56134",
    storageBucket: "panier-56134.appspot.com",
    messagingSenderId: "522650165799",
    appId: "1:522650165799:web:ac12c60826cc3c8e9fe402",
    measurementId: "G-Y3E7JWC23M"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
