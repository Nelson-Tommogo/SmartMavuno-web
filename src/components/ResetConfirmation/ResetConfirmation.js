import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ResetConfirmation.css'; // Import ResetConfirmation-specific CSS
import images from '../../assets/dashimages'; // Import images from dashimages directory

const ResetConfirmation = () => {
  const location = useLocation();
  const email = location.state?.email || 'your email';

  const confirmationImage = images.confirmation; // Assuming 'confirmation' is the key for your image

  return (
    <div className="reset-confirmation-wrapper">
      <h2 className="confirmation-header">Done!</h2>
      <p className="confirmation-subheader">
        Mail sent to: <br /> <span className="email-address">{email}</span>
      </p>
      <div className="confirmation-image-container">
        <img src={confirmationImage} alt="Confirmation" className="confirmation-image" />
      </div>
      <div className="back-to-login">
        <Link to="/login" className="login-link">
          <button className="login-button">Return to Login Page</button>
        </Link>
      </div>
    </div>
  );
};

export default ResetConfirmation;

