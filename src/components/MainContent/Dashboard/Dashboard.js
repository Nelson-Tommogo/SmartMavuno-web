import React from 'react';
import Sidebar from '../../Sidebar/sidebar';
import './Dashboard.css'; // Import CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from '../../Header/header';
import Footer from '../../Footer/Footer';
import profilePicture from '../../../assets/profile-picture.png'; // Import profile picture
import images from '../../../assets/dashimages'; // Import images

function Dashboard() {
  return (
    <div>
      <div className="dashboard-wrapper">
        <div className="dashboard-container">
          <Sidebar />
          <div className="dashboard-content">
            <div className="heading-container">
              <h1 style={{ color: 'green' }}>Hello, Nkatha</h1>
              <img src={profilePicture} alt="Profile" />
            </div>
            <div className="intro-section">
              <p style={{ color: 'dark', marginRight: '40px' }}>let the shopping begin!</p>
              <Header style={{ marginLeft: '20px' }} /> {/* Add margin-left to create space */}
            </div>
            <div className="columns-container">
              <div className="left-column">
                <div className="left-column-content">
                  <h2 style={{ color: 'green' }}>New Products</h2>
                  <p style={{ color: 'white' }}>Just for you</p>
                  <p style={{ color: 'green' }}>Let's spice things up!</p>
                  <button className="check-now-button">
                    CHECK NOW <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <div className="right-column">
                <img src={images.main} alt="Profile" style={{ maxWidth: '150px' }} />
              </div>
            </div>
            <div className="section-header">
              <h2>Nkatha's Collection</h2>
              <span>View All</span>
            </div>
            <div className="collections-container">
              <div className="collection">
                <span className="like-icon">
                  <i className="fas fa-thumbs-up text-warning"></i>
                </span>
                Recommendation
              </div>
              <div className="collection">Fruits</div>
              <div className="collection">Vegetables</div>
              <div className="collection">Cereals</div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="item-container">
                  <div className="image-container">
                    <img src={images.strawberry} alt="Product" className="img-fluid" />
                    <span className="love-icon"><i className="fas fa-heart"></i></span>
                    <span className="plus-icon"><i className="fas fa-plus"></i></span>
                  </div>
                </div>
                <div className="item-details">
                  <p className="collection-name"><strong>Strawberry</strong></p>
                  <p className="collection-type">Fruits</p>
                  <p>Ksh <span style={{ textDecoration: 'line-through' }}> 200</span> 150</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item-container">
                  <div className="image-container">
                    <img src={images.maize} alt="Product" className="img-fluid" />
                    <span className="love-icon"><i className="fas fa-heart"></i></span>
                    <span className="plus-icon"><i className="fas fa-plus"></i></span>
                  </div>
                </div>
                <div className="item-details">
                  <p className="collection-name"><strong>Maize</strong></p>
                  <p className="collection-type">Cereals</p>
                  <p>Ksh <span style={{ textDecoration: 'line-through' }}>120</span> 100</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item-container">
                  <div className="image-container">
                    <img src={images.banana} alt="Product" className="img-fluid" />
                    <span className="love-icon"><i className="fas fa-heart"></i></span>
                    <span className="plus-icon"><i className="fas fa-plus"></i></span>
                  </div>
                </div>
                <div className="item-details">
                  <p className="collection-name"><strong>Banana</strong></p>
                  <p className="collection-type">Fruits</p>
                  <p>Ksh <span style={{ textDecoration: 'line-through' }}> 70</span> 50</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item-container">
                  <div className="image-container">
                    <img src={images.hoho} alt="Product" className="img-fluid" />
                    <span className="love-icon"><i className="fas fa-heart"></i></span>
                    <span className="plus-icon"><i className="fas fa-plus"></i></span>
                  </div>
                </div>
                <div className="item-details">
                  <p className="collection-name"><strong>Pepper</strong></p>
                  <p className="collection-type">Vegetables</p>
                  <p>Ksh <span style={{ textDecoration: 'line-through' }}> 150</span> 100</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item-container">
                  <div className="image-container">
                    <img src={images.nav} alt="Product" className="img-fluid" />
                    <span className="love-icon"><i className="fas fa-heart"></i></span>
                    <span className="plus-icon"><i className="fas fa-plus"></i></span>
                  </div>
                </div>
                <div className="item-details">
                  <p className="collection-name"><strong>Millet</strong></p>
                  <p className="collection-type">Cereals</p>
                  <p>Ksh <span style={{ textDecoration: 'line-through' }}> 250</span> 200</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item-container">
                  <div className="image-container">
                    <img src={images.hoho} alt="Product" className="img-fluid" />
                    <span className="love-icon"><i className="fas fa-heart"></i></span>
                    <span className="plus-icon"><i className="fas fa-plus"></i></span>
                  </div>
                </div>
                <div className="item-details">
                  <p className="collection-name"><strong>Mexican Pepper</strong></p>
                  <p className="collection-type">Vegetables</p>
                  <p>Ksh <span style={{ textDecoration: 'line-through' }}> 180</span> 150</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="footer" /> {/* Render Footer component */}
      </div>
    </div>
  );
}

export default Dashboard;

