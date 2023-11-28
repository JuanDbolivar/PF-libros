// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGLao93a3lW4wb3_mXrWtIsD52wNHm-HE",
  authDomain: "ensayopflibros.firebaseapp.com",
  projectId: "ensayopflibros",
  storageBucket: "ensayopflibros.appspot.com",
  messagingSenderId: "238436633411",
  appId: "1:238436633411:web:8f783f3d0c8ba92c71fdf6",
  measurementId: "G-239L82JJC5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
