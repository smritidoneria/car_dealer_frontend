import React, { useEffect, useState } from 'react';
import axios from 'axios';

const URL="https://car-dealer-backend-2.onrender.com"
const SoldCarDealer = () => {
  const [soldCars, setSoldCars] = useState([]);
  const [dealerDetails, setDealerDetails] = useState({});
  const [selectedCar, setSelectedCar] = useState(null);

  const fetchDealerDetails = async (carId) => {
    try {
      const response = await axios.get(`${URL}/api/user/fetchDealerByCar/${carId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setDealerDetails({ ...dealerDetails, [carId]: response.data });
    } catch (error) {
      console.error('Error fetching dealer details:', error);
    }
  };

  useEffect(() => {
    const fetchSoldCars = async () => {
      try {
        const response = await axios.get(`${URL}/api/dealer/getsoldcar`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setSoldCars(response.data.soldCars);
      } catch (error) {
        console.error('Error fetching sold cars:', error);
      }
    };

    fetchSoldCars();
  }, []);

  return (
    <div className="bg-black min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4 text-white">Sold Cars</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {soldCars.map(car => (
            <div key={car._id} className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transition duration-300 hover:bg-gray-700">
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-white">Name:{car.name}</h2>
                <p className=" font-semibold mb-2 text-white mb-2">Type:{car.type}</p>
                <p className=" font-semibold mb-2 text-white mb-2">Model:{car.model}</p>
                <p className=" font-semibold mb-2 text-white mb-2">Info:{car.car_info}</p>
                <button
                  onClick={() => {
                    setSelectedCar(car._id);
                    fetchDealerDetails(car._id);
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                >
                  View Dealer
                </button>
                {selectedCar === car._id && dealerDetails[car._id] && (
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
                    <div className="bg-gray-800 p-8 rounded-lg">
                      <h2 className="text-xl font-semibold mb-4 text-white">Dealer Details</h2>
                      <p className="text-gray-400 mb-2">Name: {dealerDetails[car._id].dealership_name}</p>
                      <p className="text-gray-400 mb-2">Email: {dealerDetails[car._id].dealership_email}</p>
                      <p className="text-gray-400 mb-2">Location: {dealerDetails[car._id].dealership_location}</p>
                      <button onClick={() => setSelectedCar(null)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoldCarDealer;
