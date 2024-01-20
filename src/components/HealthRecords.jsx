import React, { useState, useEffect } from 'react';
import { addHealthRecord, getHealthRecords } from '../backend/firestore';

const HealthRecords = ({ user }) => {
  const [healthRecords, setHealthRecords] = useState([]);
  const [newRecord, setNewRecord] = useState('');

  useEffect(() => {
    // Fetch health records when the component mounts
    getHealthRecordData(user.uid);
  }, [user]);

  const getHealthRecordData = async (userId) => {
    try {
      const records = await getHealthRecords(userId);
      setHealthRecords(records);
    } catch (error) {
      console.error('Error getting health records:', error.message);
    }
  };

  const handleAddRecord = async () => {
    try {
      // Add the new record to the user's health records
      await addHealthRecord(user.uid, newRecord);

      // Refresh the health records list
      getHealthRecordData(user.uid);

      // Clear the input field
      setNewRecord('');
    } catch (error) {
      console.error('Error adding health record:', error.message);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Health Records</h2>

      {/* Add Health Record Form */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Add New Health Record:</label>
        <div className="flex">
          <input
            type="text"
            className="form-input w-full mr-2"
            placeholder="Enter health record"
            value={newRecord}
            onChange={(e) => setNewRecord(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={handleAddRecord}
          >
            Add
          </button>
        </div>
      </div>

      {/* Display Health Records */}
      <div>
        <h3 className="text-xl font-bold mb-2">Your Health Records:</h3>
        <ul className="list-none">
          {healthRecords.map((record, index) => (
            <li key={index} className="mb-2 p-4 bg-gray-100 rounded">
              {record}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HealthRecords;
