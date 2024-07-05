import React from 'react';
import './Button.css';  // Import the CSS file
import '@fortawesome/fontawesome-free/css/all.min.css';  // Import FontAwesome for icons

const Button = ({ onClick, style, className, disabled }) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`button ${className}`}  // Combine default and custom classes
      disabled={disabled}
    >
      SHOP NOW <i className="fas fa-arrow-right"></i>
    </button>
  );
};

export default Button;

