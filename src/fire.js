import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAezd9fmByeEUQ_EoAyADAZ9CeltgJkDKI",
  authDomain: "gdg-app-chat.firebaseapp.com",
  databaseURL: "https://gdg-app-chat-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gdg-app-chat",
  storageBucket: "gdg-app-chat.appspot.com",
  messagingSenderId: "307172187198",
  appId: "1:307172187198:web:63ddf176a437e48059456f",
  measurementId: "G-446BFZWCTY"
};

var fire = firebase.initializeApp(firebaseConfig);
export default fire;
