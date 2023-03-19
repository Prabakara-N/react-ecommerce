import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwjppZbqaO_UseD2hCIr8cKfrNU0NIfVw",
  authDomain: "react-ecommerce-authendication.firebaseapp.com",
  projectId: "react-ecommerce-authendication",
  storageBucket: "react-ecommerce-authendication.appspot.com",
  messagingSenderId: "695513383808",
  appId: "1:695513383808:web:d6bba629afe8593dc83765",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
