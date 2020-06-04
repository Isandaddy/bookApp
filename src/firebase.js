// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDxCafyWfFk3RiGcva1qBGB9qP6nlSBJ1g",
  authDomain: "react-hook-book-app.firebaseapp.com",
  databaseURL: "https://react-hook-book-app.firebaseio.com",
  projectId: "react-hook-book-app",
  storageBucket: "react-hook-book-app.appspot.com",
  messagingSenderId: "981575895496",
  appId: "1:981575895496:web:fa2e0a3b96217ddb6c58fd",
  measurementId: "G-1LMG05EZ8N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
export const db = firebase.firestore();
