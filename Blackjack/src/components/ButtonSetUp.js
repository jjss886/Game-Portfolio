import React, { Component } from "react";
import { connect } from "react-redux";
import { setNewDeck, addPlayer, setGame } from "../store";

class ButtonSetUp extends Component {
  newDeck = () => {
    this.props.setNewDeck();
  };

  newPlayer = () => {
    this.props.addPlayer();
  };

  startGame = () => {
    this.props.setGame();
  };

  hit = () => {
    console.log("hitting");
  };

  stay = () => {
    console.log("staying");
  };

  render() {
    const { liveGame } = this.props;

    return (
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

        {liveGame ? (
          <>
            <hr className="btnSetUpBreak" />
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
          </>
        ) : null}
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

export default connect(mapState, mapDispatch)(ButtonSetUp);
