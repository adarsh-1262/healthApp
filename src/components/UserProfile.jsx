import React, { useState } from 'react';
import { updateProfile, uploadPhoto } from '../backend/auth';

const UserProfile = ({ user }) => {
  const [isEditing, setEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user.displayName || '');
  const [mobileNumber, setMobileNumber] = useState(user.mobileNumber || '');
  const [profilePicture, setProfilePicture] = useState(user.profilePicture || '');

  const handleUpdateProfile = async () => {
    try {
      // Upload the new profile picture, if changed
      const newProfilePicture = await uploadPhoto(profilePicture);

      // Update the user profile
      await updateProfile(user, { displayName, mobileNumber, profilePicture: newProfilePicture });

      // Exit the editing mode
      setEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error.message);
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-200 to-blue-400 min-h-screen flex justify-start items-center">
    <div className=" mx-auto bg-white rounded-md overflow-hidden shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">User Profile</h2>
      {!isEditing ? (
        <div className="text-center">
          <p className="mb-2">Name: {user.displayName}</p>
          <p className="mb-2">Email: {user.email}</p>
          <p className="mb-2">Mobile Number: {user.mobileNumber}</p>
          <div className="mb-4">
            <img src={user.profilePicture} alt="Profile" className="rounded-full h-24 w-24 mx-auto" />
          </div>
          <button onClick={() => setEditing(true)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Edit Profile
          </button>
        </div>
      ) : (
        <div>
          <label className="block mb-4">
            <span className="text-gray-700">Name:</span>
            <input
              type="text"
              className="form-input mt-1 block w-full"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Mobile Number:</span>
            <input
              type="text"
              className="form-input mt-1 block w-full"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Profile Picture URL:</span>
            <input
              type="text"
              className="form-input mt-1 block w-full"
              value={profilePicture}
              onChange={(e) => setProfilePicture(e.target.value)}
            />
          </label>
          <div className="text-center">
            <button onClick={handleUpdateProfile} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
              Update Profile
            </button>
          </div>
        </div>
      )}
    </div>
  </div>
  );
};

export default UserProfile;
