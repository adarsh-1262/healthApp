// firestore.js
import { getFirestore } from './fibebase'; // Import getFirestore from Firebase
import { firebaseApp } from './fibebase'; // Import your Firebase app instance

import { addHealthRecord, getHealthRecords } from './fibebase';

// Add a health record to Firestore
const addHealthRecordToFirestore = async (userId, healthRecordData) => {
  try {
    await addHealthRecord(userId, healthRecordData);
    console.log('Health record added successfully to Firestore');
  } catch (error) {
    console.error('Error adding health record to Firestore: ', error);
    throw error;
  }
};

// Get health records from Firestore
const getHealthRecordsFromFirestore = async (userId) => {
  try {
    const records = await getHealthRecords(userId);
    console.log('Health records retrieved from Firestore: ', records);
    return records;
  } catch (error) {
    console.error('Error getting health records from Firestore: ', error);
    throw error;
  }
};

const firestore = getFirestore(firebaseApp);

export default {firestore, addHealthRecordToFirestore, getHealthRecordsFromFirestore};