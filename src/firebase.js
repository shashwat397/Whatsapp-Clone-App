import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// const firebaseConfig = {
//     apiKey: "AIzaSyB13PntUEDMkFbTt2psiHOZtQih83qrf88",
//     authDomain: "whatsapp-clone-fafc9.firebaseapp.com",
//     databaseURL: "https://whatsapp-clone-fafc9.firebaseio.com",
//     projectId: "whatsapp-clone-fafc9",
//     storageBucket: "whatsapp-clone-fafc9.appspot.com",
//     messagingSenderId: "1027981883218",
//     appId: "1:1027981883218:web:f62f32ffe8e5701f0f2c8b",
//     measurementId: "G-0YMF5ZZL8N"
//   };
const firebaseConfig = {
  apiKey: "AIzaSyDEeq4oX5yI6TVgRjX-ueDV2IwZnv0ksD8",
  authDomain: "whatsapp-mern-d17c2.firebaseapp.com",
  databaseURL: "https://whatsapp-mern-d17c2.firebaseio.com",
  projectId: "whatsapp-mern-d17c2",
  storageBucket: "whatsapp-mern-d17c2.appspot.com",
  messagingSenderId: "835542245069",
  appId: "1:835542245069:web:3d1fa0ca2f6a6185049384"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
