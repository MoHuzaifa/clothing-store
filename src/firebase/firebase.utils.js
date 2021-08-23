import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDgfXLjw5Dr5gRSw_kHZKDBuLwZOZrsteU",
  authDomain: "clothing-store-db-c00d5.firebaseapp.com",
  projectId: "clothing-store-db-c00d5",
  storageBucket: "clothing-store-db-c00d5.appspot.com",
  messagingSenderId: "543741111146",
  appId: "1:543741111146:web:4fd22258a10f7bc7b05313",
  measurementId: "G-PBR13J86Q9",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
