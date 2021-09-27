import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDsa3upqYi3B34FZzON40g5N7WRD3ggQuA",
  authDomain: "image-repository-challenge.firebaseapp.com",
  projectId: "image-repository-challenge",
  storageBucket: "image-repository-challenge.appspot.com",
  messagingSenderId: "934300293560",
  appId: "1:934300293560:web:792839ae204bfd9c3e174d"
}

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

function login(){
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

function logout(){
  signOut(auth).then(() => {
  }).catch((error) => {
  });
}

export{
    login,
    logout,
    auth
}