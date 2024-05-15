import React, { useState } from 'react';
import './SignUp.css'; // Import SignUp.css for styling
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../Footer/Footer'; // Import the Footer component

function SignUp() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const criteria = {
    capitalLetter: /[A-Z]/.test(password),
    smallLetter: /[a-z]/.test(password),
    specialCharacter: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    number: /\d/.test(password),
    minLength: password.length >= 8,
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="sign-up-container">
        <h2 className="sign-up-title">Sign Up</h2>
        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name <span className="login-link">Have an account? <a href="/login">Log in</a></span></label>
            <input type="text" id="firstName" placeholder="Faith" />    
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Nkatha" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="@smartmavuno@gmail.com" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="show-password">
              <input type="checkbox" checked={showPassword} onChange={handleShowPasswordToggle} />
              Show Password
            </label>
          </div>
          <button type="submit" className="sign-up-button">Sign Up</button>
        </form>
        <div className="social-buttons">
          <div className="social-line"></div>
          <span>OR</span>
          <div className="social-line"></div>
          <div className="password-criteria">
            <label className={`criteria-item ${criteria.capitalLetter ? 'checked' : ''}`}>
              <input type="checkbox" checked={criteria.capitalLetter} readOnly />
              One capital letter
            </label>
            <label className={`criteria-item ${criteria.smallLetter ? 'checked' : ''}`}>
              <input type="checkbox" checked={criteria.smallLetter} readOnly />
              One small letter
            </label>
            <label className={`criteria-item ${criteria.specialCharacter ? 'checked' : ''}`}>
              <input type="checkbox" checked={criteria.specialCharacter} readOnly />
              One special character
            </label>
            <label className={`criteria-item ${criteria.number ? 'checked' : ''}`}>
              <input type="checkbox" checked={criteria.number} readOnly />
              One number
            </label>
            <label className={`criteria-item ${criteria.minLength ? 'checked' : ''}`}>
              <input type="checkbox" checked={criteria.minLength} readOnly />
              8 character minimum
            </label>
          </div>
          <div className="social-buttons-container">
            <button className="facebook-button"><i className="fab fa-facebook"></i> Continue with Facebook</button>
            <button className="google-button"><i className="fab fa-google"></i> Continue with Google</button>
          </div>
        </div>
      </div>
      <div className="shop-now-button">
        <button className="shop-now-btn">
          SHOP NOW <i className="fas fa-arrow-right"></i>
        </button>
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
}

export default SignUp;

