import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const NavBar = ({ user, signOutUser }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-blue-500 p-4 shadow-md">
      <nav className="flex items-center justify-between mb-4">
        <div className="text-white">
          <Link to="/" className="text-2xl font-bold">Health App</Link>
        </div>
        {/* Desktop navigation */}
        <ul className="hidden md:flex space-x-4">
          <li><Link to="/" className="text-white">Home</Link></li>
          <li><Link to="/health-records" className="text-white">Health Records</Link></li>
          <li><Link to="/emergency-services" className="text-white">Emergency Services</Link></li>
          <li><Link to="/telehealth" className="text-white">Telehealth</Link></li>
          <li><Link to="/profile" className="text-white">Profile</Link></li>
        </ul>
        {/* Mobile navigation */}
        <div className="md:hidden flex items-center space-x-4">
          <button className="text-white" onClick={toggleMobileMenu}>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col space-y-2 bg-blue-500 mt-2">
            <Link to="/" className="text-white p-2">Home</Link>
            <Link to="/health-records" className="text-white p-2">Health Records</Link>
            <Link to="/emergency-services" className="text-white p-2">Emergency Services</Link>
            <Link to="/telehealth" className="text-white p-2">Telehealth</Link>
            <Link to="/profile" className="text-white p-2">Profile</Link>
          </div>
        )}
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="text-white">
              <p className="mr-4">Hello, {user.displayName}!</p>
              {console.log(user)};
              <button
                onClick={signOutUser}
                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition duration-300"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="text-white hidden md:flex">
              <Link to="/signup" className="mr-2">Sign Up</Link>
              <Link to="/signin">Sign In</Link>
            </div>
          )}
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
