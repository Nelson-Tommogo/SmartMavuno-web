import React from 'react';
import './sidebar.css';
import logo from '../../assets/smart-mavuno-logo-zip-file/logo-color.png';
import profilePic from '../../assets/profile-picture.png'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Sidebar = () => {
  return (
    <div className="sidebar bg-white text-black p-3"> {/* Add padding to the sidebar */}
      {/* Logo */}
      <div className="sidebar-logo mb-3 pb-3 border-bottom text-center"> {/* Add bottom border and center align */}
        <img src={logo} alt="Logo" className="img-fluid logo" /> {/* Add custom class for logo size */}
      </div>
      
      {/* Profile */}
      <div className="sidebar-profile mb-3 text-center"> {/* Remove margin bottom */}
        <img src={profilePic} alt="Profile" className="profile-picture mr-2 rounded-circle" /> {/* Add margin-right and rounded class */}
        <div className="profile-info">
          <h3 className="mb-0">Your Name</h3> {/* Remove margin bottom for name */}
          <p className="mb-0">Your Tag</p> {/* Remove margin bottom for tag */}
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav text-center">
        <ul className="list-unstyled">
          <li className="mb-2"><a href="#explore" className="text-black">Explore</a></li> {/* Add margin bottom */}
          <li className="mb-2"><a href="#wallet" className="text-black">Wallet</a></li> {/* Add margin bottom */}
          <li className="mb-2"><a href="#shopping-history" className="text-black">Shopping History</a></li> {/* Add margin bottom */}
          <li className="mb-2"><a href="#donation-basket" className="text-black">Donation Basket</a></li> {/* Add margin bottom */}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;

