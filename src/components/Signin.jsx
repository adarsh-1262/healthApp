// Signin.jsx
import React, { useState } from 'react';
import { signInUser } from '../backend/auth';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await signInUser(email, password);
      console.log('User signed in successfully!');
      // Redirect to the home page after successful sign-in
      Navigate('/');
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-200 to-blue-400 min-h-screen flex justify-center items-center signin-container bg-gray-100">
      <div className="bg-red-200 p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">Email:</label>
            <input
              type="email"
              className="form-input mt-1 block w-full border rounded-md p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">Password:</label>
            <input
              type="password"
              className="form-input mt-1 block w-full border rounded-md p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
