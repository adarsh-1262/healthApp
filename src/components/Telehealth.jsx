// Telehealth.jsx

import React from 'react';

const Telehealth = () => {
  return (
    <div className="bg-gray-100 bg-gradient-to-b from-blue-200 to-blue-400 min-h-screen justify-center items-center">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Telehealth Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Video Conferencing</h2>
            <p className="text-gray-700">Connect with our healthcare professionals through secure video conferencing.</p>
            <p className="text-gray-700">Schedule your telehealth appointment today.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Schedule Appointment</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Live Chat Support</h2>
            <p className="text-gray-700">Get immediate assistance and answers to your health-related queries through live chat support.</p>
            <p className="text-gray-700">Our healthcare experts are available 24/7.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Start Live Chat</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telehealth;
