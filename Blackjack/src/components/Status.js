import React, { Component } from "react";
import { connect } from "react-redux";

class Status extends Component {
  render() {
    return (
      <div className="statusFullDiv">
        <h3>Status Update!</h3>
      </div>
    );
  }
}

const mapState = state => {
  return {
    players: state.players,
    livePlayer: state.livePlayer
  };
};

export default connect(mapState)(Status);
