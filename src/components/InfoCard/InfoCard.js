import React from "react";
import "./styles.css";

const InfoCard = ({ image, title, description }) => {
  return (
    <div className="null-state-card">
      <img
        src={image}
        className="null-state-icon"
        alt="description about the current state of the card"
      />
      <h2 className="null-state-card-heading">{title}</h2>
      <p className="null-state-card-desc">{description}</p>
    </div>
  );
};

export default InfoCard;
