// UserProfile.js
import React, { useState } from 'react';
import { updateProfile, uploadPhoto } from '../backend/auth';

const UserProfile = ({ user }) => {
  const [name, setName] = useState(user.displayName || '');
  const [email, setEmail] = useState(user.email || '');
  const [profilePicture, setProfilePicture] = useState(null);
  const [photoURL, setPhotoURL] = useState(user.photoURL || '');

  const handleUpdateProfile = async () => {
    try {
      // Upload the new profile picture, if provided
      if (profilePicture) {
        const photoURL = await uploadPhoto(profilePicture);
        setPhotoURL(photoURL);
      }

      // Update the user profile with the new data
      await updateProfile(user, { displayName: name, photoURL });
      console.log('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error.message);
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);

    // Optionally, you can preview the selected image
    const reader = new FileReader();
    reader.onload = (event) => {
      setPhotoURL(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-8 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold mb-4 text-white">User Profile</h2>

      <div className="flex items-center mb-6">
        <img
          className="h-20 w-20 rounded-full object-cover mr-4"
          src={photoURL || 'https://via.placeholder.com/150'}
          alt="Profile"
        />
        <label className="text-white cursor-pointer">
          Change Profile Picture
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoChange}
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="text-white block mb-2">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input w-full"
        />
      </div>

      <div className="mb-4">
        <label className="text-white block mb-2">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input w-full"
        />
      </div>

      <button
        onClick={handleUpdateProfile}
        className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-blue-400 transition duration-300"
      >
        Update Profile
      </button>
    </div>
  );
};

export default UserProfile;