// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM7sHCvB5pFoJ35jsw67RhVTrPuy8BJGY",
  authDomain: "event-bd.firebaseapp.com",
  projectId: "event-bd",
  storageBucket: "event-bd.appspot.com",
  messagingSenderId: "555606102211",
  appId: "1:555606102211:web:e803351ce111dafeeb1276"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;