import React, { useState } from 'react';
import Sidebar from '../../Sidebar/sidebar'; // Adjusted import path assuming casing
import Footer from '../../Footer/Footer';
import Header from '../../Header/header';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './Wallet.css';
import images from '../../../assets/dashimages'; // Import images

function Wallet() {
  const [showContent, setShowContent] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('Monthly');

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownClick = (period) => {
    setSelectedPeriod(period);
    setShowDropdown(false);
  };

  return (
    <div className="wallet-wrapper">
      <div className="content-wrapper">
        <Sidebar />
        <div className="wallet-main">
          <h1>THANK YOU FOR SHOPPING WITH US</h1>
          <Header /> {/* Place Header component at the top */}
          <h2 className="wallet-subtitle">MY WALLET</h2>
          <div className="wallet-box" style={{ background: 'linear-gradient(to right, #00cc66, #66ccff)' }}>
            <div className="box-header">
              <button className="toggle-button" onClick={toggleContent}>
                <i className={showContent ? 'fas fa-eye-slash' : 'fas fa-eye'}></i> {/* Eye icon */}
              </button>
            </div>
            {showContent && (
              <div className="box-content">
                You Spent <br /> Ksh:<span> 123,000</span>
              </div>
            )}
          </div>
          <div className="filter-section">
            <div className="dropdown-wrapper" onClick={toggleDropdown}>
              <span>{selectedPeriod}</span>
              <i className="fas fa-chevron-down dropdown-icon"></i> {/* Dropdown arrow icon */}
            </div>
            {showDropdown && (
              <ul className="dropdown-list">
                <li onClick={() => handleDropdownClick('Daily')}>Daily</li>
                <li onClick={() => handleDropdownClick('Weekly')}>Weekly</li>
                <li onClick={() => handleDropdownClick('Monthly')}>Monthly</li>
                <li onClick={() => handleDropdownClick('Yearly')}>Yearly</li>
              </ul>
            )}
          </div>
          
          {/* Expenses Section */}
          <div className="expenses-section mt-4">
            <h3 className="mb-3">Expenses <span className="text-secondary">See all</span></h3>
            <div className="row align-items-center">
              <div className="col-md-2">
                <img src={images.expense} alt="Avocado" className="img-fluid expense-image" />
              </div>
              <div className="col-md-5">
                <div className="expense-details">
                  <p className="mb-1">Avocado</p>
                  <p className="text-muted mb-0">12/12/2023</p>
                </div>
              </div>
              <div className="col-md-5 text-end">
                <p className="mb-0">Ksh 100</p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-2">
                <img src={images.expense} alt="Avocado" className="img-fluid expense-image" />
              </div>
              <div className="col-md-5">
                <div className="expense-details">
                  <p className="mb-1">Avocado</p>
                  <p className="text-muted mb-0">12/12/2023</p>
                </div>
              </div>
              <div className="col-md-5 text-end">
                <p className="mb-0">Ksh 100</p>
              </div>
              
            </div>
            <div className="row align-items-center">
              <div className="col-md-2">
                <img src={images.expense} alt="Avocado" className="img-fluid expense-image" />
              </div>
              <div className="col-md-5">
                <div className="expense-details">
                  <p className="mb-1">Avocado</p>
                  <p className="text-muted mb-0">12/12/2023</p>
                </div>
              </div>
              <div className="col-md-5 text-end">
                <p className="mb-0">Ksh 100</p>
              </div>
              
              
            </div>
          </div>
          
        </div>
      </div>
    
      <Footer />
    </div>
  );
}

export default Wallet;

