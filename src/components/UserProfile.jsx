// UserProfile.js
import React, { useState } from 'react';
import { updateProfile } from '../backend/auth';

export const UserProfile = ({ user }) => {
  const [displayName, setDisplayName] = useState(user.displayName || '');
  const [profileImage, setProfileImage] = useState(''); // Add state for profile image URL

  const handleUpdateProfile = async () => {
    try {
      await updateProfile(user, { displayName, photoURL: profileImage });
      console.log('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
      <div className="flex items-center space-x-4 mb-4">
        <div>
          <img
            src={user.photoURL || 'default-profile-image.jpg'} // Use a default image or user's profile image if available
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div>
          <p className="text-lg font-semibold">{displayName || 'No Display Name'}</p>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>
      <label className="block mb-4">
        <span className="text-gray-700">Update Display Name:</span>
        <input
          type="text"
          className="form-input mt-1 block w-full"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Profile Image URL:</span>
        <input
          type="text"
          className="form-input mt-1 block w-full"
          value={profileImage}
          onChange={(e) => setProfileImage(e.target.value)}
        />
      </label>
      <button
        onClick={handleUpdateProfile}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Update Profile
      </button>
    </div>
  );
};
