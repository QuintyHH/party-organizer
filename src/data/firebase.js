import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5YjJmhi7J5th9MI08aCgqDZbCJ1s4NpA",
  authDomain: "party-organizer-98c23.firebaseapp.com",
  databaseURL: "https://party-organizer-98c23.firebaseio.com",
  projectId: "party-organizer-98c23",
  storageBucket: "party-organizer-98c23.appspot.com",
  messagingSenderId: "1084550213943",
  appId: "1:1084550213943:web:823c741aaa44dad7f9aab2",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
