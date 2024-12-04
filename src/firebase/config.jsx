// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4lMzwkPz50k0rwmVW_TnZ3kgery5H42k",
  authDomain: "react2-lesson8-aafdd.firebaseapp.com",
  projectId: "react2-lesson8-aafdd",
  storageBucket: "react2-lesson8-aafdd.firebasestorage.app",
  messagingSenderId: "716664085989",
  appId: "1:716664085989:web:6da222d49238db01a8e30c",
  measurementId: "G-27GYLC6GVW"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);