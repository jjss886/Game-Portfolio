import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setNewDeck,
  addNewPlayer,
  setGame,
  reset,
  hitAction,
  stayCreator
} from "../store";

class ButtonSetUp extends Component {
  newDeck = () => {
    this.props.setNewDeck();
  };

  newPlayer = () => {
    this.props.addNewPlayer();
  };

  startGame = () => {
    if (!this.props.players.length) return alert("Add Some Players!");
    this.props.setGame();
  };

  newGame = () => {
    this.props.reset();
  };

  hit = () => {
    const { deck, livePlayer, players, hitAction } = this.props;
    hitAction(deck, livePlayer, players);
  };

  stay = () => {
    const { livePlayer, players, stayCreator } = this.props;
    console.log("staying");
    if (livePlayer === players.length - 1) return alert("DONE");
    stayCreator();
  };

  render() {
    const { liveGame } = this.props;

    return (
      <div className="btnSetUpDiv">
        {!liveGame ? (
          <>
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
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={this.hit}
              className="hitBtn setUpBtn"
            >
              Hit
            </button>

            <button
              type="button"
              onClick={this.stay}
              className="stayBtn setUpBtn"
            >
              Stay
            </button>

            <button
              type="button"
              onClick={this.newGame}
              className="resetBtn setUpBtn"
            >
              New Game
            </button>
          </>
        )}
      </div>
    );
  }
}

const mapState = state => {
  return {
    deck: state.deck,
    players: state.players,
    liveGame: state.liveGame,
    livePlayer: state.livePlayer
  };
};

const mapDispatch = dispatch => {
  return {
    setNewDeck: () => dispatch(setNewDeck()),
    addNewPlayer: () => dispatch(addNewPlayer()),
    setGame: () => dispatch(setGame()),
    reset: () => dispatch(reset()),
    hitAction: (deck, idx, players) => dispatch(hitAction(deck, idx, players)),
    stayCreator: () => dispatch(stayCreator())
  };
};

export default connect(mapState, mapDispatch)(ButtonSetUp);
