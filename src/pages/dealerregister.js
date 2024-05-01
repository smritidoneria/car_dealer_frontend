import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const URL="https://car-dealer-backend-2.onrender.com"
const Dealerregister = () => {
  const [dealerData, setDealerData] = useState({
    dealership_email: '',
    dealership_id: '',
    dealership_name: '',
    dealership_location: '',
    password: '',
    dealership_info: ''
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDealerData({
      ...dealerData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    console.log("Submitting dealer registration...");
    event.preventDefault();
    try {
      const response = await axios.post(
        `${URL}/api/admin/registerdealer`,
        dealerData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('Dealer registered successfully:', response.data);
      // Redirect to dealer login page upon successful registration
      navigate('/dealer/login');
    } catch (error) {
      console.error('Error registering dealer:', error);
      // Handle errors, e.g., display an error message to the user
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold text-white mb-8">Dealer Registration</h2>
      <div className="flex flex-col md:flex-row items-center md:items-center ">
        <div className=" w-full md:w-1/2 pr-20">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="dealership_email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline "
                id="dealership_email"
                type="email"
                name="dealership_email"
                value={dealerData.dealership_email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="dealership_id">
                Dealer ID
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
                id="dealership_id"
                type="text"
                name="dealership_id"
                value={dealerData.dealership_id}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="dealership_name">
                Dealer Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
                id="dealership_name"
                type="text"
                name="dealership_name"
                value={dealerData.dealership_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="dealership_location">
                Location
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
                id="dealership_location"
                type="text"
                name="dealership_location"
                value={dealerData.dealership_location}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                value={dealerData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="dealership_info">
                Dealer Info
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
                id="dealership_info"
                type="text"
                name="dealership_info"
                value={dealerData.dealership_info}
                onChange={handleChange}
                required
              />
            </div>
            <button
              className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
            <p className="mt-4 text-gray-600 text-sm">
              Already a dealer? <Link to="/dealer/login" className="text-blue-500">Login here</Link>
            </p>
          </form>
        </div>
        <div className="w-full  p-6 h-96">
          {/* Replace the URL with your actual image URL */}
          <img src="/carup.webp" alt="Dealer Registration" className="w-full h-afull" />
        </div>
      </div>
    </div>
  );
};

export default Dealerregister
