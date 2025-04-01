import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Assuming you have styles for the sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Superhero Dashboard</h2>
      <ul>
        <li><Link to="/">Home 🏘️</Link></li>
        <li><Link to="/about">About ℹ️</Link></li>
      </ul>

      <div className="about-section">
        <h3>About This Site</h3>
        <p>
          Welcome to the Superhero Dashboard! This platform allows you to search for superheroes,  
          view their power stats, and compare their strengths and intelligence using interactive charts.
        </p>
        <p>
          Built by <strong>Tahim Bhuiya</strong>, this project fetches data from the Superhero API  
          to provide insights into different characters from comics.
        </p>
        <p>Features include:</p>
        <ul>
          <li>Search for superheroes</li>
          <li>View individual hero details</li>
          <li>Filter by strength and intelligence</li>
          <li>Interactive charts for power stats</li>
          
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
