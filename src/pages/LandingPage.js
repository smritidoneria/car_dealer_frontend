import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation


const URL="https://car-dealer-backend-2.onrender.com"
const LandingPage = () => {
  return (
    <div className="landing-page h-screen flex bg-black justify-between">
      <div className="flex-1 flex flex-col justify-center px-8 max-w-md">
        <h2 className="text-4xl font-bold text-white mb-4">Welcome to DriveWise</h2>
        <p className="text-lg text-white mb-6">We offer the best deals on a wide range of cars. Get started today!</p>
        <Link to="/selection" className=" w-50 btn btn-primary py-2 px-20 rounded-full bg-grey-500 hover:bg-grey-700 text-white font-semibold border border-white transition-transform transform hover:scale-105">Get Started</Link>


      </div>
      <div className="flex-1 bg-cover bg-center pr-15" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/carupup.jpeg)` }}></div>
    </div>
  );
};

export default LandingPage;
