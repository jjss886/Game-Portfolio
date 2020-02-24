import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";

class House extends Component {
  render() {
    return (
      <div>
        <div>House</div>
        <Card />
        <Card />
      </div>
    );
  }
}

const mapState = state => {
  return { house: state.house };
};

const mapDispatch = dispatch => {
  return {};
};

export default connect(mapState, mapDispatch)(House);
