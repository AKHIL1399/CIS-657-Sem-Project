import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCWQi-8uF43O6HNwYee80OhfDaVahEirJw",
  authDomain: "myfyp-48f51.firebaseapp.com",
  databaseURL: "https://myfyp-48f51-default-rtdb.firebaseio.com",
  projectId: "myfyp-48f51",
  storageBucket: "myfyp-48f51.appspot.com",
  messagingSenderId: "1021492426215",
  appId: "1:1021492426215:web:d0435de6b927c8a1c87942",
  measurementId: "G-S144QP5HKV",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
// const analytics = getAnalytics(app);

const provider= new GoogleAuthProvider();
const SignInWiythGoogle=()=>{
  signInWithPopup(auth,provider).then((reuslt)=>{

  }).catch((err)=>{

  })
} 

export { auth, db, storage,provider,SignInWiythGoogle };
