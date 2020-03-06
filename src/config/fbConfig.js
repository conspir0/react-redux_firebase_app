import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCUDbZGmSBuqglzSux-VeOoBXcf-NTFCpc",
  authDomain: "your-own-planner.firebaseapp.com",
  databaseURL: "https://your-own-planner.firebaseio.com",
  projectId: "your-own-planner",
  storageBucket: "your-own-planner.appspot.com",
  messagingSenderId: "573340746528",
  appId: "1:573340746528:web:32675ab781656de1020d45",
  measurementId: "G-YPWVGPMGRH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
