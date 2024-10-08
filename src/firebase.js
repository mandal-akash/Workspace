
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyDfcaxpc7oS852e7i3d5xtZK0GRzpZrPG0",
  authDomain: "workspace-fb665.firebaseapp.com",
  projectId: "workspace-fb665",
  storageBucket: "workspace-fb665.appspot.com",
  messagingSenderId: "242511905309",
  appId: "1:242511905309:web:b8e7aaed7f2a37ad827cf4",
  measurementId: "G-3DF1L87XSB"
};

const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore();

export {db};

