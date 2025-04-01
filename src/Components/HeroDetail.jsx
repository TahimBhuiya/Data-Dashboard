import React from "react";
import { useParams } from "react-router-dom";
import "./HeroDetail.css"; // Ensure this file exists for styling

const HeroDetail = ({ heroes }) => {
  const { id } = useParams();
  const hero = heroes.find((h) => h.id === id);

  if (!hero) {
    return <h2 className="error-message">Hero not found</h2>;
  }
  
  return (
    <div className="hero-detail-container">
      <div className="hero-detail-card">
        <h1 className="hero-name">{hero.name}</h1>

        <div className="hero-detail-content">
          <img src={hero.image.url} alt={hero.name} className="hero-image-small" />
          <div className="hero-info">
            <h2>Additional Details</h2>
            <p><strong>Full Name:</strong> {hero.biography["full-name"] || "Unknown"}</p>
            <p><strong>Publisher:</strong> {hero.biography.publisher || "Unknown"}</p>
            <p><strong>First Appearance:</strong> {hero.biography["first-appearance"] || "Unknown"}</p>
            <p><strong>Height:</strong> {hero.appearance.height[1] || "Unknown"}</p>
            <p><strong>Weight:</strong> {hero.appearance.weight[1] || "Unknown"}</p>
            <p><strong>Occupation:</strong> {hero.work.occupation || "Unknown"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDetail;
