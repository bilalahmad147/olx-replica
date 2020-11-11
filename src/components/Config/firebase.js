import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBAF5PWPwxO8NNCMSV2LIGNfSvkoFdlEQA",
    authDomain: "olx-replica-458db.firebaseapp.com",
    databaseURL: "https://olx-replica-458db.firebaseio.com",
    projectId: "olx-replica-458db",
    storageBucket: "olx-replica-458db.appspot.com",
    messagingSenderId: "56182307879",
    appId: "1:56182307879:web:8e2fd61f3a70a883426202"
  };

firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()

export {
  storage, firebase as default
}