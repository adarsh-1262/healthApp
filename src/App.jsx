// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import HealthRecords from './components/HealthRecords';
import EmergencyServices from './components/EmergencyServices';
import Telehealth from './components/Telehealth';
import UserProfile  from './components/UserProfile';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { signUpUser, signInUser, signOutUser, onAuthStateChangedListener } from './backend/auth';
import { addHealthRecord, getHealthRecords } from './backend/fibebase';

function App() {
  const [user, setUser] = useState(null);
  const [healthRecord, setHealthRecord] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((authUser) => {
      if (authUser) {
        setUser(authUser);
        // Retrieve health record when the user is authenticated
        getHealthRecordData(authUser.uid);
      } else {
        setUser(null);
        setHealthRecord(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signUp = async (email, password) => {
    try {
      await signUpUser(email, password);
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  const signIn = async (email, password) => {
    try {
      await signInUser(email, password);
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  const signOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  const addHealthRecordData = async () => {
    try {
      const healthRecordData = { /* Your health record data */ };
      await addHealthRecord(user.uid, healthRecordData);
      console.log('Health record added successfully');
      // Update local state with the newly added health record
      getHealthRecordData(user.uid);
    } catch (error) {
      console.error('Error adding health record:', error.message);
    }
  };
  

  const getHealthRecordData = async (userId) => {
    try {
      const healthRecordData = await getHealthRecords(userId);
      setHealthRecord(healthRecordData);
      console.log('Health record retrieved:', healthRecordData);
    } catch (error) {
      console.error('Error getting health record:', error.message);
    }
  };

  return (
    <Router>
      <NavBar user={user} signOutUser={signOutUser} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/health-records" element={<HealthRecords user={user} healthRecord={healthRecord} addHealthRecordData={addHealthRecordData} />} />
        <Route path="/emergency-services" element={<EmergencyServices />} />
        <Route path="/telehealth" element={<Telehealth />} />
        <Route path="/profile" element={<UserProfile user={user} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} /> {/* Add this route for the Signin component */}
      </Routes>
    </Router>
  );
}

export default App;
