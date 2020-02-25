import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";

class House extends Component {
  render() {
    const { deck, house, houseDone } = this.props;

    return (
      <div className="houseFullDiv">
        {house.map((card, idx) => (
          <Card key={idx} card={card} cover={idx === 0 && !houseDone} />
        ))}
      </div>
    );
  }
}

const mapState = state => {
  return { deck: state.deck, house: state.house, houseDone: state.houseDone };
};

const mapDispatch = dispatch => {
  return {};
};

export default connect(mapState, mapDispatch)(House);
