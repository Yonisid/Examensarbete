// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQFZ3xyxXrNyr2HqZnIMcBzJUcPpyiFrM",
  authDomain: "newquizgame-f84a6.firebaseapp.com",
  projectId: "newquizgame-f84a6",
  storageBucket: "newquizgame-f84a6.appspot.com",
  messagingSenderId: "155451706638",
  appId: "1:155451706638:web:6f09004a53dfc6f8511b5f",
  measurementId: "G-M1NZT1M4TF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);