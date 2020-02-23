import React from "react";

const suitSymbols = {
  Spades: [9824, "&spades;"],
  Hearts: [9829, "&hearts;"],
  Diamonds: [9830, "&diams;"],
  Clubs: [9827, "&clubs;"]
};

const Card = ({ card }) => (
  <div className="cardDiv">
    <span>{card.Value}</span>
    <span>{String.fromCharCode(suitSymbols[card.Suit][0])}</span>
  </div>
);

export default Card;
