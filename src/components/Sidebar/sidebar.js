import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../../assets/smart-mavuno-logo-zip-file/logo-color.png';
import profilePic from '../../assets/profile-picture.png'; 
import bananaImage from '../../assets/banana.png'; 
import grapesImage from '../../assets/grapes.png'; 
import watermelonImage from '../../assets/watermelon.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Sidebar = () => {
  return (
    <div className="sidebar bg-white text-black p-3">
      {/* Logo */}
      <div className="sidebar-logo mb-3 text-center">
        <img src={logo} alt="Logo" className="img-fluid logo" />
      </div>
      
      {/* Profile */}
      <div className="sidebar-profile mb-3 d-flex align-items-center">
        <img src={profilePic} alt="Profile" className="profile-picture rounded-circle mr-3" />
        <div className="profile-info">
          <h3 className="mb-0" style={{ fontSize: '1.2rem' }}>Faith Nkatha</h3>
          <p className="mb-0">@avocadolover</p>
        </div>
      </div>
      <div className="border-bottom-custom mb-3"></div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        <ul className="list-unstyled">
          <li className="mb-3">
            <Link to="/dashboard" className="text-dark d-flex align-items-center"> {/* Update Link component */}
              <span className="explore-icon mr-3">
                <i className="fas fa-arrow-up-right-from-square"></i>
              </span>
              Explore
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/wallet" className="text-black d-flex align-items-center"> {/* Use Link component */}
              <i className="fas fa-wallet mr-3 nav-icon"></i>
              Wallet
            </Link>
          </li>
          <li className="mb-3">
            <a href="#shopping-history" className="text-black d-flex align-items-center">
              <i className="fas fa-shopping-bag mr-3 nav-icon"></i>
              Shopping History
            </a>
          </li>
          <li className="mb-3">
            <Link to="/donations" className="text-black d-flex align-items-center"> {/* Use Link component */}
              <i className="fas fa-gift mr-3 nav-icon"></i>
              Donation Basket
            </Link>
          </li>
        </ul>
      </nav>
      <div className="border-bottom-custom mb-3"></div>

      {/* Last Order Section */}
      <div className="last-order-section mt-4">
        <h5>Last Order <span>20</span></h5>
        <ul className="list-unstyled">
          <li className="mb-3 d-flex align-items-center">
            <div className="order-item mr-3">
              <img src={bananaImage} alt="Banana" className="img-fluid rounded-circle" />
            </div>
            <span>Banana</span>
            <span className="ml-auto">
              <a href="#view-order" className="text-black">...View Order</a>
            </span>
          </li>
          <li className="mb-3 d-flex align-items-center">
            <div className="order-item mr-3">
              <img src={grapesImage} alt="Grapes" className="img-fluid rounded-circle" />
            </div>
            <span>Grapes</span>
            <span className="ml-auto">
              <a href="#view-order" className="text-black">...View Order</a>
            </span>
          </li>
          <li className="mb-3 d-flex align-items-center">
            <div className="order-item mr-3">
              <img src={watermelonImage} alt="Watermelon" className="img-fluid rounded-circle" />
            </div>
            <span>Watermelon</span>
            <span className="ml-auto">
              <a href="#view-order" className="text-black">...View Order</a>
            </span>
          </li>
        </ul>
        <div className="text-center mb-3">
          <a href="#see-all">See All</a>
        </div>
      </div>
      <div className="border-bottom-custom mb-3"></div>

      {/* Settings, Support, Logout Section */}
      <div className="settings-section">
        <ul className="list-unstyled">
          <li className="mb-3">
            <a href="#settings" className="text-black d-flex align-items-center">
              <i className="fas fa-cog mr-3"></i>
              Settings
            </a>
          </li>
          <li className="mb-3">
            <a href="#support" className="text-black d-flex align-items-center">
              <i className="fab fa-chrome mr-3"></i>
              Support
            </a>
          </li>
          <li className="mb-3">
            <a href="#logout" className="text-black d-flex align-items-center">
              <i className="fas fa-sign-out-alt mr-3"></i>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
