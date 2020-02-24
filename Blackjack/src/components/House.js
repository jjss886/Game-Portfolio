import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";

class House extends Component {
  render() {
    const { deck, house } = this.props;

    return (
      <div className="houseFullDiv">
        {house.map((card, idx) => (
          <Card key={idx} card={card} />
        ))}
      </div>
    );
  }
}

const mapState = state => {
  return { deck: state.deck, house: state.house };
};

const mapDispatch = dispatch => {
  return {};
};

export default connect(mapState, mapDispatch)(House);
