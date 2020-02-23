import React, { Component } from "react";
import { connect } from "react-redux";

class Table extends Component {
  render() {
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
  return {};
};

export default connect(mapState, mapDispatch)(Table);
