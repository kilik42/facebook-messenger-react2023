// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCULYfOOrq7RyIeGgSCC2xqQvERiFW6c0A",
  authDomain: "facebook-messenger-b5087.firebaseapp.com",
  projectId: "facebook-messenger-b5087",
  storageBucket: "facebook-messenger-b5087.appspot.com",
  messagingSenderId: "1078402133474",
  appId: "1:1078402133474:web:28639e3f3c8bd3bebe1dbb",
  measurementId: "G-YHSQMM2VPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);