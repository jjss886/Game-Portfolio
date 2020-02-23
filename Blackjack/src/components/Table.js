import React, { Component } from "react";
import { connect } from "react-redux";
import { setNewDeck, addPlayer } from "../store";
import Card from "./Card";
import Player from "./Player";

class Table extends Component {
  newDeck = () => {
    this.props.setNewDeck();
  };

  newPlayer = () => {
    this.props.addPlayer();
  };

  startGame = () => {
    console.log("GAME!");
  };

  render() {
    const { deck, players } = this.props;

    return (
      <div className="totalFullDiv">
        <div className="tableFullDiv">
          {deck.length
            ? deck.slice(-5).map((card, idx) => <Card key={idx} card={card} />)
            : null}

          {players.length
            ? players.map((player, idx) => <Player key={idx} player={player} />)
            : null}
        </div>

        <div className="btnSetUpDiv">
          <button
            type="button"
            onClick={this.newDeck}
            className="newDeckBtn setUpBtn"
          >
            New Deck
          </button>

          <button
            type="button"
            onClick={this.newPlayer}
            className="addPlayerBtn setUpBtn"
          >
            Add Player
          </button>

          <button
            type="button"
            onClick={this.startGame}
            className="startGameBtn setUpBtn"
          >
            Start Game
          </button>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    deck: state.deck,
    players: state.players
  };
};

const mapDispatch = dispatch => {
  return {
    setNewDeck: () => dispatch(setNewDeck()),
    addPlayer: () => dispatch(addPlayer())
  };
};

export default connect(mapState, mapDispatch)(Table);
