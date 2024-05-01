import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const URL = "https://car-dealer-backend-2.onrender.com";

const Useregister = () => {
  const [userData, setUserData] = useState({
    user_email: '',
    user_id: '',
    user_location: '',
    user_info: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${URL}/api/admin/registeruser`,
        userData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      console.log('User registered successfully:', response.data);
      navigate('/user/login');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold text-white mb-8">User Registration</h2>
      <div className="flex flex-col md:flex-row items-center md:items-center">
        <div className="w-full md:w-1/2 pr-20">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="user_email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
                id="user_email"
                type="email"
                name="user_email"
                value={userData.user_email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="user_id">
                User ID
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
                id="user_id"
                type="text"
                name="user_id"
                value={userData.user_id}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="user_location">
                Location
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
                id="user_location"
                type="text"
                name="user_location"
                value={userData.user_location}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="user_info">
                User Info
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
                id="user_info"
                type="text"
                name="user_info"
                value={userData.user_info}
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
                value={userData.password}
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
          </form>
          <p className="mt-4 text-gray-600 text-sm">
            Already a user? <Link to="/user/login" className="text-blue-500">Login here</Link>
          </p>
        </div>
        <div className="w-full p-6 h-96">
          {/* Replace the URL with your actual image URL */}
          <img src="/carup.webp" alt="User Registration" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Useregister;
