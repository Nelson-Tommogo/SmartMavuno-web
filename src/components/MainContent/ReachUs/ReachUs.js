import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../Header/header';
import Footer from '../../Footer/Footer';
import './ReachUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import images from '../../../assets/dashimages'; // Import images

const ReachUs = () => {
    return (
        <div className="reach-us">
            <div className="top-bar">
                <img src={images.logo} alt="Logo" className="logo" />
                <Header />
            </div>
            <div className="navigation-bar">
                <div className="dropdown">
                    <NavLink to="#" className="nav-item">Market Place</NavLink>
                    <div className="dropdown-content">
                        <NavLink to="/purchase" className="dropdown-item">Purchase</NavLink>
                        <NavLink to="/sell" className="dropdown-item">Sell</NavLink>
                    </div>
                </div>
                <NavLink to="/weather" className="nav-item">Weather</NavLink>
                <div className="dropdown">
                    <NavLink to="/market-insight" className="nav-item" activeClassName="active">Market Insight</NavLink>
                    <div className="dropdown-content">
                        <NavLink to="/workshops" className="dropdown-item">Workshops</NavLink>
                        <NavLink to="/projects" className="dropdown-item">Projects</NavLink>
                    </div>
                </div>
                <div className="dropdown">
                    <NavLink to="/education" className="nav-item" activeClassName="active">Education</NavLink>
                    <div className="dropdown-content">
                        <NavLink to="/modern-farming" className="dropdown-item">Modern Farming</NavLink>
                    </div>
                </div>
                <div className="dropdown">
                    <NavLink to="/more-insight" className="nav-item" activeClassName="active">More Insight</NavLink>
                    <div className="dropdown-content">
                        <NavLink to="/reach-us" className="dropdown-item">Reach Us</NavLink>
                        <NavLink to="/faqs" className="dropdown-item">FAQs</NavLink>
                        <NavLink to="/about" className="dropdown-item">About Us</NavLink>
                    </div>
                </div>
                <div className="dropdown">
                    <NavLink to="/pricing" className="nav-item" activeClassName="active">Pricing</NavLink>
                    <div className="dropdown-content">
                        <NavLink to="/my-cart" className="dropdown-item">My Cart</NavLink>
                        <NavLink to="/market-price" className="dropdown-item">Market Price</NavLink>
                    </div>
                </div>
                <NavLink to="/product" className="nav-item" activeClassName="active">Product</NavLink>
            </div>
            <div className="content">
                <h2 className="center-text">Questions? Comments? Complaint?</h2>
                <p className="description">
                    For any enquiries reach out to us through our email <a href="mailto:smartmavuno@gmail.com" className="highlight">smartmavuno@gmail.com</a> or fill in the form below.
                    We love hearing from you.
                </p>
                <div className="form-section">
                    <form className="form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                    <div className="lets-talk">
                        <h2 className="center-text lets-talk-text">LET'S TALK</h2>
                        <img src={images.reach} alt="Reach-us" className="reach-us-image" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ReachUs;

