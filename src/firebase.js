import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCALR26mfBqim8lJw9DongwsXO3agomG7Y",
    authDomain: "panier-achats-cpatry.firebaseapp.com",
    databaseURL: "https://panier-achats-cpatry-default-rtdb.firebaseio.com",
    projectId: "panier-achats-cpatry",
    storageBucket: "panier-achats-cpatry.appspot.com",
    messagingSenderId: "834323949561",
    appId: "1:834323949561:web:90a227c06e3ac1c76dff28",
    measurementId: "G-51GFGKF5EW"
  };

  // Initialiser firebase

  if(!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig);
  }

  // Initialiser firebase UI
  export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

  //Initialiser firestore
  export const instanceFirestore = firebase.firestore();