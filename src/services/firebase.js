// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjg5JP07dngMFbvnCU2PIziO3TEAuNdfs",
  authDomain: "lorences-proyecto-react.firebaseapp.com",
  projectId: "lorences-proyecto-react",
  storageBucket: "lorences-proyecto-react.appspot.com",
  messagingSenderId: "150226287826",
  appId: "1:150226287826:web:18865e63b69b16eec3c10b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;