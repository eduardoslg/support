import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCOz8azFyJ_88fweZO-yKnmBYk1mwdVFZY",
    authDomain: "teste-manutencao-dde4b.firebaseapp.com",
    projectId: "teste-manutencao-dde4b",
    storageBucket: "teste-manutencao-dde4b.appspot.com",
    messagingSenderId: "426060825969",
    appId: "1:426060825969:web:8bce52ab93a71d570f62d0",
    measurementId: "G-N8LJPW5NBC"
  };
  
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;