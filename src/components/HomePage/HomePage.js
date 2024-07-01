import React from 'react';
import './HomePage.css'; 
import { NavLink } from 'react-router-dom'; // Import NavLink from React Router
import '@fortawesome/fontawesome-free/css/all.min.css';
import images from '../../assets/dashimages'; // Adjusted path based on your structure
import Header from '../Header/header'; // Adjusted path based on your structure
import Footer from '../Footer/Footer'; // Adjusted path based on your structure

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="top-bar">
                <img src={images.logo} alt="Logo" className="logo" />
                <Header />
                <div className="buttons">
                    <NavLink to="/signup" className="green-button">Sign Up</NavLink>
                    <button className="green-button">Login</button>
                </div>
            </div>
            <div className="navigation-bar">
                <NavLink to="/" exact className="nav-item" activeClassName="active">Shop</NavLink>
                <a href="https://smartmvua-forecast.netlify.app" className="nav-item">Weather</a>
                <NavLink to="/market-insight" className="nav-item" activeClassName="active">Market Insight</NavLink>
                <NavLink to="/education" className="nav-item" activeClassName="active">Education</NavLink>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;

