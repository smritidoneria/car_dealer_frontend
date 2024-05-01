import React from 'react';
import { Link } from 'react-router-dom';

const URL="https://car-dealer-backend-2.onrender.com"
const UserTypeSelection = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center ">
      <h2 className="text-6xl font-bold text-white mb-20 pt-40">Choose Your User Type</h2>
      <div className="flex gap-40">
        <Link to="/admin" className="flex-1 bg-gray-700  hover:bg-gray-800  text-white font-bold py-4 px-8 rounded-lg text-center w-60 h-40 flex items-center justify-center ">
          Admin
        </Link>
        <Link to="/dealer" className="flex-1  bg-gray-700  hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg text-center w-60 h-40 flex items-center justify-center">
          Dealer
        </Link>
        <Link to="/seller" className="flex-1 bg-gray-700  hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg text-center w-60 h-40 flex items-center justify-center">
          Client
        </Link>
      </div>
    </div>
  );
};

export default UserTypeSelection;
