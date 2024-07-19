import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Thankyou.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import images from '../../../assets/dashimages'; // Import images

const ThankYou = () => {
  const navigate = useNavigate();

  const handleBackToHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="thank-you-container">
      <img src={images.thankyou} alt="Thank You" className="thank-you-image" /> 
      <button className="back-to-home-button" onClick={handleBackToHomeClick}>BACK TO HOME PAGE</button>
    </div>
  );
};

export default ThankYou;

