// HealthRecords.js
import React from 'react';

const HealthRecords = ({ user, healthRecord, addHealthRecordData }) => {
  return (
    <div>
      <h2>Health Records</h2>
      {user ? (
        <div>
          {healthRecord ? (
            <div>
              <h3>Your Health Record</h3>
              <pre>{JSON.stringify(healthRecord, null, 2)}</pre>
            </div>
          ) : (
            <button onClick={addHealthRecordData}>Add Health Record</button>
          )}
        </div>
      ) : (
        <p>Please sign in to view your health records.</p>
      )}
    </div>
  );
}

export default HealthRecords;
