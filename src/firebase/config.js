import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBeMzMV9u2-2hzIthXWwUDtk8ZB2IRyzW4",
  authDomain: "tom-photo.firebaseapp.com",
  projectId: "tom-photo",
  storageBucket: "tom-photo.appspot.com",
  messagingSenderId: "401538209373",
  appId: "1:401538209373:web:9617df6713a631490a9fb4",
  measurementId: "G-FYDXK1RBEL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };