import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import Player from "./Player";
import ButtonSetUp from "./ButtonSetUp";

class Table extends Component {
  componentDidUpdate(prevProps) {
    console.log("update", this.props.deck.length, prevProps.deck.length);
    if (this.props.deck.length !== prevProps.deck.length) {
      console.log("deck");
    }
  }

  render() {
    const { deck, players, livePlayer } = this.props;
    // console.log("render -", deck.length, players);

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
                  <Player key={idx} player={player} live={idx === livePlayer} />
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
    livePlayer: state.livePlayer
  };
};

const mapDispatch = dispatch => {
  return {};
};

export default connect(mapState, mapDispatch)(Table);
