
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAaz351-tU_fo9JQ7dvjIVM3y2rX9EUsXI",
  authDomain: "e-clone-91466.firebaseapp.com",
  projectId: "e-clone-91466",
  storageBucket: "e-clone-91466.appspot.com",
  messagingSenderId: "787355778526",
  appId: "1:787355778526:web:6204c0863474b34bf0314f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth};