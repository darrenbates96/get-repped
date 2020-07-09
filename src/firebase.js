import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// The config, from console
const firebaseConfig = {
    apiKey: "AIzaSyCwGx68_lTN2lQzET43isVGh1YEy6zai3Q",
    authDomain: "calculate-dev.firebaseapp.com",
    databaseURL: "https://calculate-dev.firebaseio.com",
    projectId: "calculate-dev",
    storageBucket: "calculate-dev.appspot.com",
    messagingSenderId: "667761705988",
    appId: "1:667761705988:web:0f32f61c372e9b2f136151",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
