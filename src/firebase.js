//import { initializeApp } from 'firebase/app';
//import { firestore} from '@firebase/firestore';
//import { FirebaseApp } from 'firebase/app';
//
//const firebaseConfig = {
//    apiKey: "AIzaSyDehF_LqUodNd8hjKMmfnElG384zPy8YUQ",
//    authDomain: "gluping-6429f.firebaseapp.com",
//    projectId: "gluping-6429f",
//    storageBucket: "gluping-6429f.appspot.com",
//    messagingSenderId: "951367534125",
//    appId: "1:951367534125:web:735a8cb5d43169cbc8daa4",
//    measurementId: "G-JR9BXLXT6Y"
//  };
//
//const firebaseApp = firebase.initializeApp(firebaseConfig);
//const database = firebaseApp.firestore();
//
//export default database;

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDehF_LqUodNd8hjKMmfnElG384zPy8YUQ",
    authDomain: "gluping-6429f.firebaseapp.com",
    databaseURL: "https://gluping-6429f-default-rtdb.firebaseio.com",
    projectId: "gluping-6429f",
    storageBucket: "gluping-6429f.appspot.com",
    messagingSenderId: "951367534125",
    appId: "1:951367534125:web:735a8cb5d43169cbc8daa4",
    measurementId: "G-JR9BXLXT6Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default  database;