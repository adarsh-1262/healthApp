// auth.js
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile as firebaseUpdateProfile,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC15XoYP2cXSu_dYTgu_EG_U2sqGXa5HY8",
  authDomain: "healthapp-7c494.firebaseapp.com",
  projectId: "healthapp-7c494",
  storageBucket: "healthapp-7c494.appspot.com",
  messagingSenderId: "68600313234",
  appId: "1:68600313234:web:924aeaafa8157d2a47bd4b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup
const signUpUser = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    // Additional logic after successful signup, if needed
  } catch (error) {
    throw error; // Propagate the error for handling in the component
  }
};

// Sign In
const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Sign Out
const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

// Update Profile
const updateProfile = async (user, profileData) => {
  try {
    await firebaseUpdateProfile(user, profileData);
  } catch (error) {
    throw new Error(`Error updating profile: ${error.message}`);
  }
};

// Upload Photo
const uploadPhoto = async (userId, file) => {
  try {
    const storageRef = ref(storage, `user-photos/${userId}`);
    const photoSnapshot = await uploadBytes(storageRef, file);
    const photoURL = await getDownloadURL(photoSnapshot.ref);
    return photoURL;
  } catch (error) {
    throw error;
  }
};

// Listen for authentication state changes
const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export { auth, onAuthStateChangedListener, updateProfile, signOutUser, signInUser, signUpUser, uploadPhoto };
