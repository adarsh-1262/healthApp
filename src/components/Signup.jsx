// Signup.jsx
import React, { useState } from 'react';
import { signUpUser } from '../backend/auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [photoFile, setPhotoFile] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // If the user provides a photo file, handle the file upload
      let photoUrlFromUpload = '';
      if (photoFile) {
        photoUrlFromUpload = await uploadPhoto(photoFile);
      }

      // Pass the additional information for display name and photoURL
      await signUpUser(email, password, displayName, photoURL || photoUrlFromUpload);
      console.log('User signed up successfully!');
      // Redirect to the home page after successful signup
      Navigate('/');
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  const uploadPhoto = async (file) => {
    // Implement your logic to upload the photo file and get the URL
    // You can use a service like Firebase Storage or any other file storage service
    // For simplicity, this function returns a placeholder URL
    return 'https://via.placeholder.com/150'; // Replace with actual URL
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhotoFile(file);

    // Display a preview of the selected photo
    const reader = new FileReader();
    reader.onload = (event) => {
      setPhotoURL(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
  <div className="bg-gradient-to-b from-blue-200 to-blue-400 min-h-screen flex justify-center items-center">
    <div className=" max-w-md mx-auto mt-10 p-6 bg-red-200 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
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
          <span className="text-gray-700">Profile Picture:</span>
          <input
            type="file"
            accept="image/*"
            capture="user"
            className="form-input mt-1 block w-full"
            onChange={handlePhotoChange}
          />
          {photoURL && (
            <img src={photoURL} alt="Selected" className="mt-2 max-w-full h-32 object-cover" />
          )}
        </label>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-full"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
  );
};

export default Signup;
