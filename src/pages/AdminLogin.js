import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const URL = "https://car-dealer-backend-2.onrender.com";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${URL}/api/admin/loginadmin`, credentials);
      const token = response.data.token;
      localStorage.setItem('token', token);
    
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen flex justify-center items-center" style={{ backgroundImage: `url('/carup.webp')` }}>
      <div className="w-full max-w-md px-8 py-12 bg-black rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6 flex-row justify-center items-center">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-white">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="username"
              required
              value={credentials.username}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white align-center">
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
              className="input-field"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a href="/admin/forgotPassword" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="button-primary"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
