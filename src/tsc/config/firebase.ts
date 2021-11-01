// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN53wiFaXZVvMiYemQgvJubq9JKXRMcH4",
  authDomain: "ffc.org.co",
  projectId: "familiafranciscana",
  storageBucket: "familiafranciscana.appspot.com",
  messagingSenderId: "109312493442",
  appId: "1:109312493442:web:4505f3d2a987d242e0b19b",
  measurementId: "G-4YMCNQJS21"
};

// Initialize Firebase
export const initialize = () => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
}
