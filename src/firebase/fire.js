// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADFhq_4bNyA2WNzw3W0DOtD2rNn5XgXiM",
  authDomain: "mypizza-52a29.firebaseapp.com",
  projectId: "mypizza-52a29",
  storageBucket: "mypizza-52a29.appspot.com",
  messagingSenderId: "467387209956",
  appId: "1:467387209956:web:e4a2e7e367c8cda72cf4f1",
  databaseUrl: "https://mypizza-52a29-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;
