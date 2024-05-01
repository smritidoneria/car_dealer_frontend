import React from 'react';
import { Link } from 'react-router-dom';

const URL="https://car-dealer-backend-2.onrender.com"
const SelectionDealer = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center">
      <h1 className="text-6xl font-bold text-white mb-20 pt-40">Dealer Options</h1>
      <div className="flex gap-40">
        <Link to="/dealer/car/register" className="flex-1 bg-gray-700  hover:bg-gray-800  text-white font-bold py-4 px-8 rounded-lg text-center w-60 h-40 flex items-center justify-center">
          Register Car
        </Link>
        <Link to="/dealer/sold/cars" className="flex-1 bg-gray-700  hover:bg-gray-800  text-white font-bold py-4 px-8 rounded-lg text-center w-60 h-40 flex items-center justify-center">
          Sold Cars
        </Link>
        <Link to="/dealer/notsold/cars" className="flex-1 bg-gray-700  hover:bg-gray-800  text-white font-bold py-4 px-8 rounded-lg text-center w-60 h-40 flex items-center justify-center">
         Not sold cars
        </Link>
        <Link to="/dealer/car/getcars" className="flex-1 bg-gray-700  hover:bg-gray-800  text-white font-bold py-4 px-8 rounded-lg text-center w-60 h-40 flex items-center justify-center">
        All Cars
        </Link>
      </div>
    </div>
  );
};

export default SelectionDealer;
