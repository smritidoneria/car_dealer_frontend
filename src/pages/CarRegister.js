import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const URL="https://car-dealer-backend-2.onrender.com"
const CarRegister = () => {
  const [token, setToken] = useState('');
  const [formData, setFormData] = useState({
    car_id: '',
    type: '',
    name: '',
    model: '',
    car_info: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${URL}/api/dealer/registerCar`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Car registered successfully');
      navigate('/dealer/car/getcars');
    } catch (error) {
      console.error('Error registering car:', error);
      // Handle error, show error message
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold text-white mb-8">Car Registration</h2>
      <div className="flex flex-col md:flex-row items-center md:items-center ">
        <div className=" w-full md:w-1/2 pr-20">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="car_id">
                Car ID
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
                id="car_id"
                type="text"
                name="car_id"
                value={formData.car_id}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="type">
                Type
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
                id="type"
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="model">
                Model
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
                id="model"
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="car_info">
                Car Info
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline"
                id="car_info"
                type="text"
                name="car_info"
                value={formData.car_info}
                onChange={handleChange}
                autoComplete="off"
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
        </div>
        <div className="w-full  p-6 h-96">
          {/* Replace the URL with your actual image URL */}
          <img src="/carup.webp" alt="Car Registration" className="w-full h-afull" />
        </div>
      </div>
    </div>
  );
};

export default CarRegister;
