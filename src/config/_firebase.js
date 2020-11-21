import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAeVXLDhATLuP4lWXokDzI6ZReH62GWD5w",
  authDomain: "project-719812058701268899.firebaseapp.com",
  databaseURL: "https://project-719812058701268899.firebaseio.com",
  projectId: "project-719812058701268899",
  storageBucket: "project-719812058701268899.appspot.com",
  messagingSenderId: "481906629719",
  appId: "1:481906629719:web:c404f23feaa0f5b0f99712",
  measurementId: "G-XT9EZB4308"
};

///inicializamos el app.
const fireApp = firebase.initializeApp(firebaseConfig);
/// * configuramos variables de cada servicio de firebase.
const db = fireApp.firestore();
const auth = fireApp.auth();
const storage = fireApp.storage();
const { Timestamp } = firebase.firestore;

export { db, auth, storage, Timestamp };
