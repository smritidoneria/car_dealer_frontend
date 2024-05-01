import React from 'react';
import Register from './pages/register';
import UserTypeSelection from './pages/selection';
import Adminregister from './pages/adminregister';
import Useregister from './pages/useregister';
import Dealerregister from './pages/dealerregister';
import AdminLogin from './pages/AdminLogin';
import UserLogin from './pages/UserLogin';
import DealerLogin from './pages/DealerLogin';
import CarRegister from './pages/CarRegister';
import AllCars from './pages/AllCars';
import UserDashboard from './pages/UserDashboard';
import PurchasedItem from './pages/PurchasedItem';
import SelectionDealer from './pages/SelectionDealer';
import SoldCarDealer from './pages/SoldCarDealer';
import LandingPage from './pages/LandingPage';
import Navbar from './pages/Navabar';
import Notsolddealer from './pages/Notsolddealer';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Specify a component or element for the root path */}
        <Route path="/" element={<LandingPage/>} />
        <Route path="/selection" element={<UserTypeSelection/>} />
        <Route path="/admin" element={<Adminregister />} />
        <Route path="/dealer" element={<Dealerregister />} />
        <Route path="/seller" element={<Useregister />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/forgotPassword" element={<ForgotPassword />} />
        <Route path="/user/resetPassword/:token" element={<ResetPassword/>} />
        <Route path="/dealer/login" element={<DealerLogin />} />
        <Route path="/dealer/selection" element={<SelectionDealer />} />
        <Route path="/dealer/car/register" element={<CarRegister />} />
        <Route path="/dealer/car/getcars" element={<AllCars />} />
        <Route path="/user/car" element={<UserDashboard />} />
        <Route path="/purchased/car" element={<PurchasedItem />} />
        <Route path="/dealer/sold/cars" element={<SoldCarDealer />} />
        <Route path="/dealer/notsold/cars" element={<Notsolddealer />} />

        


        

      </Routes>
    </Router>
  );
};

export default App;
