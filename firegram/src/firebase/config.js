import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCXBTzKuZjyau9MXY7VaXrc6vp5H1mEp_w",
  authDomain: "firegram-87599.firebaseapp.com",
  projectId: "firegram-87599",
  storageBucket: "firegram-87599.appspot.com",
  messagingSenderId: "100829860620",
  appId: "1:100829860620:web:f3d7ef10926251106eaf29",
  measurementId: "G-2XBBQPQTGQ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp}