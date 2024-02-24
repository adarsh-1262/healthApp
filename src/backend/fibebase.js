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
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Auth and Firestore
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

// Function to add a health record to Firestore
const addHealthRecord = async (userId, healthRecordData) => {
    try {
        const docRef = await addDoc(collection(firestore, 'healthRecords', userId), healthRecordData);
        console.log('Health record added with ID: ', docRef.id);
        return docRef.id;
    } catch (error) {
        console.error('Error adding health record: ', error);
        throw error;
    }
};

// Function to get health records from Firestore
const getHealthRecords = async (userId) => {
    try {
        const querySnapshot = await getDocs(collection(firestore, 'healthRecords', userId));
        const records = querySnapshot.docs.map(doc => doc.data());
        return records;
    } catch (error) {
        console.error('Error getting health records: ', error);
        throw error;
    }
};

// Delete an existing health record from Firestore
const deleteHealthRecord = async (recordId) => {
    try {
      const healthRecordRef = firestore.collection('healthRecords').doc(recordId);
      await healthRecordRef.delete();
    } catch (error) {
      throw error;
    }
  };

  // Update an existing health record in Firestore
const updateHealthRecord = async (recordId, updatedData) => {
    try {
      const healthRecordRef = firestore.collection('healthRecords').doc(recordId);
      await healthRecordRef.update(updatedData);
    } catch (error) {
      throw error;
    }
  };
  

  

// Export the auth and firestore instances, as well as the addHealthRecord and getHealthRecords functions
export { auth, firestore, addHealthRecord, getHealthRecords, deleteHealthRecord, updateHealthRecord, firebaseApp };