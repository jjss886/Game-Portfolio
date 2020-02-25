import React, { Component } from "react";
import { connect } from "react-redux";
import { setHouseDone, newRound } from "../store";

class EndMessage extends Component {
  closeMsg = () => {
    this.props.setHouseDone();
  };

  render() {
    const { houseDone, players } = this.props;

    return houseDone ? (
      <div className="endMsgFullDiv">
        <div className="endMsgInside">
          <h3>End of Game</h3>

          <div className="msgTextDiv">
            {players.map((player, idx) => (
              <MsgText key={idx} player={player} />
            ))}
          </div>

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
  const { Name, Status } = player,
    msgObj = {
      Busted: "busted! HA (-$10)",
      Blackjack: "hit the Jackpot! NICE (+$15)",
      Won: "beat the House! (+$10)",
      Lost: "crumbled by the House! (-$10)",
      Out: "is broke! BYE"
    };

  return (
    <span className="msgText">
      {Name} {msgObj[Status]}
    </span>
  );
};
