// Signup.jsx
import React, { useState } from 'react';
import { signUpUser } from '../backend/auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState(''); // Add state for user photo URL

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Pass the additional information for display name and photoURL
      await signUpUser(email, password, displayName, photoURL);
      console.log('User signed up successfully!');
      // Redirect to the home page after successful signup
      // Navigate('/');
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSignup}>
        <label className="block mb-4">
          <span className="text-gray-700">Email:</span>
          <input
            type="email"
            className="form-input mt-1 block w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Password:</span>
          <input
            type="password"
            className="form-input mt-1 block w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Display Name:</span>
          <input
            type="text"
            className="form-input mt-1 block w-full"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Profile Picture URL:</span>
          <input
            type="text"
            className="form-input mt-1 block w-full"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
