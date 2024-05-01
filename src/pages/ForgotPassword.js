import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const URL="https://car-dealer-backend-2.onrender.com"
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [resetLink, setResetLink] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `${URL}/api/admin/forgotpassworduser/`,
        { email, token } // Include token in the request body
      );
      setResetLink(response.data.link); // Assuming the response contains a reset link
      setSuccessMessage(response.data.message);
    } catch (error) {
      setError('Failed to send reset link. Please try again.');
    }
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen flex justify-center items-center" style={{ backgroundImage: `url('/carup.webp')` }}>
      <div className="w-full max-w-md px-8 py-12 bg-black rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
          {resetLink && (
            <div className="text-center">
              <p className="text-blue-500 text-sm">Reset link sent successfully!</p>
              <a href={resetLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Click here to reset your password</a>
            </div>
          )}
          {!resetLink && (
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                value={email}
                onChange={handleChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 bg-white text-black"
              />
            </div>
          )}

          {!resetLink && (
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Reset Link
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
