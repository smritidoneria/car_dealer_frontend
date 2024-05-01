import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

const URL="https://car-dealer-backend-2.onrender.com"
const UserDashboard = () => {
  const [cars, setCars] = useState([]);
  const [purchasedCars, setPurchasedCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [dealerDetails, setDealerDetails] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(`${URL}/api/user/car`);
        setCars(response.data.cars);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchCars();
  }, []);

  const fetchPurchasedCars = async () => {
    try {
      const response = await axios.get(`${URL}/api/user/purchased-cars`);
      setPurchasedCars(response.data.purchasedCars);
    } catch (error) {
      console.error('Error fetching purchased cars:', error);
    }
  };

  const handlePurchase = async (carId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('User token not found');
      }

      await axios.post(
        `${URL}/api/dealer/sold/${carId}`,
        { car_id: carId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log(`Car with ID ${carId} has been marked as sold`);
      alert('purchased');
      fetchPurchasedCars();
    } catch (error) {
      console.error('Error marking car as sold:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${URL}/api/dealer/getCarBySearch?name=${searchTerm}`);
      setSearchResults(response.data.cars);
      setSearchPerformed(true);
    } catch (error) {
      console.error('Error searching cars:', error);
    }
  };

  const fetchDealerDetails = async (carId) => {
    try {
      const response = await axios.get(`${URL}/api/user/fetchDealerByCar/${carId}`);
      setDealerDetails(response.data);
    } catch (error) {
      console.error('Error fetching dealer details:', error);
    }
  };

  return (
    <div className="bg-black min-h-screen py-8">
      <div className="container mx-auto px-4">

        <div className="mb-4 pt-4 flex items-center">
          <input
            type="text"
            placeholder="Search by dealer name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button onClick={handleSearch} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Search
          </button>
          <Link to="/purchased/car" className="ml-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">View Purchased Cars</Link>
        </div>
        
        {searchPerformed && searchResults.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {searchResults.map(car => (
              <div key={car._id} className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transition duration-300 hover:bg-gray-700">
               
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 text-white">Name:{car.name}</h2>
                  <p className="font-semibold mb-2 text-white">Type:{car.type}</p>
                  <p className="font-semibold mb-2 text-white">Model:{car.model}</p>
                  <p className="font-semibold mb-2 text-white">Info:{car.car_info}</p>
                  <div className="flex justify-between">
                    <button
                      onClick={() => {
                        setSelectedCar(car);
                        fetchDealerDetails(car._id);
                      }}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      View Dealer
                    </button>
                    <button
                      onClick={() => handlePurchase(car._id)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Purchase
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!searchPerformed&& cars.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cars.map(car => (
              <div key={car._id} className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transition duration-300 hover:bg-gray-700">
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 text-white">Car Name:{car.name}</h2>
                  <p className="font-semibold mb-2 text-white">Car Type:{car.type}</p>
                  <p className=" font-semibold mb-2 text-white">Car Model:{car.model}</p>
                  <p className=" font-semibold mb-2 text-white">Car Info:{car.car_info}</p>
                  <div className="flex justify-between">
                    <button
                      onClick={() => {
                        setSelectedCar(car);
                        fetchDealerDetails(car._id);
                      }}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      View Dealer
                    </button>
                    <button
                      onClick={() => handlePurchase(car._id)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Purchase
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedCar && dealerDetails && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-white">Dealer Details</h2>
              <p className="text-gray-400 mb-2">Name: {dealerDetails.dealership_name}</p>
              <p className="text-gray-400 mb-2">Email: {dealerDetails.dealership_email}</p>
              <p className="text-gray-400 mb-2">Location: {dealerDetails.dealership_location}</p>
              <button onClick={() => setDealerDetails(null)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default UserDashboard;
