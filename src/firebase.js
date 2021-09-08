import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB6Ya5wzzA6qUY3YDJTYBa0N4AiWLXgnGI",
    authDomain: "band-content.firebaseapp.com",
    projectId: "band-content",
    storageBucket: "band-content.appspot.com",
    messagingSenderId: "253896229375",
    appId: "1:253896229375:web:3d0d162246286a0a3be7ca",
    measurementId: "G-QQ83CLZQK7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// this exports the CONFIGURED version of firebase
export default firebase;