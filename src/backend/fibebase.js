// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC15XoYP2cXSu_dYTgu_EG_U2sqGXa5HY8",
    authDomain: "healthapp-7c494.firebaseapp.com",
    projectId: "healthapp-7c494",
    storageBucket: "healthapp-7c494.appspot.com",
    messagingSenderId: "68600313234",
    appId: "1:68600313234:web:924aeaafa8157d2a47bd4b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
