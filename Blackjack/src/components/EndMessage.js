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
    const { houseDone, players } = this.props;

    return houseDone ? (
      <div className="endMsgFullDiv">
        <div className="endMsgInside">
          <h3>End of Game</h3>

          {players.map((player, idx) => (
            <MsgText key={idx} player={player} />
          ))}

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

// ---------------------- Message Text ---------------------- //

const MsgText = ({ player }) => {
  const { Name, Status } = player;

  return (
    <div className="msgTextFullDiv">
      <span>
        {Name}: {Status}
      </span>
    </div>
  );
};
