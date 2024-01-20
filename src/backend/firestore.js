// firestore.js
import { firestore } from './fibebase';

// Add a health record to Firestore
export const addHealthRecord = async (userId, healthRecordData) => {
  try {
    const healthRecordRef = firestore.collection('healthRecords').doc(userId);
    await healthRecordRef.set(healthRecordData);
  } catch (error) {
    throw error;
  }
};

// Get health records from Firestore
export const getHealthRecords = async (userId) => {
  try {
    const healthRecordRef = firestore.collection('healthRecords').doc(userId);
    const snapshot = await healthRecordRef.get();
    return snapshot.data();
  } catch (error) {
    throw error;
  }
};

