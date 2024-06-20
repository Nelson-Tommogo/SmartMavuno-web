import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/MainContent/Dashboard/Dashboard';
import Wallet from './components/MainContent/Wallet/Wallet';
import Donation from './components/MainContent/Donations/Donation'; // Import the Donation component
import ThankYou from './components/MainContent/ThankYou/ThankYou';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/donations" element={<Donation />} /> {/* Add the route for Donation */}
        <Route path="/thank-you" element={<ThankYou />} /> 
      </Routes>
    </Router>
  );
}

export default App;
