import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const URL="https://car-dealer-backend-2.onrender.com"
const Notsolddealer = () => {
  const [notSoldVehicles, setNotSoldVehicles] = useState([]);
  const [token, setToken] = useState('');
  const navigate = useNavigate();


  const fetchNotSoldVehicles = async () => {
    try {
      const response = await fetch(`${URL}api/dealer/notsoldVehicles`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      console.log("******",data)
      setNotSoldVehicles(data);
    } catch (error) {
      console.error('Error fetching not sold vehicles:', error);
    }
  };

  useEffect(() => {
   
    const token = localStorage.getItem('token');
    if (!token) {
    
      navigate('/login');
    } else {
      setToken(token);
     
      fetchNotSoldVehicles();
    }
  }, [navigate]);


  if (!Array.isArray(notSoldVehicles)) {
    return null; 
  }

  return (
    <div className="bg-black min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4 text-white">Not Sold Vehicles</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {notSoldVehicles.map(vehicle => (
            <div key={vehicle._id} className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transition duration-300 hover:bg-gray-700">
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-white">Name:{vehicle.name}</h2>
                <p className="font-semibold mb-2 text-white">Model: {vehicle.model}</p>
                <p className="font-semibold mb-2 text-white">Type: {vehicle.type}</p>
                {/* Add more vehicle details as needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notsolddealer;
