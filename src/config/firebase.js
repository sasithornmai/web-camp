// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHjqLCb-WGqva31abilGuI51IWjzENEI0",
  authDomain: "project-webcamp.firebaseapp.com",
  projectId: "project-webcamp",
  storageBucket: "project-webcamp.appspot.com",
  messagingSenderId: "634408534995",
  appId: "1:634408534995:web:ec1b549b4fc0996f3c6526"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig).firestore();

export default app;
//
