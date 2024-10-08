import React from 'react';
import '../../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar-container">
      <h2>Menu</h2>
      <div className="sidebar-item">Home</div>
      <div className="sidebar-item">Friends</div>
      <div className="sidebar-item">Watch</div>
      <div className="sidebar-item">Marketplace</div>
      <div className="sidebar-item">Groups</div>
      <div className="sidebar-item">Events</div>
    </aside>
  );
};

export default Sidebar;
