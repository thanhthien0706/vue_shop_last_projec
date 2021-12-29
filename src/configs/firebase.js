// Import the functions you need from the SDKs you need
// import firebase from 'firebase/app';
// import 'firebase/firestore';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCNdJJabz1c_xK-57jQ33LNW0mgmlqlO8g",
    authDomain: "vue-shop-project-77ebe.firebaseapp.com",
    projectId: "vue-shop-project-77ebe",
    storageBucket: "vue-shop-project-77ebe.appspot.com",
    messagingSenderId: "77045246030",
    appId: "1:77045246030:web:7420c64638fbb842d57b1f",
    measurementId: "G-5385T5HTSS"
};

// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const fireStoreCore = getFirestore(app);
const auth = getAuth();

// const fireStoreCore = firebase.firestore();

export {
    fireStoreCore,
    auth
};