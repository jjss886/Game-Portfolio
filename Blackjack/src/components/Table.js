import React, { Component } from "react";
import { connect } from "react-redux";
import { setNewDeck } from "../store";

class Table extends Component {
  componentDidMount() {
    this.props.setNewDeck();
  }

  render() {
    console.log("render -", this.props.deck);
    return (
      <div>
        <div className="tableFullDiv">Hi</div>
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
