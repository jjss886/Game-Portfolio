import React from "react";
import Card from "./Card";

const Player = ({ player }) => (
  <div className="playerDiv">
    <span>{player.Name}</span>
    <span>{player.ID}</span>
    <span>{player.Points}</span>
    {player.Hand.length
      ? player.Hand.map((card, idx) => <Card key={idx} card={card} />)
      : null}
  </div>
);

export default Player;
