import React from "react";
import Card from "./Card";

const Player = ({ player }) => (
  <div className="playerDiv">
    <strong>{player.Name}</strong>
    <span>Score: {player.Points}</span>
    <div className="cardSecDiv">
      {player.Hand.length
        ? player.Hand.map((card, idx) => <Card key={idx} card={card} />)
        : null}
    </div>
  </div>
);

export default Player;
