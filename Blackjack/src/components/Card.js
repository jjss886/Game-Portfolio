import React from "react";

const Card = ({ card }) => (
  <div className="cardDiv">
    <span>{card.Value}</span>
    <span>{card.Suit}</span>
  </div>
);

export default Card;
