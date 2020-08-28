import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBNFLFRi35Awu51wiy6jGIC6cIrkS6O_NU",
  authDomain: "whatsapp-clone-25d92.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-25d92.firebaseio.com",
  projectId: "whatsapp-clone-25d92",
  storageBucket: "whatsapp-clone-25d92.appspot.com",
  messagingSenderId: "148834373161",
  appId: "1:148834373161:web:5dfd94737329cac24c5638",
  measurementId: "G-JJFGR8P9KZ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
