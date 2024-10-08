import React from 'react';
import { FaFacebookF, FaSearch, FaUserFriends, FaHome, FaBell, FaCaretDown } from 'react-icons/fa';
import '../../styles/Header.css'; 

const Header = () => {
  return (
    <header className="header-container"> 
      <div className="logo">
        <FaFacebookF className="facebook-icon" aria-label="Facebook Logo" />
      </div>
      <div className="search-container">
        <FaSearch style={{ color: '#4267B2' }} />
        <input type="text" placeholder="Tìm kiếm trên Facebook" className="search-input" aria-label="Search input" />
      </div>
      <div className="icon-container">
        <FaHome aria-label="Home" />
        <FaUserFriends aria-label="Friends" />
        <FaBell aria-label="Notifications" />
        <div className="profile-container">
          <div className="profile-icon">
            <FaCaretDown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
