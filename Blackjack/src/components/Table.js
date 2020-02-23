import React, { Component } from "react";
import { connect } from "react-redux";
import { setNewDeck } from "../store";
import Card from "./Card";

class Table extends Component {
  newDeck = () => {
    this.props.setNewDeck();
  };

  render() {
    const { deck } = this.props;
    console.log("render -", deck);
    return (
      <div>
        <div className="tableFullDiv">
          {deck.length
            ? deck.slice(-5).map((card, idx) => <Card key={idx} card={card} />)
            : null}
        </div>

        <div className="btnSetUpDiv">
          <button type="button" onClick={this.newDeck}>
            Start Game
          </button>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    deck: state.deck
  };
};

const mapDispatch = dispatch => {
  return {
    setNewDeck: () => dispatch(setNewDeck())
  };
};

export default connect(mapState, mapDispatch)(Table);
