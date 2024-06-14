import React, { useState } from 'react';
import './header.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome

function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search functionality here
    console.log('Search query:', searchQuery);
  };

  return (
    <form className="search-form" onSubmit={handleSearchSubmit}>
      <div className="search-input-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Hunt for your favorite product"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <i className="fas fa-search search-icon"></i>
      </div>
    </form>
  );
}

export default Header;

