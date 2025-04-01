import React from "react";
import { useNavigate } from "react-router-dom";

const ShowCard = ({ hero }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the hero detail page
    navigate(`/hero/${hero.id}`);
  };

  return (
    <div className="show-card" onClick={handleClick}>
      <img src={hero.image.url} alt={hero.name} className="show-card-image" />
      <div className="show-card-info">
        <h3>{hero.name}</h3>
        <div className="powerstats">
          <p><strong>Strength:</strong> {hero.powerstats.strength}</p>
          <p><strong>Intelligence:</strong> {hero.powerstats.intelligence}</p>
          <p><strong>Speed:</strong> {hero.powerstats.speed}</p>
          <p><strong>Durability:</strong> {hero.powerstats.durability}</p>
          <p><strong>Power:</strong> {hero.powerstats.power}</p>
          <p><strong>Combat:</strong> {hero.powerstats.combat}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
