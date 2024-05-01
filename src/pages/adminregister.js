import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const URL = "https://car-dealer-backend-2.onrender.com";
const Adminregister = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${URL}/api/admin/registeradmin`, {
        username: username,
        password: password
      });
      console.log('Admin registered successfully:', response.data);
      navigate('/admin/login');
    } catch (error) {
      console.error('Error registering admin:', error);
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col md:flex-row justify-center items-center">
      <div className="w-full md:w-1/2 pl-20 gap-3">
        <h2 className="text-5xl font-bold text-white mb-8">Admin Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 pr-20">
        {/* Replace the URL with your actual image URL */}
        <img src="/carup.webp" alt="Admin Registration" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Adminregister;
