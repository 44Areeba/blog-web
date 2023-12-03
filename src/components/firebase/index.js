// Import the Firebase SDK and authentication services
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDU3XFPYKKKjP0SI4YBwDSeezRLZJC_5zg",
  authDomain: "fir-auth-11-f8adb.firebaseapp.com",
  projectId: "fir-auth-11-f8adb",
  storageBucket: "fir-auth-11-f8adb.appspot.com",
  messagingSenderId: "1056684219120",
  appId: "1:1056684219120:web:12517ed4eaf0e71cb94035",
  measurementId: "G-H1LB0135LG",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User created:", user);
    })
    .catch((error) => {
      console.error("Error creating user:", error);
    });
};

const signInUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed in:", user);
    })
    .catch((error) => {
      console.error("Error signing in:", error);
    });
};


export { auth };






// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
  
// apiKey: "AIzaSyDIoLUFVN0lkNXWB2ZCraswLA3HxJIQWXU",
// authDomain: "auth-84ba7.firebaseapp.com",
// projectId: "auth-84ba7",
// storageBucket: "auth-84ba7.appspot.com",
// messagingSenderId: "209882297528",
// appId: "1:209882297528:web:7e8df3c07df93ece11704d",
// measurementId: "G-HRQ6WHYN1B",
// WebClientId: "209882297528-tsh53nj9kt15o83ujfqrjql9n4jhusdu.apps.googleusercontent.com",
// WebClientSecret: "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",
  

// }

// const app = initializeApp(firebaseConfig);
// const auth = getAuth();

// export { app, auth };













