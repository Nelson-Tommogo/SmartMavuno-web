import React, { useState, useEffect } from 'react';
import './HomePage.css'; 
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faGraduationCap, faChartLine, faComments, faDollarSign, faProjectDiagram, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import images from '../../assets/dashimages';
import Header from '../Header/header';
import Footer from '../Footer/Footer';

const services = [
    { name: "Land Leasing", image: images.lease, description: "We offer flexible land leasing options to suit your agricultural needs." },
    { name: "Agricultural Consultancies", image: images.Consultancies, description: "Get expert advice and consultancy services for your farming projects." },
    { name: "Farm Labour", image: images.labour, description: "Hire skilled labor for all your farming activities." },
    { name: "Equipment Rental", image: images.equipment, description: "Rent the latest agricultural equipment at affordable rates." },
    { name: "Pest Control", image: images.pest, description: "Effective pest control solutions to protect your crops." },
    { name: "Soil Testing", image: images.testing, description: "Professional soil testing services to ensure optimal crop growth." },
    { name: "Irrigation Services", image: images.irrigation, description: "Comprehensive irrigation services to keep your fields well-watered." },
];

const features = [
    { name: "Weather Report", icon: faSun, link: "https://smartmvua-forecast.netlify.app", description: "View weather forecasts for your farming activities." },
    { name: "Education", icon: faGraduationCap, link: "/education", description: "Explore educational resources on modern farming techniques." },
    { name: "Price and Info", icon: faChartLine, link: "/pricing", description: "Access market prices and agricultural information." },
    { name: "Projects", icon: faProjectDiagram, link: "/projects", description: "Manage and track your farming projects." },
    { name: "Feedbacks", icon: faComments, link: "/feedbacks", description: "Provide feedback and view customer reviews." },
    { name: "Market Insight", icon: faDollarSign, link: "/market-insight", description: "Gain insights into market trends and analysis." },
];

const latestItems = [
    { name: "Cabbage", image: images.cabbage, serviceType: "Vegetable" },
    { name: "Chickens", image: images.chickens, serviceType: "Poultry" },
    { name: "Drip Irrigation", image: images.dripirrigation, serviceType: "Irrigation" },
    { name: "Eggs", image: images.eggs, serviceType: "Poultry" },
    { name: "Free Land", image: images.freeland, serviceType: "Land" },
    { name: "Labour Latest", image: images.labourlatest, serviceType: "Labour" },
    { name: "Maindi", image: images.maindi, serviceType: "Crop" },
    { name: "Onions", image: images.onions, serviceType: "Vegetable" },
    { name: "Tomatoes", image: images.tomatoes, serviceType: "Vegetable" },
    { name: "Tractor", image: images.tractor, serviceType: "Equipment" },
    { name: "Zero Grazing", image: images.zerograzing, serviceType: "Farming" },
];

// Testimonial data
const testimonials = [
    { name: "Kevin", image: images.kevin, text: "SmartMavuno transformed my farming journey with its seamless integration of essential services like soil testing and pest control. Now, I farm with confidence knowing I have the right support at every step" },
    { name: "Martha", image: images.martha, text: "Thanks to SmartMavuno, I no longer worry about finding reliable equipment rental or agricultural consultancy. Their platform simplifies these services, allowing me to focus more on growing my crops." },
    { name: "David", image: images.david, text: "SmartMavuno's dedication to connecting farmers to markets and fostering community among agricultural peers is unparalleled. They've created a platform that not only boosts productivity but also encourages collaboration." },
    { name: "Mitchel", image: images.mitchel, text: "Using SmartMavuno for irrigation schemes and land leasing has been a game-changer for my farm. I've seen significant improvements in efficiency and yield, all while saving time and resources." },
    { name: "Thomas", image: images.thomas, text: "I highly recommend SmartMavuno to any farmer serious about maximizing their agricultural potential. Their comprehensive services and market connections have been essential to my farm's success" },
    { name: "Cynthia", image: images.cynthia, text: "SmartMavuno isn't just a software—it's a lifeline for farmers. From pest control to market connections, they've thought of everything. It's the partner every modern farmer needs." },
];

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
        }, 7000); // Change slide every 7 seconds

        return () => clearInterval(interval);
    }, []);

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    };

    return (
        <div className="home-page">
            <div className="top-bar">
                <img src={images.logo} alt="Logo" className="logo" />
                <Header />
                <div className="buttons">
                    <NavLink to="/signup" className="green-button">Sign Up</NavLink>
                    <NavLink to="/login" className="green-button">Login</NavLink>
                </div>
            </div>
            <div className="navigation-bar">
                <div className="dropdown">
                    <NavLink to="#" className="nav-item">Market Place</NavLink>
                    <div className="dropdown-content">
                        <NavLink to="/purchase" className="dropdown-item">Purchase</NavLink>
                        <NavLink to="/sell" className="dropdown-item">Sell</NavLink>
                    </div>
                </div>
                <a href={features.find(feature => feature.name === "Weather Report").link} className="nav-item">Weather</a>
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
                        <NavLink to="/about" className="dropdown-item">About US</NavLink>
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
            <div className="hero">
                {services.map((service, index) => (
                    <div 
                        key={index} 
                        className={`hero-slide ${index === currentIndex ? 'active' : ''} ${index === (currentIndex - 1 + services.length) % services.length ? 'previous' : ''}`}
                        style={{ backgroundImage: `url(${service.image})` }}
                    >
                        <div className="hero-content">
                            <h1 className="hero-title">{service.name}</h1>
                            <p className="hero-description">{service.description}</p>
                        </div>
                    </div>
                ))}
                <div className="hero-navigation">
                    <button onClick={goToPreviousSlide}>&lt;</button>
                    <button onClick={goToNextSlide}>&gt;</button>
                </div>
            </div>
            <div className="features-section">
                <div className="container">
                    <h2>Features</h2>
                    <p className="features-description">What our customers and clients will get:</p>
                    <div className="row">
                        {features.map((feature, index) => (
                            <div key={index} className="col-md-6">
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <FontAwesomeIcon icon={feature.icon} />
                                    </div>
                                    <div className="feature-content">
                                        <h5><NavLink to={feature.link}>{feature.name}</NavLink></h5>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="latest-section">
                <div className="container">
                    <h2>Latest!</h2>
                    <div className="latest-container">
                        {latestItems.map((item, index) => (
                            <div key={index} className="latest-item">
                                <img src={item.image} alt={item.name} className="latest-image" />
                                <div className="latest-info">
                                    <h5>{item.name}</h5>
                                    <p>{item.serviceType}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Testimonials section */}
            <div className="testimonials-section">
                   <h2>Testimonials</h2>
                <div className="container">
                    
                    <div className="testimonials-container">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-item">
                                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                                <div className="testimonial-content">
                                    <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                                    <p>{testimonial.text}</p>
                                    <h5>{testimonial.name}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;

