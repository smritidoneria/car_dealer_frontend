import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const URL="https://car-dealer-backend-2.onrender.com"
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="bg-black">
      <div className="container mx-auto flex justify-between items-center pt-8">
        <h1 className="logo text-white text-3xl font-bold">Car Dealership</h1>
        <ul className="nav-links flex justify-end items-center gap-20 text-white">
          <li className="relative group">
            <a href="#" onClick={toggleDropdown} className="group">
              SignUp
            </a>
            {showDropdown && (
              <ul className="dropdown-menu absolute bg-black border border-white rounded-md p-2 mt-1 w-20">
                <li><Link to="/admin" className="text-white hover:bg-gray-800">Admin</Link></li>
                <li><Link to="/seller" className="text-white hover:bg-gray-800">User</Link></li>
                <li><Link to="/dealer" className="text-white hover:bg-gray-800">Dealer</Link></li>
              </ul>
            )}
          </li>
          <li><a href="#services" className="text-white">Services</a></li>
          <li><a href="#contact" className="text-white">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
