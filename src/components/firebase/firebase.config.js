// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOB5HxnyKJmJ1BX45_ORqULn5faNbBGtE",
  authDomain: "restautant-management-react.firebaseapp.com",
  projectId: "restautant-management-react",
  storageBucket: "restautant-management-react.appspot.com",
  messagingSenderId: "1009642832702",
  appId: "1:1009642832702:web:22a2d0fe7eaf53a4e6226f",
  measurementId: "G-NJJGHESX87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// const analytics = getAnalytics(app);