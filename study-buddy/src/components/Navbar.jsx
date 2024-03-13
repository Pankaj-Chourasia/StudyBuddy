// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-lg font-semibold">
            My Study Planner
          </Link>
          <div>
            <Link to="/login" className="text-white mr-4">
              Login
            </Link>
            <Link to="/signup" className="text-white">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
