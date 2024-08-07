import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/MainContent/Dashboard/Dashboard';
import Wallet from './components/MainContent/Wallet/Wallet';
import Donation from './components/MainContent/Donations/Donation';
import ThankYou from './components/MainContent/ThankYou/ThankYou';
import ReachUs from './components/MainContent/ReachUs/ReachUs';
import Login from './components/Login/Login';
import ResetPassword from './components/ResetPassword/ResetPassword';
import ResetConfirmation from './components/ResetConfirmation/ResetConfirmation';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/donations" element={<Donation />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/reach-us" element={<ReachUs />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/reset-confirmation" element={<ResetConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App;

