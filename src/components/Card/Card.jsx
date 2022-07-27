import React from "react";
import './Card.css';
const Cards = ({ emoji, heading, detail }) => {
  return (
    <div className="card">
      <img src={emoji} alt=""></img>
      <span>{heading}</span>
      <span>{detail}</span>
    </div>
  );
};

export default Cards;
