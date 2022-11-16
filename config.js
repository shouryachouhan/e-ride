import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyA4CjFdq2Z9YdQv-ePm54ymO_jl_zlvdsc",
    authDomain: "e-rider-e8544.firebaseapp.com",
    dataBaseURL:"https://e-rider-e8544-default-rtdb.firebaseio.com/",
    projectId: "e-rider-e8544",
    storageBucket: "e-rider-e8544.appspot.com",
    messagingSenderId: "639164640050",
    appId: "1:639164640050:web:f506df93ad4f461a6e452b"
  };

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
