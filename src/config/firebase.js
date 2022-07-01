// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfSllf8_7oRMq2xmMuVX9j-y4ndNcTrRg",
  authDomain: "xesquedele-c1eed.firebaseapp.com",
  projectId: "xesquedele-c1eed",
  storageBucket: "xesquedele-c1eed.appspot.com",
  messagingSenderId: "475111691832",
  appId: "1:475111691832:web:d3c330f5e907668f1338cd",
  measurementId: "G-NT50H50CMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);