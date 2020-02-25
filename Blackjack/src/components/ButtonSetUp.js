import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setNewDeck,
  addPlayer,
  startGame,
  reset,
  hit,
  stay,
  newRound,
  houseCardDraw
} from "../store";

class ButtonSetUp extends Component {
  newDeck = () => {
    this.props.setNewDeck();
  };

  newPlayer = () => {
    this.props.addPlayer();
  };

  startGame = () => {
    if (!this.props.players.length) return alert("Add Some Players First!");
    this.props.startGame();
  };

  setNewRound = () => {
    const { players, newRound } = this.props;
    newRound(players);
  };

  resetGame = () => {
    this.props.reset();
  };

  hit = () => {
    const { deck, livePlayer, players, hit, house, houseCardDraw } = this.props,
      nextCard = deck.slice(-1)[0],
      newScore = players[livePlayer].Points + nextCard.Weight,
      nextPlayer = newScore >= 21 && livePlayer < players.length - 1 ? 1 : 0;

    hit(deck.slice(), livePlayer, players.slice(), nextPlayer);

    if (livePlayer === players.length - 1 && newScore >= 21)
      houseCardDraw(deck.slice(), house.slice(), players.slice());
  };

  stay = () => {
    const {
      livePlayer,
      players,
      stay,
      houseCardDraw,
      house,
      deck
    } = this.props;
    if (livePlayer === players.length - 1)
      houseCardDraw(deck.slice(), house.slice(), players.slice());
    else stay();
  };

  render() {
    const { liveGame, liveRound } = this.props;

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
            {liveRound ? (
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
              </>
            ) : null}

            <button
              type="button"
              onClick={this.setNewRound}
              className="newRoundBtn setUpBtn"
            >
              New Round
            </button>

            <button
              type="button"
              onClick={this.resetGame}
              className="resetBtn setUpBtn"
            >
              Full Reset
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
    livePlayer: state.livePlayer,
    liveRound: state.liveRound,
    house: state.house
  };
};

const mapDispatch = dispatch => {
  return {
    setNewDeck: () => dispatch(setNewDeck()),
    addPlayer: () => dispatch(addPlayer()),
    startGame: () => dispatch(startGame()),
    reset: () => dispatch(reset()),
    hit: (deck, idx, players, nextPlayer) =>
      dispatch(hit(deck, idx, players, nextPlayer)),
    stay: () => dispatch(stay()),
    newRound: players => dispatch(newRound(players)),
    houseCardDraw: (deck, house, players) =>
      dispatch(houseCardDraw(deck, house, players))
  };
};

export default connect(mapState, mapDispatch)(ButtonSetUp);
