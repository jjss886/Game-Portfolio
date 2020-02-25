import React, { Component } from "react";
import { connect } from "react-redux";
import { setHouseDone, newRound } from "../store";

class EndMessage extends Component {
  closeMsg = () => {
    const { setHouseDone, newRound, players } = this.props;

    setHouseDone();
    // newRound(players);
  };

  render() {
    const { houseDone } = this.props;

    return houseDone ? (
      <div className="endMsgFullDiv">
        <div className="endMsgInside">
          <h3>End of Game</h3>

          <button type="button" className="endMsgBtn" onClick={this.closeMsg}>
            Next Game
          </button>
        </div>
      </div>
    ) : null;
  }
}

const mapState = state => {
  return {
    house: state.house,
    houseDone: state.houseDone,
    players: state.players
  };
};

const mapDispatch = dispatch => {
  return {
    setHouseDone: () => dispatch(setHouseDone()),
    newRound: players => dispatch(newRound(players))
  };
};

export default connect(mapState, mapDispatch)(EndMessage);
