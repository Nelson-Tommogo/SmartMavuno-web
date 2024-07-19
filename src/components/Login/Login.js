import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../assets/logo-color.png';

const Login = () => {
    return (
        <div className="login-container">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="smart-mavuno-logo" />
            </div>
            <form className="login-form">
                <h2 className="login-header">Log In</h2> {/* Renamed class */}
                <div className="form-group">
                    <div className="label-container">
                        <label htmlFor="email">Email:</label>
                        <span className="signup-link">Need an account? <Link to="/signup" className="signup-link-text">Sign Up</Link></span>
                    </div>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" className="login-button">Login</button> {/* Renamed class */}
                <div className="or-section">
                    <div className="or-line"></div>
                    <span>OR</span>
                    <div className="or-line"></div>
                </div>
                <div className="social-buttons-container">
                    <button className="facebook-button"><i className="fab fa-facebook"></i> Log in with Facebook</button>
                    <button className="google-button"><i className="fab fa-google"></i> Log in with Google</button>
                </div>
                <div className="forgot-password">
                    <span>Forgot Password? <Link to="/reset" className="reset-link">Reset</Link></span>
                </div>
            </form>
        </div>
    );
}

export default Login;

