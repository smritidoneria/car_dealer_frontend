import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 



const URL="https://car-dealer-backend-2.onrender.com"
const DealerLogin = () => {
  const [credentials, setCredentials] = useState({ dealership_email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${URL}/api/admin/logindealer`, credentials);
      const token = response.data.token;
      localStorage.setItem('token', token);
      console.log(token);
      navigate('/dealer/selection');
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen flex justify-center items-center" style={{ backgroundImage: `url('/carup.webp')` }}>
      <div className="w-full max-w-md px-8 py-12 bg-black rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Dealer Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div>
            <label htmlFor="dealership_email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              name="dealership_email"
              id="dealership_email"
              autoComplete="email"
              required
              value={credentials.dealership_email}
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              required
              value={credentials.password}
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DealerLogin;
