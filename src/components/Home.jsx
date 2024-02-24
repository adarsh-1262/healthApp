// Home.jsx

import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-blue-200 to-blue-400 min-h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Welcome to Online Health Consultancy</h1>
        <p className="text-lg text-white mb-8">Get professional medical advice and treatment online</p>
        <p className="text-lg text-white mb-8">Our platform connects you with experienced doctors from around the world. No matter where you are, you can get the care you need.</p>
        <button className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300">Get Started</button>
      </div>
    </div>
  );
};

export default Home;
