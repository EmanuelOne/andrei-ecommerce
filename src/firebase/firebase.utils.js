import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyD7x64Rapwn9Mwm95zNOneO-qGJhhv_v28",
  authDomain: "crown-db-5e563.firebaseapp.com",
  projectId: "crown-db-5e563",
  storageBucket: "crown-db-5e563.appspot.com",
  messagingSenderId: "193981564849",
  appId: "1:193981564849:web:a06b3e0dcb155f0bf9df90",
  measurementId: "G-PHC4C7PFEM",
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
