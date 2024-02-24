// EmergencyServices.jsx

import React from 'react';

const EmergencyServices = () => {
  return (
    <div className="bg-gray-100 bg-gradient-to-b from-blue-200 to-blue-400 min-h-screen  justify-top items-center">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Emergency Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Emergency Hotline</h2>
            <p className="text-gray-700">For immediate assistance, call our emergency hotline.</p>
            <p className="text-gray-700">Phone: 123-456-7890</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Medical Assistance</h2>
            <p className="text-gray-700">Contact our medical experts for urgent medical advice and assistance.</p>
            <p className="text-gray-700">Email: info@example.com</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Emergency Centers</h2>
            <p className="text-gray-700">Find nearby emergency medical centers for immediate treatment.</p>
            <a href="#" className="text-blue-500 hover:underline">Locate Nearest Centers</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyServices;
