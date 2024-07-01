import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Sidebar/sidebar'; // Ensure this path is correct
import Footer from '../../Footer/Footer'; // Import Footer component
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import images from '../../../assets/dashimages'; // Import images
import Header from '../../Header/header'; // Import Header component
import './Donation.css';

const Donation = () => {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    // Navigate to the ThankYou page
    navigate('/thank-you');
  };

  return (
    <div className="page-container">
      <div className="donation-page">
        <Sidebar />
        <div className="donation-main">
          <Header /> {/* Include Header component inside the main content */}
          <p className="donation-text">
            The donation basket gives you the <br />privilege to make a difference to <br />someone in the underserved community.
          </p>
          <section className="donation-section">
            <h2 className="donation-heading">Enter Amount:</h2>
            <input type="text" placeholder="Ksh 100" className="donation-input" />
            <button className="donation-button" onClick={handleDonateClick}>Donate</button>
            <img src={images.donation} alt="Donation" className="donation-image" /> {/* Replace with your image */}
          </section>
        </div>
      </div>
      <Footer /> {/* Include Footer component */}
    </div>
  );
};

export default Donation;

