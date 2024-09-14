// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF72feLXbynILKY1o016XGWFokDoxZTI4",
  authDomain: "event-management-system-d6c13.firebaseapp.com",
  projectId: "event-management-system-d6c13",
  storageBucket: "event-management-system-d6c13.appspot.com",
  messagingSenderId: "741110305081",
  appId: "1:741110305081:web:dd8bd758d9d6b41ac098e8",
  measurementId: "G-TPMEBCHK7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);


export {auth, app}