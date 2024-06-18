import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/MainContent/Dashboard/Dashboard';
import Wallet from './components/MainContent/Wallet/Wallet'; // Import Wallet component
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome for icons

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} /> {/* Add Wallet route */}
      </Routes>
    </Router>
  );
}

export default App;
