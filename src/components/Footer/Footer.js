// src/components/Footer/Footer.js

import React from 'react';
import './Footer.css'; // Import Footer.css for styling
import images from '../../assets/dashimages'; // Import images

function Footer() {
  return (
    <div className="footer-container">
      <div className="newsletter-section">
        <img src= {images.smart} alt="Newsletter" className="newsletter-image" />
        <div className="vertical-line"></div>
        <div className="newsletter-content">
          <p>Subscribe to our newsletter to get our updates and recommendations</p>
          <div className="input-icon-wrapper">
            <i className="fas fa-envelope email-icon"></i>
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            
            <button className="subscribe-button">Subscribe</button>
          </div>
          
        </div>
      </div>
      

      <div className="footer-main">
        <div className="footer-section">
          <h4>Download our app Today.</h4>
          <img src= {images.footer} alt="Download on Google Play" className="app-download"/>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Community</li>
            <li>Testimonies</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>Help center</li>
            <li>Tweet @ us</li>
            <li>Send a mail</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li>Download App</li>
            <li>Shop now</li>
            <li>Donation Busket</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow our socials</h4>
          <ul className="social-links">
            <li><i className="fab fa-xing"></i> smartmavuno</li>
            <li><i className="fab fa-instagram"></i> smartmavuno</li>
            <li><i className="fab fa-linkedin"></i> smartmavuno</li>
            <li><i className="fab fa-facebook"></i> smartmavuno</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright &copy;2023 SmartMavuno. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
