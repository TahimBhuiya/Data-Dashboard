import React from "react";
import "./About.css"; // Import styles

const About = () => {
  return (
    <div className="about-container">
      <h1>About Superhero Dashboard</h1>
      <p>
        The Superhero Dashboard is a web application designed for superhero fans to explore, compare, and analyze the stats of various superheroes. 
        You can search for your favorite heroes, filter them based on strength or intelligence, and view detailed information such as their power stats and abilities.
      </p>

      <h2>Features:</h2>
      <ul>
        <li>Search and filter superheroes by their strength and intelligence levels</li>
        <li>View detailed superhero profiles, including stats like strength, speed, intelligence, and more</li>
        <li>Interactive charts visualizing each hero’s strength and intelligence</li>
        <li>Mobile-friendly and responsive design for optimal viewing on any device</li>
      </ul>

      <h2>How the Data Works:</h2>
      <p>
        The app pulls superhero data from the <strong>Superhero API</strong>, which includes power stats like:
      </p>
      <ul>
        <li><strong>Strength:</strong> A measure of a hero's physical power and combat ability</li>
        <li><strong>Intelligence:</strong> The hero's ability to think, strategize, and solve problems</li>
        <li><strong>Speed:</strong> The hero's speed and agility, both in and out of combat</li>
        <li><strong>Durability:</strong> The hero's resistance to damage and their ability to withstand injury</li>
      </ul>
      <p>
        Users can interact with these stats through dynamic sliders and view side-by-side comparisons between different superheroes.
      </p>

      <h2>Developer Info:</h2>
      <p>
        <strong>Created by:</strong> Tahim Bhuiya (Z23493520)
      </p>
      <p>
        This project is part of a software development course aimed at demonstrating React-based web development, data fetching from public APIs, and interactive UI elements.
      </p>
    </div>
  );
};

export default About;
