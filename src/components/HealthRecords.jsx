import React, { useState } from 'react';

const HealthRecord = ({ record, onUpdate, onDelete }) => {
  const [editable, setEditable] = useState(false);
  const [updatedRecord, setUpdatedRecord] = useState(record);

  const handleUpdate = () => {
    onUpdate(updatedRecord);
    setEditable(false);
  };

  const handleDelete = () => {
    onDelete(record.id);
  };

  return (
    <div className="flex items-center justify-between border-b py-2">
      {editable ? (
        <input
          type="text"
          value={updatedRecord.text}
          onChange={(e) => setUpdatedRecord({ ...updatedRecord, text: e.target.value })}
          className="mr-2"
        />
      ) : (
        <div>{record.text}</div>
      )}
      <div>
        {editable ? (
          <button onClick={handleUpdate} className="bg-green-500 text-white px-2 py-1 mr-2">
            Update
          </button>
        ) : (
          <button onClick={() => setEditable(true)} className="bg-blue-500 text-white px-2 py-1 mr-2">
            Edit
          </button>
        )}
        <button onClick={handleDelete} className="bg-red-500 text-white px-2 py-1">
          Delete
        </button>
      </div>
    </div>
  );
};

const HealthRecordsPage = () => {
  const [records, setRecords] = useState([]);
  const [newRecordText, setNewRecordText] = useState('');

  const addRecord = () => {
    if (newRecordText.trim() !== '') {
      setRecords([...records, { id: Date.now(), text: newRecordText }]);
      setNewRecordText('');
    }
  };

  const updateRecord = (updatedRecord) => {
    setRecords(records.map((record) => (record.id === updatedRecord.id ? updatedRecord : record)));
  };

  const deleteRecord = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  return (
    <div className=" bg-gradient-to-b from-blue-200 to-blue-400 min-h-screen flex-auto justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Health Records</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newRecordText}
          onChange={(e) => setNewRecordText(e.target.value)}
          placeholder="Enter new health record"
          className="border p-2 mr-2"
        />
        <button onClick={addRecord} className="bg-blue-500 text-white px-4 py-2">
          Add Record
        </button>
      </div>
      <div>
        {records.map((record) => (
          <HealthRecord
            key={record.id}
            record={record}
            onUpdate={updateRecord}
            onDelete={deleteRecord}
          />
        ))}
      </div>
    </div>
  );
};

export default HealthRecordsPage;
