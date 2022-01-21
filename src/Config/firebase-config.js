// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// import "firebase/analytics";
import "firebase/auth";
import 'firebase/storage'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMfQUJ39I7KvfYL95RRsdaln1QIfxkv38",
  authDomain: "lawyer-5a558.firebaseapp.com",
  projectId: "lawyer-5a558",
  storageBucket: "lawyer-5a558.appspot.com",
  messagingSenderId: "314494408261",
  appId: "1:314494408261:web:3fbc71b148c961f00df52c",
  measurementId: "G-Y34PC4CBC3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export default firebase;
