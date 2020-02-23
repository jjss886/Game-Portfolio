import React, { Component } from "react";
import { connect } from "react-redux";
import { setNewDeck, addPlayer, setGame } from "../store";
import Card from "./Card";
import Player from "./Player";
import ButtonSetUp from "./ButtonSetUp";

class Table extends Component {
  render() {
    const { deck, players, liveGame } = this.props;
    console.log("render -", liveGame);

    return (
      <div className="totalFullDiv">
        <div className="tableFullDiv">
          <div className="cardSecDiv">
            {deck.length
              ? deck
                  .slice(-5)
                  .map((card, idx) => <Card key={idx} card={card} />)
              : null}
          </div>

          <div className="playerSecDiv">
            {players.length
              ? players.map((player, idx) => (
                  <Player key={idx} player={player} />
                ))
              : null}
          </div>
        </div>

        <ButtonSetUp />
      </div>
    );
  }
}

const mapState = state => {
  return {
    deck: state.deck,
    players: state.players,
    liveGame: state.liveGame
  };
};

const mapDispatch = dispatch => {
  return {
    setNewDeck: () => dispatch(setNewDeck()),
    addPlayer: () => dispatch(addPlayer()),
    setGame: () => dispatch(setGame())
  };
};

export default connect(mapState, mapDispatch)(Table);
